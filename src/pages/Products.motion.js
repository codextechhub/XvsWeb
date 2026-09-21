
export default class PageMotion {
  props = {};
  _events = new AbortController();
  _listen(target, name, handler, options = {}) {
    target.addEventListener(name, handler, { ...(typeof options === "boolean" ? { capture: options } : options), signal: this._events.signal });
  }
  constructor(root) { this.root = root; }

  componentDidMount() {
    this._reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if ((this.props.ambientMotion ?? true) === false) {
      this.root.querySelectorAll("[data-float],[data-drift],[data-sweep]").forEach((n) => { n.style.animation = "none"; });
    }
    this._initNav();
    this._initReveals();
    this._initFlagship();
    this._initConsole();
    this._initModules();
  }

  _count(el, to, dur) {
    if (!el) return;
    if (el._raf) cancelAnimationFrame(el._raf);
    if (this._reduce) { el.textContent = Math.round(to).toLocaleString("en-US"); return; }
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(to * e).toLocaleString("en-US");
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

  _initReveals() {
    if (this._reduce) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "none";
        io.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
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
   * On wide screens the console is absolutely positioned so it bleeds past the
   * card's right edge. That overhang has nowhere to go once the card's two
   * columns stack, so it then becomes a normal full-width block in the flow.
   */
  _initFlagship() {
    const box = this.root.querySelector("[data-xvs-console]");
    if (!box) return;
    const holder = this.root.querySelector("[data-console-holder]");
    const apply = () => {
      // The peek treatment only means anything while the copy and the console
      // sit side by side, so read the wrap itself rather than guessing the
      // width it happens at — a hardcoded breakpoint and the row's real wrap
      // point are two independent numbers for one event, and they disagreed.
      // The holder's flex basis is 420px in both branches, so this is stable.
      const prev = holder && holder.previousElementSibling;
      const narrow = !holder || !prev || holder.offsetTop > prev.offsetTop;
      box.style.position = narrow ? "static" : "absolute";
      box.style.width = narrow ? "100%" : "min(560px,124%)";
      box.style.borderRadius = narrow ? "14px" : "16px 0 0 0";
      box.style.boxShadow = narrow ? "0 18px 44px rgba(48,58,81,.10)" : "0 30px 70px rgba(48,58,81,.14)";
      if (!holder) return;
      // Both branches write a real value — assigning "" would delete the
      // property outright, and the holder has no height of its own once its
      // only child is out of flow. The wide reservation is MEASURED, not a
      // viewport guess: the console's height is content-driven and constant,
      // so any vw-based clamp clips the last register rows in the range where
      // the clamp resolves smaller than the content.
      if (narrow) {
        holder.style.minHeight = "0px";
        holder.style.paddingBottom = "clamp(24px,4vw,40px)";
      } else {
        const top = parseFloat(getComputedStyle(box).top) || 0;
        holder.style.minHeight = Math.ceil(box.offsetHeight + top) + "px";
        holder.style.paddingBottom = "0px";
      }
    };
    apply();
    this._listen(window, "resize", apply);
    this._offFlagship = () => window.removeEventListener("resize", apply);
    // The register rows' height depends on Outfit, and on anything that later
    // reflows the console, so re-measure rather than trusting the first pass.
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(apply);
    if (window.ResizeObserver) {
      this._flagshipRo = new ResizeObserver(() => apply());
      this._flagshipRo.observe(box);
    }
  }

  // The flagship card's console: counters climb, rows take turns being read.
  _initConsole() {
    const box = this.root.querySelector("[data-xvs-console]");
    if (!box) return;
    const counts = Array.from(box.querySelectorAll("[data-x-count]"));
    const rows = Array.from(box.querySelectorAll("[data-x-row]"));
    if (this._reduce) {
      counts.forEach((el) => { el.textContent = parseFloat(el.dataset.xCount).toLocaleString("en-US"); });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          counts.forEach((el, i) => setTimeout(() => this._count(el, parseFloat(el.dataset.xCount), 1800), i * 140));
          if (!this._rowTimer) {
            let k = 0;
            const tick = () => {
              rows.forEach((r, i) => {
                const on = i === k;
                r.style.background = on ? "rgba(74,101,157,.08)" : "#FBFBFC";
                r.style.transform = on ? "translateX(3px)" : "none";
              });
              k = (k + 1) % rows.length;
            };
            tick();
            this._rowTimer = setInterval(tick, 1600);
          }
        } else if (this._rowTimer) {
          clearInterval(this._rowTimer);
          this._rowTimer = null;
          rows.forEach((r) => { r.style.background = "#FBFBFC"; r.style.transform = "none"; });
          counts.forEach((el) => { if (el._raf) cancelAnimationFrame(el._raf); el.textContent = "0"; });
        }
      });
    }, { threshold: 0.2 });
    io.observe(box);
    this._consoleIo = io;
  }

  // Module cards: the number takes the accent on hover, so the grid reads as a set.
  _initModules() {
    this.root.querySelectorAll("[data-mod]").forEach((card) => {
      const num = card.querySelector("[data-mod-num]");
      if (!num) return;
      this._listen(card, "mouseenter", () => { num.style.color = "#303A51"; num.style.letterSpacing = ".08em"; });
      this._listen(card, "mouseleave", () => { num.style.color = "#4A659D"; num.style.letterSpacing = "normal"; });
      num.style.transition = "color 240ms ease, letter-spacing 240ms ease";
    });
  }

  componentWillUnmount() {
    this._events.abort();
    this.root.querySelectorAll("[data-rail-track] > [aria-hidden]").forEach((el) => el.remove());
    this.root.querySelectorAll("*").forEach((el) => { if (el._raf) cancelAnimationFrame(el._raf); });
    if (this._offScroll) this._offScroll();
    if (this._offResize) this._offResize();
    if (this._offFlagship) this._offFlagship();
    if (this._flagshipRo) this._flagshipRo.disconnect();
    if (this._revealIo) this._revealIo.disconnect();
    if (this._consoleIo) this._consoleIo.disconnect();
    if (this._rowTimer) clearInterval(this._rowTimer);
  }
}
