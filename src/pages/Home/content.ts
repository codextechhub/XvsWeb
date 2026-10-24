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
};

/**
 * The film under the hero headline: a short tour of the real XVS apps at a
 * demo school (the principal, the bursar, then a parent on her phone). It is
 * silent and loops forever. When it ends, the closing words below animate in
 * over the film's empty last frame, hold, and the film starts again.
 * The film itself lives in /public/videos (hero.mp4 and its still, hero-poster.jpg).
 */
export const HERO_FILM = {
  src: "/videos/hero.mp4",
  poster: "/videos/hero-poster.jpg",
  label:
    "A tour of XVS: the principal's dashboard, a pupil's record, results being approved, " +
    "the bursar's fees overview and invoices, and a parent checking her children's results on her phone.",

  /**
   * ✏️ THE CLOSING WORDS: change them here.
   *   eyebrow   small line above the headline
   *   lines     the headline, one entry per line; put *asterisks* around the
   *             words that should glow in the italic serif
   *   tagline   the line under it
   */
  finale: {
    eyebrow: "XVS",
    lines: ["The platform", "your school *runs on.*"],
    tagline: "Students, staff, fees, buying and approvals. One system, every branch.",
  },

  /** ✏️ How long the closing words stay on screen before the film starts again (milliseconds). */
  finaleMs: 6000,
} as const;

/* ── 2. BUILT FOR (logo-style strip under the hero) ────────
 * `label` sits in the small box on the left; `people` scroll past beside it.
 */
