import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Eye, X } from "lucide-react";
import SEO from "../components/SEO";

import {
  ArrowLeft,
  CheckCircle2,
  Phone,
  ArrowRight,
  Thermometer,
  Zap,
  Fingerprint,
  ShieldCheck,
  Search,
  Sparkles,
  Wrench,
  Building2,
  Cable,
  Gauge,
  LifeBuoy,
  Anchor,
  HardHat,
  Droplets,
  Fish,
  Video,
  Users,
  Siren,
} from "lucide-react";

import { services } from "../data";
import Reveal from "../components/Reveal";


const seoByService = {
  "ship-diving": {
    title: "Underwater Diving Services in Tuticorin | AJ Marine Services",
    description:
      "AJ Marine Services provides ship diving support, hull cleaning, propeller polishing and underwater inspection services in Tuticorin, India.",
  },
  "general-diving-services": {
    title: "Commercial Diving Services in Tuticorin | AJ Marine Services",
    description:
      "Explore commercial diving, underwater surveys, subsea inspection, underwater repair and marine infrastructure support from AJ Marine Services.",
  },
  calibration: {
    title: "Marine Equipment Calibration Services | AJ Marine Services",
    description:
      "Marine equipment inspection, testing and calibration support for vessel safety, monitoring and measurement systems from AJ Marine Services.",
  },
  "allied-services": {
    title: "FFA and LSA Marine Safety Services | AJ Marine Services",
    description:
      "Explore fire fighting appliance and life saving appliance inspection, testing and allied marine safety service support from AJ Marine Services.",
  },
};

