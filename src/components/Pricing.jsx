import { motion } from "framer-motion";
import { pricing } from "../data/business";

function Rand(n) {
  return `R${n.toLocaleString("en-ZA")}`;
}

const columns = [
  { key: "code8", title: "Code 8", rows: pricing.code8, tone: "light" },
  { key: "code10", title: "Code 10", rows: pricing.code10, tone: "dark" },
  { key: "learners", title: "Learners", rows: pricing.learners, tone: "light" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14 max-w-xl">
          <h2 className="font-display font-black uppercase text-5xl md:text-6xl leading-[0.95]">Lesson Pricing</h2>
          <p className="text-steel mt-4 text-base leading-relaxed">
            Straightforward, hourly pricing for every licence class — book as few or as many hours as you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {columns.map((col, i) => (
            <motion.div
              key={col.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={
                col.tone === "dark"
                  ? "bg-ink text-white p-8 md:p-9"
                  : "bg-paper text-ink p-8 md:p-9 border border-paper-dim"
              }
            >
              <h3 className="font-display font-bold uppercase text-2xl tracking-tight mb-6">{col.title}</h3>
              <ul className="space-y-4">
                {col.rows.map((row) => (
                  <li
                    key={row.label}
                    className={`flex items-baseline justify-between pb-4 border-b ${
                      col.tone === "dark" ? "border-white/15" : "border-paper-dim"
                    }`}
                  >
                    <span className={col.tone === "dark" ? "text-white/70" : "text-steel"}>{row.label}</span>
                    <span className="font-display font-bold text-3xl tracking-tight">{Rand(row.price)}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="bg-race-red text-white p-8 md:p-9 flex items-center justify-between"
          >
            <h3 className="font-display font-bold uppercase text-2xl tracking-tight">Car Hire</h3>
            <span className="font-display font-bold text-3xl tracking-tight">{Rand(pricing.carHire.price)}</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-charcoal text-white p-8 md:p-9 flex items-center justify-between"
          >
            <h3 className="font-display font-bold uppercase text-2xl tracking-tight">Truck Hire</h3>
            <span className="font-display font-bold text-3xl tracking-tight">{Rand(pricing.truckHire.price)}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
