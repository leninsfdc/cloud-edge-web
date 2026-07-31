"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Sparkles } from "lucide-react";
import { getWhatsAppLink } from "@/utils";

const CtaSection = () => {
  return (
    <section className="py-6 lg:py-8 bg-slate-50/90 container mx-auto px-4 sm:px-6">
      <div className="rounded-[32px] bg-slate-950 border border-slate-800 p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 px-4 py-1 rounded-full backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-xs text-indigo-200 font-extrabold uppercase tracking-wider">Next Cohort Enrolling Now</span>
          </div>

          <h2 className="font-extrabold text-3xl sm:text-4xl font-bricolage-grotesque tracking-tight text-white leading-tight">
            Ready to Start? Let’s Talk
          </h2>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
            Browse all 10 SAP and Salesforce courses or reach out directly for personalised guidance from a Cloud Edge training advisor.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/courses"
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
  );
};

export default CtaSection;