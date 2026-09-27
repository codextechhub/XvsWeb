import { Accent, Reveal } from "../../../components/shared/ui";
import { BELIEF, STORY } from "../content";

/**
 * The "our belief" band (a night section: data-bg="dark" turns the
 * site background to a starry sky behind it), then why XVS exists.
 */
export default function Story() {
  return (
    <>
      <section className="belief section-dark" data-bg="dark">
        <div className="container">
          <Reveal>
            <p className="eyebrow">{BELIEF.label}</p>
            <p className="belief-text">{BELIEF.text}</p>
          </Reveal>
        </div>
      </section>

      <section id="why-xvs" className="story section">
        <div className="container story-inner">
          <Reveal className="story-head">
            <p className="eyebrow">{STORY.eyebrow}</p>
            <h2>
              <Accent text={STORY.title} />
            </h2>
          </Reveal>
          <Reveal className="story-copy" delay={120}>
            {STORY.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>
      </section>
    </>
  );
}
