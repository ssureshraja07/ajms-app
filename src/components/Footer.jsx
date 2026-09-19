import { Link } from "react-router-dom";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";

const footerLinkState = { state: { scrollTo: "footer" } };

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-slate-950 text-slate-300">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.3fr_.8fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-500 text-slate-950">
              <Anchor size={22} />
            </span>
            <div>
              <div className="font-black tracking-[.18em] text-white">AJMS MARINE</div>
              <div className="text-xs text-cyan-300">MARINE DIVING & SHIP SERVICES</div>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400">
            Professional marine diving, underwater inspection, hull cleaning,
            propeller polishing and marine maintenance services.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-white">Quick Links</h3>
          <div className="grid gap-3 text-sm">
            <Link className="hover:text-cyan-300" to="/" {...footerLinkState}>Home</Link>
            <Link className="hover:text-cyan-300" to="/about" {...footerLinkState}>About Us</Link>
            <Link className="hover:text-cyan-300" to="/services" {...footerLinkState}>Services</Link>
            <Link className="hover:text-cyan-300" to="/contact" {...footerLinkState}>Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-bold text-white">Contact</h3>
          <div className="space-y-4 text-sm text-slate-400">
            <p className="flex gap-3"><Phone size={18} className="shrink-0 text-cyan-400" /> +0461 2903256</p>
            <p className="flex gap-3"><Mail size={18} className="shrink-0 text-cyan-400" /> info@ajmsmarineservice.in</p>
            <p className="flex gap-3"><MapPin size={18} className="shrink-0 text-cyan-400" />No,1/26-4c6,First Floor,Kolipillai Nagar,Harbour Express Road, Tuticorin-628004Tamil Nadu, India</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col justify-between gap-2 py-5 text-xs text-slate-500 md:flex-row">
          <span>© {new Date().getFullYear()} AJMS MARINE. All rights reserved.</span>
          <span>Marine Diving • Inspection • Maintenance</span>
        </div>
      </div>
    </footer>
  );
}
