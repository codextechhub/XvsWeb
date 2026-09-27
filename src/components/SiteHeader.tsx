import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { DEMO_LINK, NAV_LINKS } from "./navigation";
import { ArrowIcon, Icon } from "./shared/icons";

/**
 * Sticky top bar. Turns solid once the page scrolls,
 * and collapses into a menu button on small screens.
 * Menu links come from ./navigation.ts
 */
export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled || menuOpen ? "is-solid" : ""}`}>
      <div className="container site-header-inner">
        <Link to="/" className="site-header-logo" aria-label="XVS home">
          <Logo />
        </Link>

        <nav className="site-nav" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.href} to={link.href} end className="site-nav-link">
              {link.label}
            </NavLink>
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
