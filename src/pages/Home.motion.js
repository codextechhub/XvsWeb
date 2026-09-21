
const HERO_BARS = [62, 78, 54, 88, 46, 70, 58, 74];
const PERMS = [true, false, true, false];
const AUDIT = [
  "export.run · Fees register · A. Okonkwo",
  "attendance.mark · JSS2 · 42 present",
  "role.assign · Bursar → K. Adeyemi",
  "import.batch.publish · students-term2.csv",
  "auth.session.end · 1 device",
  "fees.receipt · ₦180,000 · Lekki",
];

export default class PageMotion {
  props = {};
  _events = new AbortController();
  _listen(target, name, handler, options = {}) {
    target.addEventListener(name, handler, { ...(typeof options === "boolean" ? { capture: options } : options), signal: this._events.signal });
  }
  constructor(root) { this.root = root; }
  state = { submitted: false };


  componentDidMount() {
    this._reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this._pace = (this.props.sequencePace ?? "Calm") === "Brisk" ? 0.72 : 1;
    if ((this.props.ambientMotion ?? true) === false) {
      this.root.querySelectorAll("[data-float],[data-drift]").forEach((n) => { n.style.animation = "none"; });
    }
    this._initNav();
    this._initScrollLinks();
    this._initReveals();
    this._initHero();
    this._initSidebar();
    this._initTiles();
    this._initRails();
    this._initFragments();
    this._initForm();
  }

  // ── helpers: every animated block owns its own timer pool ──────
  _at(el, ms, fn) {
    if (this._reduce) { fn(); return; }
    const t = setTimeout(fn, ms);
    (el._timers = el._timers || []).push(t);
    return t;
  }
  _clear(el) { (el._timers || []).forEach(clearTimeout); el._timers = []; }

  _snap(el, apply) {
    if (!el) return;
    const prev = el.style.transition;
    el.style.transition = "none";
    apply(el);
    void el.offsetWidth;
    el.style.transition = prev;
  }

