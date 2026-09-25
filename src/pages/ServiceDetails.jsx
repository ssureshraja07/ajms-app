import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { services } from "../data";
import Reveal from "../components/Reveal";

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <div className="container-shell py-32 text-center">
        <h1 className="text-4xl font-black">Service not found</h1>

        <Link
          className="mt-6 inline-block text-cyan-700"
          to="/services"
        >
          Back to services
        </Link>
      </div>
    );
  }

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
            <div className="mb-3 text-xs font-black uppercase tracking-[.28em] text-cyan-600">
              Service Overview
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Professional {service.title.toLowerCase()} support
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
              AJ MARINE SERVICES provides focused marine service support with
              attention to vessel condition, operational requirements and the
              agreed service scope.
            </p>

            {/* Existing service details */}
            <div className="mt-8 space-y-4">
              {(service.details || []).map((detail) => (
                <div
                  key={detail}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
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

            {/* Water Surveys - Additional Sections */}
            {service.id === "water-surveys" && (
              <div className="mt-12 space-y-12">

                {/* Additional Underwater Services */}
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                    Additional Underwater Services
                  </h3>

                  <div className="mt-6 space-y-4">
                    {(service.additionalUnderwaterServices || []).map(
                      (detail) => (
                        <div
                          key={detail}
                          className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                          <CheckCircle2
                            className="mt-1 shrink-0 text-cyan-600"
                            size={21}
                          />

                          <p className="leading-7 text-slate-600">
                            {detail}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Class Approved In-Water Surveys */}
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                    Class Approved In-Water Surveys
                  </h3>

                  <div className="mt-6 space-y-4">
                    {(service.classApprovedInWaterSurveys || []).map(
                      (detail) => (
                        <div
                          key={detail}
                          className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                        >
                          <CheckCircle2
                            className="mt-1 shrink-0 text-cyan-600"
                            size={21}
                          />

                          <p className="leading-7 text-slate-600">
                            {detail}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </div>

              </div>
            )}
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