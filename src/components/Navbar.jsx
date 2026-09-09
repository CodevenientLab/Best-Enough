import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { business } from "../data/business";

const links = [
  { label: "Home", href: "#home" },
  { label: "Lessons", href: "#lessons" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#booking" },
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur-md shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
          <a href="#home" className="focus-ring" aria-label="Best Enough Driving School home">
            <Logo variant="dark" size={scrolled ? "sm" : "md"} />
          </a>

          <nav className="hidden lg:flex items-center gap-9">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-white/80 hover:text-white transition-colors focus-ring"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#booking"
              className="inline-flex items-center bg-race-red hover:bg-race-red-bright text-white font-bold text-sm px-6 py-3 transition-colors focus-ring"
            >
              Book Now
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2 focus-ring"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
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
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden bg-ink overflow-hidden border-t border-white/10"
          >
            <nav className="flex flex-col px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-white/85 text-base font-semibold py-3 border-b border-white/10 last:border-none focus-ring"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-4 bg-race-red text-white text-center font-bold text-sm px-6 py-3 focus-ring"
              >
                Book Now
              </a>
              <a href={business.phoneHref} className="mt-3 text-center text-white/60 text-sm py-2">
                Or call {business.phoneDisplay}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
