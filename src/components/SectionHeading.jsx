export default function SectionHeading({ eyebrow, title, description, light = false }) {
  return (
    <div className={`max-w-2xl ${light ? "text-white" : "text-slate-900"}`}>
      <div className={`mb-3 text-xs font-black uppercase tracking-[.28em] ${light ? "text-cyan-300" : "text-cyan-600"}`}>{eyebrow}</div>
      <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className={`mt-4 leading-7 ${light ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}