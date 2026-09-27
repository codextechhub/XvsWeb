import type { CSSProperties } from "react";
import { Accent } from "../../../components/shared/ui";
import { Icon } from "../../../components/shared/icons";
import { DEMO_SCHOOL, SERVICE_GROUPS, SERVICES_HERO } from "../content";

/** Page intro, followed by the six groups as jump links. */
export default function Hero() {
  return (
    <section className="services-hero">
      <div className="services-hero-glow" aria-hidden="true" />
      <div className="container">
        <p className="eyebrow load-in">{SERVICES_HERO.eyebrow}</p>
        <h1 className="load-in" style={{ "--delay": "100ms" } as CSSProperties}>
          <Accent text={SERVICES_HERO.title} />
        </h1>
        <p className="lead load-in" style={{ "--delay": "200ms" } as CSSProperties}>
          {SERVICES_HERO.body}
        </p>

        <div className="group-cards">
          {SERVICE_GROUPS.map((group, i) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="group-card load-in"
              style={{ "--delay": `${300 + i * 70}ms` } as CSSProperties}
            >
              <span className="group-card-top">
                <span className="group-card-icon">
                  <Icon name={group.icon} />
                </span>
                <span className="group-card-number">{group.number}</span>
              </span>
              <strong>{group.name}</strong>
              <span className="group-card-summary">{group.summary}</span>
              <span className="group-card-count">
                {group.services.length} {group.services.length === 1 ? "service" : "services"}
              </span>
            </a>
          ))}
        </div>

        <p className="services-demo-note load-in" style={{ "--delay": "800ms" } as CSSProperties}>
          <Icon name="school" size={18} />
          <span>
            Every example on this page uses <strong>{DEMO_SCHOOL.name}</strong>. {DEMO_SCHOOL.about}
          </span>
        </p>
      </div>
    </section>
  );
}
