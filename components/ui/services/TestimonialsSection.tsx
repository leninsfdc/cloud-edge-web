"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The SAP FICO training was genuinely outstanding. Real posting scenarios — not textbook theory. I passed my C_TS4FI_2023 certification first attempt and was placed within eight weeks of finishing.",
    name: "Priya Mehta",
    role: "SAP FI Consultant — Infosys, Ahmedabad",
  },
  {
    quote:
      "Switching careers from finance into Salesforce. The ADM-201 course gave me hands-on Salesforce access from day one, and the placement team sorted my CV and coached me through three interview rounds. Incredible value.",
    name: "James Okafor",
    role: "Salesforce Administrator — Accenture, London",
  },
  {
    quote:
      "The Job Support team was incredible during my first go-live. My advisor joined the stakeholder call and walked me through the UAT signoff process. I'd have struggled without that safety net in month one.",
    name: "Arun Krishnamurthy",
    role: "SAP FICO Consultant — Wipro, Bangalore",
  },
];

export default function TestimonialsSection() {
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
            What Our Students Say
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-bricolage-grotesque">
            5,800+ students can't be wrong.
          </h2>
        </motion.div>

        {/* Testimonials Cards Grid */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
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
                {/* Stars */}
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                  "{item.quote}"
                </p>
              </div>

              {/* User info */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h4 className="text-base font-bold text-slate-900 font-bricolage-grotesque">
                  {item.name}
                </h4>
                <p className="mt-0.5 text-xs text-slate-500 font-medium">
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}