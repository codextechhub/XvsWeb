/**
 * ✏️ How each service's own page (/services/<id>) is named for Google and AI search.
 *
 *   title       the page heading's search name: the words a school owner or
 *               bursar would actually type, e.g. "school fees billing software"
 *   also        other names people use for the same thing; these appear on the
 *               page ("Also known as") so searches for them find it too
 *
 * The page text itself comes from ./content.ts. A service missing here
 * falls back to "<Service name> for schools".
 */
import { SERVICE_GROUPS } from "./content";

/** Every service with the group it belongs to, for /services/<id>. */
export const ALL_SERVICES = SERVICE_GROUPS.flatMap((group) => group.services.map((service) => ({ service, group })));

export const SERVICE_SEARCH: Record<string, { title: string; also: string[] }> = {
  "school-branch-management": {
    title: "Multi-branch school management software",
    also: ["school group management", "multi-campus school software", "branch administration"],
  },
  "student-management": {
    title: "Student information system for schools",
    also: ["student records software", "admissions management", "student database", "SIS"],
  },
  "staff-management": {
    title: "School staff management software",
    also: ["teacher records", "school HR software", "staff directory"],
  },
  "identity-team-organogram": {
    title: "School staff accounts and organogram",
    also: ["staff logins", "reporting lines", "school organisational chart"],
  },
  "academic-structure": {
    title: "School academic structure setup",
    also: ["classes and arms", "sessions and terms", "subjects setup", "school calendar setup"],
  },
  "timetable-calendar": {
    title: "School timetable software with clash detection",
    also: ["timetable generator", "school calendar", "exam timetable"],
  },
  "attendance-management": {
    title: "School attendance management software",
    also: ["digital class register", "attendance tracking", "absence alerts for parents"],
  },
  "gradebook-assessments": {
    title: "Result computation and report card software",
    also: ["school result processing", "gradebook", "report card generator", "CA and exam scores"],
  },
  "billing-invoicing": {
    title: "School fees billing and invoicing software",
    also: ["school fees management", "fee invoices", "school billing system"],
  },
  "payments-collections": {
    title: "Online school fees payment and collection",
    also: ["Paystack school fees", "bank transfer reconciliation", "fee receipts"],
  },
  "finance-accounting": {
    title: "School accounting software",
    also: ["school bookkeeping", "general ledger for schools", "bank reconciliation", "financial statements"],
  },
  "adjustments-concessions": {
    title: "School fee discounts, scholarships and concessions",
    also: ["sibling discounts", "scholarship management", "credit notes", "fee write-offs"],
  },
  "vendor-management": {
    title: "Supplier and vendor management for schools",
    also: ["school suppliers", "vendor database"],
  },
  "procurement-requisitions": {
    title: "School procurement and purchase requisition software",
    also: ["purchase requests", "school purchasing", "procurement approvals"],
  },
  "purchase-orders-delivery-ap": {
    title: "Purchase orders, deliveries and supplier bills for schools",
    also: ["goods received notes", "accounts payable", "supplier payments"],
  },
  "inventory-stock-ledger": {
    title: "School inventory and store management",
    also: ["stock control", "school store keeping", "stock ledger"],
  },
  "parent-portal": {
    title: "Parent portal and app for schools",
    also: ["parent app", "school app for parents", "pay school fees online", "check results online"],
  },
  "student-portal": {
    title: "Student portal and app",
    also: ["student app", "result checker", "school portal for students", "online timetable"],
  },
  "notifications-delivery": {
    title: "School notifications and parent communication",
    also: ["school email alerts", "parent notifications", "push notifications"],
  },
  "dashboards-analytics": {
    title: "School dashboards and analytics",
    also: ["school performance dashboard", "fee collection analytics", "school reports"],
  },
  "reporting-exports": {
    title: "School reports and data exports",
    also: ["export to Excel", "financial reports", "school data export"],
  },
  "workflow-approvals": {
    title: "Approval workflows for schools",
    also: ["approval routing", "multi-level approvals", "delegation"],
  },
  "roles-permissions": {
    title: "Role-based access for school staff",
    also: ["user permissions", "access control", "branch-level access"],
  },
  "audit-activity-logging": {
    title: "Audit trail and activity log for schools",
    also: ["activity history", "change log", "audit log"],
  },
};

/** The search name and description for a service's own page. */
export function serviceMeta(service: { id: string; name: string; promise: string; problem: string }) {
  const search = SERVICE_SEARCH[service.id];
  const heading = search?.title ?? `${service.name} for schools`;
  const description = `${service.promise} ${service.problem}`.replace(/\*/g, "");
  return {
    path: `/services/${service.id}`,
    title: `${heading} | XVS`,
    heading,
    also: search?.also ?? [],
    // Search results show about 155 characters
    description: description.length > 155 ? `${description.slice(0, description.lastIndexOf(" ", 152))}…` : description,
  };
}