/* Certificate popup — same behavior as About.jsx */
function CertificateModal({ src, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (

    
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
          <h3 className="text-base font-black text-slate-900 sm:text-lg">
            {title}
          </h3>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate"
            className="grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[calc(92vh-72px)] overflow-auto bg-slate-50 p-4 sm:p-6">
          <img
            src={src}
            alt={title}
            className="mx-auto h-auto w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}


/* Reusable checklist */
function CheckList({ items = [] }) {
  if (!items?.length) return null;

  return (
    <div className="space-y-4">
      {items.map((detail) => (
        <div
          key={detail}
          className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-200 hover:shadow-md"
        >
          <CheckCircle2
            className="mt-1 shrink-0 text-cyan-600"
            size={21}
          />

          <p className="leading-7 text-slate-600">
            {detail}
          </p>
        </div>
      ))}
    </div>
  );
}

/* Image + text section */
function SectionBlock({ section }) {
  return (
    <div
      className={`grid items-center gap-8 lg:gap-12 ${
        section.image ? "lg:grid-cols-2" : ""
      }`}
    >
      <div className={section.reverse ? "lg:order-2" : ""}>
        <h3 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          {section.heading}
        </h3>

        {section.note && (
          <p className="mt-1 text-sm font-bold text-cyan-600">
            {section.note}
          </p>
        )}

        {(section.paragraphs || []).map((text) => (
          <p
            key={text}
            className="mt-4 leading-8 text-slate-600"
          >
            {text}
          </p>
        ))}

        {section.items?.length > 0 && (
          <div className="mt-6">
            <CheckList items={section.items} />
          </div>
        )}
      </div>

      {section.image && (
        <div className={section.reverse ? "lg:order-1" : ""}>
          <img
            src={section.image}
            alt={section.heading}
            loading="lazy"
            className="h-64 w-full rounded-3xl object-cover shadow-lg sm:h-80 lg:h-[420px]"
          />
        </div>
      )}
    </div>
  );
}

/* Default equipment groups */
const defaultEquipmentGroups = [
  {
    id: "temperature",
    title: "Temperature Equipments",
    icon: "temperature",
    items: [
      "Temperature Calibrator",
      "Temperature Gauge",
      "Temperature Thermometer",
      "Temperature Transmitters",
    ],
  },
  {
    id: "pressure",
    title: "Pressure Equipments",
    icon: "pressure",
    items: [
      "Pressure Calibrator",
      "Pressure Gauge",
      "Compound Gauge",
      "Pressure Transmitters",
    ],
  },
  {
    id: "gas",
    title: "Gas Detectors",
    icon: "gas",
    items: [
      "Single Gas Detectors",
      "Multi-Gas Detectors",
      "RKI, Honeywell, GMI",
      "Crowcon, Scott Safety, MSA",
    ],
  },
];

/* Calibration equipment - alternating image and content */
function EquipmentGroups({ groups = [], fallbackImage }) {
  const equipmentIcons = {
    temperature: Thermometer,
    pressure: Zap,
    gas: Fingerprint,
  };

  return (
    <section className="mt-20">
      <Reveal>
        <div className="mb-14">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">
            Our Equipment
          </span>

          <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Equipment Expertise
          </h3>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Comprehensive calibration, inspection and testing
            solutions for marine safety and measurement equipment.
          </p>
        </div>
      </Reveal>

      <div className="space-y-20 lg:space-y-28">
        {groups.map((group, index) => {
          const Icon =
            equipmentIcons[group.id] || ShieldCheck;

          const reverse = index % 2 !== 0;

          return (
            <Reveal key={`${group.id}-${index}`}>
              <div
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${
                  reverse
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                {/* Image */}
                <div className="relative">
                  <div className="absolute -left-3 -top-3 h-20 w-20 rounded-tl-3xl border-l-4 border-t-4 border-blue-600 sm:-left-4 sm:-top-4 sm:h-24 sm:w-24" />

                  <div className="relative overflow-hidden rounded-3xl bg-white shadow-lg">
                    <img
                      src={group.image || fallbackImage}
                      alt={group.title}
                      loading="lazy"
                      className="h-64 w-full object-contain p-5 transition-transform duration-500 hover:scale-105 sm:h-80 lg:h-[380px]"
                    />

                    <div className="absolute bottom-4 left-4 rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-lg">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(groups.length).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="absolute -bottom-3 -right-3 h-20 w-20 rounded-br-3xl border-b-4 border-r-4 border-blue-600 sm:-bottom-4 sm:-right-4 sm:h-24 sm:w-24" />
                </div>

                {/* Content */}
                <div className="py-4 lg:py-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                    <Icon size={28} strokeWidth={2} />
                  </div>

                  <p className="mt-6 text-xs font-black uppercase tracking-[0.2em] text-blue-600">
                    Marine & Industrial Solutions
                  </p>

                  <h4 className="mt-3 text-2xl font-black uppercase leading-tight tracking-tight text-slate-950 sm:text-3xl lg:text-4xl">
                    {group.title}
                  </h4>

                  <div className="mt-5 h-1 w-16 rounded-full bg-blue-600" />

                  <p className="mt-5 leading-8 text-slate-600">
                    Professional inspection, calibration and
                    testing support to help maintain measurement
                    accuracy and reliable equipment performance.
                  </p>

                  <div className="mt-7 space-y-4">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-3"
                      >
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50">
                          <CheckCircle2
                            size={14}
                            className="text-blue-600"
                          />
                        </div>

                        <span className="text-sm font-medium leading-6 text-slate-700 sm:text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
                  >
                    Enquire About This Equipment
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/* Diving service categories - numbered card grid */
const groupIcons = {
  inspection: Search,
  cleaning: Sparkles,
  repair: Wrench,
  infrastructure: Building2,
  pipeline: Cable,
  testing: Gauge,
  recovery: LifeBuoy,
  offshore: Anchor,
  construction: HardHat,
  water: Droplets,
  environment: Fish,
  cctv: Video,
  commercial: Users,
  emergency: Siren,
};

function ServiceGroups({ groups = [] }) {
  if (!groups?.length) return null;

  return (
    <section className="mt-20">
      <Reveal>
        <div className="mb-10">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-600">
            What We Offer
          </span>

          <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Our Diving Services
          </h3>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            {groups.length} specialised service categories covering
            inspection, repair, recovery and offshore support.
          </p>
        </div>

        {/* Quick jump chips */}
        <div className="mb-12 flex flex-wrap gap-2">
          {groups.map((group, index) => (
            <a
              key={group.id}
              href={`#${group.id}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 transition hover:border-cyan-400 hover:text-cyan-700"
            >
              {String(index + 1).padStart(2, "0")} · {group.title}
            </a>
          ))}
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {groups.map((group, index) => {
          const Icon = groupIcons[group.icon] || ShieldCheck;

          return (
            <Reveal key={group.id}>
              <article
                id={group.id}
                className="group relative h-full scroll-mt-32 overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
              >
                {/* Big faded number */}
                <span className="pointer-events-none absolute -right-2 -top-4 text-8xl font-black text-slate-100 transition group-hover:text-cyan-50">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-cyan-300 shadow-lg transition group-hover:bg-cyan-500 group-hover:text-slate-950">
                    <Icon size={26} strokeWidth={2} />
                  </div>

                  <h4 className="mt-5 pr-12 text-xl font-black leading-tight tracking-tight text-slate-950 sm:text-2xl">
                    {group.title}
                  </h4>

                  <div className="mt-4 h-1 w-12 rounded-full bg-cyan-500" />

                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0 text-cyan-600"
                        />
                        <span className="text-sm leading-6 text-slate-600 sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export default function ServiceDetails() {
  const { serviceId } = useParams();

  const service = services.find(
    (item) => item.id === serviceId
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCert, setActiveCert] = useState(null);

  /* Reset active tab when service changes */
  useEffect(() => {
    setActiveIndex(0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="container-shell py-32 text-center">
        <h1 className="text-4xl font-black">
          Service not found
        </h1>

        <Link
          className="mt-6 inline-block text-cyan-700"
          to="/services"
        >
          Back to services
        </Link>
      </div>
    );
  }

  const serviceSeo = seoByService[service.id] || {
    title: `${service.title} | AJ Marine Services`,
    description: service.description,
  };

  /* Main service + sub-services tabs */
  const tabs = service.subServices?.length
    ? [service, ...service.subServices]
    : [service];

  const hasTabs = tabs.length > 1;
  const active = tabs[activeIndex] || tabs[0];

  /* Equipment layout only for Calibration Services */
  const equipmentGroups =
    active.id === "calibration"
      ? (
          active.equipmentGroups?.length
            ? active.equipmentGroups
            : defaultEquipmentGroups
        ).map((group) => ({
          ...group,
          image: group.image || active.image,
        }))
      : [];

  return (
    <>
      <SEO
        title={serviceSeo.title}
        description={serviceSeo.description}
        path={`/services/${service.id}`}
      />

      {/* Hero section */}
      <section className="relative mt-[80px] min-h-[72vh] w-full overflow-hidden bg-slate-950">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="pointer-events-none absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-slate-950/75 via-slate-950/35 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/5" />

        <div className="container-shell relative flex min-h-[72vh] flex-col justify-end py-12 sm:py-16">
          <Link
            to="/services"
            className="absolute left-4 top-8 inline-flex items-center gap-2 text-sm font-bold text-white/90 transition hover:text-cyan-300 sm:left-auto"
          >
            <ArrowLeft size={17} />
            Back to services
          </Link>

          <Reveal className="max-w-4xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-slate-950/50 px-4 py-2 text-xs font-black uppercase tracking-[.2em] text-cyan-300 backdrop-blur">
              {service.tag}
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              {service.description}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service details */}
      <section className="bg-slate-50">
        <div className="container-shell grid gap-14 py-20 lg:grid-cols-[1fr_360px] lg:py-24">
          {/* Main content */}
          <div>
            {/* Service tabs */}
            {hasTabs && (
              <div className="mb-12">
                <div className="mb-3 text-xs font-black uppercase tracking-[.28em] text-cyan-600">
                  Our Underwater Services
                </div>

                <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                  {tabs.map((tab, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        className={`flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition ${
                          isActive
                            ? "border-cyan-500 bg-slate-950 text-white shadow-lg"
                            : "border-slate-200 bg-white text-slate-700 hover:border-cyan-400 hover:shadow-md"
                        }`}
                      >
                        <span className="text-2xl">
                          {tab.icon}
                        </span>

                        <span className="text-sm font-black leading-tight">
                          {tab.title}
                        </span>

                        <span
                          className={`text-[10px] font-bold uppercase tracking-[.15em] ${
                            isActive
                              ? "text-cyan-300"
                              : "text-slate-400"
                          }`}
                        >
                          {tab.tag}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Active service content */}
            <div key={active.id}>
              {hasTabs && active.image && (
                <img
                  src={active.image}
                  alt={active.title}
                  className="mb-8 h-64 w-full rounded-3xl object-cover shadow-lg sm:h-80"
                />
              )}

              <div className="mb-3 text-xs font-black uppercase tracking-[.28em] text-cyan-600">


{/* Certificate badge */}
{active.badge && active.certificate && (
  <div className="mb-5">
    <button
      type="button"
      onClick={() =>
        setActiveCert({
          src: active.certificate,
          title: active.badge,
        })
      }
      className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-50 px-4 py-2 text-xs font-black uppercase tracking-[.15em] text-cyan-700 transition hover:border-cyan-500 hover:bg-cyan-100"
    >
      {active.badge}
      <Eye size={14} />
    </button>
  </div>
)}

<div className="mb-3 text-xs font-black uppercase tracking-[.28em] text-cyan-600">
  Service Overview
</div>

               
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Professional {active.title.toLowerCase()} support
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                {active.description}
              </p>

              {/* Existing details */}
              {active.details?.length > 0 && (
                <div className="mt-8">
                  <CheckList items={active.details} />
                </div>
              )}

              {/* Calibration equipment - only for calibration */}
              {active.id === "calibration" && (
                <EquipmentGroups
                  groups={equipmentGroups}
                  fallbackImage={active.image}
                />
              )}

              {/* Water Surveys additional sections */}
              {active.id === "water-surveys" && (
                <div className="mt-12 space-y-12">
                  <div>
                    <h3 className="mb-6 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      Additional Underwater Services
                    </h3>

                    <CheckList
                      items={active.additionalUnderwaterServices}
                    />
                  </div>

                  <div>
                    <h3 className="mb-6 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      Class Approved In-Water Surveys
                    </h3>

                    <CheckList
                      items={active.classApprovedInWaterSurveys}
                    />
                  </div>
                </div>
              )}

              {/* Sections with images */}
              {active.sections?.length > 0 && (
                <div className="mt-14 space-y-16">
                  {active.sections.map((section) => (
                    <SectionBlock
                      key={section.heading}
                      section={section}
                    />
                  ))}
                </div>
              )}

              {/* Diving service categories */}
              {active.serviceGroups?.length > 0 && (
                <ServiceGroups groups={active.serviceGroups} />
              )}
            </div>
          </div>

          {/* Contact sidebar */}
          <aside className="h-fit rounded-3xl bg-slate-950 p-8 text-white shadow-xl lg:sticky lg:top-28">
            <div className="text-xs font-black uppercase tracking-[.2em] text-cyan-300">
              Need this service?
            </div>

            <h3 className="mt-3 text-2xl font-black">
              Let's discuss your vessel requirements.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Contact AJ MARINE SERVICES directly to discuss
              your vessel, location and required scope of work.
            </p>

            <Link
              to="/contact"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-cyan-400"
            >
              <Phone size={17} />
              Contact Us
              <ArrowRight size={17} />
            </Link>
          </aside>
        </div>
      </section>

      {activeCert && (
  <CertificateModal
    src={activeCert.src}
    title={activeCert.title}
    onClose={() => setActiveCert(null)}
  />
)}
    </>
  );
}