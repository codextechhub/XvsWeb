import type { CSSProperties } from "react";
import { useScrollProgress } from "../../../components/shared/useScrollEffects";
import { QUOTE } from "../content";

/**
 * A large rounded card with one quote in the serif face.
 * The words start blurred and come into focus one by one as you scroll
 * (worked out in CSS from `--progress`, see home.css → "4. Quote").
 */
export default function Quote() {
  const ref = useScrollProgress<HTMLQuoteElement>(0.85, 0.55);
  const words = `“${QUOTE.text}”`.split(" ");

  return (
    <section className="quote">
      <div className="container">
        <figure className="quote-card">
          <div className="quote-glow" aria-hidden="true" />
          <blockquote ref={ref} style={{ "--count": words.length } as CSSProperties}>
            {words.map((word, i) => (
              <span key={i} className="quote-word" style={{ "--i": i } as CSSProperties}>
                {word}{" "}
              </span>
            ))}
          </blockquote>
          <figcaption>
            <span className="quote-avatar" aria-hidden="true">
              {QUOTE.initials}
            </span>
            <span>
              <strong>{QUOTE.name}</strong>
              {QUOTE.role}
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
