import { Link } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import { COMPANY } from "../../components/navigation";
import { usePageMeta } from "../../pageTitles";
import PrivacyPolicy from "./PrivacyPolicy";

/**
 * Privacy policy and Terms of use.
 * The privacy policy's text lives in PrivacyPolicy. The terms of use have not
 * been published yet; until they are, that page shows a placeholder paragraph.
 */
const DOCUMENTS = {
  privacy: { title: "Privacy policy" },
  terms: { title: "Terms of use" },
};

export default function LegalPage({ kind }: { kind: keyof typeof DOCUMENTS }) {
  usePageMeta(kind);
  const { title } = DOCUMENTS[kind];

  return (
    <PageLayout className="legal">
      <section className="container" style={{ maxWidth: 760, padding: "clamp(64px, 9vw, 120px) var(--gutter)" }}>
        <p className="eyebrow">{COMPANY.name}</p>
        <h1 style={{ margin: "16px 0 20px", fontSize: "clamp(40px, 5vw, 60px)" }}>{title}</h1>
        {kind === "privacy" ? (
          <>
            <p className="lead" style={{ marginBottom: 28 }}>
              Version 1, effective 12 November 2026.
            </p>
            <PrivacyPolicy />
          </>
        ) : (
          <>
            <p className="lead" style={{ marginBottom: 28 }}>
              This document has not been published on this website yet. Contact us for the current{" "}
              {title.toLowerCase()}.
            </p>
            <Link to="/contact" className="text-link">
              Contact CodeX →
            </Link>
          </>
        )}
      </section>
    </PageLayout>
  );
}
