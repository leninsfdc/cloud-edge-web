"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BadgeLabel from "@/components/shared/BadgeLabel";
import { useCountry } from "@/libs/country-context";
import {
  GraduationCap,
  Video,
  Handshake,
  Clock,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { getWhatsAppLink } from "@/utils";

const features = [
  {
    id: 0,
    icon: GraduationCap,
    tag: "INDUSTRY EXPERTS",
    title: "Certified Expert Trainers",
    description: "Every trainer is an active industry professional with 8-15 years of real project experience and current certifications at top enterprise firms — not just theoretical academics.",
    statHighlight: "8-15 Yrs",
    statText: "Avg Industry Experience Per Trainer",
    colorTheme: {
      activeBorder: "border-indigo-500/50",
      activeBg: "bg-[#0D152A]",
      progressBg: "bg-indigo-500",
      tagBadge: "bg-indigo-950/80 text-indigo-300 border-indigo-700/50",
      iconBg: "bg-indigo-600 text-white",
      statText: "text-indigo-400",
      btnPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/20",
    },
  },
  {
    id: 1,
    icon: Video,
    tag: "UNLIMITED ACCESS",
    title: "Session Recordings",
    description: "Every live session is recorded in HD. Access recordings for up to 6 months in your student portal so you can revise, rewatch, and practice at your own pace.",
    statHighlight: "6 Months",
    statText: "On-Demand Portal Access",
    colorTheme: {
      activeBorder: "border-blue-500/50",
      activeBg: "bg-[#0D152A]",
      progressBg: "bg-blue-500",
      tagBadge: "bg-blue-950/80 text-blue-300 border-blue-700/50",
      iconBg: "bg-blue-600 text-white",
      statText: "text-blue-400",
      btnPrimary: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-500/20",
    },
  },
  {
    id: 2,
    icon: Handshake,
    tag: "CAREER SUCCESS",
    title: "Placement Assistance",
    description: "Resume writing, LinkedIn profile optimization, 1-on-1 mock interviews, and direct CV referrals to 200+ hiring corporate partners across India, UK, UAE & North America.",
    statHighlight: "200+",
    statText: "Hiring Corporate Partners",
    colorTheme: {
      activeBorder: "border-emerald-500/50",
      activeBg: "bg-[#0D152A]",
      progressBg: "bg-emerald-500",
      tagBadge: "bg-emerald-950/80 text-emerald-300 border-emerald-700/50",
      iconBg: "bg-emerald-600 text-white",
      statText: "text-emerald-400",
      btnPrimary: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20",
    },
  },
  {
    id: 3,
    icon: Clock,
    tag: "CONVENIENT TIMINGS",
    title: "Flexible Batches",
    description: "Weekday evening and weekend-only batches designed for working professionals. Choose schedules that align seamlessly with your work commitments.",
    statHighlight: "100%",
    statText: "Work-Compatible Schedules",
    colorTheme: {
      activeBorder: "border-purple-500/50",
      activeBg: "bg-[#0D152A]",
      progressBg: "bg-purple-500",
      tagBadge: "bg-purple-950/80 text-purple-300 border-purple-700/50",
      iconBg: "bg-purple-600 text-white",
      statText: "text-purple-400",
      btnPrimary: "bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/20",
    },
  },
  {
    id: 4,
    icon: Users,
    tag: "PERSONAL ATTENTION",
    title: "Small Batch Sizes",
    description: "Maximum 15 students per cohort. Guaranteed Q&A time, personalized code & system feedback, and direct 1-on-1 mentor guidance.",
    statHighlight: "≤ 15",
    statText: "Students Per Cohort",
    colorTheme: {
      activeBorder: "border-amber-500/50",
      activeBg: "bg-[#0D152A]",
      progressBg: "bg-amber-500",
      tagBadge: "bg-amber-950/80 text-amber-300 border-amber-700/50",
      iconBg: "bg-amber-600 text-white",
      statText: "text-amber-400",
      btnPrimary: "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-500/20",
    },
  },
  {
    id: 5,
    icon: Award,
    tag: "EXAM READY",
    title: "Mock Certification Exams",
    description: "500+ exam-quality practice questions curated by certified trainers to prepare you for the official Salesforce certification exam with high first-attempt pass rates.",
    statHighlight: "500+",
    statText: "Curated Practice Questions",
    colorTheme: {
      activeBorder: "border-rose-500/50",
      activeBg: "bg-[#0D152A]",
      progressBg: "bg-rose-500",
      tagBadge: "bg-rose-950/80 text-rose-300 border-rose-700/50",
      iconBg: "bg-rose-600 text-white",
      statText: "text-rose-400",
      btnPrimary: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-500/20",
    },
  },
];

const AUTOPLAY_MS = 5000;
const STEP_MS = 25;

const WhyChooseUsSection = () => {
  const { country } = useCountry();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Smooth timer - only pauses when hovering over the ACTIVE card or showcase card
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % features.length);
          return 0;
        }
        return prev + (STEP_MS / AUTOPLAY_MS) * 100;
      });
    }, STEP_MS);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTabClick = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  const activeFeature = features[activeIndex];

  return (
    <section className="bg-[#010619] py-16 lg:py-24 relative overflow-hidden px-4 sm:px-6">

      {/* Subtle Dark Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none" />

      {/* Dot Mesh */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center">

        {/* Section Header */}
        <BadgeLabel label="Why Choose Us" />

        <h2 className="text-white text-center font-extrabold leading-tight mt-6 mb-12 text-3xl sm:text-4xl md:text-5xl font-bricolage-grotesque max-w-2xl tracking-tight">
          The Advantage That Gets You Hired Fast
        </h2>

        {/* CAROUSEL CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-stretch">

          {/* LEFT COLUMN: FEATURE TABS LIST (6 Cols) */}
          <div className="lg:col-span-6 space-y-3 flex flex-col justify-center">
            {features.map((feat, idx) => {
              const isActive = activeIndex === idx;
              const IconComponent = feat.icon;
              const theme = feat.colorTheme;

              return (
                <div
                  key={feat.id}
                  onClick={() => handleTabClick(idx)}
                  onMouseEnter={() => {
                    if (isActive) setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    if (isActive) setIsPaused(false);
                  }}
                  className={`group relative rounded-2xl p-4 sm:p-4.5 transition-all duration-200 cursor-pointer overflow-hidden border ${
                    isActive
                      ? `bg-[#0D152A] ${theme.activeBorder} shadow-md shadow-indigo-950/20 text-white`
                      : "bg-[#090F20]/60 border-slate-800/60 hover:border-slate-700/60 text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isActive
                        ? theme.iconBg
                        : "bg-slate-800/60 text-slate-300 border border-slate-700/40 group-hover:scale-105"
                    }`}>
                      <IconComponent size={18} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className={`text-base sm:text-lg font-extrabold font-bricolage-grotesque truncate ${
                          isActive ? "text-white" : "text-slate-200 group-hover:text-white"
                        }`}>
                          {feat.title}
                        </h3>
                        <ChevronRight size={16} className={`transition-transform ${isActive ? "text-indigo-400 translate-x-0.5" : "text-slate-500"}`} />
                      </div>

                      <p className="text-xs text-slate-400 font-medium line-clamp-1 mt-0.5">
                        {feat.description}
                      </p>
                    </div>
                  </div>

                  {/* ACTIVE TIMED PROGRESS BAR */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-slate-800/60 overflow-hidden">
                      <div
                        className={`h-full ${theme.progressBg} transition-all duration-75 ease-linear`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: FEATURED VERTICAL CARD (6 Cols) */}
          <div className="lg:col-span-6 flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                className="relative w-full rounded-[32px] bg-[#090F20]/90 backdrop-blur-2xl border border-slate-800/80 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between min-h-[460px]"
              >
                <div>
                  {/* Top Domain Badge & Vector Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${activeFeature.colorTheme.tagBadge} flex items-center gap-1.5`}>
                      <Sparkles size={12} />
                      {activeFeature.tag}
                    </span>

                    <div className={`w-13 h-13 rounded-2xl ${activeFeature.colorTheme.iconBg} flex items-center justify-center shadow-md shrink-0`}>
                      {React.createElement(activeFeature.icon, { size: 26 })}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-bricolage-grotesque leading-tight mb-4">
                    {activeFeature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium mb-8">
                    {activeFeature.description}
                  </p>
                </div>

                {/* Bottom Highlight Metric Box & CTA Actions */}
                <div className="space-y-6 pt-6 border-t border-slate-800/80">
                  <div className="flex items-center justify-between bg-[#111A33]/80 border border-slate-800/80 rounded-2xl p-4 sm:p-5">
                    <div className={`text-3xl sm:text-4xl font-extrabold font-bricolage-grotesque ${activeFeature.colorTheme.statText} shrink-0`}>
                      {activeFeature.statHighlight}
                    </div>

                    <div className="text-xs sm:text-sm font-bold text-slate-300 max-w-[200px] text-right">
                      {activeFeature.statText}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href={`/${country.slug}/courses`}
                      className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full ${activeFeature.colorTheme.btnPrimary} px-7 py-3.5 font-extrabold text-xs sm:text-sm shadow-md transition-all duration-200 transform hover:-translate-y-0.5`}
                    >
                      <span>Explore Courses</span>
                      <ArrowRight size={16} />
                    </Link>

                    <a
                      href={getWhatsAppLink(`Hi Cloud Edge Solutions, I would like to know more about ${activeFeature.title}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700/80 px-6 py-3.5 font-extrabold text-xs sm:text-sm transition-all duration-200"
                    >
                      <span>Talk to Advisor</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;