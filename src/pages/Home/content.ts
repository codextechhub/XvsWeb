/**
 * ─────────────────────────────────────────────────────────────
 *  HOME PAGE CONTENT
 *  Every word, number and image on the home page lives here.
 *  The section components in ./sections only handle layout
 *  and animation, so to change copy you only need this file.
 *
 *  Put accent words between *asterisks* to show them in the
 *  italic serif, e.g. "Run your whole school *from one place*".
 * ─────────────────────────────────────────────────────────────
 */

/** Screenshots live in /public/images/xvs */
const IMG = "/images/xvs";

/* ── 1. HERO ─────────────────────────────────────────────── */
export const HERO = {
  badge: { label: "24 services in 6 groups", linkText: "See what XVS does", href: "/services" },
  /** Each line animates in word by word. */
  titleLines: ["Run your whole school", "*from one place.*"],
  body: "XVS brings students, staff, fees, buying and approvals into one system, so owners, bursars and teachers work from the same record, at every branch.",
  primaryCta: { label: "Book a demo", href: "/contact" },
  secondaryCta: { label: "Explore services", href: "/services" },
  image: `${IMG}/school-dashboard.jpg`,
  imageAlt: "XVS school dashboard: students on roll, staff, classes, pending approvals and term progress",
};

/**
 * The "Live activity" card in the hero. One new event slides in every few
 * seconds. `tone` picks the colour: success (green), warning (amber), info (blue).
 * Stories come from Bright Star Schools, the demo school in the Services Guide.
 */
/** Time labels shown down the card, newest first. */
export const HERO_ACTIVITY_TIMES = ["Just now", "2 min ago", "6 min ago", "11 min ago"];

export const HERO_ACTIVITY = [
  { tone: "success", icon: "naira", title: "₦185,000 received", detail: "Mr Okonkwo paid from the invoice email" },
  { tone: "warning", icon: "alert", title: "Clash caught", detail: "Mr Bello is already at Ikeja in period 3" },
  { tone: "info", icon: "route", title: "Waiting for the owner", detail: "₦750,000 supplier bill, over ₦500,000" },
  { tone: "info", icon: "bell", title: "Absence notice sent", detail: "Amaka, Primary 4 · in the app and by email" },
  { tone: "warning", icon: "box", title: "Reorder alert", detail: "Exercise books at Lekki store down to 300" },
  { tone: "success", icon: "branches", title: "Lekki Branch is live", detail: "Mrs Okafor added as branch admin" },
] as const;

/* ── 2. BUILT FOR (scrolling band) ───────────────────────── */
export const BUILT_FOR = {
  title: "Built for everyone who keeps a school running",
  people: [
    "Owners & proprietors",
    "Principals",
    "Bursars",
    "Accountants",
    "Branch admins",
    "Teachers",
    "Admissions officers",
    "Store keepers",
    "Procurement officers",
    "Parents",
    "Students",
    "Auditors",
  ],
};

/* ── 3. STATEMENT (lights up word by word as you scroll) ──
 * Each part is plain text, or { word, number } for a highlighted
 * word with a small numbered badge next to it.
 */
export const STATEMENT: (string | { word: string; number: string })[] = [
  "XVS",
  { word: "keeps", number: "01" },
  "every student, teacher and branch on one record,",
  { word: "collects", number: "02" },
  "every naira and matches it to the right invoice, and",
  { word: "controls", number: "03" },
  "every approval, from the first branch to the fifth.",
];

