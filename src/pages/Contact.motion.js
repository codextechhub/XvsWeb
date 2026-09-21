
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
    if ((this.props.ambientMotion ?? true) === false) {
      this.root.querySelectorAll("[data-drift]").forEach((n) => { n.style.animation = "none"; });
    }
    this._initNav();
    this._initScrollLinks();
    this._initReveals();
    this._initReason();
    this._initForm();
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

  _initScrollLinks() {
    this.root.querySelectorAll("[data-scroll]").forEach((a) => {
      this._listen(a, "click", (e) => {
        const id = (a.getAttribute("href") || "").replace("#", "");
        const target = id && document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: this._reduce ? "auto" : "smooth" });
        const first = target.querySelector("input");
        if (first) setTimeout(() => first.focus({ preventScroll: true }), this._reduce ? 0 : 520);
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

  /** The reason chips gate the scale question — it only matters for a demo. */
  _initReason() {
    const btns = Array.from(this.root.querySelectorAll("[data-reason-btn]"));
    const scale = this.root.querySelector("[data-scale-field]");
    const reasonInput = this.root.querySelector("[data-reason-value]");
    const msg = document.getElementById("ct-msg");
    const prompts = {
      Demo: "What you use today, and what is not working",
      Question: "What would you like to know?",
      Partnership: "What you have in mind, and who you are",
    };
    const paint = (value) => {
      btns.forEach((b) => {
        const on = b.dataset.value === value;
        b.style.borderColor = on ? "#4A659D" : "#E3E6ED";
        b.style.background = on ? "rgba(74,101,157,.09)" : "#fff";
        b.style.color = on ? "#3B5482" : "#555654";
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
      if (scale) scale.style.display = value === "Demo" ? "flex" : "none";
      if (msg && prompts[value]) msg.placeholder = prompts[value];
      if (reasonInput) reasonInput.value = value;
      this._reason = value;
    };
    btns.forEach((b) => this._listen(b, "click", () => paint(b.dataset.value)));
    paint("Demo");
  }

  _initForm() {
    const form = this.root.querySelector("[data-contact-form]");
    if (!form) return;
    this._form = form;

    const msg = form.querySelector("#ct-msg");
    const counter = form.querySelector("[data-counter]");
    if (msg && counter) {
      this._listen(msg, "input", () => {
        counter.textContent = msg.value.length + " / 600";
        counter.style.color = msg.value.length > 540 ? "#8A5A08" : "#8F918F";
      });
    }

    const rules = {
      name: (v) => (v.trim().length > 1 ? "" : "Enter your full name"),
      organization: (v) => (v.trim().length > 1 ? "" : "Which organization is this for?"),
      email: (v) => (/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(v.trim()) ? "" : "Enter a valid work email"),
      phone: (v) => (!v.trim() || v.replace(/\D/g, "").length >= 7 ? "" : "Check the phone number"),
    };
    this._rules = rules;
    Object.keys(rules).forEach((name) => {
      const input = form.querySelector('[name="' + name + '"]');
      const err = form.querySelector('[data-err="' + name + '"]');
      if (!input) return;
      const check = (force) => {
        const message = rules[name](input.value);
        const touched = force || input.value.trim().length > 0;
        if (err) {
          err.textContent = touched ? message : "";
          err.style.display = touched && message ? "block" : "none";
        }
        input.style.borderColor = !touched ? "#E3E6ED" : (message ? "#E33131" : "#16A34A");
        return !message;
      };
      this._listen(input, "input", () => check(false));
      this._listen(input, "blur", () => check(input.value.trim().length > 0));
      input._check = check;
    });
  }

  _validateAll() {
    if (!this._form || !this._rules) return true;
    let ok = true;
    let firstBad = null;
    Object.keys(this._rules).forEach((name) => {
      const input = this._form.querySelector('[name="' + name + '"]');
      if (input && input._check && !input._check(true)) {
        ok = false;
        if (!firstBad) firstBad = input;
      }
    });
    if (firstBad) firstBad.focus({ preventScroll: true });
    return ok;
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
