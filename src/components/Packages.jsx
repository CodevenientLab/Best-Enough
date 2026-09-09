import { motion } from "framer-motion";
import { Info } from "lucide-react";
import { packages, packageGuaranteeNote } from "../data/business";

function Rand(n) {
  return `R${n.toLocaleString("en-ZA")}`;
}

export default function Packages() {
  return (
    <section className="bg-charcoal text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-14 max-w-xl">
          <h2 className="font-display font-black uppercase text-5xl md:text-6xl leading-[0.95]">
            Full Packages
          </h2>
          <p className="text-white/65 mt-4 text-base leading-relaxed">
            25 lessons plus vehicle hire, bundled into one package.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-ink p-9 md:p-11 flex flex-col justify-between min-h-[260px] border border-white/10"
            >
              <div>
                <h3 className="font-display font-bold uppercase text-3xl tracking-tight mb-2">{pkg.name}</h3>
                <p className="text-white/60">{pkg.detail}</p>
              </div>
              <div className="mt-10 flex items-end justify-between">
                <span className="font-display font-black text-5xl tracking-tight text-race-red-bright">
                  {Rand(pkg.price)}
                </span>
                <a
                  href="#booking"
                  className="text-sm font-bold border border-white/25 hover:border-white/60 px-5 py-2.5 transition-colors focus-ring"
                >
                  Enquire
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex gap-3 text-sm text-white/55 max-w-2xl"
        >
          <Info size={18} className="shrink-0 mt-0.5" />
          <p>{packageGuaranteeNote}</p>
        </motion.div>
      </div>
    </section>
  );
}
