import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import ajmsLogo from "../images/ajms-logo.png";

const links = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/services", "Services"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `text-sm font-semibold transition ${
      isActive
        ? "text-cyan-600"
        : "text-slate-600 hover:text-cyan-600"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur navbar-reveal">
      <div className="container-shell flex h-20 items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-17 w-17 items-center justify-center overflow-hidden rounded-xl bg-slate-950 shadow-lg">
            <img
              src={ajmsLogo}
              alt="AJMS Marine Logo"
              className="h-full w-full object-contain"
            />
          </span>

          <span>
            <span className="block text-lg font-black tracking-[.18em] text-slate-950">
              AJMS
            </span>

            <span className="-mt-1 block text-[10px] font-bold tracking-[.38em] text-cyan-600">
              MARINE
            </span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={navClass}
            >
              {label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-cyan-600/20 transition hover:bg-cyan-700"
          >
            <Phone size={16} />
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-5 md:hidden">
          <div className="container-shell flex flex-col gap-4">

            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={navClass}
              >
                {label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-cyan-600 px-4 py-3 text-center font-bold text-white transition hover:bg-cyan-700"
            >
              Get a Quote
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}