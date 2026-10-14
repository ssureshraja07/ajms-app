import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Compass,
  Eye,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Waves,
  Wrench,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ClassificationApproval from "../components/ClassificationApproval";
import Reveal from "../components/Reveal";
import aboutbg from "../images/aboutbg.png";
import about2 from "../images/about2.png";

/* ---------- Content data ---------- */

const introParagraphs = [
  "AJ Marine Services is a marine service company based in Tuticorin, Tamil Nadu, India, providing commercial diving, underwater inspection, marine maintenance and calibration-related services. We are committed to supporting the operational requirements of shipowners, ship management companies, port authorities, shipping agencies, ship repair contractors, marine construction companies and industrial clients.",
  "With a focus on quality, professional service delivery and customer satisfaction, we aim to provide practical and dependable solutions for vessel operations, underwater maintenance, marine infrastructure inspection and technical service requirements across major ports throughout India.",
  "Our approach combines technical service capabilities, careful planning, operational coordination and a commitment to meeting applicable industry requirements. We understand the importance of reliable underwater services in supporting vessel readiness, port operations and the long-term integrity of marine assets.",
];

const expertise = [
  {
    title: "Commercial Diving & Underwater Services",
    icon: Waves,
    paragraphs: [
      "Commercial diving is a key area of our business. We support underwater inspection, cleaning, maintenance and repair activities associated with vessels and marine infrastructure.",
      "Our service scope includes underwater hull inspection, propeller and rudder inspection, sea chest inspection, underwater hull cleaning, marine growth removal, underwater maintenance support, search and recovery, and other diving activities according to project requirements and available operational capabilities.",
      "We recognize the importance of effective planning, risk assessment, suitable diving equipment, competent personnel and appropriate safety procedures in commercial diving operations.",
    ],
  },
  {
    title: "Calibration & Technical Services",
    icon: Wrench,
    paragraphs: [
      "AJ Marine Services also provides calibration-related services and technical support for marine and industrial customers, within its established service scope and available capabilities.",
      "We recognize the importance of measurement accuracy, equipment reliability and documented quality practices in marine and industrial operations. Our focus is on supporting customers' technical requirements through appropriate service coordination and quality-conscious execution.",
    ],
  },
  {
    title: "Quality Management & Industry Compliance",
    icon: BadgeCheck,
    badge: "ISO 9001:2015 IRQS Certified",
    paragraphs: [
      "Quality is an important part of our business philosophy. AJ Marine Services is an ISO 9001:2015 IRQS Certified Service Company, reflecting our commitment to quality management, customer satisfaction and continual improvement.",
      "We seek to deliver services in accordance with applicable requirements, customer specifications and established operational procedures. Our approach emphasizes professional coordination, appropriate documentation, safety awareness and consistent service delivery.",
    ],
  },
];

const mission =
  "To provide reliable, quality-focused marine services that support safe vessel operations, effective underwater maintenance and the continued performance of marine infrastructure, while building long-term relationships with our customers through professionalism, responsiveness and service commitment.";

const vision =
  "To establish AJ Marine Services as a trusted marine service provider across India, recognized for professional commercial diving, underwater inspection, calibration-related services and dependable support for the maritime and port industries.";

const coreValues = [
  {
    title: "Quality",
    icon: Award,
    text: "Maintaining a strong focus on service quality, customer requirements and continual improvement.",
  },
  {
    title: "Safety",
    icon: ShieldCheck,
    text: "Promoting safe working practices, operational planning and appropriate risk management in marine activities.",
  },
  {
    title: "Professionalism",
    icon: Briefcase,
    text: "Delivering services with accountability, technical care and effective communication.",
  },
  {
    title: "Reliability",
    icon: CheckCircle2,
    text: "Working to meet agreed project requirements and customer expectations.",
  },
  {
    title: "Customer Commitment",
    icon: Users,
    text: "Building lasting business relationships through responsive coordination and dependable support.",
  },
  {
    title: "Continuous Improvement",
    icon: TrendingUp,
    text: "Striving to improve service processes, operational efficiency and customer experience.",
  },
];

const servingParagraphs = [
  "Operating from Tuticorin, Tamil Nadu, AJ Marine Services is positioned to support customers across major ports and maritime hubs throughout India, subject to project requirements, mobilization arrangements and service availability.",
  "We welcome enquiries from shipowners, ship managers, port authorities, shipping companies, marine contractors and industrial organizations seeking commercial diving, underwater inspection, marine maintenance or calibration-related support.",
  "At AJ Marine Services, our objective is to build trusted partnerships by combining a quality-focused approach with practical marine service solutions.",
];

/* ---------- Page ---------- */

export default function About() {
  return (
    <>
     
{/* Hero */}
<section
  className="relative overflow-hidden py-50 text-white bg-no-repeat bg-center bg-contain lg:bg-cover"
  style={{
    backgroundImage: `url(${aboutbg})`,
    backgroundSize: "100% auto",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
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
              AJ MARINE SERVICES is positioned as a professional marine diving
              and ship services company supporting vessel owners, operators and
              marine stakeholders.
            </p>
          </div>
        </div>
      </section>

     

      {/* Intro - Trusted Partner */}
      <section className="bg-slate-50">
        <div className="container-shell py-24">
          <Reveal className="mx-auto max-w-4xl text-center">
            <div className="text-xs font-black uppercase tracking-[.28em] text-cyan-600">
              About AJ Marine Services
            </div>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Your Trusted Partner in Commercial Diving &amp; Technical Services
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 max-w-4xl space-y-6">
            {introParagraphs.map((text, index) => (
              <Reveal key={index} delay={index * 100}>
                <p className="text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                  {text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="container-shell py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-black uppercase tracking-[.28em] text-cyan-600">
            What We Do
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Expertise
          </h2>
        </Reveal>

        <div className="mt-14 space-y-8">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.title} delay={index * 100}>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-xl sm:p-10">
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <Icon size={28} />
                    </div>

                    <h3 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                      {item.title}
                    </h3>

                    {item.badge && (
                      <span className="rounded-full border border-cyan-400/40 bg-cyan-50 px-4 py-1.5 text-xs font-black uppercase tracking-[.2em] text-cyan-700">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 space-y-5">
                    {item.paragraphs.map((text, i) => (
                      <p key={i} className="leading-8 text-slate-600">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-950 text-white">
        <div className="container-shell grid gap-8 py-24 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                <Target size={28} />
              </div>

              <div className="mt-6 text-xs font-black uppercase tracking-[.28em] text-cyan-300">
                Purpose
              </div>

              <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Our Mission
              </h3>

              <p className="mt-5 leading-8 text-slate-300">{mission}</p>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                <Eye size={28} />
              </div>

              <div className="mt-6 text-xs font-black uppercase tracking-[.28em] text-cyan-300">
                Direction
              </div>

              <h3 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                Our Vision
              </h3>

              <p className="mt-5 leading-8 text-slate-300">{vision}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="container-shell py-24">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-black uppercase tracking-[.28em] text-cyan-600">
            What Drives Us
          </div>

          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Core Values
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <Reveal key={value.title} delay={index * 100}>
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-2xl">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-cyan-50 text-cyan-600 transition duration-300 group-hover:bg-cyan-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Serving India's Maritime & Port Sector */}
      <section className="bg-slate-50">
        <div className="container-shell py-24">

      <ClassificationApproval />

          <Reveal className="mt-12 text-center">
            <div className="text-sm font-black uppercase tracking-[.3em] text-slate-900">
              AJ MARINE SERVICES
            </div>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              Talk to AJ MARINE SERVICES <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}