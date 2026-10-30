import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

const serviceKeywordGroups = [
  {
    title: "Underwater Diving & Subsea Support",
    description:
      "For vessel and port requirements, contact AJ Marine Services to discuss commercial underwater operations and subsea support. Scope and availability are confirmed for each project.",
    keywords: [
      "underwater diving services Tuticorin",
      "commercial diving Tuticorin",
      "commercial diving services Tuticorin",
      "subsea services Tuticorin",
      "diving contractors Tuticorin",
      "harbor diving services Tuticorin",
      "nautical diving services Tuticorin",
      "industrial diving Tuticorin",
      "dive team Tuticorin",
    ],
    to: "/services/general-diving-services",
  },
  {
    title: "Hull Cleaning & Propeller Services",
    description:
      "Discuss vessel hull care, marine growth removal and propeller-related requirements with our team. The work scope depends on vessel condition and project requirements.",
    keywords: [
      "hull cleaning Tuticorin",
      "ship hull cleaning Tuticorin",
      "propeller polishing Tuticorin",
      "propeller maintenance Tuticorin",
      "marine propeller polishing Tuticorin",
      "underwater hull maintenance Tuticorin",
      "hull inspection Tuticorin",
      "underwater cleaning solutions Tuticorin",
      "propeller repair Tuticorin",
      "ship cleaning services Tuticorin",
    ],
    to: "/services/ship-diving",
  },
  {
    title: "Underwater Inspection, Survey & Repair",
    description:
      "Our team can discuss underwater inspection, survey and repair requirements. The exact technical work scope and availability are confirmed before a project is accepted.",
    keywords: [
      "dive inspection services Tuticorin",
      "marine inspection Tuticorin",
      "underwater survey Tuticorin",
      "underwater repair services Tuticorin",
      "subsea repair Tuticorin",
      "underwater welding Tuticorin",
      "underwater engineering Tuticorin",
      "marine repair services Tuticorin",
    ],
    to: "/services/general-diving-services",
  },
  {
    title: "Marine & Ship Maintenance",
    description:
      "Share your vessel details, port location and requested maintenance work so AJ Marine Services can review the requirement and confirm the suitable service scope.",
    keywords: [
      "marine maintenance Tuticorin",
      "ship repair Tuticorin",
      "ship maintenance Tuticorin",
    ],
    to: "/services",
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Marine Diving, Hull Cleaning & Ship Services in Tuticorin | AJ Marine Services"
        description="Explore AJ Marine Services in Tuticorin for commercial diving, hull cleaning, propeller polishing, underwater inspection and survey, subsea repair discussions, and marine maintenance support."
        path="/services"
      />

      <section className="bg-slate-950 py-20">
        <div className="container-shell">
          <SectionHeading
            light
            eyebrow="Services"
            title="Marine services for inspection, performance and maintenance."
            description="Browse the AJMS MARINE service portfolio and open any service for detailed information."
          />
        </div>
      </section>

      <section className="container-shell py-20">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[.28em] text-cyan-600">
              Tuticorin, Tamil Nadu, India
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Marine Diving, Inspection & Ship Maintenance Support
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              AJ Marine Services welcomes enquiries about vessel diving, hull and propeller work, underwater inspection, surveys, repair and maintenance. Share your vessel, port and project details so our team can confirm the appropriate scope and availability.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {serviceKeywordGroups.map((group, index) => (
              <Reveal key={group.title} delay={index * 70}>
                <article className="h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                  <h3 className="text-xl font-black text-slate-950">{group.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{group.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.keywords.map((keyword) => (
                      <li
                        key={keyword}
                        className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-slate-700"
                      >
                        {keyword}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={group.to}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 transition hover:text-cyan-900"
                  >
                    Explore related services <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
