import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import { DEMO_LINK, NAV_LINKS } from "./navigation";
import { getPreviousNavPath, rememberNavPath } from "./navMemory";
import { ArrowIcon, Icon } from "./shared/icons";


/**
 * Sticky top bar. Turns solid once the page scrolls,
 * and collapses into a menu button on small screens.
 *
 * Menu links come from ./navigation.ts
 * ✏️ Slide speed and colours are set in layout.css,
 *    under "NAV ANIMATION SETTINGS".
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // The link that currently looks active. Starts on the previous page's
  // link (see ./navMemory.ts), then switches to this page's link a moment
  // later, which is what makes the highlight slide.
  const [shownPath, setShownPath] = useState(() => getPreviousNavPath() ?? pathname);
  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Wait two frames so the old position is painted first, then move to the new link.
  useEffect(() => {
    let second = 0;
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => setShownPath(pathname));
    });
    rememberNavPath(pathname);
    return () => {
      cancelAnimationFrame(first);
      cancelAnimationFrame(second);
    };
  }, [pathname]);

  // Place the sliding pill under the link that looks active.
  useLayoutEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!nav || !pill) return;

    let animations: Animation[] = [];
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const place = (animate = false) => {
      const oldX = parseFloat(pill.style.getPropertyValue("--pill-x"));
      const oldWidth = parseFloat(pill.style.getPropertyValue("--pill-w"));
      const wasVisible = pill.style.opacity === "1";
      animations.forEach((animation) => animation.cancel());
      animations = [];
      const link = nav.querySelector<HTMLElement>(`[data-path="${shownPath}"]`);
      if (!link || !link.offsetWidth) {
        pill.style.opacity = "0"; // this page isn't in the menu (e.g. Privacy)
        return;
      }
      pill.style.opacity = "1";
      pill.style.setProperty("--pill-x", `${link.offsetLeft}px`);
      pill.style.setProperty("--pill-w", `${link.offsetWidth}px`);
      if (!animate || motion.matches || !wasVisible || !Number.isFinite(oldX) || oldX === link.offsetLeft) return;
      const x = link.offsetLeft;
      const width = link.offsetWidth;
      const distance = x - oldX;
      const direction = Math.sign(distance);
      const stretch = Math.min(Math.abs(distance) * 0.38, 62);
      const duration = parseFloat(getComputedStyle(nav).getPropertyValue("--nav-slide-duration")) || 680;
      const frame = (position: number, size: number, height: number, skew: number) => ({
        transform: `translateX(${position}px) scaleY(${height}) skewX(${skew}deg)`,
        width: `${size}px`,
      });
      animations.push(pill.animate([
        { ...frame(oldX, oldWidth, 1, 0), offset: 0 },
        { ...frame(oldX + distance * 0.38 - stretch / 2, oldWidth + (width - oldWidth) * 0.38 + stretch, 1.16, -direction * 5), offset: 0.38 },
        { ...frame(x + direction * 5, width * 1.04, 1.08, direction * 2), offset: 0.72 },
        { ...frame(x - direction * 1.5, width * 0.99, 0.98, 0), offset: 0.88 },
        { ...frame(x, width, 1, 0), offset: 1 },
      ], { duration, easing: "cubic-bezier(0.22, 0.68, 0.25, 1)" }));
      const label = link.querySelector(".site-nav-label");
      if (label) animations.push(label.animate([
        { transform: "scale(1)", offset: 0 },
        { transform: "scale(1.19)", offset: 0.38 },
        { transform: "scale(1.1)", offset: 0.68 },
        { transform: "scale(0.985)", offset: 0.88 },
        { transform: "scale(1)", offset: 1 },
      ], { duration, easing: "cubic-bezier(0.22, 0.68, 0.25, 1)" }));
    };
    place(true);

    // Keep the resting position aligned after fonts load or the bar resizes.
    const resize = () => place();
    let initialObservation = true;
    const observer = new ResizeObserver(() => {
      if (initialObservation) { initialObservation = false; return; }
      resize();
    });
    observer.observe(nav);
    nav.querySelectorAll(".site-nav-link").forEach((link) => observer.observe(link));
    motion.addEventListener("change", resize);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", resize);
      animations.forEach((animation) => animation.cancel());
    };
  }, [shownPath]);

  return (
    <header className={`site-header ${scrolled || menuOpen ? "is-solid" : ""}`}>
      <div className="container site-header-inner">
        <Link to="/" className="site-header-logo" aria-label="XVS home">
          <Logo />
        </Link>

        <nav ref={navRef} className="site-nav" aria-label="Main">
          {/* The highlight that slides between links */}
          <span ref={pillRef} className="site-nav-pill" aria-hidden="true" />
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              data-path={link.href}
              className={`site-nav-link ${shownPath === link.href ? "is-active" : ""}`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              <span className="site-nav-label">{link.label}</span>
            </Link>
          ))}
        </nav>

        <Link to={DEMO_LINK.href} className="btn btn-primary btn-small site-header-cta">
          {DEMO_LINK.label}
          <ArrowIcon />
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-label="Menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
      </div>

      {menuOpen && (
        // Any click on a link inside the menu closes it
        <nav id="mobile-menu" className="mobile-menu container" aria-label="Main" onClick={() => setMenuOpen(false)}>
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} to={link.href} end className="mobile-menu-link">
              {link.label}
            </NavLink>
          ))}
          <Link to={DEMO_LINK.href} className="btn btn-primary">
            {DEMO_LINK.label}
          </Link>
        </nav>
      )}
    </header>
  );
}
