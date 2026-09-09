import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { pricing } from "../data/business";

const rand = (n) => `R${n.toLocaleString("en-ZA")}`;

export default function Pricing() {
  const groups = [
    { title: "Code 8", sub: "Light motor vehicle", rows: pricing.code8, featured: false },
    { title: "Code 10", sub: "Larger vehicle training", rows: pricing.code10, featured: true },
    { title: "Learners", sub: "All codes", rows: pricing.learners, featured: false },
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container">
        <div className="section-intro items-end">
          <div>
            <p className="eyebrow">Straightforward pricing</p>
            <h2 className="display-heading">Know the<br /><span>number.</span></h2>
          </div>
          <p className="section-copy">Start with an hour, build up your hours, or move straight into a full package. No complicated pricing maze.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {groups.map((group, i) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`price-card ${group.featured ? "price-card-featured" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow !text-[10px]">{group.sub}</p>
                  <h3 className="mt-2 font-display text-4xl font-bold uppercase">{group.title}</h3>
                </div>
                {group.featured && <span className="rounded-full bg-race-red px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white">Popular</span>}
              </div>

              <div className="mt-10">
                {group.rows.map((row) => (
                  <div key={row.label} className="flex items-end justify-between border-b border-black/[0.10] py-4 first:pt-0 last:border-0">
                    <span className="text-sm text-steel">{row.label}</span>
                    <span className="font-display text-3xl font-bold">{rand(row.price)}</span>
                  </div>
                ))}
              </div>

              <a href="#booking" className={`mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${group.featured ? "text-white" : "text-ink"} hover:text-race-red`}>
                Enquire <ArrowRight size={15} />
              </a>
            </motion.article>
          ))}
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="flex items-center justify-between bg-paper px-7 py-6">
            <div><p className="eyebrow !text-[9px]">For test day</p><h3 className="mt-1 font-display text-2xl font-bold uppercase">Car hire</h3></div>
            <strong className="font-display text-3xl">R650</strong>
          </div>
          <div className="flex items-center justify-between bg-ink px-7 py-6 text-white">
            <div><p className="eyebrow !text-[9px] !text-white/[0.45]">For test day</p><h3 className="mt-1 font-display text-2xl font-bold uppercase">Truck hire</h3></div>
            <strong className="font-display text-3xl text-race-red-bright">R750</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
