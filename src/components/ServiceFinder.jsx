import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MessageCircle, RotateCcw } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

const options = [
  { id: "learners", label: "Learner's licence" },
  { id: "code8", label: "Code 8 lessons" },
  { id: "code10", label: "Code 10 lessons" },
  { id: "car-hire", label: "Car hire" },
  { id: "truck-hire", label: "Truck hire" },
];
const volumes = [
  { id: "1", label: "1 hour" },
  { id: "5", label: "5 hours" },
  { id: "10", label: "10 hours" },
  { id: "package", label: "Full package" },
];

const needsVolume = (id) => id === "code8" || id === "code10";
const resultFor = (service, volume) => {
  if (service === "learners") return "Learner's licence classes covering all codes are R1,000.";
  if (service === "car-hire") return "Car hire for your test is R650.";
  if (service === "truck-hire") return "Truck hire for your test is R750.";
  if (service === "code8") return volume === "package" ? "The Code 8 Package is R5,500 for 25 lessons + car hire." : `Code 8: ${volume === "1" ? "R250 for 1 hour" : volume === "5" ? "R1,250 for 5 hours" : "R2,500 for 10 hours"}.`;
  return volume === "package" ? "The Code 10 Package is R6,500 for 25 lessons + car & truck hire." : `Code 10: ${volume === "1" ? "R300 for 1 hour" : volume === "5" ? "R1,500 for 5 hours" : "R3,000 for 10 hours"}.`;
};

export default function ServiceFinder() {
  const [service, setService] = useState("");
  const [volume, setVolume] = useState("");
  const done = service && (!needsVolume(service) || volume);

  const summary = useMemo(() => {
    if (!done) return "";
    const label = options.find((o) => o.id === service)?.label;
    return `Hi Best Enough Driving School, I'd like to enquire about ${label}${needsVolume(service) && volume === "package" ? " Package" : ""}.`;
  }, [done, service, volume]);

  const reset = () => { setService(""); setVolume(""); };

  return (
    <section className="section bg-paper">
      <div className="container">
        <div className="finder-shell">
          <div className="finder-copy">
            <p className="eyebrow">Your shortcut</p>
            <h2 className="font-display text-5xl font-black uppercase leading-[.88] tracking-[-.02em] md:text-6xl">Not sure<br />where to<br /><span>start?</span></h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/[0.55]">Tell us what you're trying to do. We'll point you toward the right service and price.</p>
          </div>

          <div className="finder-panel">
            <AnimatePresence mode="wait">
              {!service && (
                <motion.div key="service" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}>
                  <p className="finder-step">01 / What do you need?</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {options.map((option) => <button key={option.id} onClick={() => setService(option.id)} className="finder-option">{option.label}<ArrowRight size={16} /></button>)}
                  </div>
                </motion.div>
              )}
              {service && needsVolume(service) && !volume && (
                <motion.div key="volume" initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }}>
                  <p className="finder-step">02 / How much training?</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {volumes.map((option) => <button key={option.id} onClick={() => setVolume(option.id)} className="finder-option">{option.label}<ArrowRight size={16} /></button>)}
                  </div>
                  <button onClick={reset} className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/[0.45] hover:text-white"><RotateCcw size={14} /> Start over</button>
                </motion.div>
              )}
              {done && (
                <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <p className="finder-step text-race-red-bright">Your next step</p>
                  <p className="mt-3 max-w-xl font-display text-4xl font-bold uppercase leading-none md:text-5xl">{resultFor(service, volume)}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={buildWhatsAppLink(summary)} target="_blank" rel="noopener noreferrer" className="button button-green"><MessageCircle size={18} /> WhatsApp Best Enough</a>
                    <button onClick={reset} className="button button-dark-ghost"><RotateCcw size={16} /> Start over</button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
