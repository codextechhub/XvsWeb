import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Reveal } from "../../../components/shared/ui";
import { ArrowIcon, Icon } from "../../../components/shared/icons";
import type { Service } from "../content";
import ServiceDetails from "./ServiceDetails";

/**
 * One service. Closed, it shows the name and its one-line promise.
 * Open, it shows the service's details (./ServiceDetails.tsx) and a link
 * to the service's own page, /services/<id>.
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
          <ServiceDetails service={service} />
          <Link to={`/services/${service.id}`} className="service-page-link">
            More about {service.name}
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
