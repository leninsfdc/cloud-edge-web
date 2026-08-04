"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, CheckCircle2, BookOpen, Award, Share2 } from "lucide-react";
import { toast } from "react-hot-toast";
import linkedinIcon from "@/public/icons/linkedin.svg";

interface AuthorCardProps {
  authorName?: string;
  authorRole?: string;
  authorImage?: string;
  authorBio?: string;
  compact?: boolean;
}

const AuthorCard: React.FC<AuthorCardProps> = ({
  authorName = "Cloud Edge Editorial Team",
  authorRole = "Senior Technology Specialist & Career Mentor",
  authorImage,
  authorBio = "Empowering tech aspirants with industry-proven insights, career strategies, and practical tutorials across Cloud, SAP, Salesforce, and Full-Stack Engineering.",
  compact = false,
}) => {
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Article link copied to clipboard!");
    }
  };

  const defaultAvatar =
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=256&auto=format&fit=crop";

  if (compact) {
    return (
      // <div className="flex items-center gap-3 bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs">
      //   <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#7C6EF8]">
      //       <Image
      //         src={authorImage || defaultAvatar}
      //         alt={authorName}
      //         fill
      //         unoptimized
      //         className="object-cover"
      //       />
      //   </div>
      //   <div className="min-w-0 flex-1">
      //     <div className="flex items-center gap-1">
      //       <h4 className="text-sm font-bold text-[#07042F] truncate">
      //         {authorName}
      //       </h4>
      //       <CheckCircle2 className="w-3.5 h-3.5 text-[#7C6EF8] shrink-0" />
      //     </div>
      //     <p className="text-xs text-slate-500 truncate">{authorRole}</p>
      //   </div>
      // </div>
       <div className="bg-gradient-to-br from-white via-[#F8F7FF] to-[#F1EFFE] p-4 sm:p-5 rounded-2xl border border-[#7C6EF8]/30 shadow-md shadow-indigo-950/5 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#7C6EF8]/10 rounded-full blur-xl pointer-events-none" />

        <div className="sm:items-center justify-between gap-4 relative z-10">
          {/* Left: Avatar & Main Info */}
          <div className="flex items-center gap-3.5 min-w-0">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden flex-shrink-0 border-[#7C6EF8] shadow-sm">
              <Image
                src={authorImage || defaultAvatar}
                alt={authorName}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="min-w-0 space-y-0.5">
              {/* <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[10px] uppercase tracking-wider font-bold text-[#7C6EF8] bg-[#7C6EF8]/10 px-2 py-0.5 rounded-full">
                  Author
                </span>
                <span className="text-xs text-slate-400">• Verified Expert</span>
              </div> */}
              <div className="flex items-center gap-1.5">
                <h4 className="text-base font-bold text-[#07042F] truncate">
                  {authorName}
                </h4>
                <CheckCircle2 className="w-4 h-4 text-[#7C6EF8] shrink-0" />
              </div>
              <p className="text-xs font-semibold text-[#6C5CFF] truncate">
                {authorRole}
              </p>
            </div>
          </div>

          {/* Right: Extra Details & Actions */}
          <div className="flex items-center justify-between sm:justify-center w-full sm:w-auto gap-3 pt-2 sm:pt-2 border-t sm:border-t-0 border-slate-200/60">
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#7C6EF8] hover:border-[#7C6EF8] transition-all shadow-2xs"
                title="Share Article"
                aria-label="Share Article"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <a
                href="mailto:info@cloudedge.in"
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#7C6EF8] hover:border-[#7C6EF8] transition-all shadow-2xs"
                title="Email Author"
                aria-label="Email Author"
              >
                <Mail className="w-4 h-4" />
              </a>
              <Link
                href="/contact-us"
                className="p-2 rounded-xl bg-[#0A66C2] text-white hover:bg-[#084e96] transition-all shadow-2xs flex items-center justify-center"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Image src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white via-[#F8F7FF] to-[#F1EFFE] rounded-3xl p-6 sm:p-8 border border-[#7C6EF8]/20 shadow-xl shadow-indigo-950/5 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#7C6EF8]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 relative z-10">
        {/* Avatar Container with Badge */}
        <div className="relative flex-shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#7C6EF8] shadow-md relative">
            <Image
              src={authorImage || defaultAvatar}
              alt={authorName}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
          <div
            className="absolute -bottom-2 -right-2 bg-[#7C6EF8] text-white p-1.5 rounded-xl shadow-md"
            title="Verified Author"
          >
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#7C6EF8] bg-[#7C6EF8]/10 px-2.5 py-0.5 rounded-full">
                Written By
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#07042F] mt-1">
                {authorName}
              </h3>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#7C6EF8] hover:border-[#7C6EF8] transition-all shadow-2xs"
                title="Share Article"
                aria-label="Share Article"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <a
                href="mailto:info@cloudedge.in"
                className="p-2 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#7C6EF8] hover:border-[#7C6EF8] transition-all shadow-2xs"
                title="Email Author"
                aria-label="Email Author"
              >
                <Mail className="w-4 h-4" />
              </a>
              <Link
                href="/contact-us"
                className="p-2 rounded-xl bg-[#0A66C2] text-white hover:bg-[#084e96] transition-all shadow-2xs flex items-center justify-center"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Image src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-[#6C5CFF]">
            {authorRole}
          </p>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-2xl">
            {authorBio}
          </p>

          {/* Credentials Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white/90 border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
              <Award className="w-3.5 h-3.5 text-[#7C6EF8]" />
              10+ Yrs IT Experience
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white/90 border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
              <BookOpen className="w-3.5 h-3.5 text-[#6C5CFF]" />
              Cloud Edge Lead Instructor
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorCard;
