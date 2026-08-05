"use client";

import React from 'react';
import { motion } from "framer-motion";
import { Phone, Mail, Clock, ArrowRight, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";

import foundedIcon from "@/public/icons/foundedIcon.svg";
import locationIcon from "@/public/icons/locationIcon.svg";
import countriesIcon from "@/public/icons/countriesIcon.svg";
import cpdIcon from "@/public/icons/cpdIcon.svg";
import ContactHero from "@/public/images/contact-hero.png";

import IN from "@/public/icons/IN.svg";
import GB from "@/public/icons/GB.svg";
import CA from "@/public/icons/CA.svg";
import AE from "@/public/icons/AE.svg";
import US from "@/public/icons/US.svg";
import ResilientImage from "@/components/ui/ResilientImage";
import { getWhatsAppLink } from "@/utils";

const ContactHeroSection = () => {
  const badges = [
    'Reply in 60 minutes',
    'Free demo class',
    'No obligation',
    '0% EMI available'
  ];

  return (
    <div className="relative bg-slate-50/90 pb-16 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute -left-20 -top-40 h-[600px] w-[600px] rounded-full bg-indigo-500/15 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[130px] pointer-events-none" />

      {/* Mesh Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(99,102,241,.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* LEFT CONTENT BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 order-1 lg:w-1/2 w-full"
          >
            {/* Status Badge */}
            <div className=" mt-5 bg-indigo-50/90 backdrop-blur-md border border-indigo-200/60 rounded-full px-4 py-1.5 w-fit text-indigo-700 text-xs font-extrabold flex items-center justify-center gap-2 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Get In Touch • Fast Response</span>
            </div>

            {/* Typography Heading */}
            <div>
              <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.08] font-bricolage-grotesque text-slate-900">
                We'd Love to{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                  Hear From You
                </span>
              </h1>
            </div>

            {/* Body Copy Description */}
            <div>
              <p className="text-slate-600 tracking-tight text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                Questions about a course, group corporate training, or unsure which SAP or Salesforce path suits you?
                Our expert career advisors typically respond within 60 minutes on weekdays.
              </p>
            </div>

            {/* Live Badging Matrix */}
            <div className="flex flex-wrap gap-2 pt-1 max-w-md">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-2 text-xs font-extrabold text-slate-700 bg-white/80 border border-slate-200/80 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-2xs"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                  {badge}
                </span>
              ))}
            </div>

            {/* Immediate Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <a
                href={getWhatsAppLink("Hi Cloud Edge Solutions, I would like to talk to an advisor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-emerald-600 text-white shadow-[0_12px_25px_rgba(16,185,129,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(16,185,129,0.45)] px-7 py-4 rounded-full flex items-center justify-center gap-2.5 w-full sm:w-auto hover:shadow-emerald-500/25  font-bold text-sm transform"
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
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="mailto:info@cloudedge.in"
                className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 px-7 py-4 rounded-full flex items-center justify-center gap-2.5 w-full sm:w-auto shadow-lg hover:shadow-indigo-500/25 text-white font-bold text-sm transform hover:-translate-y-0.5"
              >
                <Mail size={18} />
                <span>Email Advisors</span>
              </a>
            </div>

            {/* Direct Line & Support Cards */}
            <div className="pt-6 border-t border-slate-200/80 max-w-xl space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Voice Line Link card */}
                <a
                  href="tel:+447442586325"
                  className="group flex items-center gap-3 bg-white/80 hover:bg-white border border-slate-200/80 rounded-2xl p-3.5 transition-all shadow-2xs hover:border-indigo-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 shadow-inner">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Direct Line</p>
                    <p className="text-sm font-extrabold text-slate-900 font-bricolage-grotesque">+44 744 258 6325</p>
                  </div>
                </a>

                {/* Mail inbox card */}
                <a
                  href="mailto:info@cloudedge.in"
                  className="group flex items-center gap-3 bg-white/80 hover:bg-white border border-slate-200/80 rounded-2xl p-3.5 transition-all shadow-2xs hover:border-indigo-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0 shadow-inner">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-extrabold tracking-wider text-slate-400">Support Mail</p>
                    <p className="text-sm font-extrabold text-slate-900 font-bricolage-grotesque">info@cloudedge.in</p>
                  </div>
                </a>
              </div>

              {/* Operating Timeline details */}
              <div className="flex items-center gap-2.5 px-1 text-slate-500 text-xs font-medium">
                <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>
                  <strong className="text-slate-900 font-bold">Advisory Hours:</strong> Mon–Sat 9 AM–7 PM BST • Global student routing active.
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT HERO IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex justify-center lg:justify-end order-2 lg:w-1/2 w-full"
          >
            <div className="relative w-full rounded-[32px] overflow-hidden border border-white/80 bg-white/60 backdrop-blur-xl p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <ResilientImage
                src={ContactHero}
                alt="Contact Cloud Edge Solutions"
                className="w-full h-auto rounded-[24px] object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactHeroSection;