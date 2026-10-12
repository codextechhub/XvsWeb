import { Link } from "react-router-dom";
import { Accent, BrowserFrame, Reveal } from "../../../components/shared/ui";
import { ArrowIcon } from "../../../components/shared/icons";
import { FEATURES } from "../content";

/**
 * The three numbered features (01 records, 02 money, 03 control),
 * one full-width row each, split by a thin line:
 *   left   number, title, body, then the points (first one as a heading)
 *   right  a screenshot that runs off the right edge and fades out at the bottom
 */
export default function Features() {
  return (
    <section className="features">
      {FEATURES.map((feature) => {
        const [firstPoint, ...otherPoints] = feature.points;
        return (
          <article key={feature.number} id={`feature-${feature.number}`} className="feature">
            <div className="container feature-inner">
              <Reveal className="feature-copy">
                <p className="number-label">{feature.number}</p>
                <h2>
                  <Accent text={feature.title} />
                </h2>
                <p className="feature-body">{feature.body}</p>

                <div className="feature-points">
                  <p className="feature-points-head">{firstPoint}</p>
                  <ul>
                    {otherPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Link to={feature.link.href} className="feature-link">
                    {feature.link.label}
                    <ArrowIcon />
                  </Link>
                </div>
              </Reveal>

              <Reveal className="feature-visual" delay={150}>
                <BrowserFrame src={feature.image} alt={feature.imageAlt} />
              </Reveal>
            </div>
          </article>
        );
      })}
    </section>
  );
}
