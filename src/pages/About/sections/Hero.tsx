import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { Accent } from "../../../components/shared/ui";
import { ArrowIcon } from "../../../components/shared/icons";
import { HERO, RECORD_NODES } from "../content";

/** Intro copy on the left, the "one shared record" diagram on the right. */
export default function Hero() {
  return (
    <section className="about-hero">
      <div className="container about-hero-inner">
        <div className="about-hero-copy">
          <p className="eyebrow load-in">{HERO.eyebrow}</p>
          <h1 className="load-in" style={{ "--delay": "100ms" } as CSSProperties}>
            <Accent text={HERO.title} />
          </h1>
          <p className="about-hero-intro load-in" style={{ "--delay": "200ms" } as CSSProperties}>
            {HERO.intro}
          </p>
          <p className="lead load-in" style={{ "--delay": "280ms" } as CSSProperties}>
            {HERO.body}
          </p>
          <div className="about-hero-actions load-in" style={{ "--delay": "360ms" } as CSSProperties}>
            <Link to={HERO.primaryCta.href} className="btn btn-primary">
              {HERO.primaryCta.label}
              <ArrowIcon />
            </Link>
            <a href={HERO.secondaryCta.href} className="text-link">
              {HERO.secondaryCta.label} ↓
            </a>
          </div>
        </div>

        <div
          className="record load-in"
          style={{ "--delay": "300ms" } as CSSProperties}
          aria-label="XVS connects school records, from people and attendance to fees and reporting"
        >
          <span className="record-orbit record-orbit-1" aria-hidden="true" />
          <span className="record-orbit record-orbit-2" aria-hidden="true" />
          <div className="record-core">
            <img src="/logo.png" alt="" width={233} height={296} />
            <span>Your school.</span>
            <strong>One shared record.</strong>
          </div>
          {RECORD_NODES.map((node, i) => (
            <div key={node.title} className={`record-node record-node-${i + 1}`}>
              <span className="record-node-number">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <strong>{node.title}</strong>
                <span>{node.body}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
