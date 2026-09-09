import Logo from "./Logo";
import { business, locations, services } from "../data/business";

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-16 pb-28 lg:pb-16">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-2">
            <Logo variant="dark" size="md" showTagline />
            <p className="text-white/45 text-sm mt-6 max-w-xs leading-relaxed">
              Reg No. {business.regNo}
              <br />
              {business.email}
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase text-sm tracking-wider text-white/50 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#lessons" className="text-white/75 hover:text-white text-sm transition-colors focus-ring">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold uppercase text-sm tracking-wider text-white/50 mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href={business.phoneHref} className="text-white/75 hover:text-white transition-colors focus-ring">
                  {business.phoneDisplay}
                </a>
              </li>
              {locations.map((l) => (
                <li key={l.id} className="text-white/75">
                  {l.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 lg:pr-40">
          <p className="text-white/35 text-xs">
            © {new Date().getFullYear()} Best Enough Driving School. All rights reserved.
          </p>
          <p className="text-white/35 text-xs">The Best Driving In Mzansi</p>
        </div>
      </div>
    </footer>
  );
}
