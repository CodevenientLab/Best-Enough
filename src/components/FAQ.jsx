import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/business";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section bg-white">
      <div className="container max-w-4xl">
        <div className="mb-12 text-center"><p className="eyebrow">Good to know</p><h2 className="display-heading">Questions,<br /><span>answered.</span></h2></div>
        <div className="border-t border-black/[0.10]">
          {faqs.map((item, i) => {
            const active = open === i;
            return <div key={item.q} className="border-b border-black/[0.10]">
              <button onClick={() => setOpen(active ? -1 : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left focus-ring" aria-expanded={active}>
                <span className="font-display text-xl font-bold uppercase md:text-2xl">{item.q}</span>
                <Plus size={19} className={`shrink-0 text-race-red transition-transform duration-300 ${active ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence initial={false}>{active && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden"><p className="max-w-2xl pb-6 text-sm leading-7 text-steel">{item.a}</p></motion.div>}</AnimatePresence>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}
