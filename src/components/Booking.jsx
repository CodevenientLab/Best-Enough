import { useState } from "react";
import { Check, ChevronDown, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { buildWhatsAppLink } from "../utils/whatsapp";

const licenceTypes = ["Code 8", "Code 10", "Learners"];
const lessonTypes = ["1 Hour", "5 Hours", "10 Hours", "Package"];
const locationOptions = ["Mmabatho", "Mafikeng"];

export default function Booking() {
  const [form, setForm] = useState({ name: "", whatsapp: "", licenceType: "", lessonType: "", location: "", date: "", time: "" });
  const [sent, setSent] = useState(false);
  const update = (key) => (e) => { setForm((current) => ({ ...current, [key]: e.target.value })); setSent(false); };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    const message = [
      "Hi Best Enough Driving School, I'd like to book a lesson.",
      `Name: ${form.name}`,
      `WhatsApp: ${form.whatsapp}`,
      `Licence type: ${form.licenceType}`,
      `Lesson: ${form.lessonType}`,
      `Location: ${form.location}`,
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
    ].join("\n");
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="booking" className="section bg-paper">
      <div className="container">
        <div className="booking-shell">
          <div className="booking-copy">
            <p className="eyebrow">Let's get you moving</p>
            <h2 className="display-heading !text-white">Book your<br /><span>lesson.</span></h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/[0.55]">Choose your licence, preferred location and time. Your enquiry opens directly in WhatsApp for confirmation.</p>
            <div className="mt-10 space-y-4 text-sm text-white/[0.55]">
              {["Pick your service", "Choose a convenient location", "Send the enquiry to Best Enough"].map((item, i) => <div key={item} className="flex items-center gap-3"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/[0.15] font-display text-sm text-white">{i+1}</span>{item}</div>)}
            </div>
          </div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }} onSubmit={submit} className="booking-form">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" className="sm:col-span-2"><input required value={form.name} onChange={update("name")} className="input" placeholder="Your full name" /></Field>
              <Field label="WhatsApp number" className="sm:col-span-2"><input required value={form.whatsapp} onChange={update("whatsapp")} type="tel" className="input" placeholder="078 000 0000" /></Field>
              <SelectField label="Licence type" value={form.licenceType} onChange={update("licenceType")} options={licenceTypes} />
              <SelectField label="Lesson type" value={form.lessonType} onChange={update("lessonType")} options={lessonTypes} />
              <SelectField label="Location" value={form.location} onChange={update("location")} options={locationOptions} />
              <Field label="Preferred date"><input required value={form.date} onChange={update("date")} type="date" className="input" /></Field>
              <Field label="Preferred time" className="sm:col-span-2"><input required value={form.time} onChange={update("time")} type="time" className="input" /></Field>
            </div>
            <button type="submit" className="button button-red mt-6 w-full justify-center !py-4"><MessageCircle size={18} /> Send enquiry via WhatsApp</button>
            {sent && <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-semibold text-race-red"><Check size={15} /> WhatsApp opened — send the message to complete your request.</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children, className = "" }) {
  return <label className={`block ${className}`}><span className="field-label">{label}</span>{children}</label>;
}

function SelectField({ label, value, onChange, options }) {
  return <Field label={label}><span className="relative block"><select required value={value} onChange={onChange} className="input appearance-none"><option value="" disabled>Select</option>{options.map((option) => <option key={option}>{option}</option>)}</select><ChevronDown size={17} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-steel" /></span></Field>;
}
