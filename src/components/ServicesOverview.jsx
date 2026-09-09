import { motion } from "framer-motion";
import { Car, Truck, BookOpen, KeyRound, Wrench } from "lucide-react";

const items = [
  {
    id: "code8",
    icon: Car,
    title: "Code 8",
    copy: "Professional light motor vehicle training.",
    span: "md:col-span-7",
    tone: "dark",
  },
  {
    id: "code10",
    icon: Truck,
    title: "Code 10",
    copy: "Training for larger vehicles and licence preparation.",
    span: "md:col-span-5",
    tone: "red",
  },
  {
    id: "learners",
    icon: BookOpen,
    title: "Learners",
    copy: "Learner licence preparation and classes.",
    span: "md:col-span-5",
    tone: "light",
  },
  {
    id: "car-hire",
    icon: KeyRound,
    title: "Car Hire",
    copy: "Vehicle hire for your licence test.",
    span: "md:col-span-3",
    tone: "light",
  },
  {
    id: "truck-hire",
    icon: Wrench,
    title: "Truck Hire",
    copy: "Truck hire for your Code 10 test.",
    span: "md:col-span-4",
    tone: "dark",
  },
];

const toneStyles = {
  dark: "bg-ink text-white",
  red: "bg-race-red text-white",
  light: "bg-white text-ink border border-paper-dim",
};

export default function ServicesOverview() {
  return (
    <section id="lessons" className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="font-display font-black uppercase text-5xl md:text-6xl leading-[0.95] max-w-xl">
            Choose Your Road
          </h2>
          <p className="text-steel max-w-sm text-base leading-relaxed">
            Five services, one driving school. Pick the licence class or vehicle hire that matches where you're headed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className={`${item.span} ${toneStyles[item.tone]} p-8 md:p-10 flex flex-col justify-between min-h-[220px]`}
              >
                <Icon size={30} strokeWidth={1.6} className={item.tone === "light" ? "text-race-red" : "text-white/90"} />
                <div className="mt-10">
                  <h3 className="font-display font-bold text-3xl uppercase tracking-tight mb-2">{item.title}</h3>
                  <p className={item.tone === "light" ? "text-steel" : "text-white/75"}>{item.copy}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
