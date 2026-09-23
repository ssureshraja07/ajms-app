
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Blog() {
  const articles = [
    {
      id: "importance-of-underwater-inspection",
      title: "Why Underwater Inspection Matters for Commercial Vessels",
      date: "September 18, 2026",
      category: "Underwater Inspection",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85",
      excerpt:
        "Underwater inspection plays an important role in identifying vessel condition issues below the waterline. Regular inspection can help operators understand hull, propeller, rudder and other subsea conditions before they become larger operational concerns.",
    },

    {
      id: "hull-cleaning-vessel-efficiency",
      title: "How Hull Cleaning Can Support Vessel Efficiency",
      date: "September 10, 2026",
      category: "Hull Maintenance",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1566847438217-76e82d383f84?auto=format&fit=crop&w=1400&q=85",
      excerpt:
        "Marine growth and fouling can increase underwater resistance and affect vessel performance. Understanding the relationship between hull condition, fuel consumption and maintenance helps vessel operators plan effective cleaning schedules.",
    },

    {
      id: "propeller-polishing",
      title: "Propeller Polishing: Maintaining Underwater Performance",
      date: "August 28, 2026",
      category: "Propeller Maintenance",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1400&q=85",
      excerpt:
        "The propeller is one of the most important components of a vessel's propulsion system. Marine growth, fouling and surface roughness can affect its performance, making regular inspection and maintenance an important part of vessel care.",
    },

    {
      id: "commercial-diving",
      title: "The Role of Commercial Diving in Marine Operations",
      date: "August 15, 2026",
      category: "Commercial Diving",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=1400&q=85",
      excerpt:
        "Commercial divers provide essential underwater support for vessels and marine structures. From inspections and cleaning to maintenance and repair activities, professional diving teams can support a wide range of maritime requirements.",
    },

    {
      id: "marine-maintenance",
      title: "Why Preventive Marine Maintenance Matters",
      date: "July 30, 2026",
      category: "Marine Maintenance",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?auto=format&fit=crop&w=1400&q=85",
      excerpt:
        "Preventive maintenance helps vessel operators identify potential problems before they develop into major operational issues. A planned approach to marine maintenance can support reliability, safety and vessel availability.",
    },

    {
      id: "marine-safety-equipment",
      title: "Understanding the Importance of FFA and LSA Equipment",
      date: "July 18, 2026",
      category: "Marine Safety",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1504109586057-7a2ae83d1338?auto=format&fit=crop&w=1400&q=85",
      excerpt:
        "Fire Fighting Appliances and Life Saving Appliances are essential parts of vessel safety systems. Proper inspection, testing, maintenance and documentation help keep safety equipment ready when it is needed.",
    },

    {
      id: "marine-surveys",
      title: "What Vessel Operators Should Know About In-Water Surveys",
      date: "June 26, 2026",
      category: "Marine Surveys",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1400&q=85",
      excerpt:
        "In-water surveys provide valuable information about a vessel's underwater condition without always requiring the vessel to enter dry dock. Understanding the survey process helps operators plan maintenance more effectively.",
    },

    {
      id: "marine-response-india",
      title: "Rapid Marine Support Across India's Major Ports",
      date: "June 12, 2026",
      category: "AJMS Insights",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1400&q=85",
      excerpt:
        "India's coastline connects some of the country's busiest commercial ports. A responsive marine service network can help vessel operators access underwater inspection, maintenance and support services closer to their operating locations.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7fafc] text-[#071b2d]">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#061a2b] pt-32 pb-24 lg:pt-40 lg:pb-28">

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            {/* Label */}
            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-14 bg-cyan-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                AJMS Insights
              </span>

            </div>


            {/* Heading */}
            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">

              Maritime

              <br />

              <span className="text-cyan-300">
                Knowledge Hub.
              </span>

            </h1>


            <p className="mt-7 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Insights, technical knowledge and practical information
              covering marine operations, underwater inspection, vessel
              maintenance, safety and maritime services.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          BLOG INTRO
      ===================================================== */}

      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
                Latest Articles
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#071b2d] sm:text-4xl">
                Insights from the maritime world
              </h2>

            </div>

            <p className="max-w-xl leading-7 text-slate-500">
              Explore practical insights into vessel maintenance, underwater
              operations, marine safety and the technologies supporting
              modern maritime operations.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED ARTICLE
      ===================================================== */}

      <section className="bg-white pb-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group grid overflow-hidden rounded-3xl bg-[#061a2b] lg:grid-cols-2"
          >

            {/* Image */}
            <div className="relative min-h-[360px] overflow-hidden">

              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            </div>


            {/* Content */}
            <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-14">

              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">

                <span>
                  Featured Article
                </span>

                <span className="h-1 w-1 rounded-full bg-cyan-300" />

                <span>
                  {articles[0].category}
                </span>

              </div>


              <h2 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-4xl">
                {articles[0].title}
              </h2>


              <p className="mt-5 leading-8 text-white/60">
                {articles[0].excerpt}
              </p>


              <div className="mt-7 flex items-center gap-5 text-sm text-white/40">

                <span className="flex items-center gap-2">
                  <CalendarDays size={15} />
                  {articles[0].date}
                </span>

                <span className="flex items-center gap-2">
                  <Clock size={15} />
                  {articles[0].readTime}
                </span>

              </div>


              <Link
                to={`/blog/${articles[0].id}`}
                className="group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-cyan-400 px-6 py-3.5 font-semibold text-[#041522] transition hover:bg-cyan-300"
              >
                Read Article

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />

              </Link>

            </div>

          </motion.article>

        </div>

      </section>


      {/* =====================================================
          ARTICLE GRID
      ===================================================== */}

      <section className="bg-[#f4f8fa] py-20 lg:py-28">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {articles.slice(1).map((article, index) => (

              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Image */}
                <div className="relative h-60 overflow-hidden">

                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-[#061a2b]/80 px-3 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
                    {article.category}
                  </div>

                </div>


                {/* Content */}
                <div className="p-7">

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">

                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={14} />
                      {article.date}
                    </span>

                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {article.readTime}
                    </span>

                  </div>


                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold leading-snug text-[#071b2d] transition group-hover:text-cyan-600">
                    {article.title}
                  </h3>


                  {/* Excerpt */}
                  <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-500">
                    {article.excerpt}
                  </p>


                  {/* Read More */}
                  <Link
                    to={`/blog/${article.id}`}
                    className="group/link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#071b2d] transition hover:text-cyan-600"
                  >
                    Read More

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />

                  </Link>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-white py-24 lg:py-32">

        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">

          <BookOpen
            size={42}
            className="mx-auto text-cyan-600"
          />

          <p className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600">
            AJMS Marine
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-[#071b2d] sm:text-5xl">
            Knowledge that keeps
            <br />
            <span className="text-cyan-600">
              vessels moving.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-500">
            Learn more about our marine services, underwater operations and
            vessel maintenance capabilities.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#071b2d] px-7 py-4 font-semibold text-white transition hover:bg-cyan-600"
          >
            Explore Our Services

            <ArrowRight size={18} />

          </Link>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

    </div>
  );
}
