import { motion } from "framer-motion";
import { journeySteps } from "../data/business";

export default function Journey() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2 className="font-display font-black uppercase text-5xl md:text-6xl leading-[0.95] max-w-xl mb-16">
          The Driving Journey
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute left-0 right-0 top-[26px] h-px bg-paper-dim" />
          <div className="grid md:grid-cols-5 gap-10 md:gap-6">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative z-10 w-[52px] h-[52px] rounded-full bg-ink text-white flex items-center justify-center font-display font-bold text-lg">
                  {step.id}
                </div>
                <h3 className="font-display font-bold uppercase text-2xl tracking-tight mt-6 mb-2">
                  {step.title}
                </h3>
                <p className="text-steel text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