/* ── 4. FEATURES (01 / 02 / 03) ──────────────────────────── */
export const FEATURES = [
  {
    number: "01",
    label: "Run the School",
    title: "Every student and staff member, *one complete record*",
    body: "Admissions, guardians, medical notes, teaching duties and timetables live on one profile that stays with the person, whichever branch they're in.",
    points: [
      "Promote a whole class in one run, with a preview first",
      "Timetable clashes caught before they're saved",
      "See every branch side by side from one dashboard",
    ],
    link: { label: "Explore Run the School", href: "/services#run-the-school" },
    image: `${IMG}/student-profile.jpg`,
    imageAlt: "XVS student profile with guardians, academics, medical notes and documents",
    /** The small card floating over the screenshot */
    card: { label: "Promotion run", title: "JSS 2 → JSS 3", detail: "Whole class moved · 2 held back", pill: "Previewed", tone: "success" },
  },
  {
    number: "02",
    label: "Money",
    title: "Fees billed, paid and reconciled, *without the chase*",
    body: "Invoice a whole class at once. Parents pay from the email through Paystack or by transfer, and every naira is matched to its invoice and booked into the accounts.",
    points: [
      "A pay link on every invoice, no login needed",
      "Transfers matched automatically, unmatched ones flagged",
      "Proper books: ledger, bank reconciliation and statements",
    ],
    link: { label: "Explore Money", href: "/services#money" },
    image: `${IMG}/invoices.jpg`,
    imageAlt: "XVS invoices list with balances and payment status",
    card: { label: "Invoice paid", title: "₦185,000.00", detail: "Receipt sent to Mr Okonkwo", pill: "Paid", tone: "success" },
  },
  {
    number: "03",
    label: "Oversight & Control",
    title: "Nothing moves *without the right approval*",
    body: "Your school's rules decide who approves what, and in what order. Every decision, change and download is recorded against the person who made it.",
    points: [
      "Approvals by amount, department or branch",
      "Delegate while you're away, so requests keep moving",
      "A searchable history of every action, ready for auditors",
    ],
    link: { label: "Explore Oversight & Control", href: "/services#oversight-control" },
    image: `${IMG}/approval-inbox.jpg`,
    imageAlt: "XVS approval inbox with requests waiting for a decision",
    card: { label: "Supplier bill · ₦750,000", title: "Bursar ✓ → Owner", detail: "Over ₦500,000, so the owner approves", pill: "Waiting", tone: "warning" },
  },
] as const;

/* ── 5. A DAY AT BRIGHT STAR (dark timeline) ─────────────── */
export const DAY = {
  eyebrow: "A day at Bright Star",
  title: "One school day, *on one system*",
  intro:
    "Bright Star Schools is our demo school, with an Ikeja and a Lekki branch. Here's what a normal day looks like once XVS is running it.",
  quote:
    "Mr Adebayo opens XVS on Monday morning: fees collected last week at each branch, ₦2.1m still owed, and four purchase requests waiting for him. He approves two before his first meeting.",
  quoteBy: "Mr Adebayo, owner · Bright Star Schools (demo school)",
  moments: [
    { time: "08:00", title: "Registers marked", body: "Amaka in Primary 4 is absent. Her mother has an in-app notice and an email before 9am." },
    { time: "10:15", title: "A clash caught", body: "Mr Bello is booked into SS 2A while he teaches at Ikeja. XVS flags it before it's saved." },
    { time: "13:30", title: "A bill waits", body: "A ₦750,000 supplier bill waits for the owner, because it is over ₦500,000." },
    { time: "16:12", title: "A change on record", body: "A credit note is raised by accounts and approved by the bursar, with the reason logged." },
    { time: "22:00", title: "A transfer matched", body: "Mrs Adeleke sends ₦120,000. By morning it's matched, booked and receipted." },
  ],
};

/* ── 6. SERVICES PREVIEW ─────────────────────────────────── *
 * The six groups themselves come from src/pages/Services/content.ts
 */
export const SERVICES_PREVIEW = {
  eyebrow: "What XVS does",
  title: "Six areas. *Twenty-four services.* One system.",
  intro: "Grouped by what a school needs, not by how the software is built. Start with the problem you have.",
  cta: { label: "See every service", href: "/services" },
};

/* ── 7. TRUST ────────────────────────────────────────────── */
export const TRUST = {
  eyebrow: "Control, built in",
  title: "Secure by design. *On the record by default.*",
  intro: "A school's records carry real responsibility. XVS makes sure the right people see the right things, and that every change can be traced.",
  image: `${IMG}/audit-trail.jpg`,
  imageAlt: "XVS finance audit trail listing who did what, and when",
  points: [
    { icon: "key", title: "The right access for every role", body: "Ready-made roles, branch-by-branch access and control down to single fields, like salaries or medical notes." },
    { icon: "route", title: "Approvals that follow your rules", body: "Nothing goes through without an approver. It waits instead." },
    { icon: "history", title: "Every action recorded", body: "Who, what and when, searchable and ready to export for your auditors." },
    { icon: "branches", title: "One branch or many", body: "School-wide records stay shared; branch records stay with their branch." },
  ],
} as const;
