import type { CSSProperties, ReactNode } from "react";
import { useInView } from "./useScrollEffects";
import "./shared.css";

/* ── Reveal ────────────────────────────────────────────────
 * Fades + lifts its children in the first time they scroll into view.
 * `delay` (ms) lets you stagger items in a list.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/* ── SectionHeading ────────────────────────────────────────
 * Eyebrow + title + intro used at the top of most sections.
 * Put accent words in the title between *asterisks* to show them
 * in the italic serif, e.g. "Run your school *from one place*".
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`section-heading ${center ? "is-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>
        <Accent text={title} />
      </h2>
      {intro && <p className="lead">{intro}</p>}
    </Reveal>
  );
}

/* ── Accent ────────────────────────────────────────────────
 * Turns "*these words*" into the italic serif accent.
 */
export function Accent({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*[^*]+\*)/).map((part, i) =>
        part.startsWith("*") ? (
          <span key={i} className="serif">
            {part.slice(1, -1)}
          </span>
        ) : (
          part
        ),
      )}
    </>
  );
}

/* ── BrowserFrame ──────────────────────────────────────────
 * Wraps an XVS screenshot in a simple app window.
 */
export function BrowserFrame({
  src,
  alt,
  url = "XVS · Bright Star Schools",
  eager = false,
  className = "",
}: {
  src: string;
  alt: string;
  url?: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <div className={`browser ${className}`}>
      <div className="browser-bar" aria-hidden="true">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{url}</span>
      </div>
      <img src={src} alt={alt} width={1600} height={1000} loading={eager ? "eager" : "lazy"} decoding="async" />
    </div>
  );
}
