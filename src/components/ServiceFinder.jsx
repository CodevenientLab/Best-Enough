import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, RotateCcw } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

const primaryOptions = [
  { id: "learners", label: "Learner's licence" },
  { id: "code8", label: "Code 8" },
  { id: "code10", label: "Code 10" },
  { id: "car-hire", label: "Car hire" },
  { id: "truck-hire", label: "Truck hire" },
];

const lessonVolume = [
  { id: "1", label: "1 hour, to start" },
  { id: "5", label: "5 hours" },
  { id: "10", label: "10 hours" },
  { id: "package", label: "The full package" },
];

const recommendationCopy = {
  learners: () => "Best Enough offers Learner's licence classes covering all codes, for R1,000.",
  "car-hire": () => "Best Enough offers car hire for your test at R650.",
  "truck-hire": () => "Best Enough offers truck hire for your test at R750.",
  code8: (vol) => {
    if (vol === "package") return "The Code 8 Package covers 25 lessons plus car hire for R5,500.";
    const map = { "1": "R250 for 1 hour", "5": "R1,250 for 5 hours", "10": "R2,500 for 10 hours" };
    return `Code 8 lessons are ${map[vol] || "available hourly"}.`;
  },
  code10: (vol) => {
    if (vol === "package") return "The Code 10 Package covers 25 lessons plus car & truck hire for R6,500.";
    const map = { "1": "R300 for 1 hour", "5": "R1,500 for 5 hours", "10": "R3,000 for 10 hours" };
    return `Code 10 lessons are ${map[vol] || "available hourly"}.`;
  },
};

const needsVolume = (id) => id === "code8" || id === "code10";

export default function ServiceFinder() {
  const [service, setService] = useState(null);
  const [volume, setVolume] = useState(null);

  const done = service && (!needsVolume(service) || volume);

  const summary = useMemo(() => {
    if (!done) return "";
    const label = primaryOptions.find((o) => o.id === service)?.label;
    return `Hi Best Enough Driving School, I'd like to enquire about ${label}${
      needsVolume(service) && volume && volume !== "package" ? ` (${volume} hour${volume === "1" ? "" : "s"})` : ""
    }${volume === "package" ? " Package" : ""}.`;
  }, [service, volume, done]);

  const recommendation = useMemo(() => {
    if (!done) return "";
    return recommendationCopy[service](volume);
  }, [service, volume, done]);

  const reset = () => {
    setService(null);
    setVolume(null);
  };

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-black uppercase text-4xl md:text-5xl leading-[0.95]">
            Not Sure Where To Start?
          </h2>
          <p className="text-steel mt-4">Answer two quick questions and we'll point you to the right service.</p>
        </div>

        <div className="bg-paper p-7 md:p-12 border border-paper-dim">
          <AnimatePresence mode="wait">
            {!service && (
              <motion.div key="q1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="font-display font-bold uppercase text-xl tracking-tight mb-6">
                  What are you looking for?
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {primaryOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setService(opt.id)}
                      className="text-left bg-white hover:bg-ink hover:text-white border border-paper-dim px-5 py-4 font-semibold transition-colors focus-ring"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {service && needsVolume(service) && !volume && (
              <motion.div key="q2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <p className="font-display font-bold uppercase text-xl tracking-tight mb-6">
                  How much time do you need?
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {lessonVolume.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setVolume(opt.id)}
                      className="text-left bg-white hover:bg-ink hover:text-white border border-paper-dim px-5 py-4 font-semibold transition-colors focus-ring"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <button
                  onClick={reset}
                  className="mt-6 inline-flex items-center gap-2 text-sm text-steel hover:text-ink font-semibold focus-ring"
                >
                  <RotateCcw size={15} /> Start over
                </button>
              </motion.div>
            )}

            {done && (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-race-red mb-3">Your Next Step</p>
                <p className="text-xl md:text-2xl font-semibold leading-snug mb-8">{recommendation}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={buildWhatsAppLink(summary)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1fb958] text-white font-bold px-6 py-3.5 transition-colors focus-ring"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Best Enough
                  </a>
                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-2 border border-paper-dim hover:border-steel px-6 py-3.5 font-semibold transition-colors focus-ring"
                  >
                    <RotateCcw size={16} /> Start over
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
