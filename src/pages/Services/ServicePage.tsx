import type { CSSProperties } from "react";
import { Link, useParams } from "react-router-dom";
import PageLayout from "../../components/PageLayout";
import BookDemoBanner from "../../components/BookDemoBanner";
import { DEMO_LINK } from "../../components/navigation";
import { ArrowIcon, Icon } from "../../components/shared/icons";
import { useMeta } from "../../pageTitles";
import NotFoundPage from "../NotFound/NotFoundPage";
import ServiceDetails from "./sections/ServiceDetails";
import { DEMO_SCHOOL, SERVICE_GROUPS } from "./content";
import { ALL_SERVICES, serviceMeta } from "./search";
import "./services.css";

/**
 * One service on its own page (/services/<id>), so each can be found in
 * search under the words schools use for it (see ./search.ts):
 *
 *   Hero      the search name as the heading, the promise, other names for it
 *   Details   the same four parts as on /services (./sections/ServiceDetails.tsx)
 *   More      the other services in the same group, then every group
 *
 * Words come from ./content.ts and ./search.ts.
 */
export default function ServicePage() {
  const { id } = useParams();
  const found = ALL_SERVICES.find((entry) => entry.service.id === id);
  const meta = found ? serviceMeta(found.service) : { title: "", description: "", path: null };
  useMeta(meta);
  if (!found) return <NotFoundPage />;

  const { service, group } = found;
  const { heading, also } = serviceMeta(service);
  const siblings = group.services.filter((other) => other.id !== service.id);

  return (
    <PageLayout className="services service-page">
      <section className="services-hero service-page-hero">
        <div className="services-hero-glow" aria-hidden="true" />
        <div className="container">
          <nav className="service-page-crumbs load-in" aria-label="Breadcrumb">
            <Link to="/services">Services</Link>
            <span aria-hidden="true">/</span>
            <Link to={`/services#${group.id}`}>{group.name}</Link>
          </nav>
          <p className="eyebrow load-in" style={{ "--delay": "60ms" } as CSSProperties}>
            <Icon name={group.icon} size={16} /> XVS · {service.name}
          </p>
          <h1 className="load-in" style={{ "--delay": "120ms" } as CSSProperties}>
            {heading}
          </h1>
          <p className="lead load-in" style={{ "--delay": "200ms" } as CSSProperties}>
            {service.promise}
          </p>
          {also.length > 0 && (
            <p className="service-page-also load-in" style={{ "--delay": "260ms" } as CSSProperties}>
              <span>Also known as</span>
              {also.map((name) => (
                <em key={name}>{name}</em>
              ))}
            </p>
          )}
          <div className="service-page-actions load-in" style={{ "--delay": "320ms" } as CSSProperties}>
            <Link to={DEMO_LINK.href} className="btn btn-primary">
              {DEMO_LINK.label}
              <ArrowIcon />
            </Link>
            <Link to="/services" className="btn btn-ghost">
              All 24 services
            </Link>
          </div>
        </div>
      </section>

      <section className="container service-page-body">
        <ServiceDetails service={service} />
        <p className="service-page-note">
          The example above is set at {DEMO_SCHOOL.name}. {DEMO_SCHOOL.about}
        </p>
      </section>

      <section className="container service-page-more" aria-labelledby="more-heading">
        <h2 id="more-heading">More in {group.name}</h2>
        {siblings.length > 0 && (
          <div className="service-page-siblings">
            {siblings.map((other) => (
              <Link key={other.id} to={`/services/${other.id}`} className="service-page-sibling">
                <strong>{other.name}</strong>
                <span>{other.promise}</span>
                <ArrowIcon />
              </Link>
            ))}
          </div>
        )}
        <p className="service-page-groups">
          <span>Every area of XVS:</span>
          {SERVICE_GROUPS.map((other) => (
            <Link key={other.id} to={`/services#${other.id}`} aria-current={other.id === group.id ? "true" : undefined}>
              {other.name}
            </Link>
          ))}
        </p>
      </section>

      <BookDemoBanner title={`See ${service.name} *at your school*`} />
    </PageLayout>
  );
}
