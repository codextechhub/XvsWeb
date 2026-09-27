import { Accent, Reveal } from "../../../components/shared/ui";
import { DAY } from "../content";

/**
 * Night-time section: a big quote, then a school day as a timeline.
 * data-bg="dark" turns the page background to night while it's on screen.
 */
export default function DayAtBrightStar() {
  return (
    <section className="day section section-dark" data-bg="dark">
      <div className="container">
        <Reveal className="day-head">
          <p className="eyebrow">{DAY.eyebrow}</p>
          <h2>
            <Accent text={DAY.title} />
          </h2>
          <p className="lead">{DAY.intro}</p>
        </Reveal>

        <Reveal className="day-quote" delay={100}>
          <blockquote>“{DAY.quote}”</blockquote>
          <p>{DAY.quoteBy}</p>
        </Reveal>

        <ol className="day-timeline">
          {DAY.moments.map((moment, i) => (
            <Reveal as="li" key={moment.time} className="day-moment" delay={i * 90}>
              <span className="day-time">{moment.time}</span>
              <span className="day-dot" aria-hidden="true" />
              <h3>{moment.title}</h3>
              <p>{moment.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
