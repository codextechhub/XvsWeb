/**
 * ─────────────────────────────────────────────────────────────
 *  SERVICES CONTENT
 *  Everything XVS offers, taken from the XVS Services Guide.
 *  24 services in 6 groups, grouped by what a school needs.
 *
 *  • To edit a service, find it by name below and change the text.
 *  • To add a service, copy one { … } block inside a group's `services`.
 *  • The home page also reads SERVICE_GROUPS for its "What XVS does" grid.
 *
 *  House style (from the guide):
 *  - It is a branch, never a campus.
 *  - Messages go out in the app and by email (no SMS).
 *  - Money is in naira: ₦185,000.  Online payments go through Paystack.
 *  - No packages or prices on the website: everything ends with "Book a demo".
 * ─────────────────────────────────────────────────────────────
 */
import type { IconName } from "../../components/shared/icons";

export type Service = {
  /** Used for the #link, e.g. /services#billing-invoicing */
  id: string;
  name: string;
  /** The one line that sells it */
  promise: string;
  /** Who at the school uses it */
  forWho: string;
  /** What goes wrong today without XVS */
  problem: string;
  /** How it works, in four steps */
  steps: string[];
  /** What you get, written as benefits */
  benefits: string[];
  /** A short story at Bright Star Schools, the demo school */
  story: string;
  /** Optional screenshot from /public/images/xvs */
  image?: string;
};

export type ServiceGroup = {
  id: string;
  number: string;
  name: string;
  icon: IconName;
  summary: string;
  /** Screenshot shown beside the group heading */
  image: string;
  imageAlt: string;
  services: Service[];
};

/* ── Page intro ──────────────────────────────────────────── */
export const SERVICES_HERO = {
  eyebrow: "Services",
  title: "Everything your school runs on, *in one system*",
  body: "XVS covers 24 services in 6 groups. They're grouped by what a school needs, not by how the software is built, so start with the problem you have and open any service to see how it works.",
};

/** The demo school every story uses. */
export const DEMO_SCHOOL = {
  name: "Bright Star Schools",
  about: "Our demo school, with two branches: Ikeja Branch (main) and Lekki Branch.",
};

const IMG = "/images/xvs";

