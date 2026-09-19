import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Waves, Gauge, ChevronRight } from "lucide-react";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
<section className="relative overflow-hidden bg-slate-950 hero-reveal">
        <div className="hero-grid absolute inset-0 opacity-70" />
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="container-shell relative grid min-h-[650px] items-center gap-12 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-cyan-200">
              <Waves size={15} /> Marine Diving & Ship Services
            </div>
            <h1 className="text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Precision below the surface. <span className="text-cyan-300">Confidence above it.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              AJMS MARINE delivers professional underwater operations, ship inspection, hull cleaning and marine maintenance services.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3.5 font-bold text-slate-950 hover:bg-cyan-400">Explore Services <ArrowRight size={18} /></Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-bold text-white hover:bg-white/10">About AJMS</Link>
            </div>
            <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-7">
              <div><ShieldCheck className="mb-2 text-cyan-300" size={21}/><div className="text-sm font-bold text-white">Safety Focus</div><div className="text-xs text-slate-400">Professional operations</div></div>
              <div><Waves className="mb-2 text-cyan-300" size={21}/><div className="text-sm font-bold text-white">Underwater</div><div className="text-xs text-slate-400">Inspection & service</div></div>
              <div><Gauge className="mb-2 text-cyan-300" size={21}/><div className="text-sm font-bold text-white">Performance</div><div className="text-xs text-slate-400">Vessel maintenance</div></div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-[3rem] bg-cyan-500/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1400&q=90" alt="Marine vessel at sea" className="hero-image-motion h-[520px] w-full object-cover" />
              <div className="absolute inset-x-6 bottom-6 glass rounded-2xl p-5">
                <div className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">AJMS MARINE</div>
                <div className="mt-1 text-lg font-black text-white">Reliable marine support, from surface to seabed.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell py-24">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal><SectionHeading eyebrow="Our Services" title="Complete marine service capabilities" description="Explore our core services. Select any service to view its dedicated details." /></Reveal>
          <Link to="/services" className="inline-flex items-center gap-2 font-bold text-cyan-700">View all services <ChevronRight size={18}/></Link>
        </div>
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 90}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cyan-50">
        <div className="container-shell grid gap-10 py-20 md:grid-cols-2 md:items-center">
          <SectionHeading eyebrow="Why AJMS MARINE" title="Built around safety, precision and vessel performance" description="Our service approach combines underwater expertise with practical vessel maintenance support, helping clients keep marine assets inspected, maintained and operational." />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Professional underwater operations", "Maintenance-focused service planning", "Inspection and survey support", "Marine safety equipment services"].map((x) => (
              <div key={x} className="rounded-2xl border border-cyan-100 bg-white p-5 font-bold text-slate-800 shadow-sm"><ShieldCheck className="mb-3 text-cyan-600" size={22}/>{x}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}