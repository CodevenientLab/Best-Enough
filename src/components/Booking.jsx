import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { buildWhatsAppLink } from "../utils/whatsapp";

const licenceTypes = ["Code 8", "Code 10", "Learners"];
const lessonTypes = ["1 Hour", "5 Hours", "10 Hours", "Package"];
const locationOptions = ["Mmabatho", "Mafikeng"];

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    licenceType: "",
    lessonType: "",
    location: "",
    date: "",
    time: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const message = buildMessage(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display font-black uppercase text-5xl md:text-6xl leading-[0.95]">
            Book Your Lesson
          </h2>
          <p className="text-steel mt-4 max-w-lg mx-auto">
            Fill in your details and we'll send your enquiry straight to Best Enough on WhatsApp — we'll confirm
            availability with you directly.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-paper border border-paper-dim p-7 md:p-11 grid sm:grid-cols-2 gap-5"
        >
          <Field label="Name" className="sm:col-span-2">
            <input
              required
              value={form.name}
              onChange={update("name")}
              type="text"
              className="input"
              placeholder="Your full name"
            />
          </Field>

          <Field label="WhatsApp Number" className="sm:col-span-2">
            <input
              required
              value={form.whatsapp}
              onChange={update("whatsapp")}
              type="tel"
              className="input"
              placeholder="078 000 0000"
            />
          </Field>

          <Field label="Licence Type">
            <select required value={form.licenceType} onChange={update("licenceType")} className="input">
              <option value="" disabled>
                Select
              </option>
              {licenceTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>

          <Field label="Lesson Type">
            <select required value={form.lessonType} onChange={update("lessonType")} className="input">
              <option value="" disabled>
                Select
              </option>
              {lessonTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>

          <Field label="Preferred Location">
            <select required value={form.location} onChange={update("location")} className="input">
              <option value="" disabled>
                Select
              </option>
              {locationOptions.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </Field>

          <Field label="Preferred Date">
            <input required value={form.date} onChange={update("date")} type="date" className="input" />
          </Field>

          <Field label="Preferred Time" className="sm:col-span-2">
            <input required value={form.time} onChange={update("time")} type="time" className="input" />
          </Field>

          <div className="sm:col-span-2 mt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-race-red hover:bg-race-red-bright text-white font-bold px-7 py-4 transition-colors focus-ring"
            >
              <MessageCircle size={19} />
              Send Enquiry via WhatsApp
            </button>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 justify-center mt-4 text-sm font-semibold text-race-red"
              >
                <CheckCircle2 size={16} />
                Opening WhatsApp with your enquiry — send the message to complete your booking request.
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs font-bold uppercase tracking-wider text-steel mb-2">{label}</span>
      {children}
    </label>
  );
}

function buildMessage(f) {
  const parts = [`Hi Best Enough Driving School, I'd like to book a lesson.`];
  if (f.name) parts.push(`Name: ${f.name}`);
  if (f.licenceType) parts.push(`Licence type: ${f.licenceType}`);
  if (f.lessonType) parts.push(`Lesson: ${f.lessonType}`);
  if (f.location) parts.push(`Location: ${f.location}`);
  if (f.date) parts.push(`Preferred date: ${f.date}`);
  if (f.time) parts.push(`Preferred time: ${f.time}`);
  if (f.whatsapp) parts.push(`My WhatsApp: ${f.whatsapp}`);
  return parts.join("\n");
}
