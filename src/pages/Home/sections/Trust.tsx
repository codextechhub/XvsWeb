import { Reveal } from "../../../components/shared/ui";
import { Icon } from "../../../components/shared/icons";
import { TRUST } from "../content";

/**
 * One large card: the security heading on the left (white line, then grey line),
 * and the four points in a grid on the right, each with an icon tile.
 */
export default function Trust() {
  return (
    <section className="trust">
      <div className="container">
        <Reveal className="trust-card">
          <div className="trust-head">
            <p className="eyebrow">{TRUST.eyebrow}</p>
            <h2>
              {TRUST.title}
              <span>{TRUST.titleMuted}</span>
            </h2>
            <p>{TRUST.intro}</p>
          </div>

          <div className="trust-points">
            {TRUST.points.map((point) => (
              <div key={point.title} className="trust-point">
                <span className="trust-icon">
                  <Icon name={point.icon} />
                </span>
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
