import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { prefersReducedMotion, useInView } from "./useScrollEffects";
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

/* ── LoopVideo ─────────────────────────────────────────────
 * A short silent clip on an endless loop (the XVS screen recordings).
 * It only downloads and plays while it is on screen, and pauses when it
 * scrolls away or its panel closes. A visitor who prefers reduced motion
 * sees the still (`poster`) instead.
 */
export function LoopVideo({ src, poster, label, className = "" }: { src: string; poster: string; label: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced] = useState(prefersReducedMotion);

  useEffect(() => {
    const video = ref.current;
    if (!video || reduced) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) video.play().catch(() => undefined);
      else video.pause();
    }, { threshold: 0.25 });
    io.observe(video);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <video
      ref={ref}
      className={className}
      src={reduced ? undefined : src}
      poster={poster}
      aria-label={label}
      width={1280}
      height={800}
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
    />
  );
}

/** A clip in /public/videos/services, with the still beside it (same name, .jpg). */
export type Clip = { src: string; poster: string };

/* ── BrowserFrame ──────────────────────────────────────────
 * Wraps an XVS screenshot, or a looping screen recording (`video`), in a simple app window.
 * ✏️ The address bar reads `url`. Without one it names the school on screen:
 *    the recordings were filmed at the demo school Lagoon View Academy, the screenshots at Bright Star.
 */
const SCREENSHOT_URL = "XVS · Bright Star Schools";
const RECORDING_URL = "lagoon-view.xvs.codexng.com";

export function BrowserFrame({
  src,
  alt,
  video,
  url,
  eager = false,
  className = "",
}: {
  src: string;
  alt: string;
  video?: Clip;
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
        <span className="browser-url">{url ?? (video ? RECORDING_URL : SCREENSHOT_URL)}</span>
      </div>
      {video ? (
        <LoopVideo src={video.src} poster={video.poster} label={alt} />
      ) : (
        <img src={src} alt={alt} width={1600} height={1000} loading={eager ? "eager" : "lazy"} decoding="async" />
      )}
    </div>
  );
}
