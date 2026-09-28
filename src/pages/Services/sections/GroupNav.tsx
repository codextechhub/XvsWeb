import { useEffect, useRef, useState } from "react";
import { useLiquidNav } from "../../../components/shared/useLiquidNav";
import { Icon } from "../../../components/shared/icons";
import { SERVICE_GROUPS } from "../content";

/**
 * Sticky row of tabs under the header. The tab for the group
 * currently on screen is highlighted as the visitor scrolls.
 */
export default function GroupNav() {
  const [active, setActive] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const pillRef = useRef<HTMLSpanElement>(null);
  const previousGroup = useRef<string | null>(null);
  useLiquidNav(trackRef, pillRef, `[data-group="${active}"]`);

  useEffect(() => {
    // The current group is the last one whose top has passed a third of the way
    // down the screen. Above the first group, no tab is highlighted.
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight / 3;
      let current: string | null = null;
      for (const group of SERVICE_GROUPS) {
        const top = document.getElementById(group.id)?.getBoundingClientRect().top;
        if (top !== undefined && top <= line) current = group.id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Keep the active tab visible on small screens, where the row scrolls sideways
  useEffect(() => {
    const tab = trackRef.current?.querySelector<HTMLElement>(`[data-group="${active}"]`);
    const track = trackRef.current;
    if (tab && track) {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const left = tab.offsetLeft;
      if (left < track.scrollLeft || left + tab.offsetWidth > track.scrollLeft + track.clientWidth) {
        track.scrollTo({ left: left - (track.clientWidth - tab.offsetWidth) / 2, behavior: reduced ? "instant" : "smooth" });
      }
    }
  }, [active]);

  // Slide each group's content in when reached, including return visits.
  useEffect(() => {
    if (!active) return;
    const previousIndex = SERVICE_GROUPS.findIndex(group => group.id === previousGroup.current);
    const index = SERVICE_GROUPS.findIndex(group => group.id === active);
    previousGroup.current = active;
    const content = document.getElementById(active)?.querySelector(".group-content");
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!content || motion.matches) return;
    const direction = previousIndex > index ? -1 : 1;
    const animation = content.animate([
      { transform: `translateX(${direction * 48}px)`, opacity: 0.35 },
      { transform: "translateX(0)", opacity: 1 },
    ], { duration: 680, easing: "cubic-bezier(0.22, 0.68, 0.25, 1)" });
    const stop = () => animation.cancel();
    motion.addEventListener("change", stop);
    return () => {
      animation.cancel();
      motion.removeEventListener("change", stop);
    };
  }, [active]);

  return (
    <nav className="group-nav" aria-label="Service groups">
      <div className="container">
        <div className="group-nav-track" ref={trackRef}>
          <span ref={pillRef} className="site-nav-pill group-nav-pill" aria-hidden="true" />
          {SERVICE_GROUPS.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              data-group={group.id}
              data-liquid-link
              className={`group-nav-tab ${active === group.id ? "is-active" : ""}`}
              aria-current={active === group.id ? "true" : undefined}
            >
              <Icon name={group.icon} size={18} />
              <span className="site-nav-label" data-liquid-label>{group.name}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
