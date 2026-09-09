import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "../utils/whatsapp";

export default function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppLink(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex fixed bottom-8 right-8 z-40 items-center gap-2 bg-[#25D366] hover:bg-[#1fb958] text-white font-bold text-sm pl-4 pr-5 py-3.5 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5 focus-ring"
      aria-label="Message Best Enough Driving School on WhatsApp"
    >
      <MessageCircle size={20} />
      WhatsApp Us
    </a>
  );
}
