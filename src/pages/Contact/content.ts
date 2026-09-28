/**
 * ─────────────────────────────────────────────────────────────
 *  CONTACT PAGE CONTENT
 *  Words on the contact page, plus the dropdown options.
 *  The email address and city come from src/components/navigation.ts
 * ─────────────────────────────────────────────────────────────
 */

/* ── Left side: the form ─────────────────────────────────── */
export const FORM_INTRO = {
  backLabel: "Return",
  title: "Get started",
  body: "Get a first-hand look at how XVS can run your school. Tell us a little about it, and we'll shape the demo around your own classes and fees.",
};

/** "What is this about?" choices. `value` is what arrives in the email. */
export const REASONS = [
  { value: "Demo", label: "Book a demo", submit: "Book my demo" },
  { value: "Question", label: "A question", submit: "Send message" },
  { value: "Partnership", label: "Partnership", submit: "Send message" },
];

export const ROLE_OPTIONS = [
  "Owner / proprietor",
  "Principal / head teacher",
  "Bursar / accountant",
  "School administrator",
  "Teacher",
  "Other",
];

export const BRANCH_OPTIONS = ["1 branch", "2–3 branches", "4–10 branches", "More than 10 branches"];

export const MESSAGE_MAX_LENGTH = 600;

export const SUCCESS = {
  title: "Thank you. It's on its way.",
  body: "Your message has reached the CodeX team. We'll reply by email within one business day.",
  again: "Send another message",
};

/* ── Right side: the navy panel ──────────────────────────── */
export const PANEL = {
  eyebrow: "What a demo looks like",
  quote: "We'll walk you through the modules your school needs, using your own classes and fees.",
  steps: [
    { title: "Forty minutes on your workflows", body: "Bring your branch list and a sample register." },
    { title: "Your structure, set up live", body: "See your branches, classes and fees inside XVS." },
    { title: "Straight answers", body: "On moving your records across, and on whether XVS is the right fit." },
  ],
  image: "/images/xvs/school-dashboard.jpg",
};
