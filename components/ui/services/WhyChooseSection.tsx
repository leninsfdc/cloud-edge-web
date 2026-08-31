"use client";

import { motion } from "framer-motion";

const whyChooseData = [
  {
    icon: "🎓",
    title: "Certified Expert Trainers",
    description:
      "Every trainer is an active SAP or Salesforce consultant with 8–14 years of real project experience at firms like Deloitte, Accenture and IBM.",
    badge: "8–14 yrs avg industry experience",
  },
  {
    icon: "📹",
    title: "Session Recordings",
    description:
      "Every live session is recorded. Access replays for 6 months so you can revise, rewatch and never fall behind — even if you miss a class.",
    badge: "6 months recording access",
  },
  {
    icon: "🤝",
    title: "Placement Assistance",
    description:
      "Resume writing, LinkedIn optimisation, mock interviews and direct referrals to our network of 200+ hiring partners including Deloitte and TCS.",
    badge: "200+ hiring partners",
  },
  {
    icon: "⏰",
    title: "Flexible Batches",
    description:
      "Weekday evening and weekend-only batches designed for working professionals. IST, BST, EST and PST options available across all courses.",
    badge: "India, UK, USA, Canada & UAE",
  },
  {
    icon: "👥",
    title: "Small Batch Sizes",
    description:
      "Maximum 15 students per cohort. More Q&A time, personalised feedback, and direct instructor access than any large-group training provider.",
    badge: "≤15 students per batch",
  },
  {
    icon: "🏆",
    title: "Mock Certification Exams",
    description:
      "500+ exam-quality practice questions curated by certified trainers. 3 full timed mock exams and a dedicated exam strategy session in every course.",
    badge: "88% first-attempt pass rate",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-slate-50/90 py-12 lg:py-16 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-indigo-700 shadow-2xs">
            Why Choose Us
          </div>

          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-bricolage-grotesque">
            The advantage that gets you hired.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
            Six reasons 5,800+ professionals chose Cloud Edge AI over every other provider.
          </p>
        </motion.div>

        {/* Glassy Cards Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="
                rounded-[28px]
                border border-slate-200/80
                bg-white/80 backdrop-blur-xl
                p-7
                shadow-[0_10px_30px_rgba(0,0,0,0.03)]
                transition-all duration-300
                hover:border-indigo-300
                hover:shadow-xl
                flex flex-col justify-between
              "
            >
              <div>
                {/* Icon */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50/80 border border-indigo-100/80 text-3xl shadow-inner">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-900 font-bricolage-grotesque">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-slate-600 font-medium">
                  {item.description}
                </p>
              </div>

              {/* Badge */}
              <div className="mt-6 inline-flex w-fit rounded-full bg-indigo-50/90 border border-indigo-200/60 px-4 py-1.5 text-xs font-bold text-indigo-700 shadow-2xs">
                {item.badge}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}