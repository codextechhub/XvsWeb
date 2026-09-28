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
 * ✏️ Slide speed, bounce and link sizes are set in layout.css,
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

    const place = () => {
      const link = nav.querySelector<HTMLElement>(`[data-path="${shownPath}"]`);
      if (!link) {
        pill.style.opacity = "0"; // this page isn't in the menu (e.g. Privacy)
        return;
      }
      pill.style.opacity = "1";
      pill.style.setProperty("--pill-x", `${link.offsetLeft}px`);
      pill.style.setProperty("--pill-w", `${link.offsetWidth}px`);
    };
    place();

    // Turn the slide animation on only after the first placement,
    // so the pill doesn't fly in from the left edge on first load.
    const frame = requestAnimationFrame(() => pill.classList.add("is-ready"));
    window.addEventListener("resize", place);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", place);
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
              {link.label}
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
