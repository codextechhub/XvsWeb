import { Link } from "react-router-dom";
import { Reveal, SectionHeading } from "../../../components/shared/ui";
import { ArrowIcon, Icon } from "../../../components/shared/icons";
import { SERVICE_GROUPS } from "../../Services/content";
import { SERVICES_PREVIEW } from "../content";

/**
 * The six service groups as cards. The groups and their services
 * come from the Services page content, so they're only written once.
 */
export default function ServicesPreview() {
  return (
    <section className="services-preview section">
      <div className="container">
        <SectionHeading eyebrow={SERVICES_PREVIEW.eyebrow} title={SERVICES_PREVIEW.title} intro={SERVICES_PREVIEW.intro} />

        <div className="preview-grid">
          {SERVICE_GROUPS.map((group, i) => (
            <Reveal key={group.id} delay={(i % 3) * 90}>
              <Link to={`/services#${group.id}`} className="preview-card">
                <span className="preview-card-top">
                  <span className="preview-card-icon">
                    <Icon name={group.icon} size={24} />
                  </span>
                  <span className="preview-card-number">{group.number}</span>
                </span>
                <h3>{group.name}</h3>
                <p>{group.summary}</p>
                <ul>
                  {group.services.map((service) => (
                    <li key={service.id}>{service.name}</li>
                  ))}
                </ul>
                <span className="preview-card-more">
                  {group.services.length} services
                  <ArrowIcon />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="preview-cta">
          <Link to={SERVICES_PREVIEW.cta.href} className="btn btn-ghost">
            {SERVICES_PREVIEW.cta.label}
            <ArrowIcon />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
