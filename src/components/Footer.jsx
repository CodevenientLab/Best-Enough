import Logo from "./Logo";
import { business, locations, services } from "../data/business";

export default function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-16 text-white lg:pb-10">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="dark" size="md" showTagline />
            <p className="mt-6 max-w-sm text-xs leading-6 text-white/[0.35]">Registered business · Reg No. {business.regNo}<br />{business.email}</p>
          </div>
          <div className="md:col-span-3">
            <h3 className="footer-heading">Services</h3>
            <ul className="space-y-3">{services.map((s) => <li key={s.id}><a href="#lessons" className="footer-link">{s.name}</a></li>)}</ul>
          </div>
          <div className="md:col-span-4">
            <h3 className="footer-heading">Find us</h3>
            {locations.map((loc) => <div key={loc.id} className="mb-4 text-sm text-white/[0.45]"><strong className="mb-1 block font-semibold text-white/[0.75]">{loc.name}</strong>{loc.lines.join(" · ")}</div>)}
            <a href={business.phoneHref} className="mt-5 inline-block text-sm font-semibold text-white/[0.75] hover:text-white">{business.phoneDisplay}</a>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/[0.10] pt-6 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/[0.25] sm:flex-row">
          <span>© {new Date().getFullYear()} Best Enough Driving School</span>
          <span>The Best Driving In Mzansi</span>
        </div>
      </div>
    </footer>
  );
}
