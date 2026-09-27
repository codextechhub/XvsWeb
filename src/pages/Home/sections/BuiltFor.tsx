import { BUILT_FOR } from "../content";

/** A slow, endless band of the people XVS is built for. */
export default function BuiltFor() {
  return (
    <section className="built-for" aria-label={BUILT_FOR.title}>
      <p className="built-for-title">{BUILT_FOR.title}</p>
      <div className="marquee">
        {/* The list is rendered twice so the loop is seamless */}
        <div className="marquee-track">
          {[...BUILT_FOR.people, ...BUILT_FOR.people].map((who, i) => (
            <span key={i} className="marquee-item" aria-hidden={i >= BUILT_FOR.people.length}>
              {who}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
