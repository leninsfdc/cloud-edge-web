"use client";
import { useState } from "react";
import Image from "next/image";
import india from "@/public/icons/india.svg";
import uk from "@/public/icons/united-kingdom.svg";
import us from "@/public/icons/united-states.svg";
import canada from "@/public/icons/canada.svg";
import checkCircle from "@/public/icons/chck-circle-green.svg";
import clock from "@/public/icons/clock-icon.svg";
import calendar from "@/public/icons/calendar-gray.svg";
import payment from "@/public/icons/payment.svg";
import whatsappIcon from "@/public/icons/whatsapp-icon.svg";
import emailIcon from "@/public/icons/email-icon.svg";
import playIcon from "@/public/icons/play-icon.svg";
import capIcon from "@/public/icons/cap.svg";
import moment from "moment";
import { getEmailLink, getWhatsAppLink } from "@/utils";

const flags = { IN: india, UK: uk, US: us, CA: canada };
const flagLabels = { IN: "India", UK: "UK", US: "USA", CA: "Canada" };

const GRADIENT_PALETTES = [
  {
    bg: "bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#9333EA]",
    glow: "bg-[#818CF8]/30",
  },
  {
    bg: "bg-gradient-to-br from-[#0284C7] via-[#0D9488] to-[#10B981]",
    glow: "bg-[#2DD4BF]/30",
  },
  {
    bg: "bg-gradient-to-br from-[#7C3AED] via-[#A855F7] to-[#EC4899]",
    glow: "bg-[#F472B6]/30",
  },
  {
    bg: "bg-gradient-to-br from-[#D97706] via-[#EA580C] to-[#E11D48]",
    glow: "bg-[#FB923C]/30",
  },
  {
    bg: "bg-gradient-to-br from-[#1E1B4B] via-[#312E81] to-[#4338CA]",
    glow: "bg-[#6366F1]/30",
  },
  {
    bg: "bg-gradient-to-br from-[#059669] via-[#06B6D4] to-[#3B82F6]",
    glow: "bg-[#38BDF8]/30",
  },
];

const getCourseTheme = (identifier: string | number = "") => {
  const str = String(identifier || "default");
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % GRADIENT_PALETTES.length;
  return GRADIENT_PALETTES[index];
};

