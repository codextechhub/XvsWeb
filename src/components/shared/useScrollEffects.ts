import { useEffect, useRef, useState } from "react";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Returns `[ref, inView]`. `inView` flips to true the first time the element
 * scrolls into view and stays true (used for reveals).
 */
export function useInView<T extends HTMLElement>(rootMargin = "0px 0px -12% 0px") {
  const ref = useRef<T | null>(null);
  // With reduced motion, everything counts as already visible.
  const [inView, setInView] = useState(prefersReducedMotion);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin, inView]);

  return [ref, inView] as const;
}

/**
 * Writes the element's scroll progress (0 → 1) to the CSS variable
 * `--progress` on that element. Writing a CSS variable (instead of React
 * state) keeps scrolling smooth.
 *
 * 0 = the element's top reaches `startAt` of the viewport height
 * 1 = the element's bottom reaches `endAt` of the viewport height
 */
export function useScrollProgress<T extends HTMLElement>(startAt = 0.9, endAt = 0.45) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion()) {
      node.style.setProperty("--progress", "1");
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * startAt;
      const end = vh * endAt - rect.height;
      const p = (start - rect.top) / (start - end);
      node.style.setProperty("--progress", Math.min(1, Math.max(0, p)).toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [startAt, endAt]);

  return ref;
}

/**
 * Writes how far the page has scrolled (0 → 1 over `distance` px) to the
 * CSS variable `--page-scroll` on the element. Used by the home hero.
 */
export function usePageScroll<T extends HTMLElement>(distance = 600) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (prefersReducedMotion()) {
      node.style.setProperty("--page-scroll", "1");
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      node.style.setProperty("--page-scroll", Math.min(1, window.scrollY / distance).toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [distance]);

  return ref;
}
