import { useEffect, useRef, useState } from "react";
import { Icon } from "../../../components/shared/icons";
import { SERVICE_GROUPS } from "../content";

/**
 * Sticky row of tabs under the header. The tab for the group
 * currently on screen is highlighted as the visitor scrolls.
 */
export default function GroupNav() {
  const [active, setActive] = useState<string | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

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
    if (tab && track) track.scrollTo({ left: tab.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  return (
    <nav className="group-nav" aria-label="Service groups">
      <div className="container">
        <div className="group-nav-track" ref={trackRef}>
          {SERVICE_GROUPS.map((group) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              data-group={group.id}
              className={`group-nav-tab ${active === group.id ? "is-active" : ""}`}
              aria-current={active === group.id ? "true" : undefined}
            >
              <Icon name={group.icon} size={18} />
              {group.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
