import { Link } from "react-router-dom";
import Logo from "./Logo";
import { COMPANY, FOOTER_COLUMNS } from "./navigation";

/**
 * Site-wide footer. Links and contact details come from ./navigation.ts
 * At the very bottom: the XVS shield and name, very large and faded
 * (styles in layout.css → .site-footer-wordmark).
 */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-top">
          <div className="site-footer-brand">
            <Logo />
            <p>
              The school management platform that keeps students, staff, fees, buying and approvals in one place, for
              every branch.
            </p>
            <a href={`mailto:${COMPANY.email}`} className="site-footer-email">
              {COMPANY.email}
            </a>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="site-footer-column">
              <p>{column.title}</p>
              {column.links.map((link) => (
                <Link key={link.href + link.label} to={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="site-footer-bottom">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}
          </p>
          <p>{COMPANY.city}</p>
        </div>

        <div className="site-footer-wordmark" aria-hidden="true">
          <img src="/logo.png" alt="" width={233} height={296} />
          <span>XVS</span>
        </div>
      </div>
    </footer>
  );
}
