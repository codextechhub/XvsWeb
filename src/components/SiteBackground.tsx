import { useEffect, useRef, type CSSProperties } from "react";
import { prefersReducedMotion } from "./shared/useScrollEffects";
import "./background.css";

/**
 * ─────────────────────────────────────────────────────────────
 *  SITE BACKGROUND: "The XVS orbit"
 *  One living backdrop that sits behind every page,
 *  fixed to the screen while the content scrolls over it.
 *  PageLayout adds it to every page (the Contact page adds it itself).
 *
 *  Layers, back to front:
 *    1. Daylight      – warm off-white with a soft morning glow
 *    2. Night sky     – deep navy with twinkling stars and a shooting star.
 *                       Painted only behind sections marked data-bg="dark"
 *                       (and the footer), with a soft dusk edge that moves
 *                       with the scroll like a horizon
 *    3. Aurora        – slow-drifting glows in XVS blues (+ cream at dawn);
 *                       over the night sky they glow like a nebula
 *    4. Orbits        – the logo's orbit ring, grown huge, with dots
 *                       travelling along it; turns as you scroll
 *    5. Spotlight     – a soft light that follows the mouse
 *    6. Grain         – fine film grain so the gradients feel rich
 *
 *  JavaScript only writes the night-sky mask and a few CSS variables:
 *    --scroll  0 → 1 from top to bottom of the page
 *    --night   0 → 1 how much of the screen is night right now
 *    --mx/--my mouse position
 *  Everything else (colours, sizes, motion) lives in ./background.css,
 *  so the look can be tuned without touching this file.
 * ─────────────────────────────────────────────────────────────
 */

/** Orbits drawn in a 1440×900 box that always covers the screen. */
const ORBITS = [
  { cx: 720, cy: 450, rx: 820, ry: 250, tilt: -14, duration: 38, dots: 2 },
  { cx: 720, cy: 450, rx: 620, ry: 180, tilt: 9, duration: 30, dots: 1 },
  { cx: 720, cy: 450, rx: 1040, ry: 360, tilt: -4, duration: 54, dots: 2 },
];

const STAR_COUNT = 90;

/** How soft the edge between day and night is, in pixels. */
const DUSK = 220;

/** Same "random" stars on every visit, so the sky doesn't jump around. */
function makeStars() {
  let seed = 7;
  const random = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  return Array.from({ length: STAR_COUNT }, () => ({
    x: random() * 100,
    y: random() * 100,
    size: random() < 0.85 ? 1 : 2,
    delay: random() * 6,
    duration: 2.5 + random() * 4,
  }));
}
const STARS = makeStars();

/**
 * Mask stops that ease from clear (at `from`) to solid (at `to`).
 * The smooth S-curve hides where dusk begins and ends.
 */
const FADE_STEPS = [0, 0.2, 0.4, 0.6, 0.8, 1];
const fade = (from: number, to: number) =>
  FADE_STEPS.map((t) => {
    const eased = t * t * (3 - 2 * t);
    return `rgba(0,0,0,${eased.toFixed(3)}) ${(from + (to - from) * t).toFixed(1)}px`;
  });

