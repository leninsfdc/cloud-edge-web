"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "@/utils";

const faqs = [
  {
    question: "Do I need prior experience to enrol?",
    answer:
      "No. Our SAP and Salesforce courses are designed for career changers and professionals with no prior ERP experience. A free demo session helps you confirm the right starting point before enrolling.",
  },
  {
    question: "What exactly is the Job Support Programme?",
    answer:
      "Job Support is a post-placement service where a dedicated advisor helps you handle live tasks in your new SAP or Salesforce role. You submit real work scenarios — tickets, config requests, client queries — and your advisor guides you through the solution. It also includes weekly check-ins, client communication coaching, and escalation cover for high-pressure moments like go-lives.",
  },
  {
    question: "Are sessions recorded if I miss one?",
    answer:
      "Yes — all live sessions are recorded and available within 24 hours. Recordings are accessible for 6 months from your course start date so you can review any module as many times as you need.",
  },
  {
    question: "How does the placement service work?",
    answer:
      "After completing your course, your placement advisor works with you on your CV and LinkedIn profile, connects you to our 200+ hiring partner network, and coaches you through interviews. 94% of active job seekers are placed within 6 months. Placement support is included in every course — 12 months.",
  },
  {
    question: "Can we customise the curriculum for our company?",
    answer:
      "Yes. Corporate L&D clients receive a pre-training needs analysis where we map course content to your specific SAP or Salesforce configuration, industry and business objectives.",
  },
  {
    question: "Is 0% EMI available on all courses?",
    answer:
      "Yes — every Cloud Edge AI course can be split into monthly instalments at 0% interest. Available via UPI and bank EMI in India, and via our finance plan in the UK.",
  },
  {
    question: "Which certifications do your courses prepare for?",
    answer:
      "SAP courses align to official SAP S/4HANA certification exams including C_TS4FI_2023 (FICO) and C_THR81_2311 (SuccessFactors). Salesforce courses prepare for ADM-201 and Platform Developer I certifications.",
  },
  {
    question: "Are Cloud Edge AI courses officially accredited?",
    answer:
      "Our courses are CPD accredited and aligned to official SAP and Salesforce certification syllabuses. Our 88% first-attempt pass rate reflects that.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50/90 pt-12 lg:pt-16 pb-6 relative overflow-hidden">
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-indigo-700 shadow-2xs">
            Frequently Asked Questions
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-bricolage-grotesque">
            Everything You Need to Know
          </h2>
        </motion.div>

        {/* FAQ Accordions */}
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                    ? "bg-white/95 border-indigo-300 shadow-md backdrop-blur-xl"
                    : "bg-white/80 border-slate-200/80 hover:border-slate-300 backdrop-blur-md shadow-2xs"
                  }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4.5 text-left cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900 font-bricolage-grotesque">
                    {faq.question}
                  </span>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "bg-slate-100 text-slate-400"
                      }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
                      <div className="border-t border-slate-100/80 px-6 pb-5 pt-3 text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Still Have Questions Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 max-w-4xl mx-auto rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-xl p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-lg hover:border-indigo-300 transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 shadow-inner">
              <MessageCircle size={24} />
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-bricolage-grotesque">
                Still have questions?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                Our advisors are on WhatsApp Monday to Saturday — typically responding within 60 minutes.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink("Hi Cloud Edge AI Solutions, I have a question about your services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full group relative bg-emerald-600 text-white shadow-[0_12px_25px_rgba(16,185,129,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(16,185,129,0.45)] px-6 py-3 text-xs sm:text-sm font-bold hover:shadow-emerald-500/25 transform shrink-0"
          >

            {/* Glass Blob */}
            <span
              className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-white/30 blur-xl transition-all duration-700 group-hover:left-1/2 group-hover:top-0 group-hover:-translate-x-1/2"
            />

            {/* Shine */}
            <span
              className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <MessageCircle size={16} />
            <span>Ask on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}