import { type CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../components/shared/icons";
import { usePageScroll } from "../../../components/shared/useScrollEffects";
import { HERO } from "../content";
import HeroReel from "./HeroReel";

/**
 * Opening scene: headline (word by word), buttons, then the "How XVS works" reel.
 * The reel starts tilted back and flattens as you scroll
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
          <HeroReel className="hero-frame" />
        </div>
      </div>
    </section>
  );
}
