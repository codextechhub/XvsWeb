/**
 * Visitor analytics, switched on from the .env file (see .env.example).
 * Use ONE of:
 *   VITE_PLAUSIBLE_DOMAIN   e.g. xvs.codexng.com   (Plausible, cookie-free; no consent banner needed)
 *   VITE_GA4_ID             e.g. G-XXXXXXXXXX       (Google Analytics 4)
 * With neither set, nothing loads and track() does nothing.
 *
 * Events recorded across the site:
 *   "Demo request sent"   the contact form went through (with the reason chosen)
 *   "Book a demo click"   any link to the contact page (with where it was)
 *   "WhatsApp click"      the green chat button
 */
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined;
const PLAUSIBLE_SRC = (import.meta.env.VITE_PLAUSIBLE_SRC as string | undefined) || "https://plausible.io/js/script.js";
const GA4_ID = import.meta.env.VITE_GA4_ID as string | undefined;

type Props = Record<string, string>;
type Plausible = ((event: string, options?: { props?: Props }) => void) & { q?: unknown[] };
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    plausible?: Plausible;
    gtag?: Gtag;
    dataLayer?: unknown[];
  }
}

let started = false;

function addScript(src: string, attrs: Record<string, string> = {}) {
  const script = document.createElement("script");
  script.async = true;
  script.defer = true;
  script.src = src;
  for (const [key, value] of Object.entries(attrs)) script.setAttribute(key, value);
  document.head.appendChild(script);
}

/** Loads the chosen provider once, and starts listening for "Book a demo" clicks. */
export function initAnalytics() {
  if (started || typeof window === "undefined") return;
  started = true;

  if (PLAUSIBLE_DOMAIN) {
    // Calls made before the script arrives wait in this queue.
    window.plausible =
      window.plausible ||
      function plausible() {
        // Plausible's own queue: it reads the arguments objects when it loads
        // eslint-disable-next-line prefer-rest-params
        (window.plausible!.q = window.plausible!.q || []).push(arguments);
      };
    addScript(PLAUSIBLE_SRC, { "data-domain": PLAUSIBLE_DOMAIN });
  } else if (GA4_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // gtag expects the arguments object itself
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };
    window.gtag("js", new Date());
    // Page views are sent by trackPageview() as the visitor moves between pages.
    window.gtag("config", GA4_ID, { send_page_view: false });
    addScript(`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`);
  } else {
    return;
  }

  // Every link to the contact page counts as a "Book a demo" click, wherever it is.
  document.addEventListener("click", (event) => {
    const link = (event.target as HTMLElement).closest?.('a[href="/contact"]');
    if (link) track("Book a demo click", { from: window.location.pathname, label: link.textContent?.trim().slice(0, 40) ?? "" });
  });
}

/** Records a page view. Plausible does this by itself; GA4 needs telling on each page change. */
export function trackPageview(path: string) {
  if (GA4_ID && !PLAUSIBLE_DOMAIN) window.gtag?.("event", "page_view", { page_path: path, page_location: window.location.href });
}

/** Records a named event, with optional details. */
export function track(event: string, props: Props = {}) {
  if (typeof window === "undefined") return;
  if (PLAUSIBLE_DOMAIN) window.plausible?.(event, { props });
  else if (GA4_ID) window.gtag?.("event", event.toLowerCase().replace(/\s+/g, "_"), props);
}
