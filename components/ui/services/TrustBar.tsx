"use client";

import { motion } from "framer-motion";

const trustItems = [
  "5,800+ Professionals Trained",
  "94% Placement Rate",
  "8–14 Yrs Instructor Experience",
  "Live Online — Globally Available",
  "0% EMI on Every Course",
];

export default function TrustBar() {
  return (
    <section className="bg-slate-100/70 border-y border-slate-200/60 py-6">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {trustItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="
                flex items-center gap-2.5
                rounded-full
                border border-slate-200/80
                bg-white/80 backdrop-blur-xl
                px-5 py-2.5
                text-xs font-bold text-slate-700
                shadow-2xs
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-indigo-300
                hover:shadow-md
                cursor-default
              "
            >
              <div className="h-2 w-2 rounded-full bg-indigo-600 animate-pulse shrink-0" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}