export default function CourseEnrollmentCard({ course, defaultCountry }: { course: any; defaultCountry?: string }) {
  const [imgError, setImgError] = useState(false);
  const nextBatch = course.nextBatch;

  const theme = getCourseTheme(course?.id || course?.name || "cloudedge");

  const pricing = (["IN", "UK", "US", "CA"] as const)
    .map((code) => ({ code, label: flagLabels[code], data: course.countryPricing?.[code] }))
    .filter((x) => x.data);

  // Determine which tab to open first:
  // 1. If the visitor's detected country has pricing data, use it.
  // 2. Otherwise fall back to the first available tab.
  // 3. If nothing exists at all, fall back to "US".
  const resolveDefaultCode = (): string => {
    if (defaultCountry) {
      const match = pricing.find((p) => p.code === defaultCountry);
      if (match) return match.code;
    }
    return pricing[0]?.code ?? "US";
  };

  const [selectedCode, setSelectedCode] = useState<string>(resolveDefaultCode);

  const selectedPrice = pricing.find((p) => p.code === selectedCode)?.data ?? pricing[0]?.data;

  const emiMonths = 6;
  const emiAmount = selectedPrice?.price
    ? Math.round(selectedPrice.price / emiMonths).toLocaleString(selectedCode === "IN" ? "en-IN" : "en-US")
    : null;

  const classDays = nextBatch?.batch?.class_days?.join("/") ?? "";
  const timezone = nextBatch?.timezone ?? nextBatch?.batch?.timezone ?? "";
  const paymentModes = course.payment_modes ?? "UPI · NET · Card";

  const whatsappLink = getWhatsAppLink(`Hi Cloud Edge Solutions, I want to enroll in ${course.name}.`);
  const emailLink = getEmailLink(
    `Course Enquiry - ${course.name}`,
    `Hi Cloud Edge Solutions,\n\nI would like to enroll in ${course.name}.`
  );
  const demoLink = getEmailLink(
    `Free Demo Class Request - ${course.name}`,
    `Hi Cloud Edge Solutions,\n\nI would like to book a free demo class for ${course.name}.`
  );

  const hasCustomIcon = !imgError && course?.icon_media_url && course.icon_media_url.trim() !== "";
  const displayIcon = hasCustomIcon ? course.icon_media_url : capIcon;

  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
      {/* Glassy Dynamic Gradient Header */}
      <div className={`relative overflow-hidden ${theme.bg} p-6 sm:p-7 text-white`}>
        {/* Decorative Ambient Blur Lights */}
        <div className={`absolute -right-8 -top-8 w-36 h-36 rounded-full ${theme.glow} blur-2xl pointer-events-none`} />
        <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-white/10 blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-start gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center p-2.5 shadow-inner shrink-0">
            <Image
              src={displayIcon}
              alt={course.name || "Course Icon"}
              width={36}
              height={36}
              unoptimized={hasCustomIcon}
              onError={() => setImgError(true)}
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold leading-snug tracking-tight text-white font-bricolage-grotesque">
              {course.name}
            </h3>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/80 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 inline-block">
              {course.duration} Weeks Live Online
            </p>
          </div>
        </div>
      </div>

      <div className="py-6 px-6 sm:px-8">
        {/* Country switcher */}
        {pricing.length > 0 && (
          <div
            className="grid gap-1.5 mb-4 p-1.5 bg-slate-100/80 backdrop-blur-sm rounded-2xl border border-slate-200/60"
            style={{ gridTemplateColumns: `repeat(${pricing.length}, 1fr)` }}
          >
            {pricing.map((item) => (
              <button
                key={item.code}
                onClick={() => setSelectedCode(item.code)}
                className={`flex items-center justify-center gap-1.5 rounded-xl py-2 text-xs font-semibold transition-all duration-200
                  ${selectedCode === item.code
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/60 scale-[1.02]"
                    : "bg-transparent text-slate-500 hover:text-slate-900"
                  }
                `}
              >
                <Image
                  src={flags[item.code]}
                  alt={item.label}
                  className="w-4 h-4 rounded-full shadow-xs shrink-0"
                />
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* EMI Badge */}
        <div className="mb-4 rounded-2xl border border-emerald-200/70 bg-emerald-50/80 py-2.5 px-3 text-center text-xs font-bold text-emerald-700 flex items-center justify-center gap-2 shadow-xs">
          <Image src={checkCircle} alt="check circle" className="w-4 h-4 shrink-0" />
          <span>0% EMI AVAILABLE · EASY INSTALLMENTS</span>
        </div>

        {/* Price */}
        <div className="text-center my-4">
          <div className="text-4xl font-extrabold text-slate-900 tracking-tight font-bricolage-grotesque">
            {selectedPrice?.currency}
            {selectedPrice?.price?.toLocaleString(selectedCode === "IN" ? "en-IN" : "en-US")}
          </div>
          {emiAmount && (
            <p className="mt-2 text-xs sm:text-sm text-slate-500 font-medium">
              or{" "}
              <span className="font-bold text-indigo-600">
                {selectedPrice?.currency}{emiAmount} / month*
              </span>{" "}
              for {emiMonths} months
            </p>
          )}
        </div>

        {/* Details Table */}
        <div className="my-6 space-y-3.5 pt-4 border-t border-slate-100 text-xs sm:text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Image src={clock} alt="clock" className="w-4 h-4 opacity-75" />
              <span>Duration</span>
            </div>
            <div className="text-slate-900 font-bold">
              {course.duration} weeks
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Image src={calendar} alt="calendar" className="w-4 h-4 opacity-75" />
              <span>Next Batch</span>
            </div>
            <div className="text-slate-900 font-bold">
              {nextBatch?.start_date
                ? moment(nextBatch.start_date).format("DD MMM YYYY")
                : "-"}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Image src={clock} alt="clock" className="w-4 h-4 opacity-75" />
              <span>Schedule</span>
            </div>
            <div className="text-slate-900 font-bold">
              {classDays
                ? classDays
                    .split("/")
                    .map((day: string) => day.trim().slice(0, 3))
                    .join("/")
                : "Flexible"}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-slate-500">
              <Image src={payment} alt="payment" className="w-4 h-4 opacity-75" />
              <span>Payment</span>
            </div>
            <div className="text-slate-900 font-bold">
              {paymentModes}
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2.5 mt-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-200 py-3.5 px-4 font-bold text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-[0.99] text-sm"
          >
            <Image src={whatsappIcon} alt="whatsapp" className="w-5 h-5" />
            <span>WhatsApp to Enroll</span>
          </a>

          <a
            href={emailLink}
            className="w-full flex items-center justify-center gap-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 py-3.5 px-4 font-bold text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-[0.99] text-sm"
          >
            <Image src={emailIcon} alt="email" className="w-5 h-5" />
            <span>Enroll by Email</span>
          </a>

          <a
            href={demoLink}
            className="w-full rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 transition-all duration-200 py-3.5 px-4 font-bold text-slate-700 flex items-center justify-center gap-2.5 shadow-xs hover:shadow-sm text-sm"
          >
            <Image src={playIcon} alt="play" className="w-4 h-4" />
            <span>Book a Free Demo Class</span>
          </a>
        </div>

        <p className="mt-5 text-center text-xs text-slate-500 font-medium">
          Or call:{" "}
          <a href="tel:+447442586325" className="text-slate-900 font-bold hover:underline">
            +44 744 258 6325
          </a>
        </p>

        {/* Features */}
        {course.features?.length > 0 && (
          <div className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
            {course.features.map((feature: string) => (
              <div key={feature} className="flex items-start gap-2">
                <span className="mt-0.5 text-emerald-600 font-bold">✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
