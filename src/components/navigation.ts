/**
 * ✏️ Site-wide links and contact details.
 * The header, footer and contact page all read from here,
 * so a change in this file shows up everywhere.
 */

/** The main menu, in order. `hint` is the small line under each link in the phone menu. */
export const NAV_LINKS = [
  { label: "Home", href: "/", hint: "The platform at a glance" },
  { label: "Services", href: "/services", hint: "24 services in 6 groups" },
  { label: "About", href: "/about", hint: "Who builds XVS, and why" },
  { label: "Contact", href: "/contact", hint: "Book a demo or ask a question" },
];

/** The button on the right of the header, and most "Book a demo" links. */
export const DEMO_LINK = { label: "Book a demo", href: "/contact" };

export const COMPANY = {
  name: "CodeX Technologies",
  email: "info@codexng.com",
  city: "Lagos, Nigeria",
  responseTime: "Within one business day",
  /**
   * ✏️ WhatsApp number in international form, digits only (e.g. "2348012345678").
   * While it is empty the green chat button stays hidden.
   */
  whatsapp: "",
  /** ✏️ The message a visitor's WhatsApp opens with. */
  whatsappMessage: "Hello, I'd like to know more about XVS for my school.",
};

/**
 * ✏️ Social accounts, shown in the footer and told to Google.
 * Paste each full address (https://…); empty ones are left out.
 */
export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "" },
  { label: "Instagram", href: "" },
  { label: "X", href: "" },
  { label: "Facebook", href: "" },
].filter((link) => link.href);

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
