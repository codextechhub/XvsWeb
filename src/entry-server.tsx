// oxlint-disable react/only-export-components -- a build-time entry, never hot-reloaded
import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";

/**
 * Renders one page to HTML at build time (see scripts/prerender.mjs), so search
 * engines and link previews see the real page instead of an empty shell.
 * The browser then takes the page over as usual (see main.tsx).
 */
export function render(url: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
}

// The words the pre-render script needs for each page's head and Google's structured data.
export { PAGE_META, SHARE_IMAGE } from "./pageTitles";
export { COMPANY, SOCIAL_LINKS } from "./components/navigation";
export { FAQ } from "./pages/Home/content";
export { SERVICE_GROUPS } from "./pages/Services/content";
export { ALL_SERVICES, serviceMeta } from "./pages/Services/search";
