import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "../utils/whatsapp";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-race-red py-24 text-white md:py-32">
      <div className="absolute -right-16 -top-20 font-display text-[18rem] font-black leading-none text-black/10">BE</div>
      <div className="container relative">
        <div className="max-w-4xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/[0.65]">Best Enough Driving School</p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 font-display text-[4.5rem] font-black uppercase leading-[.82] tracking-[-.03em] sm:text-7xl md:text-8xl">Your licence<br />starts here.</motion.h2>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/[0.75]">Book a lesson in Mmabatho or Mafikeng, or speak to Best Enough directly on WhatsApp.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#booking" className="button button-white">Book a lesson <ArrowRight size={18} /></a>
            <a href={buildWhatsAppLink(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer" className="button border border-white/[0.35] bg-transparent text-white hover:bg-white hover:text-race-red"><MessageCircle size={18} /> WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
