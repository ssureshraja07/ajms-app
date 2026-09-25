import { Link } from "react-router-dom";
import { ArrowRight, Compass, ShieldCheck, Target } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import aboutbg from "../images/aboutbg.png";
import about2 from "../images/about2.png";

export default function About() {
  return (
    <>
     <section
  className="relative overflow-hidden py-24 text-white"
  style={{
    backgroundImage: `url(${aboutbg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-slate-950/70"></div>

  <div className="container-shell relative z-10">
    <div className="max-w-3xl">
      <div className="mb-3 text-xs font-black uppercase tracking-[.28em] text-cyan-300">
        About AJ MARINE SERVICES
      </div>

      <h1 className="text-5xl font-black tracking-tight sm:text-6xl">
        Marine expertise designed for real-world vessel operations.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
        AJ MARINE SERVICES is positioned as a professional marine diving and
        ship services company supporting vessel owners, operators and marine
        stakeholders.
      </p>
    </div>
  </div>
</section>

      <section className="container-shell grid gap-14 py-24 lg:grid-cols-2 lg:items-center">
        <Reveal direction="left" className="overflow-hidden rounded-[2rem]">
          <img src={about2} alt="Professional diver underwater" className="h-[520px] w-full object-cover" />
        </Reveal>
        <Reveal direction="right">
          <SectionHeading eyebrow="Company Profile" title="A focused partner for underwater and marine maintenance needs." description="AJ MARINE SERVICES provides a service portfolio spanning ship diving, hull cleaning, underwater surveys, propeller polishing, calibration, safety equipment support and marine ship maintenance." />
          <div className="mt-8 grid gap-4">
            <div className="flex gap-4 rounded-2xl bg-slate-50 p-5"><Compass className="shrink-0 text-cyan-600" /><div><b>Our Approach</b><p className="mt-1 text-sm leading-6 text-slate-600">Plan the work around the vessel, underwater condition, access and agreed scope.</p></div></div>
            <div className="flex gap-4 rounded-2xl bg-slate-50 p-5"><ShieldCheck className="shrink-0 text-cyan-600" /><div><b>Safety Mindset</b><p className="mt-1 text-sm leading-6 text-slate-600">Safety and operational discipline remain central to marine service execution.</p></div></div>
            <div className="flex gap-4 rounded-2xl bg-slate-50 p-5"><Target className="shrink-0 text-cyan-600" /><div><b>Service Objective</b><p className="mt-1 text-sm leading-6 text-slate-600">Support vessel readiness, maintenance planning and underwater asset condition.</p></div></div>
          </div>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 font-bold text-white">Talk to AJ MARINE SERVICES <ArrowRight size={18}/></Link>
        </Reveal>
      </section>
    </>
  );
}