/* ── The six groups ──────────────────────────────────────── */
export const SERVICE_GROUPS: ServiceGroup[] = [
  /* ─── 01 · Run the School ─── */
  {
    id: "run-the-school",
    number: "01",
    name: "Run the School",
    icon: "school",
    summary: "The records every school runs on: its branches, students, staff, classes and timetable.",
    image: `${IMG}/school-dashboard.jpg`,
    imageAlt: "XVS school dashboard with students on roll, staff, classes and pending approvals",
    services: [
      {
        id: "school-branch-management",
        name: "School & Branch Management",
        promise: "One school, every branch, one place to run it.",
        forWho: "School owner, proprietor, school administrator",
        problem:
          "A school that opens a second branch usually ends up with two of everything: two spreadsheets, two sets of records, two versions of the truth. The owner cannot see the whole school without phoning each branch.",
        steps: [
          "Set up the school with its main branch, logo and contact details.",
          "Add branches as the school grows, each with its own code and status.",
          "Give each branch its own administrator, or run them all centrally.",
          "See every branch's numbers side by side from one dashboard.",
        ],
        benefits: [
          "Every school starts with a main branch, so no record is ever left unassigned",
          "Open or close a branch without losing its history",
          "Your name and logo on every screen and every email",
          "School-wide records stay shared; branch records stay with their branch",
          "Hand the main branch over when the school's centre moves",
          "A full history of every change to the school and its branches",
        ],
        story:
          "Bright Star opens its Lekki Branch in September. The administrator adds it in two minutes, names Mrs Okafor as branch admin, and Lekki's staff log in the same afternoon. Mr Adebayo, the owner, now sees Ikeja and Lekki enrolment side by side without asking anyone for a report.",
        image: `${IMG}/branch-list.jpg`,
      },
      {
        id: "student-management",
        name: "Student Management",
        promise: "Every student's story, from admission to graduation.",
        forWho: "Admissions officer, school administrator, class teacher",
        problem:
          "Student files live in cabinets, spreadsheets and people's heads. When a parent calls, finding the right guardian number, medical note or class history means searching three places.",
        steps: [
          "Record applicants and admit them into a class and branch.",
          "Link each student to their parents, guardians and emergency contacts.",
          "Keep documents, medical notes and consent forms on the student's profile.",
          "Move students through the year: transfers, promotions, withdrawals and graduation.",
        ],
        benefits: [
          "One profile: guardians, academics, medical notes, documents and history",
          "Admission numbers in the school's own format",
          "Promote a whole class in one run, with a preview first",
          "Transfer a student between classes or branches, with the reason recorded",
          "Medical notes shown only to the staff who need them",
          "Import existing students from a spreadsheet, with duplicates caught",
        ],
        story:
          "Chinedu in JSS 2 has asthma. The school nurse records it on his profile, and only she and his form teacher can see it. At the end of the year the administrator promotes all of JSS 2 to JSS 3 in one run, previewing first to hold back the two students repeating the year.",
        image: `${IMG}/student-profile.jpg`,
      },
      {
        id: "staff-management",
        name: "Staff Management",
        promise: "Know your people: who they are, where they work, what they teach.",
        forWho: "School administrator, principal, branch admin",
        problem:
          "Staff details sit in a paper file in the principal's office. Nobody knows which qualifications are on record, who is on leave this week, or which classes have no teacher.",
        steps: [
          "Add a staff member and invite them to log in, in one step.",
          "Record their role, department, branch and qualifications.",
          "Assign teaching duties: a lead teacher and assistants for each class and subject.",
          "Track leave and see where a class has nobody covering it.",
        ],
        benefits: [
          "Add and invite in one go, so nobody waits for a login",
          "Qualifications and documents kept on each profile",
          "Branch rosters grouped clearly by role",
          "A coverage grid showing which classes are missing a teacher",
          "Leave requests with approval",
          "Linked to payroll, so nobody is entered twice",
        ],
        story:
          "Mr Bello, a maths teacher at the Lekki Branch, goes on leave for two weeks. His leave is approved in XVS, and the coverage grid immediately shows SS 1A and SS 1B with no maths teacher, so the principal arranges cover before Monday.",
        image: `${IMG}/staff-duties.jpg`,
      },
      {
        id: "identity-team-organogram",
        name: "Identity, Team & Organogram",
        promise: "Everyone signs in safely and knows who they report to.",
        forWho: "School administrator, owner",
        problem:
          "Shared passwords, staff who left months ago still able to log in, and no clear picture of who reports to whom.",
        steps: [
          "Invite staff by email; each person sets their own password.",
          "Everyone signs in at the school's own web address.",
          "Build the reporting structure: departments, positions and managers.",
          "Suspend or unlock accounts, and end sessions when someone leaves.",
        ],
        benefits: [
          "Invitations that expire if nobody uses them",
          "Password rules, and automatic lockout after repeated failed logins",
          "See every active session and sign any of them out",
          "Reporting lines and positions in a clear organogram",
          "Suspend an account the day someone leaves",
          "Every sign-in and account change recorded",
        ],
        story:
          "Mrs Eze, a bursar, resigns on Friday. The administrator suspends her account before she leaves the building, and her open sessions on two devices end at once. Nothing she could see on Thursday is reachable on Saturday.",
        image: `${IMG}/login-page.jpg`,
      },
      {
        id: "academic-structure",
        name: "Academic Structure",
        promise: "Set up your school year once, then roll it forward every year.",
        forWho: "Principal, academic administrator",
        problem:
          "Every September the school rebuilds its classes, subjects and terms by hand, and every branch does it slightly differently.",
        steps: [
          "Define the school year and its terms.",
          "Set up levels, classes and arms, such as JSS 1A and JSS 1B.",
          "Add subjects, the levels that take them, and their teachers.",
          "At year end, roll the whole structure forward into the new year.",
        ],
        benefits: [
          "Three-term or two-semester calendars",
          "Levels linked in order, ready for promotion",
          "Subjects offered by level, with teachers assigned",
          "Classes can belong to one branch or to the whole school",
          "A structure tree showing the whole school at a glance",
          "Roll-forward copies this year's setup into next year",
        ],
        story:
          "In July, Bright Star's academic head rolls the 2025/2026 structure into 2026/2027. All 36 classes, their arms and subjects copy across. The only thing she adds by hand is JSS 1C, for the larger intake.",
        image: `${IMG}/academic-structure.jpg`,
      },
      {
        id: "timetable-calendar",
        name: "Timetable & Calendar",
        promise: "A timetable without clashes, and a calendar everyone can see.",
        forWho: "Timetable officer, principal, teachers",
        problem:
          "The timetable is a chart on the staffroom wall. When two classes are booked into the lab at the same time, nobody finds out until the students are standing at the door.",
        steps: [
          "Set the bell schedule: periods and breaks.",
          "Build each class's timetable; each teacher's week builds itself.",
          "XVS flags clashes: a teacher, room or class booked twice.",
          "Add events, holidays and exams to one school calendar.",
        ],
        benefits: [
          "Bell schedules for each branch",
          "Class and teacher timetables, always in step",
          "Clash detection for teachers, rooms and classes, even across branches",
          "Rooms and resources booked alongside lessons",
          "Holidays, closures and events for the whole school or specific classes",
          "Exam scheduling and calendar export",
        ],
        story:
          "The timetable officer puts Mr Bello in SS 2A for period 3 on Tuesday, but he already teaches at the Ikeja Branch then. XVS flags the clash before it is saved, and she moves the lesson to period 5.",
        image: `${IMG}/class-timetable.jpg`,
      },
    ],
  },

  /* ─── 02 · Teaching & Learning ─── */
  {
    id: "teaching-learning",
    number: "02",
    name: "Teaching & Learning",
    icon: "book",
    summary: "What happens in the classroom: who was there and how they performed.",
    image: `${IMG}/class-timetable.jpg`,
    imageAlt: "XVS class timetable grid for a week of lessons",
    services: [
      {
        id: "attendance-management",
        name: "Attendance Management",
        promise: "Know who is in school, every day, in every class.",
        forWho: "Class teacher, principal, parents",
        problem:
          "Registers are ticked on paper and never added up. A child can miss school for a week before anyone notices the pattern, and the parents hear last.",
        steps: [
          "Teachers mark the register for the day or the period, a whole class in a few taps.",
          "Each student is marked present, absent, late or excused, with a reason.",
          "Parents are told when their child is absent.",
          "See attendance trends by class, branch and term.",
        ],
        benefits: [
          "Daily or period-by-period registers",
          "Staff attendance as well as students",
          "A reason and note for every absence",
          "Corrections go through a request, and the change is recorded",
          "Parents notified in the app and by email",
          "Attendance summaries and trends on the dashboard",
        ],
        story:
          "Amaka in Primary 4 is absent on Monday and Tuesday. Her mother gets an in-app notice and an email by 9am on both days. On Wednesday the head teacher's dashboard shows Amaka has missed three days in two weeks, and the school calls home.",
      },
      {
        id: "gradebook-assessments",
        name: "Gradebook & Assessments",
        promise: "From test scores to report cards, without the spreadsheet marathon.",
        forWho: "Teachers, exams officer, principal",
        problem:
          "At the end of every term teachers type scores into spreadsheets, someone adds them up, and report cards take two weeks. One wrong formula changes a child's position in class.",
        steps: [
          "Set up assessments and their weights: tests, assignments and exams.",
          "Teachers enter scores, or upload them in bulk.",
          "XVS works out totals and grades on the school's own scale.",
          "Approve, publish and lock the results, and generate report cards.",
        ],
        benefits: [
          "Weighted continuous assessment and exam totals",
          "Bulk score upload",
          "Checks and moderation before results are published",
          "The school's own grading scale",
          "Teacher and principal comments on every report card",
          "Results locked once published, plus class and student performance analytics",
        ],
        story:
          "Mrs Obi uploads her SS 3 chemistry scores on Thursday. XVS works out every student's total and grade. The principal approves on Friday, and parents have report cards on Monday instead of two weeks later.",
      },
    ],
  },

  /* ─── 03 · Money ─── */
  {
    id: "money",
    number: "03",
    name: "Money",
    icon: "money",
    summary: "Fees billed, collected, adjusted and accounted for.",
    image: `${IMG}/finance-dashboard.jpg`,
    imageAlt: "XVS finance dashboard showing fees collected and money owed",
    services: [
      {
        id: "billing-invoicing",
        name: "Billing & Invoicing",
        promise: "Bill every student correctly, and let parents pay from the invoice.",
        forWho: "Bursar, accounts officer",
        problem:
          "Fees are worked out child by child on a spreadsheet, invoices go home in school bags, and half of them never reach the parent.",
        steps: [
          "Set fee structures for each level and term.",
          "Generate invoices for a whole class or year group at once.",
          "Email each invoice with a secure pay link.",
          "Track balances and remind the families who have not paid.",
        ],
        benefits: [
          "Fee structures tied to the term",
          "Invoices for a whole class in one step",
          "A pay link on every invoice, so parents pay without logging in",
          "Receipts generated automatically",
          "Payment plans for families paying in instalments",
          "Reminders for overdue balances",
        ],
        story:
          "At the start of term the bursar invoices all 420 students at the Ikeja Branch in one go. Mr Okonkwo gets his daughter's invoice by email, taps the pay link, pays ₦185,000 from his phone, and his receipt arrives before he puts it down.",
        image: `${IMG}/invoices.jpg`,
      },
      {
        id: "payments-collections",
        name: "Payments & Collections",
        promise: "Every naira received, matched and recorded automatically.",
        forWho: "Bursar, accountant, owner",
        problem:
          "Parents pay by transfer and send a screenshot. The bursar matches bank alerts to students by hand, and some money arrives that nobody can place.",
        steps: [
          "Parents pay online through Paystack, or by transfer into a dedicated account.",
          "XVS confirms each payment with the provider.",
          "The payment is matched to its invoice and booked into the accounts.",
          "Payments out to suppliers wait for approval before any money leaves.",
        ],
        benefits: [
          "Online payment through Paystack",
          "Dedicated virtual accounts for transfers",
          "Payments matched to invoices automatically",
          "Unmatched payments flagged instead of lost",
          "Every payout approved by a person, with a senior approver for large amounts",
          "Settlement reconciliation and a full transaction log",
        ],
        story:
          "Mrs Adeleke transfers ₦120,000 at 10pm. By morning it is matched to her son's invoice, booked and receipted. When the bursar pays a ₦750,000 supplier bill, it waits for the owner's approval, because it is over ₦500,000.",
        image: `${IMG}/collections.jpg`,
      },
      {
        id: "finance-accounting",
        name: "Finance & Accounting",
        promise: "Proper books for the school, without chasing receipts.",
        forWho: "Accountant, bursar, owner",
        problem:
          "School finances are split between a cashbook, a banking app and the owner's memory. At year end, someone spends weeks piecing together what happened.",
        steps: [
          "Your chart of accounts and financial year are set up for you.",
          "Fees, payments and supplier bills post into the books automatically.",
          "Record expenses, petty cash and payroll.",
          "Close each period and read your statements.",
        ],
        benefits: [
          "Chart of accounts, journals and financial periods",
          "Bank accounts and reconciliation",
          "Expense claims and petty cash",
          "Budgets, checked before money is committed",
          "Payroll, tax and fixed assets",
          "Trial balance and financial statements on demand",
        ],
        story:
          "At the end of March, Bright Star's accountant closes the period. Fees, supplier bills and petty cash have already posted themselves. She reconciles the bank in an afternoon and hands the owner a profit and loss statement the same day.",
        image: `${IMG}/bank-reconciliation.jpg`,
      },
      {
        id: "adjustments-concessions",
        name: "Adjustments & Concessions",
        promise: "Scholarships, discounts and refunds, handled fairly and on the record.",
        forWho: "Bursar, principal, owner",
        problem:
          "Discounts are agreed in the principal's office and remembered by nobody. A sibling discount given one term is forgotten the next, and refunds are paid with no paper trail.",
        steps: [
          "Record a scholarship, concession or discount against a student's account.",
          "Larger adjustments go for approval automatically.",
          "Once approved, the balance and the books update together.",
          "Anyone can check later who approved it, and why.",
        ],
        benefits: [
          "Scholarships and concessions",
          "Discounts and waivers",
          "Refund requests and payment",
          "Credit and debit notes",
          "Write-offs for balances that will not be recovered",
          "Approval required above an amount you set",
        ],
        story:
          "The Nwosu family has three children at Bright Star and gets a 10% sibling discount. The bursar records it for each child, the principal approves, and all three invoices drop. When an auditor asks a year later, the reason and the approver are right there.",
        image: `${IMG}/concessions.jpg`,
      },
    ],
  },

  /* ─── 04 · Buying & Stock ─── */
  {
    id: "buying-stock",
    number: "04",
    name: "Buying & Stock",
    icon: "box",
    summary: "Spending under control, from a request to a delivered, paid-for item.",
    image: `${IMG}/requisitions.jpg`,
    imageAlt: "XVS requisitions list with budget checks and approval status",
    services: [
      {
        id: "vendor-management",
        name: "Vendor Management",
        promise: "Know every supplier, and pay the right bank account every time.",
        forWho: "Procurement officer, bursar",
        problem:
          "Supplier details live in someone's phone. A fraudster emails 'our new bank details', and the school pays them.",
        steps: [
          "Add suppliers with their contacts and categories.",
          "Verify their bank details before any payment goes out.",
          "Record contracts, catalogues and how each supplier performs.",
          "See how much you spend with each supplier.",
        ],
        benefits: [
          "Supplier profiles and categories",
          "Verified bank details, checked again whenever they change",
          "Duplicate supplier detection",
          "Put a supplier on hold to stop payments",
          "Contracts with milestones and renewal dates",
          "Spend by supplier",
        ],
        story:
          "An email tells Bright Star its uniform supplier has a new bank account. Changing the details sends the supplier back for verification, and no payment can go out until it is checked. A phone call to the supplier shows the email was fake.",
        image: `${IMG}/supplier-list.jpg`,
      },
      {
        id: "procurement-requisitions",
        name: "Procurement & Requisitions",
        promise: "Every purchase requested, checked and approved before money is committed.",
        forWho: "Any staff member making a request, procurement officer, principal",
        problem:
          "A teacher needs lab chemicals, mentions it to the bursar in the corridor, and it is bought with no budget check. Three months later the budget is gone and nobody knows where it went.",
        steps: [
          "Staff raise a requisition for what they need.",
          "XVS checks it against the budget.",
          "It goes through the school's approval steps.",
          "For bigger purchases, invite quotations from suppliers and compare them before choosing.",
        ],
        benefits: [
          "Requisitions with itemised lines",
          "Budget check before approval",
          "Approvals in the order your school decides",
          "Requests for quotation sent to suppliers",
          "Quotations compared side by side",
          "Competitive bidding rules for large purchases",
        ],
        story:
          "Mr Danjuma, the Ikeja lab coordinator, requests ₦340,000 of chemicals. The budget check passes, the principal approves, and three suppliers quote. The procurement officer picks the best-value quote, and everyone can see why.",
        image: `${IMG}/requisitions.jpg`,
      },
      {
        id: "purchase-orders-delivery-ap",
        name: "Purchase Orders, Delivery & AP",
        promise: "Pay only for what arrived, and pay it only once.",
        forWho: "Procurement officer, store keeper, bursar",
        problem:
          "A bill arrives for 50 desks. Only 40 were delivered, but the bill is paid in full, and a copy of the same bill is paid again the next month.",
        steps: [
          "Send an approved purchase order to the supplier.",
          "Record what was delivered, and what was rejected.",
          "Match the supplier's bill against the order and the delivery.",
          "Approve and pay the bill; it posts to the books by itself.",
        ],
        benefits: [
          "Purchase orders emailed to suppliers",
          "Delivery notes with accepted and rejected quantities",
          "Three-way match: order, delivery and bill",
          "Duplicate bill detection",
          "Supplier advances, used up against later bills",
          "Cancel an order with the reason recorded",
        ],
        story:
          "Bright Star orders 50 desks. The store keeper records 40 delivered and 10 rejected as damaged. The supplier bills for 50, XVS flags the mismatch, and the bursar pays for 40.",
        image: `${IMG}/purchase-orders.jpg`,
      },
      {
        id: "inventory-stock-ledger",
        name: "Inventory & Stock Ledger",
        promise: "Know what is in the store, what it is worth, and when to reorder.",
        forWho: "Store keeper, bursar",
        problem: "Nobody knows how many exercise books are left until the store runs empty in week three of term.",
        steps: [
          "Deliveries add to stock automatically.",
          "Issue items to departments or classes.",
          "Adjust for damage, loss or a stock count.",
          "Get an alert when an item runs low.",
        ],
        benefits: [
          "Stock items with quantities on hand",
          "Stock value at average cost",
          "Stock by location, such as each branch's store",
          "Every issue and adjustment recorded",
          "Reorder alerts",
          "Stock reports and valuation",
        ],
        story:
          "The Lekki Branch store receives 2,000 exercise books, and the delivery adds them to stock. As classes collect them, the count drops. At 300 the store keeper gets a reorder alert, two weeks before the store would have run out.",
        image: `${IMG}/stock-items.jpg`,
      },
    ],
  },

  /* ─── 05 · Families ─── */
  {
    id: "families",
    number: "05",
    name: "Families",
    icon: "family",
    summary: "Parents and students kept informed, without calling the school.",
    image: `${IMG}/notifications.jpg`,
    imageAlt: "XVS notification centre with in-app notices and delivery status",
    services: [
      {
        id: "parent-portal",
        name: "Parent Portal",
        promise: "Everything a parent needs about their child, on their phone.",
        forWho: "Parents and guardians",
        problem:
          "Parents call the school for everything: fees owed, results, whether their child was in class today. The front office spends the day on the phone.",
        steps: [
          "Parents sign in and see each of their children.",
          "Check attendance, the timetable and results.",
          "See invoices and pay fees.",
          "Read notices and sign consent forms.",
        ],
        benefits: [
          "One login for all your children",
          "Attendance and timetable",
          "Results and report cards",
          "Invoices, balances and receipts",
          "Pay fees online",
          "Consent forms and documents",
        ],
        story:
          "Mrs Ibrahim has two children at Bright Star, one at each branch. On Sunday evening she checks both, reads her son's term report, pays the balance on her daughter's fees and signs the excursion consent form, all without calling the school.",
        image: `${IMG}/parent-pay.jpg`,
      },
      {
        id: "student-portal",
        name: "Student Portal",
        promise: "Students see their own timetable, results and school life.",
        forWho: "Students",
        problem: "Students ask their class teacher for their timetable, their scores and what is due, again and again.",
        steps: [
          "Students sign in with the account the school gives them.",
          "See their timetable and the school calendar.",
          "Check their attendance and results.",
          "Download documents and read notices.",
        ],
        benefits: [
          "A dashboard of what matters today",
          "Timetable and calendar",
          "Attendance record",
          "Assessments and results",
          "Fees and receipts",
          "Notices, with privacy settings suited to the student's age",
        ],
        story:
          "Tolu in SS 2 checks her timetable on Sunday night, sees her physics test has moved to Wednesday, and finds last term's results waiting for her.",
      },
      {
        id: "notifications-delivery",
        name: "Notifications & Delivery",
        promise: "The right message to the right person, on time.",
        forWho: "Everyone: staff, parents, suppliers",
        problem:
          "Important messages go out on WhatsApp groups and get buried, and nobody can tell who actually saw them.",
        steps: [
          "Something happens: an invoice, an approval, an absence.",
          "XVS sends an in-app notice and an email to the people who need to know.",
          "Every email carries the school's name and logo.",
          "See what was sent and whether it was delivered.",
        ],
        benefits: [
          "In-app inbox with unread counts",
          "Branded emails",
          "Each person chooses which notices they receive",
          "Urgent alerts always delivered",
          "Delivery history",
          "Message templates the school can preview",
        ],
        story:
          "When the principal approves the lab chemicals, Mr Danjuma gets an in-app notice and an email with Bright Star's logo straight away. He never has to ask whether his request went through.",
        image: `${IMG}/notifications.jpg`,
      },
    ],
  },

  /* ─── 06 · Oversight & Control ─── */
  {
    id: "oversight-control",
    number: "06",
    name: "Oversight & Control",
    icon: "shield",
    summary: "Who can do what, who approved it, and what the numbers say.",
    image: `${IMG}/approval-inbox.jpg`,
    imageAlt: "XVS approval inbox listing requests waiting for a decision",
    services: [
      {
        id: "dashboards-analytics",
        name: "Dashboards & Operational Analytics",
        promise: "The whole school's health, on one screen.",
        forWho: "Owner, principal, bursar",
        problem: "To know how the school is doing, the owner asks four people for four reports and gets them next week.",
        steps: [
          "Sign in and see the dashboard for your role.",
          "Read fees collected, money owed, spending and pending approvals.",
          "Click any number to see what sits behind it.",
          "Compare branches side by side.",
        ],
        benefits: [
          "Finance dashboard and statements",
          "Fees owed, by class and by branch",
          "Procurement and spending insights",
          "Approvals waiting on you",
          "Team workload",
          "Money in and out, day by day",
        ],
        story:
          "Mr Adebayo opens XVS on Monday morning: fees collected last week at each branch, ₦2.1m still owed, and four purchase requests waiting for him. He approves two before his first meeting.",
        image: `${IMG}/finance-analytics.jpg`,
      },
      {
        id: "reporting-exports",
        name: "Reporting & Exports",
        promise: "Any report you need, in the format you need, when you need it.",
        forWho: "Bursar, principal, owner, auditors",
        problem: "Every report is a fresh spreadsheet built by hand, so the numbers never quite match the last time.",
        steps: [
          "Choose a report from the catalogue.",
          "Filter it and preview the results.",
          "Export it, or save it to run again next week.",
          "Share saved reports with colleagues.",
        ],
        benefits: [
          "A catalogue of ready-made reports",
          "Preview before you export",
          "Quick export to a spreadsheet",
          "Saved reports you can run again",
          "Secure downloads that expire",
          "A record of who downloaded what",
        ],
        story:
          "Every Friday the bursar runs her saved 'Debtors by class' report for both branches, downloads it and sends it to the principals, in under a minute.",
        image: `${IMG}/export-queue.jpg`,
      },
      {
        id: "workflow-approvals",
        name: "Workflow & Approval Engine",
        promise: "Approvals that follow your school's rules, not someone's memory.",
        forWho: "Owner, principal, bursar, anyone who approves",
        problem:
          "Approvals happen in passing. Nobody can say who approved a purchase, and when the principal travels, everything stops.",
        steps: [
          "Decide who approves what, and in what order.",
          "Each document goes to the right approvers by itself.",
          "Approvers approve, reject, or send it back with a comment.",
          "Delegate while you are away, and see what is waiting.",
        ],
        benefits: [
          "Approvals in several steps",
          "Rules by amount, department or branch",
          "Any one approver, a majority, or everyone",
          "Delegation while you are away",
          "Nothing goes through without an approver: it waits instead",
          "A full history of every decision",
        ],
        story:
          "At Bright Star, purchases over ₦1m need the bursar and then the owner. When Mr Adebayo is in Abuja for a week, he delegates to the principal, so requests keep moving and each decision is recorded against the person who made it.",
        image: `${IMG}/approval-inbox.jpg`,
      },
      {
        id: "roles-permissions",
        name: "Roles & Permissions",
        promise: "Everyone sees exactly what their job needs, and nothing more.",
        forWho: "School administrator, owner",
        problem: "Everyone shares the admin login, so anyone on the staff could open the fees ledger or a salary.",
        steps: [
          "Start from ready-made roles: bursar, teacher, branch admin and more.",
          "Adjust them, or build your own.",
          "Give each person a role for the whole school or for chosen branches.",
          "Decide which fields each role can see and change, such as salaries or medical notes.",
        ],
        benefits: [
          "Ready-made roles for a school",
          "Custom roles of your own",
          "Access for the whole school or for chosen branches",
          "Control down to individual fields",
          "Sensitive access changes go for approval first",
          "A history of every change to anyone's access",
        ],
        story:
          "Mrs Okafor is branch admin at Lekki. She manages Lekki's students and staff, but cannot see Ikeja's records or anyone's salary. When her role is given access to fees, the change goes for approval before it takes effect.",
        image: `${IMG}/roles.jpg`,
      },
      {
        id: "audit-activity-logging",
        name: "Audit & Activity Logging",
        promise: "Every action recorded: who, what and when.",
        forWho: "Owner, auditors, school administrator",
        problem: "A record changes and nobody knows who changed it, when, or why.",
        steps: [
          "XVS records every important action as it happens.",
          "Search by person, record, action or date.",
          "Open any record to see its full history.",
          "Export the trail for your auditors.",
        ],
        benefits: [
          "A searchable activity log",
          "Filters by person, module, action and outcome",
          "The full history of any single record",
          "Each person's own activity",
          "Compliance rules",
          "Exports for auditors",
        ],
        story:
          "A student's balance drops by ₦50,000 overnight. The owner searches the log and sees a credit note raised by the accounts officer at 4:12pm and approved by the bursar, with the reason: overpayment last term.",
        image: `${IMG}/audit-trail.jpg`,
      },
    ],
  },
];

/** Total number of services, e.g. for "24 services in 6 groups". */
export const SERVICE_COUNT = SERVICE_GROUPS.reduce((total, group) => total + group.services.length, 0);