  _count(el, to, dur, pct) {
    if (!el) return;
    if (el._raf) cancelAnimationFrame(el._raf);
    const fmt = (v) => (pct ? Math.round(v) + "%" : Math.round(v).toLocaleString("en-US"));
    if (this._reduce) { el.textContent = fmt(to); return; }
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(to * e);
      if (p < 1) el._raf = requestAnimationFrame(step);
    };
    el._raf = requestAnimationFrame(step);
  }

  _initNav() {
    const links = this.root.querySelector("[data-nav-links]");
    const toggle = this.root.querySelector("[data-nav-toggle]");
    const panel = this.root.querySelector("[data-nav-panel]");
    let open = false;
    this._listen(window, "keydown", (event) => {
      if (event.key === "Escape" && open) { open = false; paint(); toggle?.focus(); }
    });
    const paint = () => {
      if (!panel || !toggle) return;
      panel.style.display = open ? "flex" : "none";
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };
    const apply = () => {
      const narrow = window.innerWidth < 900;
      if (links) links.style.display = narrow ? "none" : "flex";
      if (toggle) toggle.style.display = narrow ? "flex" : "none";
      if (!narrow) open = false;
      paint();
    };
    if (toggle) this._listen(toggle, "click", () => { open = !open; paint(); });
    if (panel) panel.querySelectorAll("a").forEach((a) => this._listen(a, "click", () => { open = false; paint(); }));
    apply();
    this._listen(window, "resize", apply);
    this._offResize = () => window.removeEventListener("resize", apply);

    const nav = this.root.querySelector("[data-nav]");
    const solid = (this.props.navOnScroll ?? "Blur") === "Solid";
    const onScroll = () => {
      if (!nav) return;
      const on = window.scrollY > 24;
      nav.style.background = on ? (solid ? "#FBFBFC" : "rgba(251,251,252,.78)") : "rgba(251,251,252,0)";
      nav.style.backdropFilter = on && !solid ? "blur(14px)" : "none";
      nav.style.borderBottomColor = on ? "#EDEFF4" : "rgba(33,33,33,0)";
      nav.style.boxShadow = on ? "0 1px 3px rgba(48,58,81,.05)" : "none";
    };
    onScroll();
    this._listen(window, "scroll", onScroll, { passive: true });
    this._offScroll = () => window.removeEventListener("scroll", onScroll);
  }

  /** "See it in action" glides rather than jumps. */
  _initScrollLinks() {
    this.root.querySelectorAll("[data-scroll]").forEach((a) => {
      this._listen(a, "click", (e) => {
        const id = (a.getAttribute("href") || "").replace("#", "");
        const target = id && document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({ top, behavior: this._reduce ? "auto" : "smooth" });
      });
    });
  }

  _initReveals() {
    if (this._reduce) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "none";
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    this.root.querySelectorAll("[data-reveal]").forEach((n) => {
      if (n.getBoundingClientRect().top < window.innerHeight * 0.9) return;
      n.style.opacity = "0";
      n.style.transform = "translateY(22px)";
      n.style.transition = "opacity 520ms cubic-bezier(.16,1,.3,1), transform 560ms cubic-bezier(.16,1,.3,1)";
      io.observe(n);
    });
    this._revealIo = io;
  }

  /**
   * The hero console replays on a loop while it is in view — a one-shot run
   * finishes before most visitors have focused on it, leaving it looking static.
   */
  _initHero() {
    const stage = this.root.querySelector("[data-hero-console]");
    const counts = Array.from(this.root.querySelectorAll("[data-hcount]"));
    const bars = Array.from(this.root.querySelectorAll("[data-hbar]"));
    const rows = Array.from(this.root.querySelectorAll("[data-nav-row]"));

    if (this._reduce || !stage) {
      counts.forEach((el) => { el.textContent = parseFloat(el.dataset.hcount).toLocaleString("en-US"); });
      bars.forEach((b, i) => { b.style.height = HERO_BARS[i] + "%"; });
      return;
    }

    const cycle = () => {
      if (!stage._on) return;
      counts.forEach((el) => { if (el._raf) cancelAnimationFrame(el._raf); el.textContent = "0"; });
      bars.forEach((b) => this._snap(b, (n) => { n.style.height = "4%"; }));
      counts.forEach((el, i) => this._at(stage, 160 + i * 130, () => this._count(el, parseFloat(el.dataset.hcount), 1800)));
      bars.forEach((b, i) => this._at(stage, 520 + i * 90, () => { b.style.height = HERO_BARS[i] + "%"; }));
      this._at(stage, 8200 * this._pace, cycle);
    };

    let k = 0;
    const stepNav = () => {
      if (!stage._on) return;
      rows.forEach((r, i) => { r.style.background = i === k ? "rgba(74,101,157,.10)" : "transparent"; });
      k = (k + 1) % rows.length;
      this._at(stage, 2200, stepNav);
    };

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          if (stage._on) return;
          stage._on = true;
          cycle();
          stepNav();
        } else {
          stage._on = false;
          this._clear(stage);
        }
      });
    }, { threshold: 0 });
    io.observe(stage);
    this._heroIo = io;

    if (stage.getBoundingClientRect().top < window.innerHeight) {
      stage._on = true;
      cycle();
      stepNav();
    }
  }

  /**
   * The console sidebar narrows to an icon strip on small screens, where a
   * clipped one-letter label reads as broken — hide the labels outright instead.
   */
  _initSidebar() {
    const labels = Array.from(this.root.querySelectorAll("[data-nav-row] span:last-child"));
    if (!labels.length) return;
    const apply = () => {
      const iconOnly = window.innerWidth < 900;
      labels.forEach((l) => { l.style.display = iconOnly ? "none" : "block"; });
    };
    apply();
    this._listen(window, "resize", apply);
    this._offSidebar = () => window.removeEventListener("resize", apply);
  }

  /** The attendance frame's grid is static, so its tiles must match its legend. */
  _initTiles() {
    this.root.querySelectorAll("[data-tile]").forEach((t, i) => {
      const k = i % 48;
      t.style.background = (k === 11 || k === 34) ? "#E33131" : ([5, 19, 28, 41].includes(k) ? "#F59E0B" : "#16A34A");
    });
  }

  /** Two rails, opposite directions, paused on hover. */
  _initRails() {
    const wrap = this.root.querySelector("[data-rail]");
    if (!wrap) return;
    const tracks = Array.from(wrap.querySelectorAll("[data-rail-track]"));
    const single = (this.props.railRows ?? "Two rows") === "One row";
    if (single && tracks[1]) tracks[1].style.display = "none";

    const live = tracks.filter((t) => t.style.display !== "none");
    live.forEach((t) => {
      Array.from(t.children).forEach((c) => {
        const clone = c.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        t.appendChild(clone);
      });
    });
    if (this._reduce) return;

    const state = live.map((t) => ({ t, x: parseFloat(t.dataset.dir) > 0 ? -t.scrollWidth / 2 : 0, half: t.scrollWidth / 2, dir: parseFloat(t.dataset.dir) || -1 }));
    const measure = () => state.forEach((s) => { s.half = s.t.scrollWidth / 2; });
    this._listen(window, "resize", measure);
    this._offMeasure = () => window.removeEventListener("resize", measure);

    let paused = false, last = null, visible = true;
    this._listen(wrap, "mouseenter", () => { paused = true; });
    this._listen(wrap, "mouseleave", () => { paused = false; });

    const io = new IntersectionObserver((entries) => { entries.forEach((e) => { visible = e.isIntersecting; }); }, { threshold: 0 });
    io.observe(wrap);
    this._railIo = io;

    const frame = (now) => {
      if (last === null) last = now;
      const dt = Math.min(64, now - last);
      last = now;
      if (!paused && visible) {
        state.forEach((s) => {
          s.x += s.dir * (17 / 1000) * dt;
          if (s.half) {
            if (s.x <= -s.half) s.x += s.half;
            if (s.x >= 0) s.x -= s.half;
          }
          s.t.style.transform = "translate3d(" + s.x.toFixed(2) + "px,0,0)";
        });
      }
      this._railRaf = requestAnimationFrame(frame);
    };
    this._railRaf = requestAnimationFrame(frame);
  }

  /** Each feature fragment loops while it is on screen, and resets when it leaves. */
  _initFragments() {
    const frags = Array.from(this.root.querySelectorAll("[data-frag]"));
    if (!frags.length) return;
    const runners = {
      branches: (el) => this._fragBranches(el),
      perm: (el) => this._fragPerm(el),
      attendance: (el) => this._fragAttendance(el),
      import: (el) => this._fragImport(el),
      fees: (el) => this._fragFees(el),
      reporting: (el) => this._fragReporting(el),
    };
    const periods = { branches: 8000, perm: 9200, attendance: 8600, import: 9000, fees: 8400, reporting: 8800 };

    if (this._reduce) { frags.forEach((el) => runners[el.dataset.frag] && runners[el.dataset.frag](el)); return; }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        const el = e.target;
        const kind = el.dataset.frag;
        if (e.isIntersecting) {
          if (el._on) return;
          el._on = true;
          const loop = () => {
            if (!el._on) return;
            this._resetFrag(el);
            runners[kind](el);
            this._at(el, periods[kind] * this._pace, loop);
          };
          loop();
        } else {
          el._on = false;
          this._clear(el);
          this._resetFrag(el);
        }
      });
    }, { threshold: 0.25 });
    frags.forEach((el) => io.observe(el));
    this._fragIo = io;
  }

  _resetFrag(el) {
    el.querySelectorAll("[data-brow]").forEach((r) => this._snap(r, (n) => { n.style.opacity = "0"; n.style.transform = "translateY(8px)"; }));
    el.querySelectorAll("[data-bcount]").forEach((n) => { if (n._raf) cancelAnimationFrame(n._raf); n.textContent = "0"; });
    el.querySelectorAll("[data-prow]").forEach((r) => this._snap(r, (n) => { n.style.opacity = "0"; n.style.transform = "translateX(-10px)"; n.style.borderColor = "#F1F2F5"; }));
    el.querySelectorAll("[data-ppill]").forEach((p) => this._snap(p, (n) => { n.textContent = "Checking"; n.style.background = "#F1F2F5"; n.style.color = "#5C5D5C"; }));
    el.querySelectorAll("[data-acell]").forEach((c) => this._snap(c, (n) => { n.style.background = "#F1F2F5"; }));
    el.querySelectorAll("[data-arow]").forEach((r) => this._snap(r, (n) => { n.style.opacity = "0"; }));
    el.querySelectorAll("[data-abar]").forEach((b) => this._snap(b, (n) => { n.style.width = "0%"; }));
    const apct = el.querySelector("[data-apct]");
    if (apct) { if (apct._raf) cancelAnimationFrame(apct._raf); apct.textContent = "0%"; }
    this._snap(el.querySelector("[data-ibar]"), (n) => { n.style.width = "0%"; });
    const ipct = el.querySelector("[data-ipct]");
    if (ipct) { if (ipct._raf) cancelAnimationFrame(ipct._raf); ipct.textContent = "0%"; }
    el.querySelectorAll("[data-irow]").forEach((r) => {
      r.style.background = "#FBFBFC";
      const dot = r.querySelector("[data-idot]");
      const label = r.querySelector("[data-ilabel]");
      if (dot) { dot.style.background = "#E8EAF0"; dot.innerHTML = ""; }
      if (label) { label.textContent = "Queued"; label.style.color = "#5C5D5C"; }
    });
    this._snap(el.querySelector("[data-isum]"), (n) => { n.style.opacity = "0"; n.style.transform = "translateY(8px)"; });
    this._snap(el.querySelector("[data-fring]"), (n) => { n.style.strokeDashoffset = "289"; });
    const fpct = el.querySelector("[data-fpct]");
    if (fpct) { if (fpct._raf) cancelAnimationFrame(fpct._raf); fpct.textContent = "0%"; }
    el.querySelectorAll("[data-fbar]").forEach((b) => this._snap(b, (n) => { n.style.width = "0%"; }));
    el.querySelectorAll("[data-erow]").forEach((r) => { r.style.background = "#FBFBFC"; });
    el.querySelectorAll("[data-epill]").forEach((p) => this._snap(p, (n) => { n.textContent = "Queued"; n.style.background = "#F1F2F5"; n.style.color = "#5C5D5C"; }));
  }

  _fragBranches(el) {
    el.querySelectorAll("[data-brow]").forEach((r, i) => {
      this._at(el, 200 + i * 380, () => { r.style.opacity = "1"; r.style.transform = "none"; });
      const n = r.querySelector("[data-bcount]");
      if (n) this._at(el, 400 + i * 380, () => this._count(n, parseFloat(n.dataset.bcount), 1200));
    });
    const total = el.querySelector("div[style*='border-top'] [data-bcount]");
    if (total) this._at(el, 2000, () => this._count(total, parseFloat(total.dataset.bcount), 1500));
  }

  _fragPerm(el) {
    const rows = Array.from(el.querySelectorAll("[data-prow]"));
    rows.forEach((row, i) => {
      this._at(el, 220 + i * 1500, () => { row.style.opacity = "1"; row.style.transform = "none"; });
      this._at(el, 900 + i * 1500, () => {
        const granted = PERMS[i];
        const pill = row.querySelector("[data-ppill]");
        if (pill) {
          pill.textContent = granted ? "Granted" : "Blocked";
          pill.style.background = granted ? "rgba(22,163,74,.12)" : "rgba(227,49,49,.12)";
          pill.style.color = granted ? "#0F6B32" : "#A81E1E";
        }
        row.style.borderColor = granted ? "rgba(22,163,74,.28)" : "rgba(227,49,49,.30)";
      });
    });
  }

  _fragAttendance(el) {
    const cells = Array.from(el.querySelectorAll("[data-acell]"));
    cells.forEach((c, i) => {
      const tone = i % 19 === 9 ? "#E33131" : (i % 11 === 5 ? "#F59E0B" : "#16A34A");
      this._at(el, 140 + i * 42, () => { c.style.background = tone; });
    });
    const pct = el.querySelector("[data-apct]");
    if (pct) this._at(el, 200, () => this._count(pct, 96, 2400, true));
    const rows = Array.from(el.querySelectorAll("[data-arow]"));
    const widths = ["98%", "94%", "72%"];
    rows.forEach((r, i) => {
      this._at(el, 2600 + i * 320, () => {
        r.style.opacity = "1";
        const bar = r.querySelector("[data-abar]");
        if (bar) bar.style.width = widths[i];
      });
    });
  }

  _fragImport(el) {
    const bar = el.querySelector("[data-ibar]");
    const pct = el.querySelector("[data-ipct]");
    if (bar) this._at(el, 80, () => { bar.style.transition = "width " + 4600 * this._pace + "ms cubic-bezier(.4,0,.5,1)"; bar.style.width = "100%"; });
    if (pct) this._at(el, 100, () => this._count(pct, 100, 4600 * this._pace, true));
    const rows = Array.from(el.querySelectorAll("[data-irow]"));
    const out = [
      { label: "Valid", color: "#0F6B32", bg: "rgba(22,163,74,.08)", dot: "#16A34A" },
      { label: "1 flagged", color: "#8A5A08", bg: "rgba(245,158,11,.10)", dot: "#F59E0B" },
      { label: "Valid", color: "#0F6B32", bg: "rgba(22,163,74,.08)", dot: "#16A34A" },
    ];
    rows.forEach((row, i) => {
      const dot = row.querySelector("[data-idot]");
      const label = row.querySelector("[data-ilabel]");
      this._at(el, 420 + i * 1400, () => {
        if (dot) dot.style.background = "#DBE0EB";
        if (label) { label.textContent = "Validating"; label.style.color = "#4A659D"; }
      });
      this._at(el, 1300 + i * 1400, () => {
        const o = out[i];
        row.style.background = o.bg;
        if (dot) { dot.style.background = o.dot; dot.innerHTML = '<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"><path d="M20 6 9 17l-5-5"/></svg>'; }
        if (label) { label.textContent = o.label; label.style.color = o.color; }
      });
    });
    const sum = el.querySelector("[data-isum]");
    if (sum) this._at(el, 4900, () => { sum.style.opacity = "1"; sum.style.transform = "none"; });
  }

  _fragFees(el) {
    const ring = el.querySelector("[data-fring]");
    const pct = el.querySelector("[data-fpct]");
    if (ring) this._at(el, 400, () => { ring.style.strokeDashoffset = String(289 * (1 - 0.78)); });
    if (pct) this._at(el, 400, () => this._count(pct, 78, 2400, true));
    const bars = Array.from(el.querySelectorAll("[data-fbar]"));
    const widths = ["88%", "81%", "54%"];
    bars.forEach((b, i) => this._at(el, 700 + i * 380, () => { b.style.width = widths[i]; }));
  }

  _fragReporting(el) {
    const rows = Array.from(el.querySelectorAll("[data-erow]"));
    rows.forEach((row, i) => {
      const pill = row.querySelector("[data-epill]");
      this._at(el, 500 + i * 1100, () => {
        if (pill) { pill.textContent = "Running"; pill.style.background = "rgba(74,101,157,.12)"; pill.style.color = "#4A659D"; }
      });
      this._at(el, 1400 + i * 1100, () => {
        if (pill) { pill.textContent = "Ready"; pill.style.background = "rgba(22,163,74,.12)"; pill.style.color = "#0F6B32"; }
        row.style.background = "rgba(22,163,74,.06)";
      });
    });
    const lines = Array.from(el.querySelectorAll("[data-lline]"));
    const fades = [".9", ".6", ".38"];
    let idx = 0;
    const write = () => {
      if (!el._on && !this._reduce) return;
      idx = (idx + 1) % AUDIT.length;
      lines.forEach((l, j) => { l.textContent = AUDIT[(idx + j) % AUDIT.length]; l.style.color = "rgba(255,255,255," + fades[j] + ")"; });
      if (lines[0]) {
        lines[0].style.opacity = "0";
        lines[0].style.transform = "translateY(-6px)";
        this._at(el, 70, () => { lines[0].style.opacity = "1"; lines[0].style.transform = "none"; });
      }
      if (!this._reduce) this._at(el, 2400, write);
    };
    this._at(el, 1000, write);
  }

  _initForm() {
    const form = this.root.querySelector("[data-demo-form]");
    if (!form) return;
    this._form = form;
    const rules = {
      name: (v) => (v.trim().length > 1 ? "" : "Enter your full name"),
      organization: (v) => (v.trim().length > 1 ? "" : "Which school or group is this for?"),
      email: (v) => (/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()) ? "" : "Enter a valid work email"),
      phone: (v) => (!v.trim() || v.replace(/\D/g, "").length >= 7 ? "" : "Check the phone number"),
    };
    this._rules = rules;
    Object.keys(rules).forEach((name) => {
      const input = form.querySelector('[name="' + name + '"]');
      const err = form.querySelector('[data-err="' + name + '"]');
      if (!input) return;
      const check = (force) => {
        const msg = rules[name](input.value);
        const touched = force || input.value.trim().length > 0;
        if (err) {
          err.textContent = touched ? msg : "";
          err.style.display = touched && msg ? "block" : "none";
        }
        input.style.borderColor = !touched ? "#E3E6ED" : (msg ? "#E33131" : "#16A34A");
        return !msg;
      };
      this._listen(input, "input", () => check(false));
      this._listen(input, "blur", () => check(input.value.trim().length > 0));
      input._check = check;
    });
  }

  _validateAll() {
    if (!this._form || !this._rules) return true;
    let ok = true;
    Object.keys(this._rules).forEach((name) => {
      const input = this._form.querySelector('[name="' + name + '"]');
      if (input && input._check && !input._check(true)) ok = false;
    });
    return ok;
  }

  componentWillUnmount() {
    this._events.abort();
    this.root.querySelectorAll("[data-rail-track] > [aria-hidden]").forEach((el) => el.remove());
    this.root.querySelectorAll("*").forEach((el) => { if (el._raf) cancelAnimationFrame(el._raf); });
    this.root.querySelectorAll("[data-frag]").forEach((el) => { el._on = false; this._clear(el); });
    const hero = this.root.querySelector("[data-hero-console]");
    if (hero) { hero._on = false; this._clear(hero); }
    if (this._railRaf) cancelAnimationFrame(this._railRaf);
    if (this._heroIo) this._heroIo.disconnect();
    if (this._offScroll) this._offScroll();
    if (this._offResize) this._offResize();
    if (this._offMeasure) this._offMeasure();
    if (this._offSidebar) this._offSidebar();
    if (this._revealIo) this._revealIo.disconnect();
    if (this._railIo) this._railIo.disconnect();
    if (this._fragIo) this._fragIo.disconnect();
  }
}
