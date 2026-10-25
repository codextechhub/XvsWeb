import { track } from "../lib/analytics";
import { COMPANY } from "./navigation";

/**
 * The green "Chat with us" button in the bottom corner of every page.
 * ✏️ Hidden until a number is set in navigation.ts → COMPANY.whatsapp.
 *    Styles: layout.css → "WhatsApp button".
 */
export default function WhatsAppButton() {
  if (!COMPANY.whatsapp) return null;
  const href = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(COMPANY.whatsappMessage)}`;
  return (
    <a
      className="whatsapp-button"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onClick={() => track("WhatsApp click", { from: window.location.pathname })}
    >
      <svg viewBox="0 0 32 32" width="26" height="26" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16 3C9 3 3.3 8.6 3.3 15.6c0 2.5.7 4.8 2 6.8L3 29l6.8-2.2a12.8 12.8 0 0 0 6.2 1.6c7 0 12.7-5.7 12.7-12.7S23 3 16 3Zm0 23.2c-2 0-3.9-.6-5.6-1.6l-.4-.2-4 1.3 1.3-3.9-.3-.4a10.4 10.4 0 0 1-1.7-5.8C5.3 9.9 10.1 5.2 16 5.2s10.6 4.7 10.6 10.6S21.9 26.2 16 26.2Zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6.3-.5v-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 2.5 1 3 .8 3.6.8.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5 0-.2-.3-.3-.6-.4Z"
        />
      </svg>
      <span>Chat with us</span>
    </a>
  );
}
