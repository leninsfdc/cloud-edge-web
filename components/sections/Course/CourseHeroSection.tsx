"use client";
import { ICourse } from '@/types'
import React from 'react'
import { motion } from 'framer-motion';
import moment from 'moment';
import cap from "@/public/icons/cap.svg"
import Image from 'next/image';
import { getEmailLink, getWhatsAppLink } from '@/utils';
import calendarBlue from "@/public/icons/calendar-blue.svg"
import groupIcon from "@/public/icons/group.svg"
import calendarOrange from "@/public/icons/calendar-orange.svg"
import verified from "@/public/icons/verified.svg"
import star from "@/public/icons/star-gold.svg"
import enrolled from "@/public/icons/enrolled.png"
import whatsappIcon from "@/public/icons/whatsapp-white.svg"
import play from "@/public/icons/play.svg"
import check from "@/public/icons/check-blue.svg"

interface ICourseHeroSectionProps {
  course: ICourse;
}

const CourseHeroSection: React.FC<ICourseHeroSectionProps> = ({ course }) => {
  const whatsappLink = getWhatsAppLink(`Hi Cloud Edge Solutions, I want to enroll in ${course.name}.`);
  const demoLink = getEmailLink(
    `Free Demo Class Request - ${course.name}`,
    `Hi Cloud Edge Solutions,\n\nI would like to book a free demo class for ${course.name}.`
  );

  return (
    <div
      className="min-h-[900px] pb-12 md:pb-0"
      style={{
        background:
          "radial-gradient(85.12% 123.04% at 70% 30%, rgba(219, 234, 254, 0.6) 0%, #F8FBFF 70%)"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-24 md:pt-32">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-5 lg:space-y-6 order-1"
          >

            <div className="bg-indigo-50/90 mt-5 backdrop-blur-md border border-indigo-200/60 rounded-full px-4 py-1.5 w-fit text-indigo-700 text-xs font-bold flex items-center justify-center gap-2.5 shadow-xs">
              <Image src={cap} alt="cap" className="w-4 h-4" />
              <span>{course.label}</span>
            </div>

            <div>
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight leading-tight lg:leading-14 text-slate-900">
                {course.name}
              </h1>
            </div>

            <div>
              <p className="text-slate-600 tracking-normal text-base sm:text-lg leading-relaxed max-w-2xl">
                {course.description}
              </p>
            </div>

            {/* Glassy Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-white/90 p-4 rounded-2xl flex flex-col justify-between min-h-[110px] lg:min-h-[130px] transition-all duration-300 shadow-[0_10px_25px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-indigo-200/80 cursor-default"
              >
                <div className="bg-blue-50/80 backdrop-blur-sm p-2.5 rounded-xl w-fit border border-blue-100">
                  <Image
                    src={calendarBlue}
                    alt="calendar"
                    className="w-5 h-5"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-0.5">
                    {course.duration} Weeks
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    Live Online
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-white/90 p-4 rounded-2xl flex flex-col justify-between min-h-[110px] lg:min-h-[130px] transition-all duration-300 shadow-[0_10px_25px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-indigo-200/80 cursor-default"
              >
                <div className="bg-indigo-50/80 backdrop-blur-sm p-2.5 rounded-xl w-fit border border-indigo-100">
                  <Image
                    src={groupIcon}
                    alt="group"
                    className="w-5 h-5"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-0.5">
                    BEGINNER -
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    Intermediate
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-white/90 p-4 rounded-2xl flex flex-col justify-between min-h-[110px] lg:min-h-[130px] transition-all duration-300 shadow-[0_10px_25px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-indigo-200/80 cursor-default"
              >
                <div className="bg-amber-50/80 backdrop-blur-sm p-2.5 rounded-xl w-fit border border-amber-100">
                  <Image
                    src={calendarOrange}
                    alt="calendar"
                    className="w-5 h-5"
                  />
                </div>

                <div>
                  <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-0.5">
                    Next batch
                  </p>

                  <p className="text-sm font-bold text-slate-900">
                    {/* @ts-ignore */}
                    {course.nextBatch?.start_date ? moment(course.nextBatch.start_date).format("DD MMM YYYY") : "Enrolling Now"}
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-white/90 p-4 rounded-2xl flex flex-col justify-between min-h-[110px] lg:min-h-[130px] transition-all duration-300 shadow-[0_10px_25px_rgba(15,23,42,0.04)] hover:shadow-md hover:border-indigo-200/80 cursor-default"
              >
                <div className="bg-emerald-50/80 backdrop-blur-sm p-2.5 rounded-xl w-fit border border-emerald-100">
                  <Image
                    src={verified}
                    alt="verified"
                    className="w-5 h-5"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-wider text-[#94A3B8] uppercase mb-1">
                    ADM-201
                  </p>

                  <p className="text-sm font-semibold text-gray-900">
                    Aligned
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-3 lg:gap-4">

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Image
                      key={index}
                      src={star}
                      alt="star"
                      className="w-3 h-3"
                    />
                  ))}
                </div>

                <div className="font-bold text-sm">4.8</div>

                <div className="text-[#94A3B8] text-sm">
                  (312 reviews)
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Image
                  src={enrolled}
                  alt="enrolled"
                  className="w-7 h-4"
                />
                <span className="font-semibold text-sm">3,400+</span>
                <span className="text-sm">enrolled</span>
              </div>

              <div className="flex items-center gap-2">
                <div>🌍</div>
                <span className="text-sm text-[#475569]">
                  India • UK • USA
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4361EE] hover:bg-[#344ED0] transition-colors duration-300 px-6 py-4 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                <Image
                  src={whatsappIcon}
                  alt="whatsapp"
                  className="w-5 h-5"
                />
                <div className="text-white font-semibold">
                  Enroll via WhatsApp
                </div>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={demoLink}
                className="bg-white hover:bg-gray-50 transition-colors duration-300 px-6 py-4 rounded-full flex items-center justify-center gap-2 border border-[#F3F4F6] w-full sm:w-auto shadow-sm hover:shadow-md"
              >
                <Image
                  src={play}
                  alt="play"
                  className="w-3 h-3"
                />
                <div className="text-black font-semibold">
                  Book a Free Demo
                </div>
              </motion.a>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-x-6 lg:gap-x-8 gap-y-3 pt-2">
              {course.features?.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
                  <Image
                    src={check}
                    alt="check"
                    className="w-4 h-4"
                  />

                  <span className="text-sm text-[#475569]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end order-2"
          >
            <CourseHeroImage course={course} />
          </motion.div>

        </div>
      </div>
    </div>
  )
}

const CourseHeroImage = ({ course }: { course: ICourse }) => {
  const [hasError, setHasError] = React.useState(false);
  const placeholder = "https://placehold.co/800x600/7C6EF8/FFFFFF/png?text=Cloud+Edge+Course";
  const isValidUrl = !hasError && Boolean(course?.media_url) && (course.media_url?.trim() !== "");
  const imgSrc: string = (isValidUrl && course.media_url) ? course.media_url : placeholder;

  return (
    <Image
      src={imgSrc}
      alt={course.name || "Cloud Edge Course"}
      width={900}
      height={700}
      unoptimized={isValidUrl}
      onError={() => setHasError(true)}
      className="w-full max-w-[400px] sm:max-w-[550px] lg:max-w-[700px] h-auto object-contain drop-shadow-xl"
      priority
    />
  );
};

export default CourseHeroSection;
