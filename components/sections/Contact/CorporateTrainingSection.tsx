"use client";

import React from "react";
import { Users, FileText, DollarSign, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const CorporateTrainingSection = () => {
  const corporateFeatures = [
    {
      icon: <Users className="w-5 h-5 text-indigo-600" />,
      title: "Dedicated Team Batches",
      desc: "Private cohorts scheduled around your team's working hours and timezone.",
    },
    {
      icon: <FileText className="w-5 h-5 text-indigo-600" />,
      title: "Custom Curriculum",
      desc: "Curriculum tailored to your specific SAP or Salesforce configuration and industry context.",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-indigo-600" />,
      title: "Volume Pricing & Invoicing",
      desc: "Group rates from 3 seats. Invoice billing for corporates and public sector organisations.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-indigo-600" />,
      title: "L&D Progress Reports",
      desc: "Attendance tracking, assessment results and monthly performance summaries for your L&D team.",
    },
  ];

  return (
    <section className="bg-slate-50/90 py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT COLUMN */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">For Organisations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight font-bricolage-grotesque">
              Corporate &amp;{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                Group Training
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              Upskill your team in SAP or Salesforce with a programme designed around your business systems, timelines and sector. We deliver group training for teams of 3 to 300+ across the UK, India, UAE and USA.
            </p>

            <div className="pt-2 space-y-3">
              <a
                href="mailto:corporate@cloudedge.in?subject=Corporate Training Enquiry"
                className="inline-flex items-center justify-center gap-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm rounded-full py-4 px-8 shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-0.5"
              >
                <span>Request a Proposal</span>
                <ArrowRight size={16} />
              </a>

              <p className="text-xs text-slate-500 font-medium pl-1">
                Direct corporate contact:{" "}
                <a href="mailto:corporate@cloudedge.in" className="text-indigo-600 font-bold hover:underline">
                  corporate@cloudedge.in
                </a>
              </p>
            </div>
          </motion.div>

          {/* RIGHT 2x2 GRID PANEL */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {corporateFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-6 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 shadow-inner">
                  {feat.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-bricolage-grotesque mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default CorporateTrainingSection;