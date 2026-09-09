import { motion } from "framer-motion";
import { ArrowUpRight, Check, Info } from "lucide-react";
import { packages, packageGuaranteeNote } from "../data/business";

const rand = (n) => `R${n.toLocaleString("en-ZA")}`;

export default function Packages() {
  return (
    <section className="section bg-ink text-white">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="eyebrow !text-race-red-bright">Go all in</p>
            <h2 className="display-heading !text-white">The package<br /><span>route.</span></h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/[0.55]">If you want a structured run at your licence, the full packages bundle 25 lessons with the relevant vehicle hire.</p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-3 md:grid-cols-2">
              {packages.map((pkg, i) => (
                <motion.article
                  key={pkg.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`package-card ${i === 1 ? "package-card-accent" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/[0.40]">25 lessons</span>
                    <ArrowUpRight size={18} className="text-white/[0.35]" />
                  </div>
                  <h3 className="mt-10 font-display text-3xl font-bold uppercase">{pkg.name.replace(" Package", "")}<br />Package</h3>
                  <p className="mt-2 text-sm text-white/50">{pkg.detail}</p>
                  <div className="mt-12 flex items-end justify-between border-t border-white/[0.10] pt-5">
                    <strong className="font-display text-5xl font-black text-race-red-bright">{rand(pkg.price)}</strong>
                    <a href="#booking" className="text-xs font-bold uppercase tracking-wider text-white hover:text-race-red-bright">Enquire</a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex max-w-3xl gap-3 border-t border-white/[0.10] pt-6 text-xs leading-6 text-white/[0.40]">
          <Info size={16} className="mt-1 shrink-0" />
          <p>{packageGuaranteeNote}</p>
        </div>
      </div>
    </section>
  );
}
