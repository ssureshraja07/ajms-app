import SEO from "../components/SEO";
import { motion } from "framer-motion";
import heroVideo from "../images/ajms-hero.mp4";
import service1 from "../images/service-1.png";
import service2 from "../images/service-2.png";
import service3 from "../images/service-3.png";
import service4 from "../images/service-4.png";
import support from "../images/support.png";

import {
  ArrowRight,
  Anchor,
  Waves,
  ShieldCheck,
  MapPin,
  ChevronDown,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Home() {
  const services = [
  {
    number: "01",
    title: "Calibration",
    text: "Professional inspection and calibration services for marine safety, monitoring, and measurement equipment.",
    image: service1,
  },

  {
    number: "02",
    title: "Commercial Diving",
    text: "Inspection, cleaning and maintenance support to keep vessel operations running efficiently.",
    image: service2,
  },

 

  {
    number: "03",
    title: "Marine Services",
    text: "Reliable marine support for vessels, ports, terminals and maritime operations.",
    image: support,
  },
];

  const ports = [
    "Tuticorin",
    "Chennai",
    "Ennore",
    "Krishnapatnam",
    "Nagapattinam",
    "Cuddalore",
    "Vizag",
    "Kakinada",
    "Gangavaram",
    "Karaikal",
    "Paradip",
    "Kolkata",
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
  ];

  return (
    <main className="bg-[#f7fafc] text-[#071b2d]">

      <SEO
  title="AJ Marine Services | Marine & Diving Services in Tuticorin"
  description="AJ Marine Services provides commercial diving,
  underwater inspections, hull cleaning, propeller polishing
  and marine support from Tuticorin, India."
  path="/"
/>

      {/* =====================================================
          HERO VIDEO SECTION
      ===================================================== */}

     {/* =====================================================
    HERO VIDEO - CLEAN
===================================================== */}

<section className="relative h-screen w-full overflow-hidden bg-black">

  {/* Video */}
  <video
    className="absolute inset-0 h-full w-full object-cover"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source src={heroVideo} type="video/mp4" />
  </video>

  {/* Optional dark overlay */}
  <div className="absolute inset-0 bg-black/20" />

</section>

      {/* =====================================================
          ABOUT AJMS
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
                About AJ MARINE SERVICES  
              </p>

              <h2 className="text-4xl font-bold leading-tight text-[#071b2d] sm:text-5xl">

                Built close to the sea.

                <br />

                <span className="text-cyan-600">
                  Ready to respond.
                </span>

              </h2>

              <p className="mt-7 max-w-xl text-base leading-8 text-slate-600">
                Headquartered in Tuticorin, India, strategically positioned
                next to the VOC Port, AJMS is built to respond swiftly to
                maritime demands.
              </p>

              <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
                Our teams deliver rapid marine support across major and
                remote Indian ports, helping vessel owners, operators and
                maritime businesses keep their operations moving.
              </p>

              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-3 font-semibold text-[#071b2d]"
              >
                Discover AJ MARINE SERVICES

                <ArrowRight
                  size={18}
                  className="text-cyan-600 transition-transform group-hover:translate-x-1"
                />

              </Link>

            </motion.div>


            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >

              {/* Card 1 */}
              <div className="rounded-2xl bg-[#071b2d] p-7 text-white">

                <Anchor
                  className="mb-6 text-cyan-300"
                  size={30}
                />

                <p className="text-4xl font-bold">
                  25+
                </p>

                <p className="mt-2 text-sm text-white/60">
                  Major Indian Ports
                </p>

              </div>


              {/* Card 2 */}
              <div className="mt-8 rounded-2xl bg-cyan-50 p-7 text-[#071b2d]">

                <Waves
                  className="mb-6 text-cyan-600"
                  size={30}
                />

                <p className="text-4xl font-bold">
                  24/7
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Marine Response
                </p>

              </div>


              {/* Card 3 */}
              <div className="rounded-2xl bg-cyan-600 p-7 text-white">

                <MapPin
                  className="mb-6"
                  size={30}
                />

                <p className="text-4xl font-bold">
                  2
                </p>

                <p className="mt-2 text-sm text-white/70">
                  Coastline Networks
                </p>

              </div>


              {/* Card 4 */}
              <div className="mt-8 rounded-2xl bg-slate-100 p-7 text-[#071b2d]">

                <ShieldCheck
                  className="mb-6 text-cyan-600"
                  size={30}
                />

                <p className="text-4xl font-bold">
                  Safe
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Professional Operations
                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

{/* =====================================================
    SERVICES
===================================================== */}
<section className="bg-[#f4f8fa] py-24 lg:py-32">

  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">

      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
        What We Do
      </p>

      <h2 className="mt-4 text-4xl font-bold text-[#071b2d] sm:text-5xl">
        Marine services built
        <br />
        for real-world demands.
      </h2>

    </div>

    {/* Service Cards */}
    <div className="mt-14 flex flex-wrap justify-center gap-5">

      {services.map((service, index) => (

        <motion.div
          key={service.number}
          className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
        >

          <Link
            to="/services"
            className="group block h-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl"
          >

            {/* Image */}
            <div className="relative h-52 overflow-hidden">

              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b2d]/70 via-transparent to-transparent" />

              {/* Number */}
              <span className="absolute bottom-4 left-5 text-sm font-bold text-white">
                {service.number}
              </span>

            </div>

            {/* Content */}
            <div className="p-7">

              <div className="flex items-start justify-end">

                <ArrowRight
                  size={20}
                  className="text-slate-300 transition duration-300 group-hover:translate-x-1 group-hover:text-cyan-600"
                />

              </div>

              <h3 className="mt-5 text-xl font-bold text-[#071b2d]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                {service.text}
              </p>

            </div>

          </Link>

        </motion.div>

      ))}

    </div>

    {/* Button */}
    <div className="mt-10 flex justify-center">

      <Link
        to="/services"
        className="inline-flex items-center gap-2 rounded-full bg-[#071b2d] px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
      >
        View All Services

        <ArrowRight size={16} />

      </Link>

    </div>

  </div>

</section>


      {/* =====================================================
          PORT COVERAGE
      ===================================================== */}



      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-5xl px-5 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            Ready When You Need Us
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-[#071b2d] sm:text-6xl">

            Need marine support?

            <br />

            <span className="text-cyan-600">
              Let's get to work.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-500">
            Tell us about your requirement, vessel or port location
            and our team will get back to you.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#071b2d] px-8 py-4 font-semibold text-white transition hover:bg-cyan-600"
          >
            Contact AJ MARINE

            <ArrowRight size={18} />

          </Link>

        </div>

      </section>

    </main>
  );
}
