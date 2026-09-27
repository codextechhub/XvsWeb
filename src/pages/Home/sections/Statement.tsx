import type { CSSProperties } from "react";
import { useScrollProgress } from "../../../components/shared/useScrollEffects";
import { STATEMENT } from "../content";

/**
 * One big sentence. Each word brightens as you scroll past it
 * (opacity is worked out in CSS from `--progress`, see home.css).
 */
export default function Statement() {
  const ref = useScrollProgress<HTMLElement>(0.85, 0.5);

  // Flatten the sentence into single words, remembering which are highlighted
  const words = STATEMENT.flatMap((part) =>
    typeof part === "string"
      ? part.split(" ").map((text) => ({ text, number: undefined as string | undefined }))
      : [{ text: part.word, number: part.number }],
  );

  return (
    <section ref={ref} className="statement">
      <div className="container">
        <p className="statement-text" style={{ "--count": words.length } as CSSProperties}>
          {words.map((word, i) =>
            word.number ? (
              <span key={i} className="statement-word is-key" style={{ "--i": i } as CSSProperties}>
                <span className="serif">{word.text}</span>
                <sup>{word.number}</sup>{" "}
              </span>
            ) : (
              <span key={i} className="statement-word" style={{ "--i": i } as CSSProperties}>
                {word.text}{" "}
              </span>
            ),
          )}
        </p>
      </div>
    </section>
  );
}
