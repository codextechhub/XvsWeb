import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { prefersReducedMotion } from "../../../components/shared/useScrollEffects";
import { HERO_REEL } from "../content";

/**
 * "How XVS works" reel for the hero, ported from the Claude Design file
 * `XVS How It Works v2`. Everything on screen is a pure function of one
 * clock `T` (seconds), so the choreography below reads like a timeline:
 *
 *   Intro     Branch list, at rest
 *   Setup     Click a branch, zoom to a student profile
 *   Day       Exam schedule flags a room clash
 *   Fees      Invoices, parent pay page, receipts matched
 *   Approve   Approval inbox routes requests; cursor hits Review
 *   Overview  Dashboard zooms out, then crossfades back to the branch list
 *
 * It plays inside the same browser window the hero always had. The window's
 * content is drawn at a fixed size (VIEW_W × VIEW_H) and scaled to fit, so
 * every position below is in those pixels.
 */

type Vec = number[];
type Keys = [number, Vec][];
type Cues = Record<(typeof HERO_REEL.scenes)[number]["name"], number>;

interface Ring { x: number; y: number; w: number; h: number; t: number; c: string }
interface Shot {
  src: string;
  /** Also fades in over the last moments of the loop, so the end runs straight into the start. */
  wrap?: boolean;
  a: number; // fades in at
  b: number; // fades out at
  cam: Keys; // [t, [centerX, centerY, zoom]]
  cur?: Keys; // [t, [x, y]] cursor path, in screenshot fractions
  click?: number;
  rings?: Ring[];
  sweep?: { x: number; y: number; w: number; h: number; t: number; d: number };
}

/* ── Motion helpers ───────────────────────────────────────── */
const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;
const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);
const easeOutBack = (t: number) => 1 + 2.70158 * (t - 1) ** 3 + 1.70158 * (t - 1) ** 2;

const MOTION = {
  enter: (T: number, s: number, d = 0.4) => easeOutCubic(clamp((T - s) / d, 0, 1)),
  move: (T: number, s: number, d = 0.6) => easeInOutCubic(clamp((T - s) / d, 0, 1)),
  pop: (T: number, s: number, d = 0.4) => easeOutBack(clamp((T - s) / d, 0, 1)),
};

/** Keyframes eased in-out between each pair. */
function kf(T: number, keys: Keys): Vec {
  if (T <= keys[0][0]) return keys[0][1];
  for (let i = 0; i < keys.length - 1; i++) {
    const [t0, a] = keys[i];
    const [t1, b] = keys[i + 1];
    if (T <= t1) {
      const u = easeInOutCubic((T - t0) / Math.max(t1 - t0, 1e-4));
      return a.map((x, j) => lerp(x, b[j], u));
    }
  }
  return keys[keys.length - 1][1];
}
/** 0→1 fade over `f` seconds from `a`, gone after `b + f`. */
const win = (T: number, a: number, b: number, f = 0.25) => (T >= b + f ? 0 : clamp((T - a) / f, 0, 1));
const bump = (T: number, s: number, d: number) => Math.sin(Math.PI * clamp((T - s) / d, 0, 1));

/* ── Timeline ─────────────────────────────────────────────── */
/**
 * Each scene has an authored length (`nat`) and a playback length (`dur`).
 * The choreography is written against authored time; playback stretches
 * each scene to its `dur`. This mirrors how the design file was trimmed.
 */
function buildTimeline() {
  let play = 0;
  let auth = 0;
  const sections = HERO_REEL.scenes.map((s) => {
    const nat = "nat" in s ? s.nat : s.dur;
    const sec = { name: s.name, play, dur: s.dur, auth, nat };
    play += s.dur;
    auth += nat;
    return sec;
  });
  const cues = Object.fromEntries(sections.map((s) => [s.name, s.auth])) as Cues;
  const toAuthored = (t: number) => {
    const s = sections.find((x) => t < x.play + x.dur) ?? sections[sections.length - 1];
    return Math.min(s.auth + clamp(t - s.play, 0, s.dur) * (s.nat / s.dur), auth);
  };
  return { cues, toAuthored, playTotal: play, authTotal: auth };
}

const TIMELINE = buildTimeline();

