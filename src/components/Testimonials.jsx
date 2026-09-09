import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="bg-charcoal text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2 className="font-display font-black uppercase text-5xl md:text-6xl leading-[0.95] mb-14 max-w-xl">
          Hear From Our Students
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-ink border border-white/10 border-dashed p-8 flex flex-col justify-between min-h-[220px]"
            >
              <Quote size={26} className="text-white/25" />
              <div className="mt-8">
                <p className="text-white/45 italic">Student testimonial to be added by Best Enough Driving School.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
