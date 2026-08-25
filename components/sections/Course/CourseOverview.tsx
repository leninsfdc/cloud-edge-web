"use client";

import { ICourse } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import cap from "@/public/icons/cap.svg";
import book from "@/public/icons/book-purple.svg";
import moduleIcon from "@/public/icons/module.svg";
import WeekModuleCard from "@/components/ui/WeekModuleCard";
import check from "@/public/icons/check-purple.svg";
import india from "@/public/icons/india.svg";
import uk from "@/public/icons/united-kingdom.svg";
import us from "@/public/icons/united-states.svg";
import canada from "@/public/icons/canada.svg";
import CourseEnrollmentCard from "@/components/ui/CourseEnrollmentCard";
import checkOutline from "@/public/icons/check-outline.svg";
import preReq from "@/public/images/pre-req.svg";
import CourseTestimonials from "./CourseTestimonials";
import CourseFAQs from "./CourseFAQs";
import CourseCard from "@/components/ui/CourseCard";
import { getNearestBatch } from "../Home/ExploreCoursesSection";
import ResilientImage from "@/components/ui/ResilientImage";
import codeIcon from "@/public/icons/code.svg";
import { PricingCountryCode } from "@/libs/geo";
import { getCurrencySymbol, codeToSlug } from "@/libs/country-data";

interface ICourseOverviewProps {
  course: ICourse;
  countryCode?: PricingCountryCode;
}

