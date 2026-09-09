import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import teamPhoto from "../assets/photos/team.jpg";

export default function TeamSection() {
  return (
    <section className="section bg-paper">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: .6 }} className="lg:col-span-5">
            <p className="eyebrow">The people behind it</p>
            <h2 className="display-heading">Local.<br /><span>Hands-on.</span></h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-steel">Best Enough operates in Mmabatho and Mafikeng, helping learners put the fundamentals into practice on real roads.</p>
            <a href="#booking" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] hover:text-race-red">Talk to the team <ArrowUpRight size={15} /></a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .7, delay: .08 }} className="lg:col-span-7">
            <div className="relative overflow-hidden bg-black">
              <img src={teamPhoto} alt="Best Enough Driving School team standing beside a training truck" className="aspect-[4/3] w-full object-cover object-[50%_48%] grayscale-[15%] transition-transform duration-700 hover:scale-[1.02]" loading="lazy" />
              <div className="absolute bottom-0 left-0 bg-ink/[0.85] px-5 py-4 backdrop-blur-sm">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/[0.45]">Best Enough</p>
                <p className="mt-1 font-display text-xl font-bold uppercase text-white">Behind the wheel.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
