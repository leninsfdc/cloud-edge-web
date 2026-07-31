"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import { PlaneTakeoff, PlaneLanding, Plane, Compass, Sparkles } from "lucide-react";

const flightSteps = [
  {
    number: "01",
    flightTag: "FLIGHT STAGE 01 • TAKEOFF",
    altitude: "Departure Gate",
    title: "Consult & Enrol",
    description:
      "A dedicated course advisor responds within 60 minutes, evaluates your background, recommends the right career track, and invites you to a live demo before you pay anything.",
    icon: PlaneTakeoff,
    accentColor: "from-indigo-500 to-blue-600",
    badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
  },
  {
    number: "02",
    flightTag: "FLIGHT STAGE 02 • IN-FLIGHT",
    altitude: "Cruising Altitude: 35,000 ft",
    title: "Learn Live & Hands-On",
    description:
      "Attend live interactive Zoom sessions, log into real SAP or Salesforce sandbox environments every class, and build real project experience in small cohorts of ≤15 students.",
    icon: Plane,
    accentColor: "from-blue-500 to-cyan-500",
    badgeBg: "bg-cyan-50 text-cyan-700 border-cyan-200",
  },
  {
    number: "03",
    flightTag: "FLIGHT STAGE 03 • FINAL APPROACH",
    altitude: "Descent & Preparation",
    title: "Certify & Strategy Session",
    description:
      "Complete 3 full timed mock certification exams, receive exam preparation strategies, and master official SAP/Salesforce questions. 88% pass on their first attempt.",
    icon: Compass,
    accentColor: "from-purple-500 to-indigo-600",
    badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    number: "04",
    flightTag: "FLIGHT STAGE 04 • TOUCHDOWN",
    altitude: "Destination Reached",
    title: "Get Hired & Job Supported",
    description:
      "Placement team optimizes your CV and LinkedIn, schedules interviews with 200+ partner firms, and pairs you with an advisor for post-hiring On-the-Job Support.",
    icon: PlaneLanding,
    accentColor: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
];

export default function LearningJourneySection() {
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
    <section className="bg-slate-50/90 py-12 lg:py-16 relative overflow-hidden">
      {/* Background Ambient Orbs */}
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-indigo-700 shadow-2xs">
            <Plane className="w-3.5 h-3.5 animate-pulse text-indigo-600" />
            <span>The Flight Plan to Your Career</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-bricolage-grotesque leading-tight">
            Your Flight Path: From Takeoff to Landing
          </h2>

          <p className="mt-3 text-base sm:text-lg leading-relaxed text-slate-600 font-medium max-w-2xl mx-auto">
            Scroll down or up to pilot your airplane along the 4-stage career flight plan.
          </p>
        </motion.div>

        {/* Scroll-Bound Vertical Airplane Journey Timeline Container */}
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
            {flightSteps.map((step, index) => {
              const IconComp = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Waypoint Circle Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.accentColor} text-white flex items-center justify-center shadow-md border-2 border-white`}
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
                    className={`ml-16 md:ml-0 w-full md:w-[calc(50%-2.5rem)] ${
                      isEven ? "md:pr-2" : "md:pl-2"
                    }`}
                  >
                    <div className="rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-6 sm:p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                      
                      {/* Flight Header Tags */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${step.badgeBg}`}>
                          {step.flightTag}
                        </span>

                        <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1">
                          <Sparkles size={12} className="text-amber-500" />
                          {step.altitude}
                        </span>
                      </div>

                      {/* Step Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-bricolage-grotesque mb-2 flex items-center gap-2">
                        <span>{step.title}</span>
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}