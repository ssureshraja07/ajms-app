import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import ajmsLogo from "../images/ajms-logo-transparent.png";

const footerLinkState = { state: { scrollTo: "footer" } };

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-slate-950 text-slate-300">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.3fr_.8fr_1fr]">
        <div>
          {/* Logo + Company Name */}
          <div className="mb-5 flex items-center gap-3">
            <div className="flex items-center gap-3">

              <img
              src={ajmsLogo}
              alt="AJMS Marine Services"
              className="h-12 w-12 object-contain"
            />
              {/* AJ - Left */}
              <span className="bg-gradient-to-b from-white to-cyan-300 bg-clip-text font-['Montserrat'] text-3xl font-black tracking-[0.08em] text-transparent">
      AJ
    </span>

              {/* Divider line */}
              <span className="h-10 w-px bg-gradient-to-b from-transparent via-cyan-300/70 to-transparent" />

              {/* MARINE + SERVICES - Right */}
              <div className="flex flex-col leading-none">
      <span className="font-['Montserrat'] text-[12px] font-extrabold tracking-[0.3em] text-white">
        MARINE
      </span>
      <span className="mt-1 font-['Montserrat'] text-[12px] font-semibold tracking-[0.3em] text-cyan-300">
        SERVICES
      </span>
    </div>
            </div>

            
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-400">
         Professional Commercial Diving | Underwater Inspection | Marine Infrastructure Support | Calibration Services  | LSA FFA Service
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
            <p className="flex gap-3"><Phone size={18} className="shrink-0 text-cyan-400" /> +91 91761 93208</p>
            <p className="flex gap-3"><Mail size={18} className="shrink-0 text-cyan-400" /> sales@ajmarineservices.in</p>
            <p className="flex gap-3"><Mail size={18} className="shrink-0 text-cyan-400" /> info@ajmarineservices.in</p>

            <p className="flex gap-3"><MapPin size={18} className="shrink-0 text-cyan-400" />No,1/26-4c6, First Floor, Kolipillai Nagar,Harbour Express Road, Tuticorin-628004 Tamil Nadu, India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col justify-between gap-2 py-5 text-xs text-slate-500 md:flex-row">
          <span className="font-['Rajdhani'] font-bold uppercase tracking-[0.2em] text-cyan-300">© {new Date().getFullYear()} AJMS MARINE. All rights reserved.</span>
          <span className="font-['Rajdhani'] font-bold uppercase tracking-[0.2em] text-cyan-300">
  ★ Established In 2020
</span>
          <span className="font-['Rajdhani'] font-bold uppercase tracking-[0.2em] text-cyan-300">Calibration• Commercial Diving• Marine Services</span>
        </div>
      </div>
    </footer>
  );
}