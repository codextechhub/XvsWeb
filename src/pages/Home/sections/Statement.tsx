import { useEffect, useState, type CSSProperties } from "react";
import { Reveal } from "../../../components/shared/ui";
import { prefersReducedMotion, useInView, useScrollProgress } from "../../../components/shared/useScrollEffects";
import { FEATURES, STATEMENT } from "../content";
import { ApprovalsScene, MoneyScene, RecordsScene } from "./PillarScenes";

/** The moving scene on each card, in card order: 01, 02, 03. */
const SCENES = [RecordsScene, MoneyScene, ApprovalsScene];

/** ✏️ How long each card plays before the next one takes over (ms). */
const TURN_LENGTH = 4500;

/**
 * One sentence that brightens word by word as you scroll
 * (opacity is worked out in CSS from `--progress`, see home.css).
 * The key words sit in small boxes with a number: 01, 02, 03.
 *
 * Under it, three cards (one per feature), each with a small moving scene.
 * They take turns: the active card plays its scene while the others dim,
 * and its key word above turns blue. Hovering a card makes it active.
 */
export default function Statement() {
  const textRef = useScrollProgress<HTMLParagraphElement>(0.85, 0.5);
  const [cardsRef, cardsInView] = useInView<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const still = prefersReducedMotion();

  // Move to the next card every TURN_LENGTH, once the cards are on screen
  useEffect(() => {
    if (still || !cardsInView || paused) return;
    const timer = window.setInterval(() => setActive((i) => (i + 1) % FEATURES.length), TURN_LENGTH);
    return () => window.clearInterval(timer);
  }, [still, cardsInView, paused]);

  // Flatten the sentence into single words, remembering which are highlighted
  let keyIndex = 0;
  const words = STATEMENT.flatMap((part) =>
    typeof part === "string"
      ? part.split(" ").map((text) => ({ text, number: undefined as string | undefined, key: -1 }))
      : [{ text: part.word, number: part.number, key: keyIndex++ }],
  );

  // Nothing plays until the cards are on screen.
  // With reduced motion every card shows its finished scene, nothing dims.
  const isActive = (i: number) => still || (cardsInView && i === active);

  return (
    <section className="statement">
      <div className="container">
        <p ref={textRef} className="statement-text" style={{ "--count": words.length } as CSSProperties}>
          {words.map((word, i) =>
            word.number ? (
              <span
                key={i}
                className={`statement-word is-key ${isActive(word.key) ? "is-active" : ""}`}
                style={{ "--i": i } as CSSProperties}
              >
                <span className="statement-chip">{word.text}</span>
                <sup>{word.number}</sup>{" "}
              </span>
            ) : (
              <span key={i} className="statement-word" style={{ "--i": i } as CSSProperties}>
                {word.text}{" "}
              </span>
            ),
          )}
        </p>

        <div ref={cardsRef} className="pillars" onMouseLeave={() => setPaused(false)}>
          {FEATURES.map((feature, i) => {
            const Scene = SCENES[i];
            return (
              <div
                key={feature.number}
                className={`pillar ${isActive(i) ? "is-active" : ""}`}
                onMouseEnter={() => {
                  setActive(i);
                  setPaused(true);
                }}
              >
                <Reveal className="pillar-inner" delay={i * 90}>
                  <div className="pillar-visual" aria-hidden="true">
                    <Scene />
                  </div>
                  <p className="number-label">{feature.number}</p>
                  <h3>{feature.title.replaceAll("*", "")}</h3>
                  <p className="pillar-summary">{feature.summary}</p>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
