import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import { locations } from "../data/business";

export default function Locations() {
  return (
    <section id="locations" className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <h2 className="font-display font-black uppercase text-5xl md:text-6xl leading-[0.95] mb-14 max-w-xl">
          Find Us
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-paper-dim p-9 md:p-11"
            >
              <MapPin size={26} className="text-race-red mb-6" />
              <h3 className="font-display font-bold uppercase text-3xl tracking-tight mb-4">{loc.name}</h3>
              <address className="not-italic text-steel leading-relaxed mb-7">
                {loc.lines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm border-b-2 border-ink pb-1 hover:border-race-red hover:text-race-red transition-colors focus-ring"
              >
                Get Directions
                <ArrowUpRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
