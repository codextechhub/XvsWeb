import { Link } from "react-router-dom";
import { Accent, BrowserFrame, Reveal } from "../../../components/shared/ui";
import { ArrowIcon, Icon } from "../../../components/shared/icons";
import { FEATURES } from "../content";

/**
 * The three numbered features (01 records, 02 money, 03 control).
 * Text and screenshot swap sides on every other row.
 */
export default function Features() {
  return (
    <section className="features section">
      <div className="container">
        {FEATURES.map((feature, i) => (
          <article key={feature.number} className={`feature ${i % 2 === 1 ? "is-flipped" : ""}`}>
            <Reveal className="feature-copy">
              <p className="eyebrow">
                <span className="feature-number">{feature.number}</span>
                {feature.label}
              </p>
              <h2>
                <Accent text={feature.title} />
              </h2>
              <p className="lead">{feature.body}</p>
              <ul className="feature-points">
                {feature.points.map((point) => (
                  <li key={point}>
                    <Icon name="check" size={16} />
                    {point}
                  </li>
                ))}
              </ul>
              <Link to={feature.link.href} className="text-link">
                {feature.link.label}
                <ArrowIcon />
              </Link>
            </Reveal>

            <Reveal className="feature-visual" delay={150}>
              <BrowserFrame src={feature.image} alt={feature.imageAlt} />
              <div className="float-card feature-card" aria-hidden="true">
                <span className="float-card-label">{feature.card.label}</span>
                <strong>{feature.card.title}</strong>
                <span>{feature.card.detail}</span>
                <span className={`pill pill-${feature.card.tone}`}>{feature.card.pill}</span>
              </div>
            </Reveal>
          </article>
        ))}
      </div>
    </section>
  );
}
