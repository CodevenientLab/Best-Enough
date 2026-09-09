import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, CarFront, KeyRound, Truck } from "lucide-react";
import { services } from "../data/business";

const icons = { code8: CarFront, code10: Truck, learners: BookOpen, "car-hire": KeyRound, "truck-hire": Truck };

export default function ServicesOverview() {
  return (
    <section id="lessons" className="section paper-grid">
      <div className="container">
        <div className="section-intro">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="display-heading">One school.<br /><span>Every step.</span></h2>
          </div>
          <p className="section-copy">Whether you're starting with your learner's licence or preparing for a driving test, Best Enough keeps the process simple.</p>
        </div>

        <div className="grid gap-px overflow-hidden border border-black/[0.10] bg-black/10 md:grid-cols-12">
          {services.map((service, i) => {
            const Icon = icons[service.id];
            const wide = i === 0 || i === 1;
            return (
              <motion.a
                key={service.id}
                href="#booking"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`service-card group ${wide ? "md:col-span-6" : "md:col-span-4"}`}
              >
                <div className="flex items-start justify-between">
                  <span className="service-index">0{i + 1}</span>
                  <span className="icon-box"><Icon size={22} strokeWidth={1.7} /></span>
                </div>
                <div className="mt-20">
                  <h3 className="font-display text-4xl font-bold uppercase tracking-tight">{service.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-steel">{service.description}</p>
                </div>
                <span className="absolute bottom-8 right-8 flex h-9 w-9 items-center justify-center border border-black/[0.10] transition-all duration-300 group-hover:border-race-red group-hover:bg-race-red group-hover:text-white">
                  <ArrowUpRight size={17} />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
