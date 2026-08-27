"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChevronRight,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useCountry } from "@/libs/country-context";

export default function Hero() {
  const { country } = useCountry();
  const services = [
    {
      title: "Live Online Training",
      color: "bg-indigo-600",
      href: "#live-training",
    },
    {
      title: "Job Support Programme",
      color: "bg-teal-500",
      href: "#job-support",
    },
    {
      title: "Career Placement",
      color: "bg-emerald-500",
      href: "#placement",
    },
    {
      title: "Corporate L&D",
      color: "bg-purple-600",
      href: "#corporate",
    },
    {
      title: "1-to-1 Mentoring",
      color: "bg-amber-500",
      href: "#mentoring",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/90 py-16 lg:py-24">
      {/* Ambient Glassy Light Orbs */}
      <div className="absolute -left-32 -top-40 h-[640px] w-[640px] rounded-full bg-indigo-500/15 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 h-[520px] w-[520px] rounded-full bg-purple-500/15 blur-[130px] pointer-events-none" />
      <div className="absolute right-[28%] top-1/2 h-[380px] w-[380px] rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(99,102,241,.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 mt-15">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs mb-6 text-slate-500 font-medium pt-12 sm:pt-0">
          <Link href="/" className="transition hover:text-indigo-600">
            Home
          </Link>
          <ChevronRight size={12} className="text-slate-400" />
          <span className="text-slate-900 font-bold">Services</span>
        </div>

        <div className="grid items-center gap-12 lg:gap-16 lg:grid-cols-[1fr_400px]">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-indigo-200/80 bg-indigo-50/90 backdrop-blur-md px-4 py-2 text-[11px] font-extrabold uppercase tracking-wider text-indigo-700 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Now Enrolling — Next Batch Starting Soon
            </div>

            <h1 className="mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900 font-bricolage-grotesque">
              Training that
              <br />
              builds <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">real</span>
              <br />
              careers.
            </h1>

            <p className="mb-8 max-w-xl text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
              Expert-led IT, SAP, and Salesforce training, job support, and
              placement assistance — everything you need to break into or advance in tech.
            </p>

            {/* Glassy Tags */}
            <div className="mb-8 flex flex-wrap gap-2.5">
              {[
                "Est. 2014 — London & Ahmedabad",
                "CPD Accredited",
                "SAP & Salesforce Aligned",
                "0% EMI Available",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-md px-4 py-2 text-xs font-bold text-slate-700 shadow-2xs hover:border-indigo-300 transition-all"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/${country.slug}/courses`}
                className="rounded-full bg-indigo-600 hover:bg-indigo-700 px-8 py-4 text-sm font-bold text-white shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <span>Browse All Courses</span>
                <ArrowRight size={16} />
              </Link>

              {/* <a
                href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 px-8 py-4 text-sm font-bold text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle size={18} />
                <span>Talk to an Advisor</span>
              </a> */}
              {/* <a
                href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-600/90 via-emerald-800/50 to-emerald-600/90 backdrop-blur-md border border-white/15 hover:from-emerald-700/90 hover:to-emerald-700/80 px-8 py-4 text-sm font-bold text-white/90 hover:text-white tracking-wide shadow-lg shadow-black/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <MessageCircle size={18} className="drop-shadow-sm" />
                <span className="drop-shadow-sm">Talk to an Advisor</span>
              </a> */}
              <a
                href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-[0_12px_25px_rgba(16,185,129,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(16,185,129,0.45)]"
              >
                {/* Glass Blob */}
                <span
                  className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-white/30 blur-xl transition-all duration-700 group-hover:left-1/2 group-hover:top-0 group-hover:-translate-x-1/2"
                />

                {/* Shine */}
                <span
                  className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <MessageCircle size={18} className="relative z-10" />
                <span className="relative z-10">Talk to an Advisor</span>
              </a>
            </div>
          </motion.div>

          {/* Right Glassy Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-[32px] border border-white/80 bg-white/80 backdrop-blur-xl p-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:shadow-[0_25px_60px_rgba(99,102,241,0.12)] transition-all duration-300"
          >
            <div className="flex items-center gap-2 mb-1">
              <Sparkles size={18} className="text-indigo-600" />
              <h3 className="text-xl font-bold text-slate-900 font-bricolage-grotesque">
                Our Core Services
              </h3>
            </div>

            <p className="mb-6 text-xs sm:text-sm text-slate-500 font-medium">
              From your first course to your first job — and beyond
            </p>

            {/* <a
              href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
              target="_blank"
              rel="noopener noreferrer"
              // className="mb-5 flex items-center justify-center gap-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 px-5 py-3.5 text-sm font-bold text-white transition-all duration-200 shadow-md hover:shadow-lg"
              className="mb-5 flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-600/90 via-emerald-800/50 to-emerald-600/90 backdrop-blur-md border border-white/15 hover:from-emerald-700/90 hover:to-emerald-700/80 px-8 py-4 text-sm font-bold text-white/90 hover:text-white tracking-wide shadow-lg shadow-black/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <MessageCircle size={16} />
              <span>Chat with an Advisor</span>
            </a> */}

            <a
                href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-5 w-full flex items-center justify-center group relative gap-2 overflow-hidden rounded-full bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-[0_12px_25px_rgba(16,185,129,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(16,185,129,0.45)]"
              >
                {/* Glass Blob */}
                <span
                  className="absolute -bottom-8 -left-6 h-24 w-24 rounded-full bg-white/30 blur-xl transition-all duration-700 group-hover:left-1/2 group-hover:top-0 group-hover:-translate-x-1/2"
                />

                {/* Shine */}
                <span
                  className="absolute inset-0 rounded-full bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <MessageCircle size={18} className="relative z-10" />
                <span className="relative z-10">Chat with an Advisor</span>
              </a>

            <div className="mb-4 text-center text-[10px] uppercase font-bold tracking-widest text-slate-400">
              or jump to a service
            </div>

            {/* Services Links */}
            <div className="space-y-2.5">
              {services.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center justify-between rounded-2xl border border-slate-200/60 bg-slate-50/70 backdrop-blur-sm px-4 py-3 text-xs sm:text-sm font-bold text-slate-800 transition-all duration-200 hover:border-indigo-300 hover:bg-white hover:shadow-md group"
                >
                  <div className="flex items-center gap-3">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                    <span>{item.title}</span>
                  </div>
                  <ChevronRight size={14} className="text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}