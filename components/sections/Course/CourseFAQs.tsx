"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ICourseFAQ } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  faqs?: ICourseFAQ[];
}

const CourseFAQs = ({ faqs = [] }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs.length) return null;

  const sortedFaqs = [...faqs].sort(
    (a, b) => a.display_order - b.display_order
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 md:mt-16"
    >
      <h3 className="text-2xl sm:text-3xl font-extrabold font-bricolage-grotesque text-slate-900 mb-6 md:mb-8">
        Frequently Asked Questions
      </h3>

      <div className="space-y-3.5">
        {sortedFaqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "bg-white/90 border-indigo-300 shadow-md backdrop-blur-xl"
                  : "bg-white/80 border-slate-200/80 hover:border-slate-300 backdrop-blur-md shadow-2xs"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors cursor-pointer gap-4"
              >
                <span className="text-base sm:text-lg font-bold text-slate-900 font-bricolage-grotesque">
                  {faq.question}
                </span>

                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-indigo-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100/80">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default CourseFAQs;