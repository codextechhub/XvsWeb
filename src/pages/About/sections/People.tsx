import { Reveal, SectionHeading } from "../../../components/shared/ui";
import { PEOPLE } from "../content";

/** Three cards: leading, organising, teaching. */
export default function People() {
  return (
    <section className="people section">
      <div className="container">
        <SectionHeading eyebrow={PEOPLE.eyebrow} title={PEOPLE.title} intro={PEOPLE.intro} />
        <div className="people-grid">
          {PEOPLE.cards.map((card, i) => (
            <Reveal as="article" key={card.number} className="person" delay={i * 100}>
              <div className="person-top">
                <span>{card.number}</span>
                <span>{card.label}</span>
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <p className="person-role">{card.role}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
