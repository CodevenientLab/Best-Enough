import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "../utils/whatsapp";
import heroPhoto from "../assets/photos/client-hero.webp";

export default function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay = 0) =>
    reduce ? {} : { initial: { opacity: 0, y: 22 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] } };

  return (
    <section id="home" className="hero relative min-h-[760px] overflow-hidden bg-ink text-white md:min-h-[850px]">
      <div className="absolute inset-0 bg-ink">
        <div className="absolute inset-0 md:left-[40%] md:w-[60%]">
          <img src={heroPhoto} alt="Best Enough student holding her driving licence beside a training vehicle" className="hero-photo h-full w-full object-cover object-[55%_48%]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/35 to-transparent md:from-ink md:via-ink/10 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-black/15" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-ink" />
      </div>

      <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-end px-5 pb-16 pt-32 md:min-h-[850px] md:px-8 md:pb-20">
        <div className="grid w-full items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8 xl:col-span-7">
            <motion.div {...enter(0)} className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-white/[0.65]">
              <span className="h-px w-10 bg-race-red" />
              Best Enough Driving School
            </motion.div>

            <motion.h1 {...enter(0.08)} className="font-display text-[4.5rem] font-black uppercase leading-[0.84] tracking-[-0.035em] sm:text-[5.8rem] md:text-[7.2rem] lg:text-[8.2rem]">
              Learn to
              <br />
              <span className="text-white">drive.</span>
              <br />
              <span className="text-race-red-bright">Drive with</span>
              <br />
              confidence.
            </motion.h1>

            <motion.p {...enter(0.2)} className="mt-7 max-w-xl text-base leading-7 text-white/[0.72] md:text-lg">
              Professional Code 8, Code 10 and learner licence training across Mmabatho and Mafikeng.
            </motion.p>

            <motion.div {...enter(0.3)} className="mt-8 flex flex-wrap gap-3">
              <a href="#booking" className="button button-red">
                Book a lesson <ArrowRight size={18} />
              </a>
              <a href={buildWhatsAppLink(defaultWhatsAppMessage)} target="_blank" rel="noopener noreferrer" className="button button-ghost">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div {...enter(0.38)} className="hidden justify-end lg:col-span-4 lg:flex">
            <div className="hero-note max-w-[250px] border-l border-white/[0.30] pl-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/[0.45]">Real roads. Real progress.</p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                From your first lesson to test day, choose the training and vehicle hire that fits your goal.
              </p>
              <a href="#students" className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-race-red-bright">
                Meet our students <ArrowDownRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 border-t border-white/[0.10] bg-ink/[0.70] backdrop-blur-sm">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 md:grid-cols-5">
          {["Code 8", "Code 10", "Learners", "Car Hire", "Truck Hire"].map((item, i) => (
            <div key={item} className={`px-5 py-4 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-white/[0.55] md:px-6 ${i < 4 ? "border-r border-white/[0.10]" : ""} ${i === 2 ? "border-r border-white/[0.10]" : ""}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
