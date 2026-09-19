import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.id}`} className="service-card group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl">
      <div className="relative h-60 overflow-hidden">
        <img src={service.image} alt={service.title} className="service-image h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 backdrop-blur">{service.tag}</span>
        <span className="absolute bottom-5 left-5 text-3xl">{service.icon}</span>
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="text-xl font-black text-slate-900">{service.title}</h3>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 transition group-hover:bg-cyan-600 group-hover:text-white"><ArrowUpRight size={17} /></span>
        </div>
        <p className="text-sm leading-6 text-slate-600">{service.description}</p>
        <div className="mt-5 text-sm font-bold text-cyan-700">Explore service →</div>
      </div>
    </Link>
  );
}