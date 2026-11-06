import PageLayout from "../../components/PageLayout";
import { COMPANY } from "../../components/navigation";
import { usePageMeta } from "../../pageTitles";

const PRIVACY_EMAIL = "privacy@codexng.com";

/**
 * How to delete an XVS account, at /account/delete.
 *
 * Google Play and the App Store ask for a web address where someone can delete
 * their account without the app, and this is the one the store listings and
 * the privacy policy name. An account belongs to a school, so the form itself
 * lives on each school's own address (school-fe's /account/delete, which
 * emails a link to confirm); this page explains the ways in.
 */
export default function AccountDeletePage() {
  usePageMeta("accountDelete");

  return (
    <PageLayout className="legal">
      <section className="container" style={{ maxWidth: 760, padding: "clamp(64px, 9vw, 120px) var(--gutter)" }}>
        <p className="eyebrow">{COMPANY.name}</p>
        <h1 style={{ margin: "16px 0 20px", fontSize: "clamp(40px, 5vw, 60px)" }}>Delete your XVS account</h1>
        <p className="lead" style={{ marginBottom: 28 }}>
          Parents and pupils can delete their XVS account in any of these ways.
        </p>
        <ol style={{ paddingLeft: 22, display: "grid", gap: 16, marginBottom: 32 }}>
          <li>
            <strong>In the app.</strong> In XVS Parent or XVS Student, open <strong>Profile</strong>, then{" "}
            <strong>Delete my account</strong>.
          </li>
          <li>
            <strong>On the web.</strong> Open your school's own XVS address followed by{" "}
            <code>/account/delete</code>, for example <code>your-school.xvs.codexng.com/account/delete</code>. Enter
            the email or ID you sign in with, and we will email you a link to confirm.
          </li>
          <li>
            <strong>By email.</strong> Write to <a href={`mailto:${PRIVACY_EMAIL}`}>{PRIVACY_EMAIL}</a> from the
            address on your account, and name your school.
          </li>
        </ol>
        <h2 style={{ fontSize: 22, margin: "0 0 12px" }}>What happens</h2>
        <p style={{ marginBottom: 12 }}>
          A parent's account closes at once. A pupil's request goes to their school, which closes it. Staff accounts
          are closed by the school.
        </p>
        <p>
          Closing an account stops the sign-in. The school keeps the records the law requires, such as results and fee
          records, and they are erased 6 years after the person leaves the school.
        </p>
      </section>
    </PageLayout>
  );
}
