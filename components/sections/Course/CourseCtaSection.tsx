"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import lightIcon from "@/public/icons/light-icon.svg";
import cta from "@/public/images/cta.svg";
import { getWhatsAppLink } from "@/utils";

interface CourseCtaSectionProps {
  courseName?: string;
}

const CourseCtaSection = ({ courseName }: CourseCtaSectionProps) => {
  const whatsappMessage = courseName
    ? `Hi Cloud Edge AI Solutions, I am ready to start learning ${courseName}.`
    : "Hi Cloud Edge AI Solutions, I am ready to start learning.";

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 my-14"
    >
      <div
        className="relative overflow-hidden rounded-[32px] px-8 py-10 md:px-14 md:py-14 shadow-[0_25px_60px_rgba(99,42,166,0.25)] border border-white/20"
        style={{
          background:
            "linear-gradient(135deg, #581C87 0%, #3B0764 40%, #0F172A 100%)",
        }}
      >
        {/* Floating Decorative Glass Light Orbs */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#A855F7]/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-[#3B82F6]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col justify-between gap-10 md:flex-row md:items-center">
          {/* Left Content */}
          <div className="max-w-[560px]">
            {/* Icon */}
            <div
              className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 backdrop-blur-xl shadow-inner"
            >
              <Image
                src={lightIcon}
                alt="Light Icon"
                width={24}
                height={24}
              />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-[42px] font-bricolage-grotesque">
              {courseName ? `Ready to start ${courseName}?` : "Ready to accelerate your IT career?"}
            </h2>

            <p className="mt-4 text-base text-white/85 leading-relaxed">
              Enroll today and take the first step towards a high-growth,
              high-demand tech role with 1-on-1 mentorship.
            </p>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={getWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit h-14 items-center justify-center gap-3 rounded-full bg-white hover:bg-slate-100 px-8 text-base font-bold text-slate-900 shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Learning Today
              <span className="text-lg">→</span>
            </motion.a>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/60">
              100% Live Online • Flexible Schedule • Verified Certificate
            </p>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center md:justify-end shrink-0">
            <div className="relative p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
              <Image
                src={cta}
                alt="Rocket Illustration"
                className="w-[200px] md:w-[260px] filter drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CourseCtaSection;
