import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import SiteBackground from "../../components/SiteBackground";
import { COMPANY } from "../../components/navigation";
import { Icon } from "../../components/shared/icons";
import { usePageMeta } from "../../pageTitles";
import ContactForm from "./ContactForm";
import { FORM_INTRO, PANEL } from "./content";
import "./contact.css";

/**
 * Contact / Book a demo. A focused, two-sided page with no site menu:
 *   left  – the form, in a card
 *   right – a navy panel: what a demo covers + how to reach us
 *
 * Words live in ./content.ts, the form itself in ./ContactForm.tsx.
 */
export default function ContactPage() {
  usePageMeta("contact");

  return (
    <div className="contact-page">
      {/* No PageLayout on this page, so it adds the background itself */}
      <SiteBackground />
      <main id="main-content" className="contact-main">
        <div className="contact-card">
          <div className="contact-card-top">
            <Link to="/" aria-label="XVS home">
              <Logo />
            </Link>
            <Link to="/" className="contact-back">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
              {FORM_INTRO.backLabel}
            </Link>
          </div>

          <div className="contact-card-body">
            <h1 className="load-in">{FORM_INTRO.title}</h1>
            <p className="contact-intro load-in" style={{ "--delay": "80ms" } as CSSProperties}>
              {FORM_INTRO.body}
            </p>
            <ContactForm />
          </div>

          <p className="contact-legal">
            <Link to="/terms">Terms of use</Link>
            <Link to="/privacy">Privacy policy</Link>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </p>
        </div>
      </main>

      <aside className="contact-panel" aria-label="About the demo">
        <div className="contact-panel-glow" aria-hidden="true" />
        <div className="contact-panel-inner">
          <p className="eyebrow">{PANEL.eyebrow}</p>
          <blockquote className="contact-quote">
            <span aria-hidden="true">“</span>
            {PANEL.quote}
          </blockquote>

          <ol className="contact-steps">
            {PANEL.steps.map((step, i) => (
              <li key={step.title}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <dl className="contact-details">
            <div>
              <dt>
                <Icon name="mail" size={18} /> Email
              </dt>
              <dd>
                <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </dd>
            </div>
            <div>
              <dt>
                <Icon name="clock" size={18} /> Response time
              </dt>
              <dd>{COMPANY.responseTime}</dd>
            </div>
            <div>
              <dt>
                <Icon name="pin" size={18} /> Where we are
              </dt>
              <dd>{COMPANY.city}</dd>
            </div>
          </dl>
        </div>

        {/* A glimpse of XVS peeking in from the bottom */}
        <img className="contact-panel-shot" src={PANEL.image} alt="" width={1600} height={1000} />
      </aside>
    </div>
  );
}
