"use client";

import BadgeLabel from "@/components/shared/BadgeLabel";
import React, { useState } from "react";
import Image from "next/image";

import plusIcon from "@/public/icons/plus.svg";
import minusIcon from "@/public/icons/minus.svg";

const faqData = [
  {
    id: "01",
    question: "What Is CloudEdge?",
    answer:
      "CloudEdge is a modern learning platform that provides practical training programs designed to help students build real-world skills and advance their careers.",
  },
  {
    id: "02",
    question: "Does CloudEdge Offer Placement Support?",
    answer:
      "Yes, CloudEdge provides placement assistance, interview preparation, resume building, and career guidance support.",
  },
  {
    id: "03",
    question: "Can I Attend CloudEdge Classes Online?",
    answer:
      "Yes, students can attend live online classes from anywhere with flexible learning options.",
  },
  {
    id: "04",
    question: "Do Students Get Certificates After Completing Courses?",
    answer:
      "Yes, certificates are provided after successful completion of the course programs.",
  },
  {
    id: "05",
    question: "How Do I Join CloudEdge Courses?",
    answer:
      "You can enroll directly through the website by selecting your preferred course and completing registration.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-[#F8F8FA] py-12 sm:py-16 lg:py-20">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <div className="container mx-auto px-4 sm:px-6">
        {/* heading */}
        <div className="flex items-center justify-center flex-col">
          <BadgeLabel label="FAQ" theme="light" />

          <h2 className="text-[#1D1F20] text-center font-medium leading-[120%] mt-5 text-[30px] sm:text-4xl md:text-5xl max-w-[900px]">
            Everything You Need to Know
          </h2>
        </div>

        {/* faq wrapper */}
        <div className="mt-10 sm:mt-14 lg:mt-20 border-y border-[#C7C2F3]/80">
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className={`${index !== faqData.length - 1
                    ? "border-b border-[#C7C2F3]/80"
                    : ""
                  }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isActive}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full py-5 sm:py-6 lg:py-7 flex items-start justify-between gap-3 sm:gap-5 text-left"
                >
                  {/* left side */}
                  <div className="flex items-start gap-3 sm:gap-5 flex-1">
                    {/* number */}
                    <span className="text-[#6557E3] text-[11px] sm:text-sm font-medium leading-none pt-[4px] sm:pt-[6px] flex-shrink-0">
                      {faq.id}
                    </span>

                    {/* content */}
                    <div className="flex-1">
                      <h3 className="text-[#1D1F20] text-[17px] leading-[140%] sm:text-[20px] md:text-[22px] font-medium pr-2">
                        {faq.question}
                      </h3>

                      <div
                        id={`faq-answer-${index}`}
                        className={`grid transition-all duration-300 ease-in-out ${isActive
                            ? "grid-rows-[1fr] opacity-100 mt-2 sm:mt-3"
                            : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <p className="max-w-[700px] text-[#7B7B88] text-[13px] sm:text-sm md:text-[15px] leading-[170%] pr-4">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* icon */}
                  <div className="pt-[2px] sm:pt-1 flex-shrink-0">
                    {isActive ? (
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#6557E3] flex items-center justify-center">
                        <Image
                          src={minusIcon}
                          alt="Collapse FAQ"
                          className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                        />
                      </div>
                    ) : (
                      <Image
                        src={plusIcon}
                        alt="Expand FAQ"
                        className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                      />
                    )}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;