import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "../utils/whatsapp";
import { LogoMark } from "./Logo";

export default function FinalCTA() {
  return (
    <section className="relative bg-ink text-white py-28 md:py-40 overflow-hidden">
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 opacity-[0.08] pointer-events-none">
        <LogoMark size={520} />
      </div>
      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-black uppercase text-5xl sm:text-6xl md:text-7xl leading-[0.92]"
        >
          Ready To Hit
          <br />
          The Road?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/65 text-lg mt-6"
        >
          Your first lesson is one decision away.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="group inline-flex items-center gap-2 bg-race-red hover:bg-race-red-bright text-white font-bold px-8 py-4 transition-colors focus-ring"
          >
            Book a Lesson
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href={buildWhatsAppLink(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white font-bold px-8 py-4 transition-colors focus-ring"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
