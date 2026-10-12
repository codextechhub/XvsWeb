import { Link } from "react-router-dom";
import { Accent, Reveal } from "../../../components/shared/ui";
import { ArrowIcon } from "../../../components/shared/icons";
import { HERO } from "../content";

/**
 * The closing band: the hero headline again, centred over a soft XVS glow,
 * with the same two buttons. Text comes from HERO in ../content.ts.
 */
export default function ClosingCta() {
  return (
    <section className="closing">
      <div className="closing-glow" aria-hidden="true" />
      <Reveal className="container closing-inner">
        <h2>
          {HERO.titleLines.map((line) => (
            <span key={line}>
              <Accent text={line} />
            </span>
          ))}
        </h2>
        <div className="hero-actions">
          <Link to={HERO.primaryCta.href} className="btn btn-small btn-primary">
            {HERO.primaryCta.label}
            <ArrowIcon />
          </Link>
          <Link to={HERO.secondaryCta.href} className="btn btn-small btn-ghost">
            {HERO.secondaryCta.label}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
