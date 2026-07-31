"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, MessageSquare, Compass, Video } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      num: "01",
      title: "Send Your Enquiry",
      desc: "WhatsApp, email or fill the form. Tell us about your background and the course you are interested in. Takes 2 minutes.",
      icon: MessageSquare,
      accent: "bg-indigo-50 text-indigo-600 border-indigo-200"
    },
    {
      num: "02",
      title: "Free Consultation",
      desc: "A Cloud Edge advisor contacts you within 60 minutes. We listen, assess your background and recommend the right course and batch for you.",
      icon: Compass,
      accent: "bg-purple-50 text-purple-600 border-purple-200"
    },
    {
      num: "03",
      title: "Free Demo Class",
      desc: "Before you pay anything, attend a live session for free. See the instructor, the SAP or Salesforce system and the teaching style. Then decide.",
      icon: Video,
      accent: "bg-emerald-50 text-emerald-600 border-emerald-200"
    },
  ];

  return (
    <section className="bg-slate-50/90 py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">Simple Process</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight font-bricolage-grotesque">
            What Happens After{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
              You Contact Us
            </span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const IconComp = step.icon;

            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md font-bricolage-grotesque">
                      {step.num}
                    </div>

                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${step.accent}`}>
                      <IconComp size={20} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-bricolage-grotesque">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;