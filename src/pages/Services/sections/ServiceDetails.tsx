import { Link } from "react-router-dom";
import { LoopVideo } from "../../../components/shared/ui";
import { ArrowIcon, Icon } from "../../../components/shared/icons";
import { DEMO_LINK } from "../../../components/navigation";
import type { Service } from "../content";

/**
 * A service broken into four parts:
 *   Without XVS → How it works → What you get → A day at Bright Star
 * Used inside each row on /services, and on the service's own page (/services/<id>).
 */
export default function ServiceDetails({ service }: { service: Service }) {
  return (
    <>
      <div className="service-panel-grid">
        <div className="service-block service-problem">
          <p className="service-block-label">Without XVS</p>
          <p>{service.problem}</p>
          <p className="service-for">
            <span>Who it's for</span>
            {service.forWho}
          </p>
        </div>

        <div className="service-block">
          <p className="service-block-label">How it works</p>
          <ol className="service-steps">
            {service.steps.map((step, i) => (
              <li key={step}>
                <span>{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <div className="service-block">
          <p className="service-block-label">What you get</p>
          <ul className="service-benefits">
            {service.benefits.map((benefit) => (
              <li key={benefit}>
                <Icon name="check" size={16} />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`service-story ${service.image || service.video ? "" : "no-image"}`}>
        <div className="service-story-copy">
          <p className="service-block-label">A day at Bright Star</p>
          <blockquote>{service.story}</blockquote>
          <Link to={DEMO_LINK.href} className="text-link">
            {DEMO_LINK.label}
            <ArrowIcon />
          </Link>
        </div>
        {/* A closed panel's clip stays unloaded; it starts once the panel opens into view. */}
        {service.video ? (
          <LoopVideo
            className="service-story-image"
            src={service.video.src}
            poster={service.video.poster}
            label={`XVS screen recording for ${service.name}`}
          />
        ) : service.image && (
          <img
            className="service-story-image"
            src={service.image}
            alt={`XVS screen for ${service.name}`}
            width={1600}
            height={1000}
            loading="lazy"
          />
        )}
      </div>
    </>
  );
}
