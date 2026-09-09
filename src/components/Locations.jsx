import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import { locations } from "../data/business";

export default function Locations() {
  return (
    <section id="locations" className="section bg-white">
      <div className="container">
        <div className="section-intro">
          <div><p className="eyebrow">Come see us</p><h2 className="display-heading">Two places.<br /><span>Same goal.</span></h2></div>
          <p className="section-copy">Serving learners and drivers across Mmabatho and Mafikeng.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {locations.map((loc, i) => (
            <motion.article key={loc.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: i*.08 }} className="location-card">
              <div className="flex items-center justify-between">
                <span className="icon-box"><MapPin size={20} /></span>
                <span className="font-display text-5xl font-black text-black/[0.08]">0{i+1}</span>
              </div>
              <h3 className="mt-16 font-display text-4xl font-bold uppercase">{loc.name}</h3>
              <address className="mt-4 not-italic text-sm leading-6 text-steel">{loc.lines.map((line) => <div key={line}>{line}</div>)}</address>
              <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] hover:text-race-red">Get directions <ArrowUpRight size={15} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
