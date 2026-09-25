
import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Anchor,
  Ship,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PortCoverage() {
  const eastCoastPorts = [
    "Chennai",
    "Ennore",
    "Krishnapatnam",
    "Nagapattinam",
    "Cuddalore",
    "Tuticorin",
    "Vizag",
    "Kakinada",
    "Gangavaram",
    "Karaikal",
    "Paradip",
    "Kolkata",
  ];

  const westCoastPorts = [
    "Vizhinjam",
    "Kochi",
    "New Mangalore",
    "Goa",
    "Mumbai",
    "Kandla",
    "Jamnagar",
    "Sikka",
    "Vadinar",
    "Mundra",
    "Dahej",
    "Pipavav",
    "Surat",
  ];

  return (
    <div className="min-h-screen bg-[#f7fafc] text-[#071b2d]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#061a2b] pt-32 pb-24 lg:pt-40 lg:pb-32">

        {/* Decorative Glow */}
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            {/* Label */}
            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-14 bg-cyan-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Port Coverage
              </span>

            </div>


            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">

              Connected Across

              <br />

              <span className="text-cyan-300">
                India's Coasts.
              </span>

            </h1>


            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Headquartered in Tuticorin, strategically positioned next to
              VOC Port, AJ MARINE SERVICES provides rapid marine and underwater service
              support across major and remote ports throughout India.
            </p>

          </motion.div>


          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-14 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          >

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">

              <Anchor
                size={25}
                className="text-cyan-300"
              />

              <p className="mt-4 text-3xl font-bold text-white">
                25+
              </p>

              <p className="mt-1 text-xs text-white/50">
                Indian Ports
              </p>

            </div>


            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">

              <Ship
                size={25}
                className="text-cyan-300"
              />

              <p className="mt-4 text-3xl font-bold text-white">
                2
              </p>

              <p className="mt-1 text-xs text-white/50">
                Coastlines
              </p>

            </div>


            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">

              <Waves
                size={25}
                className="text-cyan-300"
              />

              <p className="mt-4 text-3xl font-bold text-white">
                24/7
              </p>

              <p className="mt-1 text-xs text-white/50">
                Response
              </p>

            </div>


            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">

              <MapPin
                size={25}
                className="text-cyan-300"
              />

              <p className="mt-4 text-3xl font-bold text-white">
                PAN
              </p>

              <p className="mt-1 text-xs text-white/50">
                India Coverage
              </p>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
                Strategic Location
              </p>

              <h2 className="mt-4 text-4xl font-bold leading-tight text-[#071b2d] sm:text-5xl">

                From Tuticorin

                <br />

                <span className="text-cyan-600">
                  to every major coast.
                </span>

              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600">
                AJ MARINE SERVICES is headquartered in Tuticorin, Tamil Nadu, strategically
                positioned beside VOC Port. This location allows our team to
                respond efficiently to vessel and marine service requirements.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Beyond our main hub, our teams support maritime operations
                across major and remote ports along India's East and West
                Coasts.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                Our port network enables AJ MARINE SERVICES to provide responsive marine,
                underwater, inspection, maintenance and allied services where
                vessels need them.
              </p>

            </motion.div>


            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-3xl bg-[#071b2d] p-8 sm:p-10"
            >

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="relative">

                <MapPin
                  size={38}
                  className="text-cyan-300"
                />

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Headquarters
                </p>

                <h3 className="mt-3 text-3xl font-bold text-white">
                  Tuticorin
                </h3>

                <p className="mt-3 leading-7 text-white/60">
                  Tamil Nadu, India
                </p>

                <div className="my-8 h-px bg-white/10" />

                <p className="text-sm leading-7 text-white/60">
                  Strategically positioned next to VOC Port, Tuticorin,
                  providing a strong operational base for marine services
                  across the Indian coastline.
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EAST COAST
      ===================================================== */}

      <section className="bg-[#f4f8fa] py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              East Coast
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#071b2d] sm:text-5xl">
              Eastern India Port Network
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-500">
              Our service network extends across key ports along India's
              eastern coastline, supporting vessels and maritime operations
              with responsive marine services.
            </p>

          </motion.div>


          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {eastCoastPorts.map((port, index) => (

              <motion.div
                key={port}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">

                    <MapPin size={18} />

                  </div>

                  <span className="font-semibold text-slate-800">
                    {port}
                  </span>

                </div>

                <ArrowRight
                  size={17}
                  className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-cyan-500"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WEST COAST
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
              West Coast
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#071b2d] sm:text-5xl">
              Western India Port Network
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-500">
              AJ MARINE SERVICES also supports maritime requirements across the western
              coastline, connecting major commercial ports with our marine
              service capabilities.
            </p>

          </motion.div>


          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {westCoastPorts.map((port, index) => (

              <motion.div
                key={port}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-lg"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600 transition group-hover:bg-cyan-500 group-hover:text-white">

                    <MapPin size={18} />

                  </div>

                  <span className="font-semibold text-slate-800">
                    {port}
                  </span>

                </div>

                <ArrowRight
                  size={17}
                  className="text-slate-300 transition group-hover:translate-x-1 group-hover:text-cyan-500"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICE CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#061a2b] py-24 lg:py-32">

        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Marine Support Across India
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-6xl">

            Wherever your vessel is,

            <br />

            <span className="text-cyan-300">
              AJ MARINE SERVICES is ready to respond.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/60">
            Get in touch with our team to discuss your vessel, port location
            and marine service requirements.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-[#041522] transition hover:bg-cyan-300"
            >
              Explore Services

              <ArrowRight size={18} />

            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-cyan-300 hover:bg-white/10"
            >
              Contact AJ MARINE SERVICES
            </Link>

          </div>

        </div>

      </section>
     
    </div>
  );
}
