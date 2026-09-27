import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import { ArrowIcon } from "../../components/shared/icons";
import { usePageMeta } from "../../pageTitles";
import "./notFound.css";

/** Shown for any address that doesn't match a page. */
const SUGGESTIONS = [
  { href: "/services", title: "Services", body: "Everything XVS does, in 6 groups" },
  { href: "/about", title: "About", body: "Why we built XVS" },
  { href: "/contact", title: "Book a demo", body: "See XVS running your school" },
];

export default function NotFoundPage() {
  usePageMeta("notFound");

  return (
    <PageLayout className="not-found">
      <section className="container not-found-inner">
        <p className="eyebrow">404 · Record not found</p>
        <h1>
          This page is not <span className="serif">in the register.</span>
        </h1>
        <p className="lead">The link may be out of date, or the page may have moved. Nothing has been lost. Try one of these instead.</p>
        <Link to="/" className="btn btn-primary">
          Back to home
          <ArrowIcon />
        </Link>

        <div className="not-found-links">
          {SUGGESTIONS.map((item) => (
            <Link key={item.href} to={item.href} className="not-found-link">
              <strong>{item.title}</strong>
              <span>{item.body}</span>
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
