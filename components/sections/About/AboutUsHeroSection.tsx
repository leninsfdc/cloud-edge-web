"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import aboutUsImage from "@/public/images/about-us.png";
import nextArrow from "@/public/icons/next-aroow.svg";
import foundedIcon from "@/public/icons/foundedIcon.svg";
import locationIcon from "@/public/icons/locationIcon.svg";
import countriesIcon from "@/public/icons/countriesIcon.svg";
import cpdIcon from "@/public/icons/cpdIcon.svg";
import { getWhatsAppLink } from "@/utils";
import ResilientImage from "@/components/ui/ResilientImage";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const AboutUsHeroSection = () => {
  return (
    <div className="relative bg-slate-50/90 pb-16 overflow-hidden">
      {/* Ambient Glassy Light Orbs */}
      <div className="absolute -left-32 -top-40 h-[640px] w-[640px] rounded-full bg-indigo-500/15 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 h-[520px] w-[520px] rounded-full bg-purple-500/15 blur-[130px] pointer-events-none" />

      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(99,102,241,.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 relative z-10">
        <div className="flex mt-5 flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-5 lg:space-y-6 order-1 lg:w-1/2"
          >
            <div className="bg-indigo-50/90 backdrop-blur-md border border-indigo-200/60 rounded-full px-4 py-1.5 w-fit text-indigo-700 text-xs font-extrabold flex items-center justify-center gap-2 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span>Our Story — Est. 2014</span>
            </div>

            <div>
              <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-6xl font-bricolage-grotesque tracking-tight leading-[1.05] text-slate-900">
                Built for{" "}
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
                  Careers,
                </span>{" "}
                Not Just Certificates
              </h1>
            </div>

            <div>
              <p className="text-slate-600 tracking-tight text-base sm:text-lg leading-relaxed max-w-xl font-medium">
                Live, practical SAP and Salesforce training taught by people who work in the field every day. That conviction launched Cloud Edge in 2014 — and drives every course we run.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
              <Link href="/courses">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300 px-7 py-4 rounded-full flex items-center justify-center gap-3 w-full sm:w-auto shadow-lg hover:shadow-indigo-500/25 text-white font-bold text-sm"
                >
                  <span>Browse All Courses</span>
                  <ArrowRight size={16} />
                </motion.div>
              </Link>

              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={getWhatsAppLink("Hi Cloud Edge Solutions, I would like to talk to an advisor.")}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 px-7 py-4 rounded-full flex items-center justify-center gap-2.5 w-full sm:w-auto shadow-lg hover:shadow-emerald-500/25 text-white font-bold text-sm"
              >
                <MessageCircle size={18} />
                <span>Talk to an Advisor</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Hero Image with Glass Border */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-2 lg:w-1/2"
          >
            <div className="relative w-full rounded-[32px] overflow-hidden border border-white/80 bg-white/60 backdrop-blur-xl p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <ResilientImage
                src={aboutUsImage}
                alt="About Cloud Edge Solutions"
                className="w-full h-auto rounded-[24px] object-cover"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Glassy Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="bg-white/80 backdrop-blur-xl rounded-[28px] border border-slate-200/80 px-6 md:px-10 py-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">

            {/* Founded */}
            <motion.div whileHover={{ y: -3 }} className="flex items-center gap-4 py-2 lg:px-6 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 shadow-inner">
                <ResilientImage src={foundedIcon} fallbackSrc={foundedIcon} alt="Founded" className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Founded</p>
                <p className="text-indigo-600 font-extrabold text-2xl font-bricolage-grotesque">2014</p>
              </div>
            </motion.div>

            {/* Based */}
            <motion.div whileHover={{ y: -3 }} className="flex items-center gap-4 py-2 lg:px-6 transition-all pt-4 sm:pt-2">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 shadow-inner">
                <ResilientImage src={locationIcon} fallbackSrc={locationIcon} alt="Location" className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Based</p>
                <p className="text-indigo-600 font-extrabold text-xl font-bricolage-grotesque">
                  India & UK
                </p>
              </div>
            </motion.div>

            {/* Countries */}
            <motion.div whileHover={{ y: -3 }} className="flex items-center gap-4 py-2 lg:px-6 transition-all pt-4 lg:pt-2">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 shadow-inner">
                <ResilientImage src={countriesIcon} fallbackSrc={countriesIcon} alt="Countries" className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Countries</p>
                <p className="text-indigo-600 font-extrabold text-2xl font-bricolage-grotesque">15+</p>
              </div>
            </motion.div>

            {/* CPD */}
            <motion.div whileHover={{ y: -3 }} className="flex items-center gap-4 py-2 lg:px-6 transition-all pt-4 lg:pt-2">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 shadow-inner">
                <ResilientImage src={cpdIcon} fallbackSrc={cpdIcon} alt="CPD" className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Accredited</p>
                <p className="text-indigo-600 font-extrabold text-2xl font-bricolage-grotesque">CPD</p>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsHeroSection;
