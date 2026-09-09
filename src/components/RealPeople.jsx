import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clientA from "../assets/photos/client-a.jpg";
import clientB from "../assets/photos/client-b.jpg";
import clientC from "../assets/photos/client-c.jpg";

export default function RealPeople() {
  return (
    <section id="students" className="section bg-white overflow-hidden">
      <div className="container">
        <div className="mb-14 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Proof, not promises</p>
            <h2 className="display-heading">Real people.<br /><span>Real progress.</span></h2>
          </div>
          <p className="section-copy md:col-span-4 md:col-start-9">These photographs are from Best Enough students who completed their training and are pictured with their licences.</p>
        </div>

        <div className="grid gap-3 md:grid-cols-12 md:grid-rows-[250px_250px]">
          <motion.figure initial={{ opacity: 0, scale: .985 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .7 }} className="photo-card md:col-span-7 md:row-span-2">
            <img src={clientA} alt="Best Enough student holding her driving licence beside a training vehicle" className="h-full w-full object-cover object-[52%_46%]" loading="eager" />
            <figcaption><span>Student</span><strong>Licence in hand.</strong></figcaption>
          </motion.figure>
          <motion.figure initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .1 }} className="photo-card md:col-span-5">
            <img src={clientB} alt="Best Enough student holding her licence beside the training truck" className="h-full w-full object-cover object-[50%_42%]" loading="lazy" />
            <figcaption><span>Code 10</span><strong>Ready for the road.</strong></figcaption>
          </motion.figure>
          <motion.figure initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6, delay: .18 }} className="photo-card md:col-span-5">
            <img src={clientC} alt="Best Enough student holding his driving licence beside a training vehicle" className="h-full w-full object-cover object-[50%_40%]" loading="lazy" />
            <figcaption><span>Student</span><strong>Another licence earned.</strong></figcaption>
          </motion.figure>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/[0.10] pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-steel">Your progress should look this good.</p>
          <a href="#booking" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] hover:text-race-red">Start yours <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}
