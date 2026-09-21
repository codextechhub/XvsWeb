
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
      this.root.querySelectorAll("[data-drift]").forEach((n) => { n.style.animation = "none"; });
    }
    this._initNav();
    this._initReveals();
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

  componentWillUnmount() {
    this._events.abort();
    this.root.querySelectorAll("[data-rail-track] > [aria-hidden]").forEach((el) => el.remove());
    this.root.querySelectorAll("*").forEach((el) => { if (el._raf) cancelAnimationFrame(el._raf); });
    if (this._offScroll) this._offScroll();
    if (this._offResize) this._offResize();
    if (this._revealIo) this._revealIo.disconnect();
  }
}
