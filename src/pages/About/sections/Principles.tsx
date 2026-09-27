import { Link } from "react-router-dom";
import { Accent, Reveal } from "../../../components/shared/ui";
import { ArrowIcon } from "../../../components/shared/icons";
import { PRINCIPLES } from "../content";

/** Intro on the left (sticky on wide screens), four numbered principles on the right. */
export default function Principles() {
  return (
    <section className="principles section">
      <div className="container principles-inner">
        <Reveal className="principles-intro">
          <p className="eyebrow">{PRINCIPLES.eyebrow}</p>
          <h2>
            <Accent text={PRINCIPLES.title} />
          </h2>
          <p className="lead">{PRINCIPLES.intro}</p>
          <Link to={PRINCIPLES.link.href} className="text-link">
            {PRINCIPLES.link.label}
            <ArrowIcon />
          </Link>
        </Reveal>

        <div className="principles-list">
          {PRINCIPLES.items.map((item, i) => (
            <Reveal as="article" key={item.title} className="principle" delay={i * 80}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
