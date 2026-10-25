import { Link } from "react-router-dom";
import { Accent, Reveal } from "../../../components/shared/ui";
import { ArrowIcon } from "../../../components/shared/icons";
import { DEMO_LINK } from "../../../components/navigation";
import { FAQ } from "../content";

/**
 * Common questions as an accordion. Built from <details>, so every answer is
 * in the page for search engines and opens without any script.
 */
export default function Faq() {
  return (
    <section className="faq" id="questions">
      <div className="container faq-inner">
        <Reveal className="home-heading faq-heading">
          <p className="eyebrow">{FAQ.eyebrow}</p>
          <h2>
            <Accent text={FAQ.title} />
          </h2>
          <p>{FAQ.intro}</p>
          <Link to={DEMO_LINK.href} className="more-link">
            {DEMO_LINK.label}
            <ArrowIcon />
          </Link>
        </Reveal>

        <div className="faq-list">
          {FAQ.items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 4) * 60}>
              <details className="faq-item" open={i === 0}>
                <summary>
                  <span>{item.q}</span>
                  <span className="faq-mark" aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
