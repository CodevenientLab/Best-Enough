import { business } from "../data/business";

/**
 * Build a wa.me deep link with a pre-filled message.
 * @param {string} message
 * @returns {string}
 */
export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsAppMessage =
  "Hi Best Enough Driving School, I'd like to enquire about driving lessons.";
