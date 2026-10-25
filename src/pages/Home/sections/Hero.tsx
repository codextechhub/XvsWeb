import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../../components/shared/icons";
import { usePageScroll } from "../../../components/shared/useScrollEffects";
import { HERO } from "../content";
import HeroFilm from "./HeroFilm";

/**
 * Opening scene, two columns:
 *   left   the headline, word by word
 *   right  the short intro and the two buttons
 * Under them, the hero film (a silent, looping tour of the real XVS apps
 * that ends on animated closing words) sits centred on the page (a little
 * wider than the text), with coloured XVS light glowing out from behind
 * its sides and along its top edge.
 * ✏️ The film and its closing words are in content.ts → HERO_FILM.
 * The window starts laid back and stands up straight as you scroll
 * (driven by the `--page-scroll` CSS variable, see home.css).
 * ✏️ The glow colours, the window width and the tilt are in home.css → "1. Hero".
 */
export default function Hero() {
  // ✏️ Fully straight after scrolling 60% of the screen height
  const sectionRef = usePageScroll<HTMLElement>(Math.round((typeof window === "undefined" ? 900 : window.innerHeight) * 0.6));
  let wordIndex = 0;

  return (
    <section ref={sectionRef} className="hero">
      <div className="container hero-top">
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

        <div className="hero-side load-in" style={{ "--delay": "550ms" } as CSSProperties}>
          <p>{HERO.body}</p>
          <div className="hero-actions">
            <Link to={HERO.primaryCta.href} className="btn btn-small btn-primary">
              {HERO.primaryCta.label}
              <ArrowIcon />
            </Link>
            <Link to={HERO.secondaryCta.href} className="btn btn-small btn-ghost">
              {HERO.secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-stage load-in" style={{ "--delay": "800ms" } as CSSProperties}>
        <div className="hero-glow" aria-hidden="true" />
        <HeroFilm className="hero-frame" />
      </div>
    </section>
  );
}
