import { useLayoutEffect, type RefObject } from "react";

/** Shared fluid highlight and temporary label magnification for navigation rows. */
export function useLiquidNav(
  navRef: RefObject<HTMLElement | null>,
  pillRef: RefObject<HTMLSpanElement | null>,
  selector: string,
) {
  useLayoutEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!nav || !pill) return;

    let animations: Animation[] = [];
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const place = (animate = false) => {
      const oldX = parseFloat(pill.style.getPropertyValue("--pill-x"));
      const oldWidth = parseFloat(pill.style.getPropertyValue("--pill-w"));
      const wasVisible = pill.style.opacity === "1";
      animations.forEach((animation) => animation.cancel());
      animations = [];
      const link = nav.querySelector<HTMLElement>(selector);
      if (!link || !link.offsetWidth) {
        pill.style.opacity = "0"; // this page isn't in the menu (e.g. Privacy)
        return;
      }
      pill.style.opacity = "1";
      pill.style.setProperty("--pill-x", `${link.offsetLeft}px`);
      pill.style.setProperty("--pill-w", `${link.offsetWidth}px`);
      if (!animate || motion.matches || !wasVisible || !Number.isFinite(oldX) || oldX === link.offsetLeft) return;
      const x = link.offsetLeft;
      const width = link.offsetWidth;
      const distance = x - oldX;
      const direction = Math.sign(distance);
      const stretch = Math.min(Math.abs(distance) * 0.38, 62);
      const duration = parseFloat(getComputedStyle(nav).getPropertyValue("--nav-slide-duration")) || 680;
      const frame = (position: number, size: number, height: number, skew: number) => ({
        transform: `translateX(${position}px) scaleY(${height}) skewX(${skew}deg)`,
        width: `${size}px`,
      });
      animations.push(pill.animate([
        { ...frame(oldX, oldWidth, 1, 0), offset: 0 },
        { ...frame(oldX + distance * 0.38 - stretch / 2, oldWidth + (width - oldWidth) * 0.38 + stretch, 1.16, -direction * 5), offset: 0.38 },
        { ...frame(x + direction * 5, width * 1.04, 1.08, direction * 2), offset: 0.72 },
        { ...frame(x - direction * 1.5, width * 0.99, 0.98, 0), offset: 0.88 },
        { ...frame(x, width, 1, 0), offset: 1 },
      ], { duration, easing: "cubic-bezier(0.22, 0.68, 0.25, 1)" }));
      const label = link.querySelector("[data-liquid-label]");
      if (label) animations.push(label.animate([
        { transform: "scale(1)", offset: 0 },
        { transform: "scale(1.19)", offset: 0.38 },
        { transform: "scale(1.1)", offset: 0.68 },
        { transform: "scale(0.985)", offset: 0.88 },
        { transform: "scale(1)", offset: 1 },
      ], { duration, easing: "cubic-bezier(0.22, 0.68, 0.25, 1)" }));
    };
    place(true);

    // Keep the resting position aligned after fonts load or the bar resizes.
    const resize = () => place();
    let initialObservation = true;
    const observer = new ResizeObserver(() => {
      if (initialObservation) { initialObservation = false; return; }
      resize();
    });
    observer.observe(nav);
    nav.querySelectorAll("[data-liquid-link]").forEach((link) => observer.observe(link));
    motion.addEventListener("change", resize);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", resize);
      animations.forEach((animation) => animation.cancel());
    };
  }, [selector, navRef, pillRef]);

}
