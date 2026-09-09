import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "../utils/whatsapp";

export default function WhatsAppFloat() {
  return <a href={buildWhatsAppLink(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer" aria-label="Message Best Enough Driving School on WhatsApp" className="hidden lg:flex fixed bottom-7 right-7 z-40 items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white shadow-2xl transition-transform hover:-translate-y-1 focus-ring"><MessageCircle size={19} /> WhatsApp</a>;
}
