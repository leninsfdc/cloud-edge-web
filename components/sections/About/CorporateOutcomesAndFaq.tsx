"use client"

import React, { useState } from 'react';
import IN from "@/public/icons/IN.svg";
import GB from "@/public/icons/GB.svg";
import CA from "@/public/icons/CA.svg";
import AE from "@/public/icons/AE.svg";
import US from "@/public/icons/US.svg";
import whatsapp from "@/public/icons/whatsapp.svg";
import { motion, AnimatePresence } from 'framer-motion';
import ResilientImage from '@/components/ui/ResilientImage';
import { Sparkles, MessageCircle, ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppLink } from '@/utils';
import Link from 'next/link';
import { useCountry } from '@/libs/country-context';

const companies = [
  "Deloitte", "Accenture", "Infosys", "TCS", "Wipro", "Capgemini",
  "IBM", "Cognizant", "HCL Technologies", "Salesforce", "SAP",
  "PwC", "KPMG", "EY", "NHS", "Barclays", "Amazon", "Microsoft",
  "JP Morgan", "Lloyds Banking Group"
];

const regions = [
  { flag: IN, country: "India", stats: "3,200+ students", meta: "INR pricing · IST batches" },
  { flag: GB, country: "United Kingdom", stats: "1,100+ students", meta: "GBP pricing · BST batches" },
  { flag: US, country: "United States", stats: "620+ students", meta: "USD pricing · EST/PST" },
  { flag: CA, country: "Canada", stats: "380+ students", meta: "CAD pricing · Weekend batches" },
  { flag: AE, country: "UAE & Gulf", stats: "500+ students", meta: "USD/AED · Evening batches" }
];

const faqsData = [
  {
    q: "Are Cloud Edge courses officially accredited?",
    a: "Our courses are CPD accredited and aligned to official SAP and Salesforce certification syllabuses. We are not an official SAP or Salesforce authorised training partner but our curriculum is built directly from official exam guides, and our pass rates reflect that."
  },
  {
    q: "How long to get a job after completing a course?",
    a: "94% of our graduates who actively apply for SAP or Salesforce roles secure one within 6 months. Most students with strong interview preparation receive offers within 2–3 months of certification."
  },
  {
    q: "Do I need prior SAP or Salesforce experience?",
    a: "No prior experience is required for beginner courses (FICO, MM, SF Administrator). Some courses (ABAP, LWC, Integration) benefit from a basic programming background. Each course page specifies the exact prerequisites."
  },
  {
    q: "What is the difference between SAP and Salesforce careers?",
    a: "SAP is dominant in large enterprises across manufacturing, BFSI and the public sector. Salesforce leads in CRM, sales and customer service. Both have strong global demand and clear career paths. Your existing background typically points naturally to one or the other."
  },
  {
    q: "Are sessions recorded if I miss one?",
    a: "Yes. Every live session is recorded and available in your student portal within 24 hours. Recordings are accessible for 6 months from the course start date."
  },
  {
    q: "What is the available payment options?",
    a: "Bank transfer, UPI and card in India; BACS and card in the UK; wire transfer and card in the USA and Canada. 0% EMI available in all regions. Contact us for the exact payment options for your country and course."
  },
  {
    q: "Do you provide a certificate on completion?",
    a: "Yes. All students who complete the course receive a Cloud Edge Solutions certificate of completion. This is separate from the official SAP or Salesforce certification, which you sit independently after our exam prep."
  },
  {
    q: "Can I take both SAP and Salesforce courses?",
    a: "Yes. Many students start with one platform and later add the other. We recommend completing one course and gaining work experience before adding a second. Talk to our advisors for a personalised recommendation."
  }
];

