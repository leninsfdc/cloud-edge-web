"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getWhatsAppLink } from "@/utils";
import Link from "next/link";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly will you respond to my enquiry?",
      answer: "All WhatsApp messages get a response within 60 minutes on weekdays and Saturday mornings. Email responses arrive within 2 working hours. We never leave an enquiry unanswered.",
    },
    {
      question: "Can I attend a free demo before paying?",
      answer: "Yes — always. We offer free live demo sessions for every single course. You will meet your instructor, access the SAP or Salesforce system and ask any question before committing.",
    },
    {
      question: "Do you offer corporate or group training?",
      answer: "Yes. We run dedicated group cohorts for companies of any size, with custom curriculum and invoice-based billing. Email corporate@cloudedge.in for a tailored proposal.",
    },
    {
      question: "Which countries do you serve?",
      answer: "Our live online training is available globally. We have active student communities in India, UK, UAE, USA and Canada with local pricing in INR, GBP, USD and CAD.",
    },
    {
      question: "I'm not sure which course to choose — can you help?",
      answer: "This is one of the most common reasons people contact us. Message us on WhatsApp with your background, current role and career goal and our advisor will recommend the right path.",
    },
    {
      question: "Is 0% EMI available?",
      answer: "Yes. Every Cloud Edge course is available on a 0% EMI plan, typically over 6 monthly instalments. Available in India (UPI/bank EMI) and the UK (finance plan). Contact us for exact terms.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 lg:py-16 bg-slate-50/90 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Column: Accordions */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full mb-3 shadow-2xs">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">Questions &amp; Answers</span>
              </div>
              <h2 className="font-extrabold text-3xl sm:text-4xl font-bricolage-grotesque tracking-tight text-slate-900 mb-2">
                Everything You Need to Know
              </h2>
              <p className="text-sm text-slate-600 font-medium">
                Still have questions? <Link href="/contact-us" className="text-indigo-600 font-bold hover:underline">Contact us</Link> directly.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl overflow-hidden shadow-2xs hover:border-indigo-300 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-bricolage-grotesque font-bold text-sm sm:text-base text-slate-900 hover:text-indigo-600 transition-colors focus:outline-none cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transform transition-transform duration-200 shrink-0 ml-4 ${
                          isOpen ? "rotate-180 text-indigo-600" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-slate-100"
                        >
                          <div className="p-5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium bg-slate-50/50">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column Sticky Card Widgets */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">

            {/* WhatsApp Card */}
            <div className="rounded-[28px] border border-slate-800 bg-slate-950 p-6 text-white relative overflow-hidden shadow-xl">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-indigo-600/30 filter blur-xl pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-emerald-400 font-bold text-xl">
                  💬
                </div>

                <div>
                  <h3 className="font-bricolage-grotesque text-lg font-bold text-white mb-1">
                    Still Have Questions?
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    Our advisors are available on WhatsApp Monday to Saturday. We typically respond within 60 minutes.
                  </p>
                </div>

                <a
                  href={getWhatsAppLink("Hi Cloud Edge Solutions, I have a question.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition-all duration-200 shadow-md hover:shadow-emerald-500/25"
                >
                  <MessageCircle size={16} />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Demo Voucher Card */}
            <div className="rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-6 text-center space-y-3 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-xl">
                🎓
              </div>

              <div>
                <h4 className="font-bricolage-grotesque text-base font-bold text-slate-900 mb-1">
                  Free Demo Class
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-medium max-w-xs mx-auto">
                  Attend a live session for free before you commit. No payment, no obligation.
                </p>
              </div>

              <a
                href="mailto:info@cloudedge.in?subject=Free Demo Class Request"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-bold transition-all duration-200 shadow-md hover:shadow-indigo-500/25"
              >
                <span>Book a Demo</span>
                <ArrowRight size={14} />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
