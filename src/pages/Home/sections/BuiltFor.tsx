import { BUILT_FOR } from "../content";

/** A boxed label on the left, and the people XVS is built for scrolling past beside it. */
export default function BuiltFor() {
  return (
    <section className="built-for" aria-label={BUILT_FOR.title}>
      <div className="container built-for-inner">
        <p className="built-for-label">{BUILT_FOR.label}</p>
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
      </div>
    </section>
  );
}
