/**
 * ✏️ Site-wide links and contact details.
 * The header, footer and contact page all read from here,
 * so a change in this file shows up everywhere.
 */

/** The main menu, in order. */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** The button on the right of the header, and most "Book a demo" links. */
export const DEMO_LINK = { label: "Book a demo", href: "/contact" };

export const COMPANY = {
  name: "CodeX Technologies",
  email: "info@codexng.com",
  city: "Lagos, Nigeria",
  responseTime: "Within one business day",
};

/** Footer columns. */
export const FOOTER_COLUMNS = [
  {
    title: "XVS",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Book a demo", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];
