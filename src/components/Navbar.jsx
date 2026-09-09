import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo";
import { business } from "../data/business";

const links = [
  { label: "Lessons", href: "#lessons" },
  { label: "Pricing", href: "#pricing" },
  { label: "Students", href: "#students" },
  { label: "Locations", href: "#locations" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-ink/[0.95] backdrop-blur-xl border-b border-white/[0.10]" : "bg-gradient-to-b from-black/75 to-transparent"}`}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-[68px]" : "h-[82px]"}`}>
          <a href="#home" aria-label="Best Enough Driving School home" className="focus-ring">
            <Logo variant="dark" size={scrolled ? "sm" : "md"} />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a href={business.phoneHref} className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-semibold transition-colors focus-ring">
              <Phone size={15} />
              {business.phoneDisplay}
            </a>
            <a href="#booking" className="button button-red !py-3 !px-5">
              Book a lesson
              <ArrowUpRight size={16} />
            </a>
          </div>

          <button className="lg:hidden p-2 text-white focus-ring" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/[0.10] bg-ink"
          >
            <nav className="mx-auto max-w-[1440px] px-5 pb-6 pt-2">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-white/[0.10] py-4 text-base font-semibold text-white/85">
                  {link.label}
                </a>
              ))}
              <a href="#booking" onClick={() => setOpen(false)} className="button button-red mt-5 w-full">
                Book a lesson <ArrowUpRight size={17} />
              </a>
              <a href={business.phoneHref} className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-white/60">
                <Phone size={15} /> {business.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
