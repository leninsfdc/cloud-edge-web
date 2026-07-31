"use client";

import React from 'react';
import { motion } from 'framer-motion';
import capIcon from "@/public/icons/cap.svg";
import ResilientImage from '@/components/ui/ResilientImage';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

interface CourseCardProps {
  icon: any;
  category: string;
  categoryColor?: string;
  title: string;
  description: string;
  oldPrice?: string;
  price: string;
  buttonText?: string;
  url: string;
  isActive?: boolean;
}

const CourseCard = ({
  icon,
  category,
  categoryColor,
  title,
  description,
  price,
  url,
  buttonText = "View Course Details",
  isActive = false,
}: CourseCardProps) => {
  const isSAP = title?.toLowerCase().includes("sap") || category?.toLowerCase().includes("sap");
  const isSalesforce = title?.toLowerCase().includes("salesforce") || category?.toLowerCase().includes("salesforce");

  // Dynamic badge styling based on course domain
  const badgeStyle = isSAP
    ? "bg-cyan-50 text-cyan-700 border-cyan-200"
    : isSalesforce
    ? "bg-indigo-50 text-indigo-700 border-indigo-200"
    : "bg-purple-50 text-purple-700 border-purple-200";

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group bg-white/90 backdrop-blur-xl w-full p-4.5 sm:p-5 rounded-[24px] transition-all duration-300 flex flex-col justify-between overflow-hidden ${
        isActive
          ? "border-2 border-[#6557E3] shadow-[0_0_25px_rgba(101,87,227,0.3)]"
          : "border border-slate-200/80 shadow-[0_6px_20px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-300"
      }`}
    >
      <div>
        {/* Header Row: Icon + Domain Category Tag */}
        <div className="flex items-center justify-between mb-3">
          <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 p-2 flex items-center justify-center shadow-inner shrink-0 group-hover:scale-105 transition-transform duration-300">
            <ResilientImage
              src={icon}
              fallbackSrc={capIcon}
              alt={title || "Course"}
              className="w-7 h-7 object-contain"
            />
          </div>

          <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${badgeStyle}`}>
            {category || (isSAP ? "SAP Program" : isSalesforce ? "Salesforce Program" : "IT Certification")}
          </span>
        </div>

        {/* Content Details */}
        <div className="space-y-2">
          <Link href={url}>
            <h3 className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 font-bricolage-grotesque group-hover:text-indigo-600 transition-colors line-clamp-1">
              {title}
            </h3>
          </Link>

          <p className="text-slate-600 line-clamp-2 text-xs leading-relaxed font-medium">
            {description}
          </p>

          {/* Highlights Micro Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-100/80 border border-slate-200/60 px-2 py-0.5 rounded-md">
              <Sparkles size={10} className="text-indigo-600" />
              Live Zoom
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-100/80 border border-slate-200/60 px-2 py-0.5 rounded-md">
              <CheckCircle2 size={10} className="text-emerald-600" />
              Real System
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-100/80 border border-slate-200/60 px-2 py-0.5 rounded-md">
              <ShieldCheck size={10} className="text-purple-600" />
              Exam Prep
            </span>
          </div>
        </div>
      </div>

      {/* Footer Price & Action CTA */}
      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-wider">Fee Starts At</span>
          <div className="text-slate-900 font-extrabold text-lg sm:text-xl font-bricolage-grotesque">
            {price || "0% EMI"}
          </div>
        </div>

        <Link
          href={url}
          className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-[11px] font-extrabold px-4 py-2 rounded-full shadow-md shadow-indigo-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <span>{buttonText}</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </motion.div>
  );
};

export default CourseCard;