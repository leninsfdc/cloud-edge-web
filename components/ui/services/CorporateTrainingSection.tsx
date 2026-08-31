"use client";

import {
  Activity,
  Clock3,
  FileText,
  Building2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock3,
    title: "Dedicated Team Batches",
    description:
      "Private cohorts scheduled around your timezone — no shared classes with other organisations.",
  },
  {
    icon: FileText,
    title: "Custom Curriculum",
    description:
      "Content tailored to your exact SAP or Salesforce configuration, industry vertical, and business processes.",
  },
  {
    icon: Building2,
    title: "Volume Pricing & Invoicing",
    description:
      "Group rates from 3 seats. PO-based invoicing for corporates, public sector and universities.",
  },
  {
    icon: Activity,
    title: "L&D Progress Reports",
    description:
      "Monthly reporting on attendance, assessment scores and competency milestones for your L&D team.",
  },
];

const tags = [
  "From 3 seats",
  "Invoice billing",
  "Custom curriculum",
  "Public sector welcome",
  "UK & India",
];

export default function CorporateTrainingSection() {
  return (
    <section
      id="corporate"
      className="relative overflow-hidden bg-slate-50/90 py-12 lg:py-16"
    >
      {/* Background Ambient Blur Orbs */}
      <div className="absolute -top-72 -right-44 h-[700px] w-[700px] rounded-full bg-indigo-500/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-44 -left-36 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Header & CTA row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-indigo-700 shadow-2xs">
              Corporate Training
            </div>

            <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-900 font-bricolage-grotesque">
              Built for teams. Priced for scale.
            </h2>

            <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
              Whether you're rolling out SAP, moving to Salesforce, or building
              internal ERP capability — Cloud Edge AI delivers private cohorts that
              fit your team, timeline, and configuration.
            </p>

            {/* Tags */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200/80 bg-white/80 backdrop-blur-md px-4 py-2 text-xs font-bold text-slate-700 shadow-2xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="shrink-0"
          >
            <a
              href="mailto:info@cloudedge.in?subject=Corporate%20Training%20Proposal%20Request"
              className="inline-flex items-center gap-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 px-8 py-4 text-sm font-bold text-white shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Request a Proposal</span>
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>

        {/* 4 Cards in Two Rows (2x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="flex gap-5 rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-7 transition-all duration-300 hover:border-indigo-300 hover:shadow-xl shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50/80 border border-indigo-100/80 text-indigo-600 shadow-xs">
                  <Icon size={24} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg sm:text-xl font-bold text-slate-900 font-bricolage-grotesque">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-600 font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}