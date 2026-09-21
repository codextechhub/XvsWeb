
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
    const targets = Array.from(this.root.querySelectorAll(
      '.xa-hero-copy, .xa-record, .xa-belief > div, .xa-story > div, ' +
      '.xa-section-heading, .xa-person, .xa-trust-intro, .xa-principle, .xa-invitation-inner'
    ));
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reveal = (node) => {
      node.classList.remove('xa-reveal-pending');
      this._revealIo?.unobserve(node);
    };
    const reset = () => {
      this._revealIo?.disconnect();
      targets.forEach(node => {
        node.classList.remove('xa-reveal', 'xa-reveal-pending');
        node.style.removeProperty('--xa-reveal-delay');
      });
    };
    this._resetReveals = reset;
    this._listen(preference, 'change', () => { if (preference.matches) reset(); });
    if (preference.matches) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    this._revealIo = io;
    targets.forEach((n) => {
      const bounds = n.getBoundingClientRect();
      if (bounds.top < window.innerHeight * 0.9) return;
      // Stagger cards sharing a row; stacked mobile cards reveal independently.
      const siblings = Array.from(n.parentElement.children);
      const column = siblings.filter(sibling =>
        sibling !== n && sibling.getBoundingClientRect().left < bounds.left &&
        Math.abs(sibling.getBoundingClientRect().top - bounds.top) < 4
      ).length;
      n.style.setProperty('--xa-reveal-delay', `${Math.min(column, 2) * 100}ms`);
      n.classList.add('xa-reveal', 'xa-reveal-pending');
      io.observe(n);
    });
    // Keyboard navigation must never land on an invisible link.
    this._listen(this.root, 'focusin', (event) => {
      const pending = event.target.closest('.xa-reveal-pending');
      if (pending) reveal(pending);
    });
  }

  componentWillUnmount() {
    this._events.abort();
    this.root.querySelectorAll("[data-rail-track] > [aria-hidden]").forEach((el) => el.remove());
    this.root.querySelectorAll("*").forEach((el) => { if (el._raf) cancelAnimationFrame(el._raf); });
    if (this._offScroll) this._offScroll();
    if (this._offResize) this._offResize();
    if (this._revealIo) this._revealIo.disconnect();
    this._resetReveals?.();
  }
}
