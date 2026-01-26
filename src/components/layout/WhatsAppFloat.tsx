const PHONE_E164 = "+250780515771";
const WHATSAPP_LINK = `https://wa.me/${PHONE_E164.replace("+", "")}?text=${encodeURIComponent(
  "Hi Joel, I saw your portfolio and would like to connect.",
)}`;

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
    >
      {/* Simple WhatsApp-like icon (SVG) */}
      <svg
        viewBox="0 0 32 32"
        width="22"
        height="22"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19.11 17.23c-.25-.12-1.47-.73-1.7-.81-.23-.08-.4-.12-.57.13-.17.25-.65.81-.8.97-.15.17-.29.19-.54.06-.25-.12-1.03-.38-1.96-1.22-.72-.64-1.2-1.43-1.34-1.68-.14-.25-.02-.38.11-.51.11-.11.25-.29.38-.43.12-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.78-1.88-.2-.48-.41-.41-.57-.42l-.48-.01c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.15 0 1.27.93 2.5 1.06 2.67.12.17 1.83 2.8 4.43 3.93.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
        <path d="M26.67 5.33C23.7 2.36 19.9.72 15.99.72 8.02.72 1.54 7.2 1.54 15.17c0 2.55.67 5.03 1.94 7.22L1.4 31.28l9.11-2.39c2.12 1.16 4.51 1.77 6.96 1.77h.01c7.97 0 14.45-6.48 14.45-14.45 0-3.91-1.64-7.71-4.26-10.88zm-10.68 23.1h-.01c-2.17 0-4.29-.58-6.15-1.68l-.44-.26-5.4 1.42 1.44-5.26-.29-.46c-1.22-1.94-1.87-4.19-1.87-6.52C3.27 8.5 9.32 2.45 15.99 2.45c3.24 0 6.29 1.26 8.58 3.55 2.29 2.29 3.55 5.34 3.55 8.58 0 6.67-6.05 12.72-12.73 12.72z" />
      </svg>
    </a>
  );
}
