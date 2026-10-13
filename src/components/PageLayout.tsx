import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteBackdrop from "./SiteBackdrop";
import "./layout.css";

/**
 * The frame every normal page sits in: the moving backdrop (see
 * SiteBackdrop.tsx), a soft blue-and-cream wash behind the top of the page, then header, main content, footer. The colours
 * live in src/index.css under "Design tokens".
 * `className` goes on the outer wrapper so each page can scope its styles
 * (e.g. "home" → .home .hero { … } in home.css).
 */
export default function PageLayout({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div className={`page ${className}`}>
      {/* ✏️ The moving background design. Delete this line (and the import) to remove it. */}
      <SiteBackdrop />
      <div className="page-glow" aria-hidden="true" />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">{children}</main>
      <SiteFooter />
    </div>
  );
}
