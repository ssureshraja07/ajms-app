import { Award, BadgeCheck, ShieldCheck } from "lucide-react";
import Reveal from "./Reveal";

import abs from "../images/class-societies/abs.png";
import bureauVeritas from "../images/class-societies/bureau-veritas.png";
import ccs from "../images/class-societies/ccs.png";
import prs from "../images/class-societies/prs.png";
import crs from "../images/class-societies/crs.png";
import dnv from "../images/class-societies/dnv.png";
import irclass from "../images/class-societies/irclass.png";
import turkLoydu from "../images/class-societies/turk-loydu.png";
import kr from "../images/class-societies/kr.png";
import lr from "../images/class-societies/lr.png";
import classnk from "../images/class-societies/classnk.png";
import rina from "../images/class-societies/rina.png";

/* IMPORTANT: keep only the societies AJ Marine Services is actually
   approved by. Delete the lines of any society that does not apply. */
const societies = [
  { short: "IRClass", name: "Indian Register of Shipping", logo: irclass },
  { short: "ABS", name: "American Bureau of Shipping", logo: abs },
  { short: "BV", name: "Bureau Veritas", logo: bureauVeritas },
  { short: "CCS", name: "China Classification Society", logo: ccs },
  { short: "PRS", name: "Polish Register of Shipping", logo: prs },
  { short: "CRS", name: "Croatian Register of Shipping", logo: crs },
  { short: "DNV", name: "DNV", logo: dnv },
  { short: "TL", name: "Türk Loydu", logo: turkLoydu },
  { short: "KR", name: "Korean Register", logo: kr },
  { short: "LR", name: "Lloyd's Register", logo: lr },
  { short: "ClassNK", name: "Nippon Kaiji Kyokai", logo: classnk },
  { short: "RINA", name: "RINA", logo: rina },
];

const pillars = [
  {
    title: "Quality",
    icon: Award,
    text: "A consistent commitment to quality in every marine service we deliver.",
  },
  {
    title: "Technical Competence",
    icon: BadgeCheck,
    text: "Qualified expertise backing the diving, inspection and technical work we carry out.",
  },
  {
    title: "Compliance",
    icon: ShieldCheck,
    text: "Alignment with recognized maritime industry requirements.",
  },
];

const services = [
  "Professional Commercial Diving",
  "Underwater Inspection",
  "Marine Infrastructure Support",
  "Calibration Services",
];

export default function ClassificationApproval() {
  return (
    <section className="bg-slate-950 text-white">
      <div className="container-shell py-24">
        <Reveal className="mx-auto max-w-4xl text-center">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cyan-500/15 text-cyan-300">
            <BadgeCheck size={32} />
          </div>

          <div className="mt-6 text-xs font-black uppercase tracking-[.28em] text-cyan-300">
            Recognized Compliance
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Approved by Major Classification Societies
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
            AJ Marine Services is approved by major classification societies for
            applicable marine service activities, demonstrating our commitment to
            quality, technical competence and compliance with recognized maritime
            industry requirements.
          </p>
        </Reveal>

        {/* Classification society logos */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {societies.map((s, index) => (
            <Reveal key={s.short} delay={(index % 4) * 100}>
              <article
                tabIndex={0}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-2 ring-transparent transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_50px_-12px_rgba(34,211,238,0.5)] hover:ring-cyan-400 focus:outline-none focus-visible:-translate-y-2 focus-visible:ring-cyan-400"
              >
                <img
                  src={s.logo}
                  alt={`${s.name} logo`}
                  loading="lazy"
                  className="h-auto w-full opacity-75 grayscale transition duration-500 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 group-focus-visible:scale-110 group-focus-visible:opacity-100 group-focus-visible:grayscale-0"
                />

                {/* name slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-cyan-500 px-3 py-2.5 text-center text-[11px] font-black uppercase tracking-[.12em] text-white transition duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                  {s.name}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {pillars.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 100}>
                <div className="group h-full rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-500/15 text-cyan-300 transition duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14 text-center">
          <div className="text-sm font-black uppercase tracking-[.3em] text-white">
            AJ MARINE SERVICES
          </div>

          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-3">
            {services.map((s) => (
              <span
                key={s}
                className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[.15em] text-cyan-200"
              >
                {s}
              </span>
            ))}
          </div>

         
        </Reveal>
      </div>
    </section>
  );
}