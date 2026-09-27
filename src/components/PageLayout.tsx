import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteBackground from "./SiteBackground";
import "./layout.css";

/**
 * The frame every normal page sits in: the living background,
 * header, main content, footer.
 * `className` goes on the outer wrapper so each page can scope its styles
 * (e.g. "home" → .home .hero { … } in home.css).
 */
export default function PageLayout({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`page ${className}`}>
      <SiteBackground />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