/** An SVG path that traces an ellipse, for the dots to travel along. */
const ellipsePath = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx},${cy} a ${rx},${ry} 0 1,0 ${rx * 2},0 a ${rx},${ry} 0 1,0 ${-rx * 2},0`;

export default function SiteBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const nightSky = useRef<HTMLDivElement>(null);
  const still = prefersReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      const max = document.documentElement.scrollHeight - vh;
      node.style.setProperty("--scroll", (max > 0 ? window.scrollY / max : 0).toFixed(4));

      // Night regions: every section marked data-bg="dark", plus the footer
      // (open-ended, so the page ends in night).
      const regions: { top: number; bottom: number; feather: number }[] = [];
      document.querySelectorAll<HTMLElement>('[data-bg="dark"]').forEach((section) => {
        const r = section.getBoundingClientRect();
        regions.push({ top: r.top, bottom: r.bottom, feather: DUSK });
      });
      const footer = document.querySelector(".site-footer");
      if (footer) {
        // Shifted up so the sky is fully night right where the footer begins
        const top = footer.getBoundingClientRect().top - DUSK * 1.5;
        regions.push({ top, bottom: top + 100000, feather: DUSK * 2.5 });
      }

      // The night sky is only painted where those regions are on screen,
      // with a soft dusk edge above and below each one.
      const stops = regions
        .sort((a, b) => a.top - b.top)
        .map(({ top, bottom, feather }) =>
          [
            ...fade(top - feather, top + feather * 0.6),
            ...fade(bottom + feather, bottom - feather * 0.6).reverse(),
          ].join(", "),
        );
      // (A page with no night regions, like Contact, gets a fully clear mask.)
      const mask = stops.length
        ? `linear-gradient(to bottom, transparent 0px, ${stops.join(", ")}, transparent 100%)`
        : "linear-gradient(transparent, transparent)";
      if (nightSky.current) {
        nightSky.current.style.maskImage = mask;
        nightSky.current.style.setProperty("-webkit-mask-image", mask);
      }

      // --night = how much of the screen is night right now (tints orbits, glows)
      const covered = regions.reduce(
        (sum, { top, bottom }) => sum + Math.max(0, Math.min(bottom, vh) - Math.max(top, 0)),
        0,
      );
      node.style.setProperty("--night", Math.min(1, covered / vh).toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    // Spotlight follows the mouse (desktop only)
    const onPointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      node.style.setProperty("--mx", `${event.clientX}px`);
      node.style.setProperty("--my", `${event.clientY}px`);
      node.classList.add("has-pointer");
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    if (!still) window.addEventListener("pointermove", onPointer, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [still]);

  return (
    <div ref={ref} className="site-bg" aria-hidden="true">
      <div className="site-bg-day" />

      {/* Night sky: only shown where a dark section is (see the mask above) */}
      <div ref={nightSky} className="site-bg-nightsky">
        <div className="site-bg-night" />
        <div className="site-bg-stars">
          {STARS.map((star, i) => (
            <i
              key={i}
              style={
                {
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: star.size,
                  height: star.size,
                  animationDelay: `${star.delay}s`,
                  animationDuration: `${star.duration}s`,
                } as CSSProperties
              }
            />
          ))}
          <span className="shooting-star" />
        </div>
      </div>

      <div className="site-bg-aurora">
        <span className="aurora aurora-dawn" />
        <span className="aurora aurora-blue" />
        <span className="aurora aurora-royal" />
        <span className="aurora aurora-sky" />
      </div>

      <svg className="site-bg-orbits" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="orbit-dot-glow">
            <stop offset="0" stopColor="#2e72d2" stopOpacity="0.55" />
            <stop offset="1" stopColor="#2e72d2" stopOpacity="0" />
          </radialGradient>
        </defs>
        {ORBITS.map((orbit, i) => {
          const path = ellipsePath(orbit.cx, orbit.cy, orbit.rx, orbit.ry);
          return (
            <g key={i} transform={`rotate(${orbit.tilt} ${orbit.cx} ${orbit.cy})`}>
              <path d={path} className={`orbit-line orbit-line-${i + 1}`} />
              {Array.from({ length: orbit.dots }, (_, d) => {
                // Spread several dots evenly around the same orbit
                const offset = -(orbit.duration / orbit.dots) * d;
                // With reduced motion the dots stay parked at fixed points on the orbit
                const angle = (d / orbit.dots) * Math.PI * 2 + i;
                const parked = still
                  ? `translate(${orbit.cx + orbit.rx * Math.cos(angle)} ${orbit.cy + orbit.ry * Math.sin(angle)})`
                  : undefined;
                return (
                  <g key={d} className="orbit-dot" transform={parked}>
                    <circle r="18" fill="url(#orbit-dot-glow)" />
                    <circle r="4.5" className="orbit-dot-core" />
                    {!still && (
                      <animateMotion dur={`${orbit.duration}s`} begin={`${offset}s`} repeatCount="indefinite" path={path} />
                    )}
                  </g>
                );
              })}
            </g>
          );
        })}
      </svg>

      <div className="site-bg-spotlight" />
      <div className="site-bg-grain" />
    </div>
  );
}
