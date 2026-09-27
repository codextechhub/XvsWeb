import { useEffect } from "react";

/**
 * ✏️ Browser tab names and search descriptions, one per page.
 * Edit the text here; the pages pick it up automatically.
 */
export const PAGE_META = {
  home: {
    title: "XVS — Run your whole school from one place",
    description:
      "XVS is the school management platform by CodeX Technologies: students, staff, fees, buying and approvals in one system, for every branch.",
  },
  services: {
    title: "Services — XVS",
    description:
      "Everything XVS does for a school: 24 services in 6 groups, from student records and fees to procurement, portals and approvals.",
  },
  about: {
    title: "About XVS — CodeX",
    description: "Why we built XVS, and who it is for: the people who keep a school running.",
  },
  contact: {
    title: "Book a demo — XVS",
    description: "Book a demo of XVS, or ask the CodeX team a question.",
  },
  privacy: { title: "Privacy policy — XVS", description: "The XVS privacy policy." },
  terms: { title: "Terms of use — XVS", description: "The XVS terms of use." },
  notFound: { title: "Page not found — XVS", description: "This page could not be found." },
} as const;

export type PageKey = keyof typeof PAGE_META;

/** Sets the browser tab title and meta description for the current page. */
export function usePageMeta(page: PageKey) {
  useEffect(() => {
    const { title, description } = PAGE_META[page];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  }, [page]);
}
