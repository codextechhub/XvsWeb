import { BrowserFrame, Reveal, SectionHeading } from "../../../components/shared/ui";
import { Icon } from "../../../components/shared/icons";
import { TRUST } from "../content";

/** Access, approvals and audit: the audit trail screenshot with four points beside it. */
export default function Trust() {
  return (
    <section className="trust section">
      <div className="container">
        <SectionHeading eyebrow={TRUST.eyebrow} title={TRUST.title} intro={TRUST.intro} />

        <div className="trust-layout">
          <Reveal className="trust-visual">
            <BrowserFrame src={TRUST.image} alt={TRUST.imageAlt} />
          </Reveal>

          <div className="trust-points">
            {TRUST.points.map((point, i) => (
              <Reveal key={point.title} className="trust-point" delay={i * 90}>
                <span className="trust-icon">
                  <Icon name={point.icon} />
                </span>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
