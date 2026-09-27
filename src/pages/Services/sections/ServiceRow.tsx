import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Reveal } from "../../../components/shared/ui";
import { ArrowIcon, Icon } from "../../../components/shared/icons";
import { DEMO_LINK } from "../../../components/navigation";
import type { Service } from "../content";

/**
 * One service. Closed, it shows the name and its one-line promise.
 * Open, it breaks the service down into four easy parts:
 *   Without XVS → How it works → What you get → A day at Bright Star
 *
 * A link like /services#billing-invoicing opens that service directly.
 */
export default function ServiceRow({ service, index }: { service: Service; index: number }) {
  const { hash } = useLocation();
  const [open, setOpen] = useState(hash === `#${service.id}`);

  // Open when someone follows a link to this service while already on the page
  const [lastHash, setLastHash] = useState(hash);
  if (hash !== lastHash) {
    setLastHash(hash);
    if (hash === `#${service.id}`) setOpen(true);
  }

  const panelId = `${service.id}-details`;

  return (
    <Reveal as="article" className={`service-row ${open ? "is-open" : ""}`} delay={index * 60}>
      <span id={service.id} className="service-anchor" />
      <button
        type="button"
        className="service-row-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span className="service-row-index">{String(index + 1).padStart(2, "0")}</span>
        <span className="service-row-title">
          <h3>{service.name}</h3>
          <span className="service-row-promise">{service.promise}</span>
        </span>
        <span className="service-row-icon" aria-hidden="true">
          <Icon name="plus" size={20} />
        </span>
      </button>

      {/* Animates open with the CSS grid-rows trick (see .service-panel in services.css).
          `inert` keeps the closed panel out of keyboard and screen-reader reach. */}
      <div id={panelId} className="service-panel" role="region" aria-label={service.name} inert={!open}>
        <div className="service-panel-inner">
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

          <div className={`service-story ${service.image ? "" : "no-image"}`}>
            <div className="service-story-copy">
              <p className="service-block-label">A day at Bright Star</p>
              <blockquote>{service.story}</blockquote>
              <Link to={DEMO_LINK.href} className="text-link">
                {DEMO_LINK.label}
                <ArrowIcon />
              </Link>
            </div>
            {service.image && (
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
        </div>
      </div>
    </Reveal>
  );
}
