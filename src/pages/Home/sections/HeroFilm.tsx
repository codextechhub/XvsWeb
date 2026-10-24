import { useEffect, useRef, useState, type CSSProperties } from "react";
import { prefersReducedMotion } from "../../../components/shared/useScrollEffects";
import { HERO_FILM } from "../content";

/**
 * The film under the hero headline, on an endless loop:
 *
 *   film     /videos/hero.mp4 plays once, silent (it has no sound track)
 *   finale   the closing words animate in over the film's empty last frame
 *   ...and the film starts again from the top.
 *
 * ✏️ The closing words and how long they stay are in content.ts → HERO_FILM.
 * ✏️ Their look and animation are in home.css → "Hero film".
 *
 * The film only plays while the hero is on screen. A visitor who prefers
 * reduced motion sees the film's still (hero-poster.jpg), with nothing moving.
 */
export default function HeroFilm({ className = "" }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduced] = useState(prefersReducedMotion);
  const [finale, setFinale] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  // Bumped every time the closing words show, so their animation replays from the start.
  const [round, setRound] = useState(0);

  // Only play while the hero is on screen.
  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), { threshold: 0.15 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced || finale) return;
    if (onScreen) video.play().catch(() => undefined);
    else video.pause();
  }, [onScreen, finale, reduced]);

  // After the closing words have had their time, start the film again.
  useEffect(() => {
    if (!finale || reduced) return;
    const timer = window.setTimeout(() => {
      const video = videoRef.current;
      if (video) video.currentTime = 0;
      setFinale(false);
    }, HERO_FILM.finaleMs);
    return () => window.clearTimeout(timer);
  }, [finale, reduced]);

  const { eyebrow, lines, tagline } = HERO_FILM.finale;
  let wordIndex = 0;

  return (
    <div className={`hero-film ${finale ? "is-finale" : ""} ${className}`}>
      <video
        ref={videoRef}
        className="hero-film-video"
        src={reduced ? undefined : HERO_FILM.src}
        poster={HERO_FILM.poster}
        muted
        playsInline
        autoPlay={!reduced}
        preload="auto"
        disablePictureInPicture
        aria-label={HERO_FILM.label}
        onEnded={() => {
          setRound((r) => r + 1);
          setFinale(true);
        }}
      />

      {finale && (
        <div
          key={round}
          className="hero-finale"
          style={{ "--finale-ms": `${HERO_FILM.finaleMs}ms` } as CSSProperties}
          aria-hidden="true"
        >
          <span className="finale-aura" />
          <span className="finale-ring" />
          <span className="finale-ring finale-ring-late" />

          <div className="finale-copy">
            <span className="finale-mark">
              <img src="/logo.png" alt="" width={233} height={296} />
            </span>
            <span className="finale-eyebrow">{eyebrow}</span>
            <p className="finale-title">
              {lines.map((line) => (
                <span key={line} className="finale-line">
                  {line.split(/(\*[^*]+\*)/).filter(Boolean).map((part) => {
                    const accent = part.startsWith("*");
                    return part
                      .replaceAll("*", "")
                      .split(" ")
                      .filter(Boolean)
                      .map((word) => (
                        <span
                          key={word + wordIndex}
                          className={`finale-word ${accent ? "finale-accent" : ""}`}
                          style={{ "--i": wordIndex++ } as CSSProperties}
                        >
                          {word}
                        </span>
                      ));
                  })}
                </span>
              ))}
            </p>
            <span className="finale-rule" />
            <span className="finale-tagline">{tagline}</span>
          </div>
        </div>
      )}
    </div>
  );
}
