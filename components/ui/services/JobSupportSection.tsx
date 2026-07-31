"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  FileText,
  MessageSquare,
  Pencil,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { getWhatsAppLink } from "@/utils";

const stats = [
  {
    value: "94",
    suffix: "%",
    label: "of Job Support students pass their probation period",
  },
  {
    value: "48",
    suffix: "h",
    label: "maximum response time on any submitted task query",
  },
  {
    value: "6",
    suffix: "mo",
    label: "standard support duration, extendable as needed",
  },
  {
    value: "10",
    suffix: "+",
    label: "SAP and Salesforce modules covered by our advisor team",
  },
];

const timeline = [
  {
    title: "Onboarding call",
    description:
      "We match you with a module-specific advisor (FICO, MM, SF Admin, etc.) and map your new role, client environment, and task types before you start.",
  },
  {
    title: "Submit real tasks",
    description:
      "Send live tickets, config requests or client queries and we'll guide you through them step by step.",
  },
  {
    title: "Weekly check-in sessions",
    description:
      "30-minute weekly calls to review progress and improve client communication skills.",
  },
  {
    title: "Escalation cover",
    description:
      "Complex UAT or stakeholder meetings? Your advisor is there when it matters.",
  },
  {
    title: "Exit & profile update",
    description:
      "Refresh your CV with real project experience and prepare for your next opportunity.",
  },
];

const covers = [
  {
    icon: Briefcase,
    title: "SAP Support",
    desc: "FICO, MM, Basis, ABAP, SuccessFactors guidance from experts.",
  },
  {
    icon: Pencil,
    title: "Salesforce Support",
    desc: "Admin, LWC, Apex debugging, Flow and Integration support.",
  },
  {
    icon: MessageSquare,
    title: "Client Communication",
    desc: "Email templates and stakeholder communication best practices.",
  },
  {
    icon: FileText,
    title: "Docs & Contracting",
    desc: "Timesheets, SOW review and project documentation guidance.",
  },
];

export default function JobSupportSection() {
  return (
    <section id="job-support" className="bg-slate-900 py-12 lg:py-16 relative overflow-hidden text-white">
      {/* Background Ambient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-teal-300 shadow-2xs">
            Job Support Programme
          </div>

          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-bricolage-grotesque">
            We stay with you after you start.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-400 font-medium">
            Landing the job is only half the challenge. Our Job Support
            Programme gives freshers and career switchers a safety net during
            the first critical months of a live SAP or Salesforce role.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl hover:border-teal-500/40 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-bricolage-grotesque">
                {stat.value}
                <span className="text-teal-400">{stat.suffix}</span>
              </div>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Covers Cards */}
        <div className="mt-14">
          <h3 className="text-2xl font-extrabold text-white font-bricolage-grotesque mb-6">
            What We Support
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {covers.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl hover:border-indigo-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
                    <IconComp size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white font-bricolage-grotesque mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="mt-16">
          <h3 className="text-2xl font-extrabold text-white font-bricolage-grotesque mb-6">
            How Job Support Works
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {timeline.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl space-y-2 hover:border-white/20 transition-all"
              >
                <div className="text-xs font-bold uppercase tracking-wider text-teal-400">
                  Step 0{idx + 1}
                </div>
                <h5 className="font-bold text-white text-base font-bricolage-grotesque">
                  {step.title}
                </h5>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-white font-bricolage-grotesque">
              Need on-the-job assistance right now?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
              Talk to our job support advisors and get paired with an expert consultant today.
            </p>
          </div>

          <a
            href={getWhatsAppLink("Hi Cloud Edge Solutions, I need details about Job Support.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal-500 hover:bg-teal-600 text-slate-950 font-bold px-7 py-3.5 text-sm shadow-lg hover:shadow-teal-500/25 transition-all duration-200 shrink-0 inline-flex items-center gap-2"
          >
            <span>Enquire for Job Support</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}