export const BUILT_FOR = {
  label: "Built for",
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
 * The three cards under it use FEATURES (number, title, summary) and
 * PILLAR_SCENES below (the small moving scene at the top of each card).
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

/* ── 3b. PILLAR SCENES (the moving scenes on the three cards) ──
 * The cards take turns: one plays while the other two dim, in step with
 * the highlighted word above (keeps → collects → controls).
 */
export const PILLAR_SCENES = {
  /** 01 · A class board: students move from one class to the next, one is held back. */
  records: {
    from: "JSS 2",
    to: "JSS 3",
    students: [
      { initials: "AO", name: "Amaka Obi" },
      { initials: "CN", name: "Chinedu Nwosu" },
      { initials: "TB", name: "Tolu Bello" },
      { initials: "FI", name: "Femi Ibrahim", heldBack: true },
    ],
    tag: "Promotion run · previewed",
  },
  /** 02 · An invoice: the parent's transfer is matched, then it turns to paid. */
  money: {
    number: "INV-2281",
    title: "First term fees · Mr Okonkwo",
    amount: "₦185,000.00",
    pending: "Matching transfer…",
    done: "Paid · receipt sent",
  },
  /** 03 · The audit log scrolling past. `tone`: ok (green), wait (amber), flag (red) or blank. */
  approvals: {
    lines: [
      { time: "08:00", action: "attendance.marked", detail: "Primary 4", tone: "" },
      { time: "10:15", action: "timetable.clash", detail: "SS 2A · flagged", tone: "flag" },
      { time: "13:30", action: "bill.submitted", detail: "₦750,000", tone: "" },
      { time: "13:31", action: "bill.approved", detail: "Bursar ✓", tone: "ok" },
      { time: "13:31", action: "bill.routed", detail: "Owner · over ₦500k", tone: "wait" },
      { time: "16:12", action: "credit_note.raised", detail: "Accounts", tone: "" },
      { time: "16:40", action: "credit_note.approved", detail: "Bursar ✓", tone: "ok" },
      { time: "22:00", action: "payment.matched", detail: "₦120,000", tone: "ok" },
      { time: "22:01", action: "receipt.sent", detail: "Mrs Adeleke", tone: "" },
    ],
  },
} as const;

/* ── 4. QUOTE (big card, words sharpen as you scroll) ────── */
export const QUOTE = {
  text: "Mr Adebayo opens XVS on Monday morning: fees collected last week at each branch, ₦2.1m still owed, and four purchase requests waiting for him. He approves two before his first meeting.",
  name: "Mr Adebayo",
  role: "Owner · Bright Star Schools (demo school)",
  /** Shown in the round badge beside the name */
  initials: "MA",
};

/* ── 5. FEATURES (01 / 02 / 03) ──────────────────────────── *
 * Each one becomes a full section: text on the left, screenshot on the right.
 * The first point is shown as a heading above the others.
 * `summary` is the short line used on the three cards under the statement.
 */
export const FEATURES = [
  {
    number: "01",
    label: "Run the School",
    title: "Every student and staff member, *one complete record*",
    summary: "One profile for every student and staff member, at every branch.",
    body: "Admissions, guardians, medical notes, teaching duties and timetables live on one profile that stays with the person, whichever branch they're in.",
    points: [
      "Promote a whole class in one run, with a preview first",
      "Timetable clashes caught before they're saved",
      "See every branch side by side from one dashboard",
    ],
    link: { label: "Explore Run the School", href: "/services#run-the-school" },
    image: `${IMG}/student-profile.jpg`,
    imageAlt: "XVS student profile with guardians, academics, medical notes and documents",
  },
  {
    number: "02",
    label: "Money",
    title: "Fees billed, paid and *reconciled in one place*",
    summary: "Invoices, payments and the accounts, matched automatically.",
    body: "Invoice a whole class at once. Parents pay from the email through Paystack or by transfer, and every naira is matched to its invoice and booked into the accounts.",
    points: [
      "A pay link on every invoice, no login needed",
      "Transfers matched automatically, unmatched ones flagged",
      "Proper books: ledger, bank reconciliation and statements",
    ],
    link: { label: "Explore Money", href: "/services#money" },
    image: `${IMG}/invoices.jpg`,
    imageAlt: "XVS invoices list with balances and payment status",
  },
  {
    number: "03",
    label: "Oversight & Control",
    title: "Nothing moves *without the right approval*",
    summary: "Approvals routed by your rules, with every action on record.",
    body: "Your school's rules decide who approves what, and in what order. Every decision, change and download is recorded against the person who made it.",
    points: [
      "Approvals by amount, department or branch",
      "Delegate while you're away, so requests keep moving",
      "A searchable history of every action, ready for auditors",
    ],
    link: { label: "Explore Oversight & Control", href: "/services#oversight-control" },
    image: `${IMG}/approval-inbox.jpg`,
    imageAlt: "XVS approval inbox with requests waiting for a decision",
  },
] as const;

/* ── 6. TRUST (security card) ────────────────────────────── *
 * The title is shown in white, then `titleMuted` underneath in grey.
 */
export const TRUST = {
  eyebrow: "Security & governance",
  title: "Access set by role and branch.",
  titleMuted: "Every change on record.",
  intro: "School records hold sensitive personal, medical and financial information. XVS limits access by role and branch, and records every change so it can be traced.",
  points: [
    { icon: "key", title: "The right access for every role", body: "Ready-made roles, branch-by-branch access and control down to single fields, like salaries or medical notes." },
    { icon: "route", title: "Approvals that follow your rules", body: "Requests go to the correct approver and do not proceed until a decision is made." },
    { icon: "history", title: "Every action recorded", body: "Who, what and when, searchable and ready to export for your auditors." },
    { icon: "branches", title: "One branch or many", body: "School-wide records stay shared; branch records stay with their branch." },
  ],
} as const;

/* ── 7. SERVICES PREVIEW (three-column list) ─────────────── *
 * The six groups themselves come from src/pages/Services/content.ts
 */
export const SERVICES_PREVIEW = {
  eyebrow: "What XVS does",
  title: "Twenty-four services, *organised in six areas*",
  intro: "Each area covers one part of running a school, from student records and fees to purchasing, parent portals and approvals.",
  cta: { label: "See every service", href: "/services" },
};

/* ── 8. A DAY AT BRIGHT STAR (sliding row of moments) ────── */
export const DAY = {
  eyebrow: "A day at Bright Star",
  title: "One school day, *on one system*",
  intro:
    "Bright Star Schools is our demo school, with an Ikeja and a Lekki branch. The timeline below shows a typical day once XVS is in place.",
  moments: [
    { time: "08:00", title: "Registers marked", body: "Amaka in Primary 4 is absent. Her mother has an in-app notice and an email before 9am." },
    { time: "10:15", title: "A clash caught", body: "Mr Bello is booked into SS 2A while he teaches at Ikeja. XVS flags it before it's saved." },
    { time: "13:30", title: "A bill waits", body: "A ₦750,000 supplier bill waits for the owner, because it is over ₦500,000." },
    { time: "16:12", title: "A change on record", body: "A credit note is raised by accounts and approved by the bursar, with the reason logged." },
    { time: "22:00", title: "A transfer matched", body: "Mrs Adeleke sends ₦120,000. By morning it's matched, booked and receipted." },
  ],
};
