import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import Reveal from "../components/Reveal";
import SEO from "../components/SEO";

export default function Services() {
  return (
    <>
      <SEO
        title="Marine Diving & Maintenance Services | AJ Marine Services"
        description="Explore AJ Marine Services' commercial diving, underwater inspection, hull cleaning, propeller polishing, calibration and allied marine services in Tuticorin, India."
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
    </>
  );
}
