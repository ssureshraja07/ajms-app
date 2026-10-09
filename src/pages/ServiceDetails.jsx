import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { services } from "../data";
import Reveal from "../components/Reveal";

/* Reusable checklist card list */
function CheckList({ items = [] }) {
  return (
    <div className="space-y-4">
      {items.map((detail) => (
        <div
          key={detail}
          className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <CheckCircle2 className="mt-1 shrink-0 text-cyan-600" size={21} />
          <p className="leading-7 text-slate-600">{detail}</p>
        </div>
      ))}
    </div>
  );
}

/* Image + text section (General Diving Services) */
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
          <p className="mt-1 text-sm font-bold text-cyan-600">{section.note}</p>
        )}

        {(section.paragraphs || []).map((text) => (
          <p key={text} className="mt-4 leading-8 text-slate-600">
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
            className="h-64 w-full rounded-3xl object-cover shadow-lg sm:h-80 lg:h-[420px]"
          />
        </div>
      )}
    </div>
  );
}

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  const [activeIndex, setActiveIndex] = useState(0);

  // Service maarina first tab ku reset
  useEffect(() => {
    setActiveIndex(0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="container-shell py-32 text-center">
        <h1 className="text-4xl font-black">Service not found</h1>

        <Link className="mt-6 inline-block text-cyan-700" to="/services">
          Back to services
        </Link>
      </div>
    );
  }

  // Main service + sub services = tabs (Ship Diving la 4 tabs)
  const tabs = service.subServices?.length
    ? [service, ...service.subServices]
    : [service];

  const hasTabs = tabs.length > 1;
  const active = tabs[activeIndex] || tabs[0];

  return (
    <>
      {/* Hero / Full-screen service image */}
      <section className="relative mt-[80px] min-h-[72vh] w-full overflow-hidden bg-slate-950">
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Top fade */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-slate-950/75 via-slate-950/35 to-transparent" />

        {/* Bottom dark overlay */}
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

      {/* Details */}
      <section className="bg-slate-50">
        <div className="container-shell grid gap-14 py-20 lg:grid-cols-[1fr_360px] lg:py-24">
          {/* Main content */}
          <div>
            {/* Tabs - Ship Diving + 3 sub services */}
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
                        <span className="text-2xl">{tab.icon}</span>
                        <span className="text-sm font-black leading-tight">
                          {tab.title}
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-[.15em] ${
                            isActive ? "text-cyan-300" : "text-slate-400"
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
                Service Overview
              </div>

              <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Professional {active.title.toLowerCase()} support
              </h2>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                {active.description}
              </p>

              {/* Details list */}
              {active.details?.length > 0 && (
                <div className="mt-8">
                  <CheckList items={active.details} />
                </div>
              )}

              {/* Water Surveys - Additional Sections */}
              {active.id === "water-surveys" && (
                <div className="mt-12 space-y-12">
                  <div>
                    <h3 className="mb-6 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      Additional Underwater Services
                    </h3>
                    <CheckList items={active.additionalUnderwaterServices} />
                  </div>

                  <div>
                    <h3 className="mb-6 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                      Class Approved In-Water Surveys
                    </h3>
                    <CheckList items={active.classApprovedInWaterSurveys} />
                  </div>
                </div>
              )}

              {/* Sections with images (General Diving Services) */}
              {active.sections?.length > 0 && (
                <div className="mt-14 space-y-16">
                  {active.sections.map((section) => (
                    <SectionBlock key={section.heading} section={section} />
                  ))}
                </div>
              )}

              
            
            </div>
          </div>

          {/* Contact Sidebar */}
          <aside className="h-fit rounded-3xl bg-slate-950 p-8 text-white shadow-xl lg:sticky lg:top-28">
            <div className="text-xs font-black uppercase tracking-[.2em] text-cyan-300">
              Need this service?
            </div>

            <h3 className="mt-3 text-2xl font-black">
              Let's discuss your vessel requirements.
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Contact AJ MARINE SERVICES directly to discuss your vessel,
              location and required scope of work.
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
    </>
  );
}