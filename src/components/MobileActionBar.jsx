import { Calendar, MessageCircle, Phone } from "lucide-react";
import { business } from "../data/business";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "../utils/whatsapp";

export default function MobileActionBar() {
  return <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 border-t border-white/[0.10] bg-ink/[0.95] pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
    <a href={business.phoneHref} className="mobile-action"><Phone size={18} /><span>Call</span></a>
    <a href={buildWhatsAppLink(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer" className="mobile-action border-x border-white/[0.10]"><MessageCircle size={18} /><span>WhatsApp</span></a>
    <a href="#booking" className="mobile-action bg-race-red text-white"><Calendar size={18} /><span>Book</span></a>
  </div>;
}
