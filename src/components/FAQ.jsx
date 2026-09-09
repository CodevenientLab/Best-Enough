import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "../data/business";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <h2 className="font-display font-black uppercase text-5xl md:text-6xl leading-[0.95] mb-14 text-center">
          Frequently Asked
        </h2>

        <div className="border-t border-paper-dim">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q} className="border-b border-paper-dim">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-6 text-left focus-ring"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold uppercase text-lg md:text-xl tracking-tight">
                    {item.q}
                  </span>
                  <Plus
                    size={20}
                    className={`shrink-0 transition-transform duration-300 text-race-red ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="text-steel leading-relaxed pb-6 max-w-xl">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