function buildShots(C: Cues): Shot[] {
  const img = HERO_REEL.screens;
  return [
    { src: img.branches, a: -1, b: C.Setup + 1.45, wrap: true,
      cam: [[C.Setup - 0.3, [0.5, 0.5, 1]], [C.Setup + 0.9, [0.38, 0.22, 2.1]]],
      cur: [[C.Setup, [0.62, 0.7]], [C.Setup + 0.95, [0.223, 0.306]]], click: C.Setup + 1.05,
      rings: [{ x: 0.19, y: 0.16, w: 0.255, h: 0.17, t: C.Setup + 0.5, c: "#4A64A8" }] },
    { src: img.profile, a: C.Setup + 1.45, b: C.Day,
      cam: [[C.Setup + 1.45, [0.33, 0.13, 2.4]], [C.Day, [0.36, 0.16, 2.1]]],
      rings: [{ x: 0.405, y: 0.14, w: 0.25, h: 0.032, t: C.Setup + 1.7, c: "#4A64A8" }] },
    { src: img.clash, a: C.Day, b: C.Fees,
      cam: [[C.Day, [0.5, 0.5, 1.05]], [C.Day + 0.8, [0.46, 0.37, 1.9]], [C.Day + 1.5, [0.46, 0.37, 1.9]], [C.Fees, [0.52, 0.6, 2.0]]],
      rings: [
        { x: 0.21, y: 0.323, w: 0.76, h: 0.1, t: C.Day + 0.8, c: "#D6453D" },
        { x: 0.635, y: 0.545, w: 0.085, h: 0.09, t: C.Day + 1.85, c: "#D6453D" },
      ] },
    { src: img.invoices, a: C.Fees, b: C.Fees + 1.2,
      cam: [[C.Fees, [0.6, 0.35, 1.5]], [C.Fees + 1.2, [0.72, 0.3, 2.0]]],
      cur: [[C.Fees, [0.55, 0.55]], [C.Fees + 0.6, [0.842, 0.313]]], click: C.Fees + 0.7 },
    { src: img.pay, a: C.Fees + 1.2, b: C.Fees + 2.35,
      cam: [[C.Fees + 1.2, [0.5, 0.45, 1.7]], [C.Fees + 2.35, [0.5, 0.52, 2.2]]],
      cur: [[C.Fees + 1.35, [0.62, 0.3]], [C.Fees + 1.8, [0.5, 0.656]]], click: C.Fees + 1.9 },
    { src: img.receipts, a: C.Fees + 2.35, b: C.Approve,
      cam: [[C.Fees + 2.35, [0.72, 0.45, 1.7]], [C.Approve, [0.78, 0.62, 1.9]]],
      sweep: { x: 0.848, y: 0.505, w: 0.065, h: 0.465, t: C.Fees + 2.55, d: 0.8 } },
    { src: img.approvals, a: C.Approve, b: C.Overview,
      cam: [[C.Approve, [0.55, 0.45, 1.3]], [C.Approve + 0.9, [0.78, 0.26, 2.2]]],
      cur: [[C.Approve + 0.3, [0.55, 0.6]], [C.Approve + 1.2, [0.942, 0.253]]], click: C.Approve + 1.3,
      rings: [{ x: 0.742, y: 0.228, w: 0.1, h: 0.05, t: C.Approve + 0.85, c: "#E39B2F" }] },
    { src: img.dashboard, a: C.Overview, b: 99,
      cam: [[C.Overview, [0.6, 0.62, 2.0]], [C.Overview + 1.5, [0.5, 0.5, 1]]] },
  ];
}

