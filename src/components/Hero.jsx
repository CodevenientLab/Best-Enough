import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "../utils/whatsapp";
import { LogoMark } from "./Logo";

const pills = ["Code 8", "Code 10", "Learners", "Car Hire", "Truck Hire"];

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section id="home" className="relative bg-ink text-white overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* abstract road-perspective backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute -right-40 top-0 h-full w-[900px] opacity-[0.16] md:opacity-[0.22]"
          viewBox="0 0 900 900"
          fill="none"
          aria-hidden="true"
        >
          <path d="M450 0 L900 900 M450 0 L0 900 M450 0 L650 900 M450 0 L250 900" stroke="#EF3441" strokeWidth="1.5" />
        </svg>
        <div className="absolute -right-24 top-1/2 -translate-y-1/2 opacity-[0.08]">
          <LogoMark size={640} />
        </div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-ink to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl">
          <motion.p
            {...fadeUp(0)}
            className="text-race-red-bright font-bold tracking-[0.25em] text-xs md:text-sm mb-5"
          >
            MMABATHO &amp; MAFIKENG
          </motion.p>

          <motion.h1
            {...fadeUp(0.08)}
            className="font-display font-black uppercase leading-[0.92] tracking-tight text-6xl sm:text-7xl md:text-8xl"
          >
            Your Licence.
            <br />
            <span className="text-race-red-bright">Your Freedom.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-7 text-lg text-white/70 max-w-md leading-relaxed">
            Professional driving lessons and learner training in Mmabatho &amp; Mafikeng.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 bg-race-red hover:bg-race-red-bright text-white font-bold px-7 py-4 transition-colors focus-ring"
            >
              Book a Lesson
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={buildWhatsAppLink(defaultWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 text-white font-bold px-7 py-4 transition-colors focus-ring"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2">
            {pills.map((p, i) => (
              <span key={p} className="flex items-center gap-3">
                <span className="text-sm font-semibold text-white/65">{p}</span>
                {i < pills.length - 1 && <span className="text-race-red-bright/70">•</span>}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
