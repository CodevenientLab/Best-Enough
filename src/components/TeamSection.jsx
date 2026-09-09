import { motion } from "framer-motion";
import teamPhoto from "../assets/photos/team.jpg";

export default function TeamSection() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5"
        >
          <h2 className="font-display font-black uppercase text-5xl md:text-6xl leading-[0.95] mb-6">
            Meet The Team
            <br />
            Behind The Wheel.
          </h2>
          <p className="text-steel text-base leading-relaxed max-w-md">
            Best Enough Driving School is run by a local team based in Mmabatho and Mafikeng, training students on
            the roads they'll actually be tested on.
          </p>
          <p className="text-xs text-steel/70 mt-6 uppercase tracking-widest font-semibold">
            Full team names &amp; roles to be confirmed by Best Enough Driving School
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-7"
        >
          <img
            src={teamPhoto}
            alt="Best Enough Driving School team standing beside a training truck"
            className="w-full h-[420px] md:h-[500px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
