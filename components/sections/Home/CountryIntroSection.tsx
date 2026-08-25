"use client";

import React from "react";
import { MotionSection } from "@/components/ui/MotionElements";
import { useCountry } from "@/libs/country-context";
import { COUNTRY_HOME_CONTENT } from "@/libs/countryHomeContent";

/** Renders nothing for countries without curated local copy (see countryHomeContent.ts). */
const CountryIntroSection = () => {
  const { country } = useCountry();
  const intro = COUNTRY_HOME_CONTENT[country.slug]?.intro;

  if (!intro) return null;

  return (
    <MotionSection
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white py-12 sm:py-16"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <h2 className="font-bricolage-grotesque font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight mb-5">
          {intro.heading}
        </h2>
        <div className="space-y-4">
          {intro.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-slate-600 leading-relaxed text-base sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default CountryIntroSection;
