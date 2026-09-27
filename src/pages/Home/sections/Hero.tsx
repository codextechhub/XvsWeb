import { useEffect, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { BrowserFrame } from "../../../components/shared/ui";
import { ArrowIcon, Icon } from "../../../components/shared/icons";
import { prefersReducedMotion, usePageScroll } from "../../../components/shared/useScrollEffects";
import { HERO, HERO_ACTIVITY, HERO_ACTIVITY_TIMES } from "../content";

/** How often a new event slides into the activity card (ms). */
const ACTIVITY_INTERVAL = 2800;
/** How many events the card shows at once. */
const ACTIVITY_VISIBLE = HERO_ACTIVITY_TIMES.length;

/**
 * Opening scene: headline (word by word), buttons, then the XVS dashboard.
 * The dashboard starts tilted back and flattens as you scroll
 * (driven by the `--page-scroll` CSS variable, see home.css).
 */
export default function Hero() {
  const sectionRef = usePageScroll<HTMLElement>(500);
  let wordIndex = 0;

  return (
    <section ref={sectionRef} className="hero">
      <div className="container hero-copy">
        {/* <Link to={HERO.badge.href} className="hero-badge load-in">
          <span className="hero-badge-dot" />
          {HERO.badge.label}
          <span className="hero-badge-link">
            {HERO.badge.linkText}
            <ArrowIcon />
          </span>
        </Link> */}

        <h1>
          {HERO.titleLines.map((line) => {
            const isAccent = line.startsWith("*");
            return (
              <span key={line} className={`hero-line ${isAccent ? "serif" : ""}`}>
                {line
                  .replaceAll("*", "")
                  .split(" ")
                  .map((word) => (
                    <span
                      key={word + wordIndex}
                      className="hero-word"
                      style={{ "--delay": `${150 + wordIndex++ * 70}ms` } as CSSProperties}
                    >
                      {word}{" "}
                    </span>
                  ))}
              </span>
            );
          })}
        </h1>

        <p className="hero-body load-in" style={{ "--delay": "650ms" } as CSSProperties}>
          {HERO.body}
        </p>

        <div className="hero-actions load-in" style={{ "--delay": "780ms" } as CSSProperties}>
          <Link to={HERO.primaryCta.href} className="btn btn-primary">
            {HERO.primaryCta.label}
            <ArrowIcon />
          </Link>
          <Link to={HERO.secondaryCta.href} className="btn btn-ghost">
            {HERO.secondaryCta.label}
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="hero-stage load-in" style={{ "--delay": "950ms" } as CSSProperties}>
          <BrowserFrame src={HERO.image} alt={HERO.imageAlt} eager className="hero-frame" />
          <ActivityCard />
        </div>
      </div>
    </section>
  );
}

/** The "Live activity" card: a new school event slides in on top every few seconds. */
function ActivityCard() {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const timer = window.setInterval(() => setTick((t) => t + 1), ACTIVITY_INTERVAL);
    return () => window.clearInterval(timer);
  }, []);

  const total = HERO_ACTIVITY.length;
  // Newest first. `tick` moves the window along the list, looping forever.
  const visible = Array.from({ length: ACTIVITY_VISIBLE }, (_, i) => {
    const step = tick - i;
    return { key: step, item: HERO_ACTIVITY[((step % total) + total) % total] };
  });

  return (
    <aside className="activity" aria-label="Example of XVS activity at Bright Star Schools">
      <div className="activity-head">
        <span className="activity-live" />
        Live at Bright Star
        <span className="activity-branches">All branches</span>
      </div>
      <ul className="activity-list">
        {visible.map(({ key, item }, i) => (
          <li key={key} className={`activity-item tone-${item.tone} ${i === 0 && tick > 0 ? "is-new" : ""}`}>
            <span className="activity-icon">
              <Icon name={item.icon} size={17} />
            </span>
            <span className="activity-text">
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </span>
            <span className="activity-time">{HERO_ACTIVITY_TIMES[i]}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