const CorporateOutcomesAndFaq = () => {
  const { country } = useCountry();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-slate-50/90">

      {/* 1. EMPLOYERS & OUTCOMES SECTION (DARK GLASS) */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 lg:py-16 bg-slate-950 relative overflow-hidden text-white"
      >
        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-indigo-600/20 filter blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs text-indigo-200 font-extrabold uppercase tracking-wider">Career Outcomes</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-white leading-tight">
              Where Our Graduates Work
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto font-medium leading-relaxed">
              Cloud Edge graduates have gone on to roles at some of the world’s leading organisations.
            </p>
          </div>

          {/* Badges Grid */}
          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto mb-12">
            {companies.map((company, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.05 }}
                className="text-xs sm:text-sm font-semibold bg-white/5 border border-white/10 text-slate-200 px-4 py-2 rounded-xl backdrop-blur-md transition-all duration-200 hover:bg-white/10 hover:border-white/20 cursor-default"
              >
                {company}
              </motion.span>
            ))}
          </div>

          {/* Outcome Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto border-t border-slate-800/80 pt-10">
            <motion.div whileHover={{ y: -3 }} className="text-center space-y-2 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <div className="text-4xl sm:text-5xl font-extrabold text-indigo-400 font-bricolage-grotesque tracking-tight">
                94%
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                of active job seekers placed within 6 months of completing their course
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="text-center space-y-2 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <div className="text-4xl sm:text-5xl font-extrabold text-teal-400 font-bricolage-grotesque tracking-tight">
                ₹8.5 LPA
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                average first SAP / Salesforce salary for India-based graduates
              </p>
            </motion.div>

            <motion.div whileHover={{ y: -3 }} className="text-center space-y-2 p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
              <div className="text-4xl sm:text-5xl font-extrabold text-cyan-400 font-bricolage-grotesque tracking-tight">
                £52k
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                average first SAP / Salesforce salary for UK-based graduates
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 2. GLOBAL REACH SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 lg:py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs">
              <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">Our Reach</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-slate-900 leading-tight">
              One Classroom, Five Countries
            </h2>
            <p className="text-base text-slate-600 max-w-md mx-auto font-medium leading-relaxed">
              The same expert instructor teaches students from five countries in the same live session simultaneously.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {regions.map((reach, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-5 text-center flex flex-col items-center justify-center transition-all duration-300 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-300"
              >
                <ResilientImage
                  src={reach.flag}
                  fallbackSrc={reach.flag}
                  alt={reach.country}
                  className="w-7 h-7 mb-2 object-contain rounded-xs"
                />
                <h3 className="font-bricolage-grotesque text-sm font-extrabold text-slate-900 mb-1">
                  {reach.country}
                </h3>
                <div className="text-[11px] text-slate-500 font-medium leading-relaxed">
                  <span className="text-indigo-600 font-bold block mb-0.5">{reach.stats}</span>
                  {reach.meta}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. FAQ SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 lg:py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Accordions */}
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
                  Still have questions? <Link href={`/${country.slug}/contact-us`} className="text-indigo-600 font-bold hover:underline">Contact us</Link> directly.
                </p>
              </div>

              <div className="space-y-3">
                {faqsData.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div key={idx} className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl overflow-hidden shadow-2xs hover:border-indigo-300 transition-colors">
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left font-bricolage-grotesque font-bold text-sm sm:text-base text-slate-900 hover:text-indigo-600 transition-colors focus:outline-none"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-slate-400 transform transition-transform duration-200 shrink-0 ml-4 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`} />
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
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Sticky Card Widgets */}
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
      </motion.section>

      {/* 4. COMPACT CTA BANNER CARD */}
      <section className="py-6 lg:py-8 container mx-auto px-4 sm:px-6">
        <div className="rounded-[32px] bg-slate-950 border border-slate-800 p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1 rounded-full backdrop-blur-md">
              <span className="text-xs text-indigo-200 font-extrabold uppercase tracking-wider">Next Cohort Enrolling Now</span>
            </div>

            <h2 className="font-extrabold text-3xl sm:text-4xl font-bricolage-grotesque tracking-tight text-white leading-tight">
              Ready to Transform Your Career?
            </h2>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              Browse all 10 SAP and Salesforce courses, book a free demo session, or message us on WhatsApp for personalised guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link
                href={`/${country.slug}/courses`}
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg transition-all duration-200 text-center"
              >
                Browse All Courses →
              </Link>

              <a
                href={getWhatsAppLink("Hi Cloud Edge Solutions, I would like to learn more.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-full shadow-lg transition-all duration-200 text-center"
              >
                
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CorporateOutcomesAndFaq;
