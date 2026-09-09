import { motion } from "framer-motion";
import clientA from "../assets/photos/client-a.jpg";
import clientB from "../assets/photos/client-b.jpg";
import clientC from "../assets/photos/client-c.jpg";

export default function RealPeople() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="mb-16 max-w-xl">
          <h2 className="font-display font-black uppercase text-5xl md:text-6xl leading-[0.95]">
            Real People.
            <br />
            Real Progress.
          </h2>
          <p className="text-steel mt-5 text-base leading-relaxed">
            Every one of these students trained with Best Enough and walked away with their licence in hand.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-5 md:gap-6">
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 md:row-span-2 relative"
          >
            <img
              src={clientA}
              alt="Best Enough student holding her new driving licence in front of the training vehicle"
              className="w-full h-[420px] md:h-[560px] object-cover object-top"
            />
            <figcaption className="absolute bottom-0 left-0 bg-ink text-white px-5 py-3 text-sm font-semibold">
              Licensed with Best Enough
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="md:col-span-5 relative"
          >
            <img
              src={clientB}
              alt="Best Enough student holding her new driving licence beside the training truck"
              className="w-full h-[260px] md:h-[268px] object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 bg-race-red text-white px-5 py-3 text-sm font-semibold">
              Code 10 graduate
            </figcaption>
          </motion.figure>

          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            <img
              src={clientC}
              alt="Best Enough student holding his new driving licence in front of the training vehicle"
              className="w-full h-[260px] md:h-[272px] object-cover object-top"
            />
            <figcaption className="absolute bottom-0 left-0 bg-charcoal text-white px-5 py-3 text-sm font-semibold">
              Licensed with Best Enough
            </figcaption>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}
