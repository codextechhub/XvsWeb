import { BrowserFrame, Reveal } from "../../../components/shared/ui";
import { Icon } from "../../../components/shared/icons";
import type { ServiceGroup } from "../content";
import ServiceRow from "./ServiceRow";

/** One service group: its heading and screenshot, then its services. */
export default function GroupSection({ group }: { group: ServiceGroup }) {
  return (
    <section id={group.id} className="group-section">
      <div className="container group-content">
        <div className="group-head">
          <Reveal className="group-head-copy">
            <p className="eyebrow">
              <Icon name={group.icon} size={18} />
              {group.number} · {group.services.length} services
            </p>
            <h2>{group.name}</h2>
            <p className="lead">{group.summary}</p>
            <ul className="group-head-list">
              {group.services.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`}>{service.name}</a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="group-head-visual" delay={120}>
            <BrowserFrame src={group.image} alt={group.imageAlt} />
          </Reveal>
        </div>

        <div className="service-list">
          {group.services.map((service, i) => (
            <ServiceRow key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
