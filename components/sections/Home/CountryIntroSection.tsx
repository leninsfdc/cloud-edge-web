"use client";

import React from "react";
import { Laptop, Clock3, GraduationCap, Headset } from "lucide-react";
import BadgeLabel from "@/components/shared/BadgeLabel";
import { MotionDiv, MotionSection } from "@/components/ui/MotionElements";
import { useCountry } from "@/libs/country-context";
import { COUNTRY_HOME_CONTENT } from "@/libs/countryHomeContent";

const HIGHLIGHTS = [
  { icon: Laptop, label: "Live Online\nSessions" },
  { icon: Clock3, label: "Local Time\nZone Batches" },
  { icon: GraduationCap, label: "Certification\nPreparation" },
  { icon: Headset, label: "Career\nSupport" },
];

/** Renders nothing for countries without curated local copy (see countryHomeContent.ts). */
const CountryIntroSection = () => {
  const { country } = useCountry();
  const intro = COUNTRY_HOME_CONTENT[country.slug]?.intro;

  if (!intro) return null;

  const [firstParagraph, ...restParagraphs] = intro.paragraphs;

  return (
    <MotionSection
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#F8F8FA] py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center flex-col">
          <BadgeLabel label={country.name} theme="light" labelBgColor="#EDEBFF" />

          <h2 className="text-[#1D1F20] text-center font-medium leading-[120%] mt-5 text-[26px] sm:text-4xl md:text-5xl max-w-[900px]">
            {intro.heading}
          </h2>

          {firstParagraph && (
            <p className="mt-5 max-w-[700px] text-[#7B7B88] text-sm sm:text-base leading-[170%] text-center">
              {firstParagraph}
            </p>
          )}
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-3xl mx-auto">
          {HIGHLIGHTS.map(({ icon: Icon, label }) => (
            <MotionDiv
              key={label}
              whileHover={{ scale: 1.04, y: -4 }}
              className="bg-white border border-slate-100 rounded-2xl p-4 md:p-5 shadow-xs flex flex-col items-center text-center gap-3 cursor-default transition-all duration-300 hover:border-indigo-200 hover:shadow-md"
            >
              <div className="w-11 h-11 rounded-xl bg-[#EDEBFF] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#6557E3]" strokeWidth={2} />
              </div>
              <span className="text-sm font-extrabold text-slate-900 font-bricolage-grotesque leading-snug whitespace-pre-line">
                {label}
              </span>
            </MotionDiv>
          ))}
        </div>

        {restParagraphs.length > 0 && (
          <div className="mt-8 max-w-[700px] mx-auto space-y-3">
            {restParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[#9C9CA8] text-xs sm:text-sm leading-[170%] text-center"
              >
                {paragraph}
              </p>
            ))}
          </div>
        )}
      </div>
    </MotionSection>
  );
};

export default CountryIntroSection;
