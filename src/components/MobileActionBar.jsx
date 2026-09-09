import { Phone, MessageCircle, Calendar } from "lucide-react";
import { business } from "../data/business";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "../utils/whatsapp";

export default function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-ink border-t border-white/10 grid grid-cols-3 pb-[env(safe-area-inset-bottom)]">
      <a
        href={business.phoneHref}
        className="flex flex-col items-center justify-center gap-1 py-3 text-white/85 active:bg-white/5 focus-ring"
      >
        <Phone size={19} />
        <span className="text-[11px] font-semibold tracking-wide">Call</span>
      </a>
      <a
        href={buildWhatsAppLink(defaultWhatsAppMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 py-3 text-white/85 border-x border-white/10 active:bg-white/5 focus-ring"
      >
        <MessageCircle size={19} />
        <span className="text-[11px] font-semibold tracking-wide">WhatsApp</span>
      </a>
      <a
        href="#booking"
        className="flex flex-col items-center justify-center gap-1 py-3 bg-race-red text-white active:bg-race-red-deep focus-ring"
      >
        <Calendar size={19} />
        <span className="text-[11px] font-semibold tracking-wide">Book</span>
      </a>
    </div>
  );
}
