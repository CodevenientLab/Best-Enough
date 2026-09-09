import { motion } from "framer-motion";
import { valueProps } from "../data/business";

export default function WhyUs() {
  return (
    <section className="bg-ink text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <h2 className="font-display font-black uppercase text-5xl md:text-6xl leading-[0.95]">
              More Than A
              <br />
              Driving Lesson.
            </h2>
          </div>
          <div className="space-y-8">
            {valueProps.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="pb-8 border-b border-white/10 last:border-none last:pb-0"
              >
                <h3 className="font-display font-bold uppercase text-2xl tracking-tight mb-2 text-race-red-bright">
                  {v.title}
                </h3>
                <p className="text-white/70 leading-relaxed max-w-md">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
