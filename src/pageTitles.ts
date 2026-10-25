import { useEffect } from "react";

/**
 * ✏️ Browser tab names and search descriptions, one per page.
 * Edit the text here; the pages pick it up automatically.
 *
 * The same text is written into each page's HTML when the site is built
 * (scripts/prerender.mjs), along with the share preview (`og:` tags) that
 * WhatsApp, LinkedIn and X show when someone posts a link.
 *   path          the page's address (pages without one are left out of the sitemap)
 *   SHARE_IMAGE   the share picture every page uses, from /public (1200 × 630)
 */
export const SHARE_IMAGE = "/og-image.jpg";

export const PAGE_META = {
  home: {
    path: "/",
    title: "XVS - School management software for Nigerian schools",
    description:
      "XVS is the school management platform by CodeX Technologies: students, staff, results, fees, buying and approvals in one system, with apps for parents and students, for every branch.",
  },
  services: {
    path: "/services",
    title: "Services - Student records, fees, results and parent app | XVS",
    description:
      "Everything XVS does for a school: 24 services in 6 groups, from student records, attendance and results to fees, procurement, parent and student apps, and approvals.",
  },
  about: {
    path: "/about",
    title: "About XVS - School management software by CodeX, Lagos",
    description:
      "Why CodeX Technologies built XVS, and who it is for: the owners, bursars, administrators and teachers who keep a school running.",
  },
  contact: {
    path: "/contact",
    title: "Book a demo - XVS",
    description: "Book a demo of XVS for your school, or ask the CodeX team a question. We reply within one business day.",
  },
  privacy: { path: "/privacy", title: "Privacy policy - XVS", description: "The XVS privacy policy." },
  terms: { path: "/terms", title: "Terms of use - XVS", description: "The XVS terms of use." },
  notFound: { path: null, title: "Page not found - XVS", description: "This page could not be found." },
} as const;

export type PageKey = keyof typeof PAGE_META;

type Meta = { title: string; description: string; path: string | null };

/** Sets the tab title, description and share text as the visitor moves between pages. */
export function usePageMeta(page: PageKey) {
  useMeta(PAGE_META[page]);
}

/** The same, for pages whose text is worked out elsewhere (each service's own page). */
export function useMeta({ title, description, path }: Meta) {
  useEffect(() => {
    document.title = title;
    const set = (selector: string, value: string) => document.querySelector(selector)?.setAttribute("content", value);
    set('meta[name="description"]', description);
    set('meta[property="og:title"]', title);
    set('meta[property="og:description"]', description);
    set('meta[name="twitter:title"]', title);
    set('meta[name="twitter:description"]', description);
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical && path) {
      const url = new URL(path, canonical.href).href;
      canonical.href = url;
      set('meta[property="og:url"]', url);
    }
  }, [title, description, path]);
}
