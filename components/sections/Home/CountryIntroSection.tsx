"use client";

import React from "react";
import BadgeLabel from "@/components/shared/BadgeLabel";
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
        </div>

        <div className="mt-8 sm:mt-10 max-w-[760px] mx-auto space-y-4">
          {intro.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[#7B7B88] text-sm sm:text-base leading-[170%] text-center"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default CountryIntroSection;
