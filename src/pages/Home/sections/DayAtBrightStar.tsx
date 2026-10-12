import { useRef } from "react";
import { Accent, Reveal } from "../../../components/shared/ui";
import { ArrowIcon } from "../../../components/shared/icons";
import { DAY } from "../content";

/**
 * A school day at Bright Star as a sliding row of moments.
 * Each moment shows its time (small mono label), a title and a line of text.
 * The arrow buttons slide the row by one card; it can also be swiped or scrolled.
 */
export default function DayAtBrightStar() {
  const rowRef = useRef<HTMLOListElement>(null);

  const slide = (direction: 1 | -1) => {
    const row = rowRef.current;
    const card = row?.firstElementChild as HTMLElement | null;
    if (!row || !card) return;
    const gap = parseFloat(getComputedStyle(row).columnGap) || 0;
    row.scrollBy({ left: direction * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <section className="day">
      <div className="container">
        <div className="day-head">
          <Reveal className="home-heading">
            <p className="eyebrow">{DAY.eyebrow}</p>
            <h2>
              <Accent text={DAY.title} />
            </h2>
            <p>{DAY.intro}</p>
          </Reveal>

          <div className="day-controls">
            <button type="button" className="day-arrow is-back" aria-label="Previous moment" onClick={() => slide(-1)}>
              <ArrowIcon />
            </button>
            <button type="button" className="day-arrow" aria-label="Next moment" onClick={() => slide(1)}>
              <ArrowIcon />
            </button>
          </div>
        </div>

        <ol ref={rowRef} className="day-row" aria-label="A school day, hour by hour">
          {DAY.moments.map((moment) => (
            <li key={moment.time} className="day-moment">
              <span className="number-label">{moment.time}</span>
              <h3>{moment.title}</h3>
              <p>{moment.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
