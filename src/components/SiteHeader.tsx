import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLiquidNav } from "./shared/useLiquidNav";
import Logo from "./Logo";
import { COMPANY, DEMO_LINK, NAV_LINKS } from "./navigation";
import { getPreviousNavPath, rememberNavPath } from "./navMemory";
import { ArrowIcon } from "./shared/icons";


/**
 * Sticky top bar. Turns solid once the page scrolls,
 * and collapses into a menu button on small screens.
 *
 * Menu links come from ./navigation.ts
 * ✏️ Slide speed and colours are set in layout.css,
 *    under "NAV ANIMATION SETTINGS" (desktop) and "PHONE MENU".
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  // The phone menu remembers the page it was opened on, so it is closed again on any other page.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const menuOpen = menuPath === pathname;
  const closeMenu = () => setMenuPath(null);

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

  useLiquidNav(navRef, pillRef, `[data-path="${shownPath}"]`);

  // Escape closes the phone menu. While it is open the page behind it stays still.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled || menuOpen ? "is-solid" : ""} ${menuOpen ? "is-menu-open" : ""}`}>
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
              data-liquid-link
              className={`site-nav-link ${shownPath === link.href ? "is-active" : ""}`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              <span className="site-nav-label" data-liquid-label>{link.label}</span>
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
          onClick={() => setMenuPath(menuOpen ? null : pathname)}
        >
          {/* Two bars that turn into a cross */}
          <span className="menu-toggle-bars" aria-hidden="true"><i /><i /></span>
        </button>
      </div>

      {/* The phone menu: always in the page so it can animate, but hidden and inert while closed. */}
      <div className={`mobile-menu-scrim ${menuOpen ? "is-open" : ""}`} aria-hidden="true" onClick={closeMenu} />
      <nav
        id="mobile-menu"
        className={`mobile-menu ${menuOpen ? "is-open" : ""}`}
        aria-label="Main"
        inert={!menuOpen}
        // Any click on a link inside the menu closes it
        onClick={(e) => (e.target as HTMLElement).closest("a") && closeMenu()}
      >
        <p className="mobile-menu-eyebrow">Menu</p>
        <ul className="mobile-menu-list">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} style={{ "--i": i } as CSSProperties}>
              {/* Named by its label alone; the hint is read as its description */}
              <NavLink to={link.href} end className="mobile-menu-link" aria-describedby={`mobile-menu-hint-${i}`}>
                <span className="mobile-menu-index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <span className="mobile-menu-text">
                  <span className="mobile-menu-label">{link.label}</span>
                  <span className="mobile-menu-hint" id={`mobile-menu-hint-${i}`} aria-hidden="true">{link.hint}</span>
                </span>
                <span className="mobile-menu-arrow" aria-hidden="true"><ArrowIcon /></span>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-menu-foot" style={{ "--i": NAV_LINKS.length } as CSSProperties}>
          <Link to={DEMO_LINK.href} className="btn btn-primary mobile-menu-cta">
            {DEMO_LINK.label}
            <ArrowIcon />
          </Link>
          <a className="mobile-menu-mail" href={`mailto:${COMPANY.email}`}>
            {COMPANY.email}
            <span>Replies {COMPANY.responseTime.toLowerCase()}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
