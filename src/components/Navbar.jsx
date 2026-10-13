
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import ajmsLogo from "../images/ajms-logo-transparent.png";

import { services } from "../data";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#061a2b]/95 backdrop-blur-md">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

        {/* =====================================================
            LOGO
        ===================================================== */}

     {/* Logo */}
<Link to="/" onClick={closeMenu} className="flex items-center gap-3">
  {/* Company Name */}
  <div className="flex items-center gap-3">
    {/* AJ - Left */}
    <span className="bg-gradient-to-b from-white to-cyan-300 bg-clip-text font-['Montserrat'] text-3xl font-black tracking-[0.08em] text-transparent">
      AJ
    </span>

    {/* Divider line */}
    <span className="h-8 w-px bg-gradient-to-b from-transparent via-cyan-300/70 to-transparent" />

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

  {/* AJMS Logo */}
  <img
    src={ajmsLogo}
    alt="AJMS Marine Services"
    className="h-12 w-12 object-contain"
  />
</Link>


        {/* =====================================================
            DESKTOP NAVIGATION
        ===================================================== */}

        <nav className="hidden items-center gap-8 lg:flex">

          {/* HOME */}

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-cyan-300"
                  : "text-white/80 hover:text-cyan-300"
              }`
            }
          >
            Home
          </NavLink>


          {/* ABOUT */}

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-cyan-300"
                  : "text-white/80 hover:text-cyan-300"
              }`
            }
          >
            About Us
          </NavLink>


          {/* =================================================
              SERVICES DROPDOWN
          ================================================= */}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >

            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-white/80 transition hover:text-cyan-300"
            >
              Services

              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>


            {servicesOpen && (
              <div className="absolute left-0 top-full pt-4">

                <div className="w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#082238] p-2 shadow-2xl">

                  {/* ALL SERVICES */}

                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="mb-1 block rounded-xl border-b border-white/10 px-4 py-3.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                  >
                    All Services
                  </Link>


                  {/* INDIVIDUAL SERVICES */}

                  {services.map((service) => (

                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      onClick={() => setServicesOpen(false)}
                      className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm text-white/75 transition hover:bg-cyan-400/10 hover:text-cyan-300"
                    >

                      <span>
                        {service.title}
                      </span>

                      <span className="text-xs text-white/20 transition group-hover:translate-x-1 group-hover:text-cyan-400">
                        →
                      </span>

                    </Link>

                  ))}

                </div>

              </div>
            )}

          </div>


          {/* PORT COVERAGE */}

          <NavLink
            to="/ports"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-cyan-300"
                  : "text-white/80 hover:text-cyan-300"
              }`
            }
          >
            Port Coverage
          </NavLink>


          {/* PROJECTS */}
{/* 
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-cyan-300"
                  : "text-white/80 hover:text-cyan-300"
              }`
            }
          >
            Projects
          </NavLink> */}


          {/* BLOG */}

          {/* <NavLink
            to="/blog"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-cyan-300"
                  : "text-white/80 hover:text-cyan-300"
              }`
            }
          >
            Blog
          </NavLink> */}


          {/* CONTACT */}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-sm font-medium transition ${
                isActive
                  ? "text-cyan-300"
                  : "text-white/80 hover:text-cyan-300"
              }`
            }
          >
            Contact
          </NavLink>

        </nav>


        {/* =====================================================
            DESKTOP CTA
        ===================================================== */}

        <div className="hidden lg:block">

          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#041522] transition hover:bg-cyan-300"
          >

            <Phone size={15} />

            Get a Quote

          </Link>

        </div>


        {/* =====================================================
            MOBILE MENU BUTTON
        ===================================================== */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X size={27} />
          ) : (
            <Menu size={27} />
          )}
        </button>

      </div>


      {/* =====================================================
          MOBILE NAVIGATION
      ===================================================== */}

      {menuOpen && (

        <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-white/10 bg-[#061a2b] px-5 pb-6 pt-4 lg:hidden">

          <div className="flex flex-col gap-1">


            {/* HOME */}

            <Link
              onClick={closeMenu}
              to="/"
              className="rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-cyan-300"
            >
              Home
            </Link>


            {/* ABOUT */}

            <Link
              onClick={closeMenu}
              to="/about"
              className="rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-cyan-300"
            >
              About Us
            </Link>


            {/* =================================================
                MOBILE SERVICES
            ================================================= */}

            <div>

              <button
                type="button"
                onClick={() =>
                  setMobileServicesOpen(!mobileServicesOpen)
                }
                className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-white/80 transition hover:bg-white/5 hover:text-cyan-300"
              >

                <span>
                  Services
                </span>

                <ChevronDown
                  size={17}
                  className={`transition-transform duration-200 ${
                    mobileServicesOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>


              {mobileServicesOpen && (

                <div className="ml-3 mt-1 border-l border-cyan-400/20 pl-3">

                  {/* ALL SERVICES */}

                  <Link
                    onClick={closeMenu}
                    to="/services"
                    className="block rounded-lg px-4 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/10"
                  >
                    All Services
                  </Link>


                  {/* INDIVIDUAL SERVICES */}

                  {services.map((service) => (

                    <Link
                      key={service.id}
                      onClick={closeMenu}
                      to={`/services/${service.id}`}
                      className="block rounded-lg px-4 py-2.5 text-sm text-white/65 transition hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      {service.title}
                    </Link>

                  ))}

                </div>

              )}

            </div>


            {/* PORT COVERAGE */}

            <Link
              onClick={closeMenu}
              to="/ports"
              className="rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-cyan-300"
            >
              Port Coverage
            </Link>


            {/* PROJECTS */}

            <Link
              onClick={closeMenu}
              to="/projects"
              className="rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-cyan-300"
            >
              Projects
            </Link>


            {/* BLOG */}

            <Link
              onClick={closeMenu}
              to="/blog"
              className="rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-cyan-300"
            >
              Blog
            </Link>


            {/* CONTACT */}

            <Link
              onClick={closeMenu}
              to="/contact"
              className="rounded-lg px-4 py-3 text-white/80 transition hover:bg-white/5 hover:text-cyan-300"
            >
              Contact
            </Link>


            {/* CTA */}

            <Link
              onClick={closeMenu}
              to="/contact"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-[#041522]"
            >
              <Phone size={16} />
              Get a Quote
            </Link>

          </div>

        </div>

      )}

    </header>
  );
}

