/**
 * ─────────────────────────────────────────────────────────────
 *  ABOUT PAGE CONTENT
 *  Every word on the About page. Accent words go between *asterisks*.
 * ─────────────────────────────────────────────────────────────
 */

/* ── 1. HERO ─────────────────────────────────────────────── */
export const HERO = {
  eyebrow: "About XVS",
  title: "The system behind *every school day.*",
  intro:
    "XVS is a school management platform developed by CodeX Technologies in Lagos. It gives owners, administrators and teachers one reliable record of students, staff, finances and approvals.",
  body: "Schools use XVS to replace disconnected spreadsheets and paper files, run several branches from one system, and give leadership an accurate view of day-to-day operations.",
  primaryCta: { label: "Speak with our team", href: "/contact" },
  secondaryCta: { label: "Why we built XVS", href: "#why-xvs" },
};

/** The four nodes around "One shared record" in the hero diagram. */
export const RECORD_NODES = [
  { title: "People", body: "Student and staff records." },
  { title: "Attendance", body: "Daily registers for every class." },
  { title: "Fees & finance", body: "Invoices, payments and accounts." },
  { title: "Reporting", body: "Branch and school-wide reports." },
];

/* ── 2. BELIEF + STORY ───────────────────────────────────── */
export const BELIEF = {
  label: "Our belief",
  text: "A school works best when the people behind it can trust the same information.",
};

export const STORY = {
  eyebrow: "Why we exist",
  title: "Less administration, *more time for the school*",
  paragraphs: [
    "Much of a school's work happens outside the classroom. A new student needs a place on the register. A parent asks about a balance. A branch head needs an accurate report before the next meeting.",
    "When the answers live in separate spreadsheets, paper files and messages, even a simple question can become a morning's work.",
    "XVS makes that everyday work easier to keep track of. We bring student and staff records, attendance, fees, timetables and reporting into one place, with clear access for the people who need them.",
    "When a question comes up, staff can answer it from the record instead of searching for it.",
  ],
};

/* ── 3. PEOPLE ───────────────────────────────────────────── */
export const PEOPLE = {
  eyebrow: "Who uses XVS",
  title: "One system, *set up for each role*",
  intro: "Each person sees the information and tools that match their responsibilities.",
  cards: [
    {
      number: "01",
      label: "Leadership",
      title: "See the school as a whole.",
      body: "Follow enrolment, fee collection and attendance across your branches, using the same records your teams work with every day.",
      role: "School owners & leadership",
    },
    {
      number: "02",
      label: "Administration",
      title: "Manage daily operations.",
      body: "Handle admissions, transfers, fees and staff records with permissions that let you share the work while keeping responsibility clear.",
      role: "Administrators & bursars",
    },
    {
      number: "03",
      label: "Teaching",
      title: "Spend less time on paperwork.",
      body: "Mark attendance, see your classes and timetable, and record the day's work without another paper register to type up later.",
      role: "Teachers & academic teams",
    },
  ],
};

/* ── 4. PRINCIPLES ───────────────────────────────────────── */
export const PRINCIPLES = {
  eyebrow: "Governance & data",
  title: "Clear access, *and a history of every change*",
  intro:
    "XVS gives your team practical controls over who can access information, how changes are tracked, and how existing records are brought into the system.",
  link: { label: "Explore how XVS works", href: "/services" },
  items: [
    {
      title: "The right access for each person.",
      body: "A teacher can mark attendance. A bursar can collect fees. Permissions are set around the actions a person needs to take, so work can be delegated safely.",
    },
    {
      title: "A history you can follow.",
      body: "Changes, logins and exports leave an audit trail, so your team can look back at what happened when a question needs an answer.",
    },
    {
      title: "A controlled move from your current records.",
      body: "Existing registers can be imported and checked row by row. Problems are flagged for review, and you decide when the information is ready to publish.",
    },
    {
      title: "One branch or a group of schools.",
      body: "Start with one branch or bring a school group together. Each branch keeps its own working view, while leadership can see across the group.",
    },
  ],
};

/* ── 5. CLOSING BANNER ───────────────────────────────────── */
export const CLOSING = {
  eyebrow: "Book a demo",
  title: "See how XVS *fits your school*",
  body: "Tell us how your team works, what takes too much time, and what you need to see more clearly. We'll walk through XVS with your school's workflows in mind.",
};
