import "./backdrop.css";

/**
 * ─────────────────────────────────────────────────────────────
 *  SITE BACKDROP: the moving design behind every page
 *
 *  It sits fixed behind all the content, so it stays in place while
 *  the page scrolls over it. It has four layers, back to front:
 *
 *    1. backdrop-aurora  three soft colour clouds (XVS blue, light blue,
 *                        cream) drifting slowly around the screen
 *    2. backdrop-dots    a faint dot pattern, only near the edges of the
 *                        screen so the middle stays clean for reading
 *    3. backdrop-orbits  two thin rings, each with a small dot that travels
 *                        around it, like the orbit dots on the XVS shield
 *    4. backdrop-sparks  a few tiny dots that float up and fade out
 *
 *  ✏️ TO REMOVE ONE LAYER: delete its line below.
 *  ✏️ TO REMOVE THE WHOLE BACKDROP: delete <SiteBackdrop /> (and its import)
 *     in src/components/PageLayout.tsx and src/pages/Contact/ContactPage.tsx,
 *     then delete this file and backdrop.css.
 *  ✏️ TO CHANGE COLOURS, SPEED OR STRENGTH: see the top of backdrop.css.
 *
 *  Visitors who turn on "reduce motion" see it standing still.
 * ─────────────────────────────────────────────────────────────
 */
export default function SiteBackdrop() {
  return (
    <div className="site-backdrop" aria-hidden="true">
      <div className="backdrop-aurora">
        <i />
        <i />
        <i />
      </div>
      <div className="backdrop-dots" />
      <div className="backdrop-orbits">
        <i />
        <i />
      </div>
      <div className="backdrop-sparks">
        {Array.from({ length: 10 }, (_, i) => (
          <i key={i} />
        ))}
      </div>
    </div>
  );
}
