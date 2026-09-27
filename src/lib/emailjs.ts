import emailjs from "@emailjs/browser";

/**
 * Sends the contact form through EmailJS.
 * The IDs come from the .env file (see docs/emailjs-setup.md).
 * Each key in `fields` becomes a {{variable}} in the EmailJS template.
 */
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_CONTACT = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export function sendContactEmail(fields: Record<string, string>) {
  return emailjs.send(SERVICE_ID, TEMPLATE_CONTACT, fields, { publicKey: PUBLIC_KEY });
}