const CourseOverview: React.FC<ICourseOverviewProps> = ({ course, countryCode }) => {
  const salaryCards = [
    {
      icon: india,
      salary: course.in_avg_salary,
      label: "AVG. SALARY – INDIA",
    },
    {
      icon: uk,
      salary: course.uk_avg_salary,
      label: "AVG. SALARY – UK",
    },
    {
      icon: us,
      salary: course.us_avg_salary,
      label: "AVG. SALARY – USA",
    },
    {
      icon: canada,
      salary: course.ca_avg_salary,
      label: "AVG. SALARY – CANADA",
    },
  ];

  return (
    <div className="bg-slate-50/80 py-12 md:py-20 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-14">
          {/* Main Content Column */}
          <div className="xl:col-span-7 space-y-10">

            {/* Header / Intro */}
            <div className="space-y-4">
              <div className="bg-indigo-50/90 backdrop-blur-md border border-indigo-200/60 rounded-full px-4 py-1.5 w-fit text-indigo-700 text-xs font-bold flex items-center justify-center gap-2.5 shadow-2xs">
                <ResilientImage src={cap} fallbackSrc={cap} alt="cap" className="w-4 h-4" />
                <span>{course.label}</span>
              </div>
              <h3 className="font-bricolage-grotesque font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Course Overview
              </h3>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                {course.overview}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200/70 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs">
                  <ResilientImage src={book} fallbackSrc={book} alt="book" className="w-4 h-4 text-indigo-600" />
                  <span>Full Syllabus</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-slate-200/70 px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-700 shadow-2xs">
                  <ResilientImage src={moduleIcon} fallbackSrc={moduleIcon} alt="module" className="w-4 h-4 text-indigo-600" />
                  <span>{course.modules?.length || 0} Modules</span>
                </div>
              </div>
            </div>

            {/* Modules / Syllabus */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xl font-bold font-bricolage-grotesque text-slate-900 mb-4">
                Syllabus & Curriculum
              </h4>
              {course.modules?.map((m) => (
                <WeekModuleCard
                  key={m.id}
                  label={`WEEK ${m.display_order}`}
                  title={m.title}
                  points={m.points || []}
                />
              ))}
            </div>

            {/* What You'll Learn */}
            {course.highlights && course.highlights.length > 0 && (
              <div className="pt-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-bricolage-grotesque text-slate-900 mb-6">
                  What You'll Learn
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.id || index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      whileHover={{ y: -4, borderColor: "rgba(99, 102, 241, 0.4)" }}
                      className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl p-5 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="text-lg font-extrabold text-indigo-600 mb-2 font-bricolage-grotesque">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <p className="text-sm text-slate-600 leading-relaxed font-medium">
                            {highlight.text}
                          </p>
                        </div>

                        <div className="shrink-0 w-11 h-11 rounded-xl bg-indigo-50/80 flex items-center justify-center border border-indigo-100 p-2">
                          <ResilientImage
                            src={highlight.icon_media}
                            fallbackSrc={check}
                            alt={highlight.text || "Highlight"}
                            width={40}
                            height={40}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Tools & Tech */}
            {course.tools && course.tools.length > 0 && (
              <div className="pt-6">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-bricolage-grotesque text-slate-900 mb-6">
                  Tools & Technologies You'll Master
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                  {course.tools.map((tool, index) => (
                    <motion.div
                      key={tool.id || index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-2xl px-4 py-3 flex items-center gap-3 transition-all duration-300 cursor-default shadow-2xs hover:shadow-sm hover:border-indigo-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100/80 flex items-center justify-center shrink-0 p-1 border border-slate-200/50">
                        <ResilientImage
                          src={tool.media}
                          fallbackSrc={codeIcon}
                          alt={tool.name || "Tool"}
                          width={24}
                          height={24}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <span className="text-xs sm:text-sm font-bold text-slate-800 line-clamp-1">
                        {tool.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Career Outcomes & Salaries */}
            <div className="pt-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-bricolage-grotesque text-slate-900 mb-6">
                Career Outcomes & Salaries
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Target Job Roles */}
                <div className="lg:col-span-6 bg-white/80 backdrop-blur-xl border border-slate-200/80 p-6 rounded-3xl shadow-xs space-y-4">
                  <h4 className="text-indigo-600 font-extrabold text-xs tracking-wider uppercase">
                    Job Roles You Can Target
                  </h4>
                  <div className="space-y-3 pt-1">
                    {course.outcomes?.map((outcome, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                          <ResilientImage src={check} fallbackSrc={check} alt="check" className="w-3 h-3" />
                        </div>
                        <span className="text-slate-800 font-bold text-sm">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Salary Cards Grid */}
                <div className="lg:col-span-6">
                  <div className="grid grid-cols-2 gap-3.5">
                    {salaryCards.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        whileHover={{ scale: 1.03, y: -3 }}
                        className="border border-slate-200/80 rounded-2xl p-4 bg-white/80 backdrop-blur-xl flex flex-col gap-3 cursor-default transition-all duration-300 shadow-2xs hover:shadow-md hover:border-indigo-300"
                      >
                        <ResilientImage
                          src={item.icon}
                          fallbackSrc={india}
                          alt={item.label}
                          width={32}
                          height={32}
                          className="w-7 h-7 object-contain rounded-full shadow-2xs shrink-0"
                        />

                        <div>
                          <div className="font-extrabold text-indigo-600 text-base md:text-lg leading-tight font-bricolage-grotesque">
                            {item.salary || "N/A"}
                          </div>

                          <div className="mt-1 text-slate-500 font-bold uppercase text-[10px] sm:text-[11px] tracking-wider">
                            {item.label}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Prerequisites */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/80 backdrop-blur-xl p-6 sm:p-8 border border-slate-200/80 rounded-3xl shadow-xs relative overflow-hidden"
            >
              <ResilientImage
                src={preReq}
                fallbackSrc={preReq}
                alt="prerequisites"
                className="w-auto h-20 md:h-28 absolute bottom-0 right-0 opacity-40 pointer-events-none"
              />

              <h3 className="text-2xl font-extrabold font-bricolage-grotesque text-slate-900 mb-5 relative z-10">
                Prerequisites & Eligibility
              </h3>

              <div className="space-y-3 relative z-10">
                {course?.prerequisites?.map((preReqText, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <ResilientImage src={checkOutline} fallbackSrc={checkOutline} alt="check" className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span className="font-medium text-slate-700 text-sm md:text-base">{preReqText}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Testimonials & FAQs */}
            <CourseTestimonials testimonials={course.testimonials} />
            <CourseFAQs faqs={course.faqs} />
          </div>

          {/* Sticky Sidebar Column */}
          <div className="xl:col-span-5">
            <div className="xl:sticky xl:top-28">
              <CourseEnrollmentCard course={course} defaultCountry={countryCode} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Courses Section */}
      {course.related_courses && course.related_courses.length > 0 && (
        <div className="bg-slate-100/70 border-t border-slate-200/60 mt-20 py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-bricolage-grotesque text-slate-900 mb-8">
              More Recommended IT Courses
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {course.related_courses.map((item: any) => {
                const relatedCourse = item.related_course;
                if (!relatedCourse) return null;

                const nearestRegion = getNearestBatch(relatedCourse);
                const currencySymbol = getCurrencySymbol(nearestRegion?.currency);

                const price = nearestRegion
                  ? `${currencySymbol}${(
                    nearestRegion.discounted_price ||
                    nearestRegion.price
                  ).toLocaleString()}`
                  : "";

                return (
                  <CourseCard
                    key={relatedCourse.id}
                    icon={relatedCourse.icon_media_url}
                    category={relatedCourse.label || "IT Training"}
                    categoryColor="#6366F1"
                    title={relatedCourse.name}
                    description={relatedCourse.description}
                    price={price}
                    url={`/${countryCode ? codeToSlug(countryCode) : "usa"}/courses/${relatedCourse.url_slug}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseOverview;