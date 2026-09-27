/**
 * ─────────────────────────────────────────────────────────────
 *  ABOUT PAGE CONTENT
 *  Every word on the About page. Accent words go between *asterisks*.
 * ─────────────────────────────────────────────────────────────
 */

/* ── 1. HERO ─────────────────────────────────────────────── */
export const HERO = {
  eyebrow: "About XVS",
  title: "Behind every school day, *everything connects.*",
  intro:
    "The student in the register. The payment at the bursar's desk. The decision in the headteacher's office. They are all part of the same school story.",
  body: "XVS brings that story together: a school management platform that keeps your people, branches and everyday work connected, so you can move through the day with a clearer picture.",
  primaryCta: { label: "Let's talk about your school", href: "/contact" },
  secondaryCta: { label: "Get to know XVS", href: "#why-xvs" },
};

/** The four nodes around "One shared record" in the hero diagram. */
export const RECORD_NODES = [
  { title: "People", body: "Every student. Every team." },
  { title: "Attendance", body: "A clearer view of each day." },
  { title: "Fees & finance", body: "Follow the same figures." },
  { title: "Reporting", body: "The whole picture, together." },
];

/* ── 2. BELIEF + STORY ───────────────────────────────────── */
export const BELIEF = {
  label: "Our belief",
  text: "A school works best when the people behind it can trust the same information.",
};

export const STORY = {
  eyebrow: "Why we exist",
  title: "More time for the school. *Less time piecing it together.*",
  paragraphs: [
    "You know the work that happens between the lessons. A new student needs a place on the register. A parent asks about a balance. A branch head needs an accurate report before the next meeting.",
    "When the answers live in separate spreadsheets, paper files and messages, even a simple question can become a morning's work.",
    "XVS exists to make that everyday work easier to follow. We bring student and staff records, attendance, fees, timetables and reporting into one place, with clear access for the people who need them.",
    "So the next person who needs an answer can start with the record, and keep the day moving.",
  ],
};

/* ── 3. PEOPLE ───────────────────────────────────────────── */
export const PEOPLE = {
  eyebrow: "Made for your school day",
  title: "Different responsibilities. *The same understanding.*",
  intro: "XVS is shaped around the people doing the work, and the different things each person needs to see.",
  cards: [
    {
      number: "01",
      label: "For the people leading",
      title: "See the school as a whole.",
      body: "Follow enrolment, fee collection and attendance across your branches, using the same records your teams work with every day.",
      role: "School owners & leadership",
    },
    {
      number: "02",
      label: "For the people organising",
      title: "Keep the details connected.",
      body: "Handle admissions, transfers, fees and staff records with permissions that let you share the work while keeping responsibility clear.",
      role: "Administrators & bursars",
    },
    {
      number: "03",
      label: "For the people teaching",
      title: "Keep your attention on your class.",
      body: "Mark attendance, see your classes and timetable, and record the day's work without another paper register to type up later.",
      role: "Teachers & academic teams",
    },
  ],
};

/* ── 4. PRINCIPLES ───────────────────────────────────────── */
export const PRINCIPLES = {
  eyebrow: "Confidence, built into the details",
  title: "Knowing where things stand *changes everything.*",
  intro:
    "A school record carries real responsibility. XVS gives your team practical ways to control access, understand changes and check information before it becomes part of the day's work.",
  link: { label: "Explore how XVS works", href: "/services" },
  items: [
    {
      title: "The right access for each person.",
      body: "A teacher can mark attendance. A bursar can collect fees. Permissions are set around the actions a person needs to take, helping you delegate with care.",
    },
    {
      title: "A history you can follow.",
      body: "Changes, logins and exports leave an audit trail, so your team can look back at what happened when a question needs an answer.",
    },
    {
      title: "A considered start with your records.",
      body: "Existing registers can be imported and checked row by row. Problems are flagged for review, and you decide when the information is ready to publish.",
    },
    {
      title: "Room for your next chapter.",
      body: "Start with one branch or bring a school group together. Each branch keeps its own working view, while leadership can see across the group.",
    },
  ],
};

/* ── 5. CLOSING BANNER ───────────────────────────────────── */
export const CLOSING = {
  eyebrow: "Let's start with your school",
  title: "You know your school. *Let's see how XVS fits.*",
  body: "Tell us how your team works, what takes too much time, and what you need to see more clearly. We'll walk through XVS with your school's workflows in mind.",
};
