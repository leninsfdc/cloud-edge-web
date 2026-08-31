"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useCountry } from "@/libs/country-context";

import whoWeAreIcon from "@/public/icons/who-we-are-icon.svg";
import liveSession from "@/public/icons/live-session.svg";
import instruction from "@/public/icons/instruction.svg";
import cert from "@/public/icons/cert.svg";
import studentTrained from "@/public/icons/students-trained.svg";
import rate from "@/public/icons/rate.svg";
import pass from "@/public/icons/pass.svg";
import calendarBadge from "@/public/icons/calendar-badge.svg";
import starWhite from "@/public/icons/star-white.svg";
import starGold from "@/public/icons/star-gold.svg";
import india from "@/public/icons/IN.svg";
import unitedKingdom from "@/public/icons/GB.svg";
import unitedStates from "@/public/icons/US.svg";
import canada from "@/public/icons/CA.svg";
import uae from "@/public/icons/AE.svg";
import { getWhatsAppLink } from "@/utils";
import ResilientImage from "@/components/ui/ResilientImage";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const features = [
  {
    icon: liveSession,
    title: "Live Online - Every Session",
    description:
      "No pre-recorded videos. Every Cloud Edge AI class is live on Zoom with your instructor, classmates and real SAP or Salesforce system access.",
  },
  {
    icon: instruction,
    title: "Instructors Who Work in the Field",
    description:
      "Every instructor holds active certifications and 8–14 years of SAP or Salesforce consulting experience at firms like Deloitte, Accenture and IBM.",
  },
  {
    icon: cert,
    title: "Certification & Career Built In",
    description:
      "3 full mock exams, exam strategy sessions and 12-month placement support are included in every course. 94% of active job seekers are placed.",
  },
];

const stats = [
  {
    icon: studentTrained,
    value: "5,800+",
    color: "#6366F1",
    title: "Students Trained",
    description: "India, UK, UAE,\nUSA & Canada",
  },
  {
    icon: rate,
    value: "94%",
    color: "#10B981",
    title: "Placement Rate",
    description: "Active job seekers,\nwithin 6 months",
  },
  {
    icon: pass,
    value: "88%",
    color: "#06B6D4",
    title: "First-Attempt Pass",
    description: "SAP & Salesforce\ncertification exams",
  },
  {
    icon: calendarBadge,
    value: "2014",
    color: "#F59E0B",
    title: "Est. London &",
    description: "Ahmedabad",
  },
];

const countries = [
  { flag: india, name: "India" },
  { flag: unitedKingdom, name: "UK" },
  { flag: unitedStates, name: "USA" },
  { flag: canada, name: "Canada" },
  { flag: uae, name: "UAE" },
];

const WhoWeAreSection = () => {
  const { country } = useCountry();
  return (
    <section className="bg-slate-50/90 py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center justify-center flex-col">

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-around w-fit bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full gap-2 shadow-2xs mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">Who We Are</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight leading-tight max-w-5xl text-center text-slate-900"
          >
            The live SAP & Salesforce training company for{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">India, UK & beyond</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-600 text-center max-w-3xl mt-4 text-base sm:text-lg font-medium leading-relaxed"
          >
            Founded in 2014 by working SAP and Salesforce consultants, Cloud Edge AI delivers live, instructor-led training to professionals across India, the UK, the UAE, the USA and Canada — with real system access, certification exam prep and 12-month placement support built into every course.
          </motion.p>

          {/* Glass Feature Cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 w-full">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 shadow-inner">
                    <ResilientImage
                      src={item.icon}
                      fallbackSrc={item.icon}
                      alt={item.title}
                      className="h-7 w-7"
                    />
                  </div>

                  <h3 className="text-xl font-bold leading-tight text-slate-900 font-bricolage-grotesque mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 w-full rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-xl px-6 py-8 lg:px-10 lg:py-8 shadow-[0_10px_30px_rgba(15,23,42,0.03)]"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center px-3 lg:px-4 ${index !== stats.length - 1 ? "lg:border-r lg:border-slate-100" : ""
                    }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3">
                    <ResilientImage
                      src={item.icon}
                      fallbackSrc={item.icon}
                      alt={item.title}
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl font-extrabold leading-none font-bricolage-grotesque"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </h3>

                  <h4 className="mt-2 text-base font-bold text-slate-900 font-bricolage-grotesque">
                    {item.title}
                  </h4>

                  <p className="mt-1 whitespace-pre-line text-xs text-slate-500 font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Ratings & Countries Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-6 w-full rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur-xl px-6 py-4 lg:px-8 shadow-2xs"
          >
            <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
              {/* Rating Section */}
              <div className="flex items-center gap-3">
                <div className="bg-indigo-600 p-2.5 rounded-full text-white shadow-xs">
                  <ResilientImage src={starWhite} fallbackSrc={starWhite} alt="Rating" className="h-4 w-4" />
                </div>

                <div className="flex items-center gap-1 text-sm sm:text-base text-slate-800 font-medium">
                  <span className="font-bold text-slate-900">4.8</span>
                  <ResilientImage src={starGold} fallbackSrc={starGold} alt="Star" className="h-4 w-4" />
                  <span className="text-slate-600">from 1,100+ student reviews</span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden h-8 w-px bg-slate-200 lg:block" />

              {/* Countries */}
              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-5">
                {countries.map((country, index) => (
                  <React.Fragment key={country.name}>
                    <div className="flex items-center gap-2">
                      <ResilientImage src={country.flag} fallbackSrc={country.flag} alt={country.name} className="h-5 w-7 object-contain rounded-xs" />
                      <span className="text-xs sm:text-sm font-bold text-slate-800">{country.name}</span>
                    </div>
                    {index !== countries.length - 1 && (
                      <span className="text-slate-300 text-xs">•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={getWhatsAppLink("Hi Cloud Edge AI Solutions, I would like to enroll.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 rounded-full group relative bg-emerald-600 text-white shadow-[0_12px_25px_rgba(16,185,129,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_35px_rgba(16,185,129,0.45)] px-8 py-4 font-bold text-sm  hover:shadow-emerald-500/25 transform "
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
              <span>WhatsApp to Enroll</span>
            </a>

            <Link
              href={`/${country.slug}/courses`}
              className="flex items-center justify-center gap-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 px-8 py-4 text-white font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-indigo-500/25 transform hover:-translate-y-0.5"
            >
              <span>Browse All Courses</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
