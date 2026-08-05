"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { PlaneTakeoff, PlaneLanding, Plane, Compass, Sparkles, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/utils";

const flightStages = [
  {
    id: "01",
    phase: "FLIGHT STAGE 01 • TAKEOFF",
    altitude: "Departure Gate",
    title: "Consult & Enroll",
    description: "A course advisor responds within 60 minutes, listens to your background and recommends the right SAP or Salesforce course. Attend a free demo class before paying anything.",
    tags: ["⏰ Reply in 60 min", "📚 Free demo class", "💰 0% EMI plan"],
    icon: PlaneTakeoff,
    accentColor: "from-indigo-500 to-blue-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    id: "02",
    phase: "FLIGHT STAGE 02 • IN FLIGHT",
    altitude: "Cruising Altitude: 35,000 ft",
    title: "Learn Live & Hands-On",
    description: "Attend live Zoom sessions twice a week. Log into a real SAP or Salesforce system every class — not a demo environment. Ask questions, get instructor feedback, build real skills.",
    tags: ["⚡ Live — never recorded", "💻 Real system access", "🎬 6-month recordings"],
    icon: Plane,
    accentColor: "from-blue-500 to-cyan-500",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    id: "03",
    phase: "FLIGHT STAGE 03 • FINAL APPROACH",
    altitude: "Descent & Preparation",
    title: "Certify & Strategy Session",
    description: "Complete 3 full mock exams and a dedicated exam strategy session. Sit the official SAP or Salesforce certification exam with confidence — 88% of students pass on their first attempt.",
    tags: ["✍️ 3 full mock exams", "🎯 Exam strategy session", "🎓 88% first-attempt"],
    icon: Compass,
    accentColor: "from-purple-500 to-indigo-600",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    id: "04",
    phase: "FLIGHT STAGE 04 • TOUCHDOWN",
    altitude: "Destination Reached",
    title: "Get Hired & Supported",
    description: "Resume review, LinkedIn optimization and mock interview coaching from your placement team. We connect you directly with hiring companies — Deloitte, Accenture, TCS, Infosys and more. 94% placed within 6 months.",
    tags: ["📄 Resume & LinkedIn", "🏆 Mock interviews", "✅ 94% placed in 6 months"],
    icon: PlaneLanding,
    accentColor: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  }
];

const LearningJourneySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const prevScrollRef = useRef(0);

  // Track scroll position relative to timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 80%"],
  });

  // Track scroll direction to rotate plane orientation dynamically
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > prevScrollRef.current + 0.005) {
      setIsScrollingDown(true);
    } else if (latest < prevScrollRef.current - 0.005) {
      setIsScrollingDown(false);
    }
    prevScrollRef.current = latest;
  });

  // Smooth out scroll progress for buttery-smooth airplane movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    restDelta: 0.001,
  });

  // Calculate dynamic line height and airplane position along the track
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const planeTopPosition = useTransform(smoothProgress, [0, 1], ["0%", "92%"]);

  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-slate-50/90">
      {/* Dynamic Purplish Ambient Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Cloud & Dot Background Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(99,102,241,.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full">
            <Plane className="w-3.5 h-3.5 animate-pulse text-indigo-600" />
            <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">The Learning Journey</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-slate-900 leading-tight">
            From Enquiry to Employed in <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">4 Steps</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto font-medium leading-relaxed">
            Scroll down or up to pilot your airplane along the structured path into international tier-1 tech consulting.
          </p>
        </motion.div>

        {/* Scroll-Driven Vertical Airplane Journey Timeline Container */}
        <div ref={containerRef} className="relative max-w-4xl mx-auto py-4">

          {/* Vertical Flight Track Line */}
          <div className="absolute left-6 md:left-1/2 top-8 bottom-8 w-1.5 bg-slate-200/80 rounded-full -translate-x-1/2 overflow-hidden">
            {/* Scroll-animated gradient progress fill */}
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-indigo-500 via-cyan-500 via-purple-500 to-emerald-500 rounded-full"
            />
          </div>

          {/* Scroll-Driven Moving & Directional Rotating Airplane */}
          <motion.div
            style={{ top: planeTopPosition }}
            className="absolute left-6 md:left-1/2 -translate-x-1/2 z-30 pointer-events-none"
          >
            <motion.div
              animate={{
                rotate: isScrollingDown ? 135 : -45,
              }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-12 h-12 rounded-full bg-indigo-600 border-2 border-white text-white flex items-center justify-center shadow-xl shadow-indigo-500/50"
            >
              <Plane size={22} />
            </motion.div>
          </motion.div>

          {/* Flight Timeline Steps */}
          <div className="space-y-12 md:space-y-16">
            {flightStages.map((stage, index) => {
              const IconComp = stage.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={stage.id}
                  className={`relative flex flex-col md:flex-row items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Waypoint Circle Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stage.accentColor} text-white flex items-center justify-center shadow-md border-2 border-white`}
                    >
                      <IconComp size={22} />
                    </motion.div>
                  </div>

                  {/* Card Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${isEven ? "md:pr-2" : "md:pl-2"
                      }`}
                  >
                    <div className="rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-xl hover:border-indigo-300 transition-all duration-300">

                      {/* Flight Header Tags */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${stage.badgeBg}`}>
                          {stage.phase}
                        </span>

                        <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                          <Sparkles size={12} className="text-amber-500" />
                          {stage.altitude}
                        </span>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-bricolage-grotesque mb-2">
                        {stage.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium mb-4">
                        {stage.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {stage.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="text-xs bg-slate-50 border border-slate-200/80 px-3 py-1 rounded-full font-bold text-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Action Engagement Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href={getWhatsAppLink("Hi Cloud Edge Solutions, I want to begin my learning journey.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full group relative bg-emerald-600 text-white shadow-[0_12px_25px_rgba(16,185,129,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(16,185,129,0.45)] px-8 py-4 font-bold text-sm  hover:shadow-emerald-500/25 transform"
          >
            {/* Glass Blob */}
            <span
              className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-white/30 blur-xl transition-all duration-700 group-hover:left-1/2 group-hover:top-0 group-hover:-translate-x-1/2"
            />

            {/* Shine */}
            <span
              className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <MessageCircle size={18} />
            <span>Begin Your Journey</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default LearningJourneySection;