/* ── Pieces ───────────────────────────────────────────────── */
function Cursor({ x, y, dip, ripple }: { x: number; y: number; dip: number; ripple: number }) {
  return (
    <div className="reel-cursor" style={{ left: x, top: y }}>
      <div className="reel-ripple" style={{ transform: `scale(${ripple * 1.4})`, opacity: 1 - ripple }} />
      <svg width="34" height="40" viewBox="0 0 17 20" style={{ transform: `scale(${1 - 0.18 * dip})` }}>
        <path
          d="M1.5 1.5 L1.5 16 L5.5 12.3 L8.2 18.3 L10.8 17.2 L8.2 11.3 L13.8 11.3 Z"
          fill="#111"
          stroke="#fff"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/** How long the dashboard takes to crossfade back into the branch list at the end of each loop. */
const WRAP_FADE = 0.35;

function Screen({ T: now, shot, VW, VH }: { T: number; shot: Shot; VW: number; VH: number }) {
  const total = TIMELINE.authTotal;
  const wrapping = shot.wrap === true && now > total - WRAP_FADE;
  // While wrapping, this shot plays its opening frames (time just before 0).
  const T = wrapping ? now - total : now;
  const op = wrapping ? clamp((now - (total - WRAP_FADE)) / WRAP_FADE, 0, 1) : win(T, shot.a, shot.b);
  const [cx0, cy0, z] = kf(T, shot.cam);
  const cx = clamp(cx0, 0.5 / z, 1 - 0.5 / z);
  const cy = clamp(cy0, 0.5 / z, 1 - 0.5 / z);
  const px = (x: number) => VW / 2 + (x - cx) * VW * z;
  const py = (y: number) => VH / 2 + (y - cy) * VH * z;
  const live = op > 0;

  return (
    // Every screen stays mounted (so images are decoded before they appear); only the active ones are visible.
    <div className="reel-screen" style={{ opacity: op, visibility: live ? "visible" : "hidden" }}>
      <img
        src={shot.src}
        alt=""
        decoding="async"
        draggable={false}
        style={{
          width: VW,
          height: VH,
          transform: `translate(${VW / 2 - cx * VW * z}px, ${VH / 2 - cy * VH * z}px) scale(${z})`,
        }}
      />

      {live &&
        shot.rings?.map((r, i) => {
          const p = MOTION.pop(T, r.t, 0.45);
          if (p <= 0) return null;
          const pulse = 0.5 + 0.5 * Math.sin((T - r.t) * 9);
          return (
            <div
              key={i}
              className="reel-ring"
              style={{
                left: px(r.x),
                top: py(r.y),
                width: r.w * VW * z,
                height: r.h * VH * z,
                borderColor: r.c,
                boxShadow: `0 0 0 ${6 + 6 * pulse}px ${r.c}33`,
                opacity: clamp(p, 0, 1),
                transform: `scale(${lerp(1.15, 1, clamp(p, 0, 1))})`,
              }}
            />
          );
        })}

      {live && shot.sweep && (() => {
        const s = shot.sweep;
        const p = MOTION.move(T, s.t, s.d);
        return p > 0 ? (
          <div
            className="reel-sweep"
            style={{ left: px(s.x), top: py(s.y), width: s.w * VW * z, height: s.h * VH * z * p }}
          />
        ) : null;
      })()}

      {live && shot.cur && T >= shot.cur[0][0] - 0.1 && T >= shot.a + 0.2 && T < shot.b && (() => {
        const [x, y] = kf(T, shot.cur);
        const c = shot.click ?? -9;
        return (
          <Cursor
            x={px(x)}
            y={py(y)}
            dip={bump(T, c - 0.05, 0.2)}
            ripple={T >= c ? clamp((T - c) / 0.45, 0, 1) : 0}
          />
        );
      })()}
    </div>
  );
}

/** Size the window's content is drawn at (the design's 16:10 app window). */
const VIEW_W = 1380;
const VIEW_H = VIEW_W * 0.625;

function Piece({ T }: { T: number }) {
  const shots = useMemo(() => buildShots(TIMELINE.cues), []);
  return (
    <div className="reel-view" style={{ width: VIEW_W, height: VIEW_H }}>
      {shots.map((s) => (
        <Screen key={s.src} T={T} shot={s} VW={VIEW_W} VH={VIEW_H} />
      ))}
    </div>
  );
}

/* ── Player ───────────────────────────────────────────────── */
export default function HeroReel({ className = "" }: { className?: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [reduced] = useState(prefersReducedMotion);
  const [onScreen, setOnScreen] = useState(true);
  const [ready, setReady] = useState(false);
  const [t, setT] = useState(() => (reduced ? HERO_REEL.stillAt : 0));

  // Fit the fixed-size content to the window.
  useLayoutEffect(() => {
    const node = boxRef.current;
    if (!node) return;
    const measure = () => setWidth(node.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  // Skip the work while the hero is scrolled out of view.
  useEffect(() => {
    const node = boxRef.current;
    if (!node) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting));
    io.observe(node);
    return () => io.disconnect();
  }, []);

  // Wait until every screenshot is decoded, so nothing pops in mid-shot.
  useEffect(() => {
    let alive = true;
    Promise.all(
      Object.values(HERO_REEL.screens).map((src) => {
        const img = new Image();
        img.src = src;
        return img.decode().catch(() => undefined);
      }),
    ).then(() => alive && setReady(true));
    return () => {
      alive = false;
    };
  }, []);

  // The clock. Loops forever.
  const running = ready && onScreen && !reduced;
  useEffect(() => {
    if (!running) return;
    let raf = 0;
    let last: number | null = null;
    const step = (ts: number) => {
      const dt = last == null ? 0 : Math.min((ts - last) / 1000, 0.1);
      last = ts;
      setT((prev) => (prev + dt) % TIMELINE.playTotal);
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [running]);

  return (
    <div className={`browser reel ${className}`}>
      <div className="browser-bar" aria-hidden="true">
        <span className="browser-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">XVS · Bright Star Schools</span>
      </div>
      <div ref={boxRef} className="reel-box" role="img" aria-label={HERO_REEL.label}>
        {width > 0 && (
          <div className="reel-scale" style={{ transform: `scale(${width / VIEW_W})` }}>
            <Piece T={TIMELINE.toAuthored(t)} />
          </div>
        )}
      </div>
    </div>
  );
}
