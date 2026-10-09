import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Reveal from "../components/Reveal";
import contactbg from "../images/contactbg.png";

const contactOptions = [
  {
    title: "Contact us on WhatsApp",
    description:
      "Send us your vessel or marine service requirement directly on WhatsApp.",
    icon: FaWhatsapp,
    color: "#25D366",
    action: "Open WhatsApp",
    href: "https://wa.me/919176193208",
  },
  {
    title: "Email",
    description:
      "Contact our sales team for marine service requirements, quotations and business enquiries.",
    icon: Mail,
    color: "#EA4335",
    action: "Send Email",
    href: "mailto:info@ajmarineservices.in",
  },
  {
    title: "Contact us — Call Us",
    description:
      "Speak directly with our team for service enquiries and vessel requirements.",
    icon: Phone,
    color: "#0A84FF",
    action: "Call AJMS MARINE",
    href: "tel:+919176193208",
  },
  {
    title: "Contact us — Visit Us",
    description:
      "Visit our office and discuss your marine service requirements with our team.",
    icon: MapPin,
    color: "#EA4335",
    action: "Get Directions",
    href: "https://maps.app.goo.gl/uDXvvC3hHsQj8xmZ6",
  },
];

export default function Contact() {
  return (
    <>
      <section
        className="relative overflow-hidden py-24 text-white"
        style={{
          backgroundImage: `url(${contactbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-slate-950/60"></div>

        {/* Existing grid */}
        <div className="hero-grid absolute inset-0 opacity-30" />

        {/* Decorative glow */}
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

        {/* Content */}
        <div className="container-shell relative z-10">
          <div className="max-w-3xl">
            <div className="text-xs font-black uppercase tracking-[.28em] text-cyan-300">
              Contact AJ MARINE SERVICES
            </div>

            <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl">
              Let's connect for your marine service requirements.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Whether you need ship diving, hull cleaning, underwater surveys,
              propeller polishing or marine maintenance, reach out to our team.
            </p>
          </div>
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-black uppercase tracking-[.28em] text-cyan-600">
            Get In Touch
          </div>

          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            Choose how you want to contact us
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Our team is ready to discuss your vessel, location and required
            marine service.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {contactOptions.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 120}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex aspect-square w-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl"
                >
                 {/* Icon */}
<div
  className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl transition duration-300 group-hover:scale-110"
  style={{
    backgroundColor: `${item.color}1A`, // 10% light background
    color: item.color,
  }}
>
  <Icon size={28} />
</div>

                  {/* Title */}
                  <h3 className="mt-5 text-lg font-black text-slate-900">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                  {/* Action */}
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-700">
                    {item.action}
                    <ArrowRight
                      size={17}
                      className="transition group-hover:translate-x-1"
                    />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="container-shell py-16 text-center mt-0">
        <p className="text-slate-600">Looking for a specific marine service?</p>
        <Link
          to="/services"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-bold text-white hover:bg-slate-800"
        >
          Explore Our Services <ExternalLink size={17} />
        </Link>
      </section>
    </>
  );
}