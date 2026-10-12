import { Link } from "react-router-dom";
import { Accent, Reveal } from "../../../components/shared/ui";
import { ArrowIcon } from "../../../components/shared/icons";
import { SERVICE_GROUPS } from "../../Services/content";
import { SERVICES_PREVIEW } from "../content";

/**
 * The six service groups in three columns, each under a thin line,
 * with "See every service" at the end. The groups come from the
 * Services page content, so they're only written once.
 */
export default function ServicesPreview() {
  return (
    <section className="services-preview">
      <div className="container">
        <Reveal className="home-heading">
          <p className="eyebrow">{SERVICES_PREVIEW.eyebrow}</p>
          <h2>
            <Accent text={SERVICES_PREVIEW.title} />
          </h2>
          <p>{SERVICES_PREVIEW.intro}</p>
        </Reveal>

        <div className="preview-grid">
          {SERVICE_GROUPS.map((group, i) => (
            <Reveal key={group.id} delay={(i % 3) * 90}>
              <Link to={`/services#${group.id}`} className="preview-card">
                <span className="number-label">
                  {group.number} · {group.services.length} services
                </span>
                <h3>{group.name}</h3>
                <p>{group.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>

        <Link to={SERVICES_PREVIEW.cta.href} className="more-link">
          {SERVICES_PREVIEW.cta.label}
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
