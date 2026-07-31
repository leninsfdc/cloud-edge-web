"use client";

import React from 'react';
import { motion } from "framer-motion";
import ResilientImage from "@/components/ui/ResilientImage";
import { Sparkles, Calendar, Rocket, BookOpen, Globe2, Award, Zap, CheckCircle2 } from "lucide-react";
import liveSession from "@/public/icons/live-session.svg";
import instruction from "@/public/icons/instruction.svg";
import cert from "@/public/icons/cert.svg";

const timelineData = [
  {
    year: "2014",
    tag: "INCEPTION",
    title: "Founded in London & Ahmedabad",
    description: "Launched with two Salesforce courses by working SAP and Salesforce consultants who saw that professionals in India and the UK had no access to live, affordable ERP training.",
    badge: "🌟 12 Initial Students",
    metric: "2 Courses",
    icon: Rocket,
    gradient: "from-blue-500 to-indigo-600",
    badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
    isHighlight: false,
  },
  {
    year: "2021",
    tag: "EXPANSION",
    title: "Full SAP Curriculum Launched",
    description: "Added SAP FICO, MM and Basis aligned to official SAP certification exams — meeting rising demand from finance, supply chain and IT professionals across India and the UK.",
    badge: "📚 3 SAP Modules Added",
    metric: "5+ Programs",
    icon: BookOpen,
    gradient: "from-indigo-500 to-purple-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
    isHighlight: false,
  },
  {
    year: "2023",
    tag: "GLOBAL SCALE",
    title: "2,000 Graduates & Truly Global",
    description: "Crossed 2,000 completions with students from UAE, USA, Canada and Australia joining the same live classrooms. Launched SAP ABAP and SAP SuccessFactors HCM.",
    badge: "🌏 12+ Countries Enrolled",
    metric: "2,000+ Alumni",
    icon: Globe2,
    gradient: "from-purple-500 to-cyan-600",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
    isHighlight: false,
  },
  {
    year: "2025+",
    tag: "TIER-1 ECOSYSTEM",
    title: "5,800+ Students & Still Growing",
    description: "10 certification courses, 94% placement rate, and a global community at Deloitte, Accenture, TCS, Infosys, Wipro and Capgemini certifying every single week.",
    badge: "⚡ 94% Placement Rate",
    metric: "5,800+ Certified",
    icon: Award,
    gradient: "from-indigo-600 via-purple-600 to-teal-500",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    isHighlight: true,
  },
];

const differentiators = [
  {
    icon: liveSession,
    title: "Live Online — Every Single Session",
    description: "No pre-recorded videos. Every class is live on Zoom with your instructor, your cohort and real SAP or Salesforce system access from day one.",
    tag: "100% LIVE INTERACTIVE",
    accentGlow: "group-hover:border-indigo-400/80",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
    iconBg: "bg-indigo-500/10 text-indigo-600 border-indigo-200/60"
  },
  {
    icon: instruction,
    title: "Instructors Who Work in the Field",
    description: "Every instructor is an active SAP or Salesforce consultant with 8–14 years of real project experience at Deloitte, Accenture, IBM, TCS and Capgemini.",
    tag: "ACTIVE PRACTITIONERS",
    accentGlow: "group-hover:border-purple-400/80",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-100",
    iconBg: "bg-purple-500/10 text-purple-600 border-purple-200/60"
  },
  {
    icon: cert,
    title: "Certification & Placement Built In",
    description: "3 full mock exams, exam strategy coaching and 12-month placement support are included in every course. 94% of active job seekers placed within 6 months.",
    tag: "GUARANTEED ROADMAP",
    accentGlow: "group-hover:border-emerald-400/80",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-200/60"
  }
];

const OurStoryAndMissionSections = () => {
  return (
    <section className="bg-slate-50/90 py-16 lg:py-20 relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(99,102,241,.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs text-indigo-700 font-extrabold tracking-wider uppercase">Our Evolution Story</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight leading-tight text-slate-900">
            From 2 courses in 2014 to <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">5,800+ professionals</span> worldwide
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Follow our decade-long journey of democratizing practical, high-impact SAP & Salesforce education across 15+ countries.
          </p>
        </motion.div>

        {/* INTERACTIVE TIMELINE ROADMAP */}
        <div className="relative mb-20">
          
          {/* Connecting Track Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-blue-400 via-indigo-500 via-purple-500 to-emerald-500 rounded-full z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
            {timelineData.map((item, idx) => {
              const IconComp = item.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.12 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group relative rounded-[30px] p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                    item.isHighlight
                      ? "bg-slate-950 text-white border border-slate-800 shadow-2xl shadow-indigo-950/40"
                      : "bg-white/80 backdrop-blur-xl border border-slate-200/80 hover:border-indigo-300 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-xl"
                  }`}
                >
                  {/* Top Badge & Year Circle Node */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} text-white flex items-center justify-center font-extrabold text-lg shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp size={22} />
                      </div>

                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeBg}`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Year Headline */}
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`font-bricolage-grotesque text-3xl font-extrabold ${item.isHighlight ? "text-white" : "text-indigo-600"}`}>
                        {item.year}
                      </span>
                      <span className={`text-xs font-bold ${item.isHighlight ? "text-indigo-300" : "text-slate-400"}`}>
                        • {item.metric}
                      </span>
                    </div>

                    {/* Milestone Title */}
                    <h3 className={`font-bricolage-grotesque text-lg font-bold mb-3 leading-snug ${item.isHighlight ? "text-white" : "text-slate-900"}`}>
                      {item.title}
                    </h3>

                    {/* Milestone Description */}
                    <p className={`text-xs sm:text-sm leading-relaxed font-medium mb-6 ${item.isHighlight ? "text-slate-300" : "text-slate-600"}`}>
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Milestone Badge */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-extrabold rounded-full px-3 py-1 ${
                      item.isHighlight
                        ? "bg-white/10 text-emerald-300 border border-white/10"
                        : "bg-slate-50 text-slate-700 border border-slate-200/80"
                    }`}>
                      <CheckCircle2 size={13} className={item.isHighlight ? "text-emerald-400" : "text-indigo-600"} />
                      <span>{item.badge}</span>
                    </span>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* THREE CORE PRINCIPLES SECTION */}
        <div className="pt-6">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto mb-12 space-y-3"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs">
              <span className="text-xs text-indigo-700 font-extrabold tracking-wider uppercase">What Sets Us Apart</span>
            </div>
            <h3 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl font-bricolage-grotesque text-slate-900 leading-tight">
              Built on Three Uncompromising Core Principles
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((diff, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`group rounded-[30px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-7 sm:p-8 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-2xl ${diff.accentGlow} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-inner ${diff.iconBg}`}>
                      <ResilientImage
                        src={diff.icon}
                        fallbackSrc={diff.icon}
                        alt={diff.title}
                        className="h-7 w-7"
                      />
                    </div>

                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${diff.badgeBg}`}>
                      {diff.tag}
                    </span>
                  </div>

                  <h4 className="font-bricolage-grotesque text-xl font-extrabold text-slate-900 mb-3 leading-snug">
                    {diff.title}
                  </h4>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                    {diff.description}
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

export default OurStoryAndMissionSections;