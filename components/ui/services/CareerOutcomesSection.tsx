"use client";

import { motion } from "framer-motion";

const employers = [
  "Deloitte",
  "Accenture",
  "Infosys",
  "TCS",
  "Wipro",
  "Capgemini",
  "IBM",
  "Cognizant",
  "HCL Technologies",
  "PwC",
  "KPMG",
  "EY",
  "Salesforce",
  "SAP",
  "NHS",
  "Barclays",
  "Lloyds Banking Group",
  "JP Morgan",
  "Amazon",
  "Microsoft",
];

const stats = [
  {
    value: "94%",
    label:
      "of active job seekers placed within 6 months of completing their course",
  },
  {
    value: "₹8.5 LPA",
    label:
      "average first SAP/Salesforce salary for India-based graduates",
  },
  {
    value: "£52k",
    label:
      "average first SAP/Salesforce salary for UK-based graduates",
  },
];

export default function CareerOutcomesSection() {
  return (
    <section className="bg-slate-50/90 py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-indigo-700 shadow-2xs">
            Career Outcomes
          </div>

          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-bricolage-grotesque">
            Where our graduates work.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
            Cloud Edge AI graduates have gone on to roles at some of the world's
            leading organisations — hired directly through our 200+ partner network.
          </p>
        </motion.div>

        {/* Employers Pills */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {employers.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              whileHover={{ y: -3, scale: 1.05 }}
              className="
                rounded-full
                border border-slate-200/80
                bg-white/80 backdrop-blur-xl
                px-5 py-2.5
                text-xs sm:text-sm font-bold text-slate-800
                shadow-2xs
                transition-all duration-300
                hover:border-indigo-300
                hover:shadow-md
                cursor-default
              "
            >
              {item}
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="
                rounded-3xl
                border border-slate-200/80
                bg-white/80 backdrop-blur-xl
                p-8
                text-center
                shadow-[0_10px_30px_rgba(0,0,0,0.03)]
                transition-all duration-300
                hover:border-indigo-300
                hover:shadow-xl
              "
            >
              <h3 className="mb-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-indigo-600 font-bricolage-grotesque">
                {item.value}
              </h3>

              <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}