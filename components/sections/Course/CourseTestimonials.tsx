"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import quotes from "@/public/icons/quotes.svg";
import { motion } from "framer-motion";
import ResilientImage from "@/components/ui/ResilientImage";
import { ICourseTestimonial } from "@/types";

interface Props {
  testimonials?: ICourseTestimonial[];
}

const Arrow = ({
  onClick,
  direction,
}: {
  onClick?: () => void;
  direction: "left" | "right";
}) => (
  <button
    onClick={onClick}
    aria-label={direction === "left" ? "Previous slide" : "Next slide"}
    className="w-10 h-10 rounded-full bg-slate-100/80 hover:bg-indigo-600 hover:text-white transition-all duration-200 flex items-center justify-center border border-slate-200/60 text-slate-600 cursor-pointer shadow-2xs"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className={direction === "right" ? "rotate-180" : ""}
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const CourseTestimonials = ({ testimonials = [] }: Props) => {
  if (!testimonials.length) return null;

  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: testimonials.length > 1,
    infinite: testimonials.length > 2,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,

    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="mt-8 flex justify-center gap-2">
          {React.Children.toArray(dots).slice(0, 3)}
        </ul>
      </div>
    ),

    customPaging: () => (
      <div className="h-2.5 w-2.5 rounded-full bg-slate-200" />
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 md:mt-16 rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
        <div>
          <h3 className="font-bricolage-grotesque text-2xl md:text-3xl font-extrabold text-slate-900">
            What Our Alumni Say
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-1">Real stories from Cloud Edge graduates</p>
        </div>

        <div className="flex items-center gap-2.5 self-end sm:self-auto">
          <Arrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
          <Arrow direction="right" onClick={() => sliderRef.current?.slickNext()} />
        </div>
      </div>

      <div className="mt-6 md:mt-8 overflow-hidden">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-slate-50/60 border border-slate-200/60 rounded-2xl p-6 min-h-[240px] md:h-[260px] flex flex-col justify-between hover:border-indigo-200/80 transition-all duration-300">
                <div>
                  <Image
                    src={quotes}
                    alt="quotes"
                    className="mb-3 h-6 w-6 text-indigo-500 opacity-60"
                  />

                  <p
                    className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    "{item.review_text}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200/50">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-indigo-500/30 shrink-0 bg-indigo-50 flex items-center justify-center">
                    {item.media_url ? (
                      <ResilientImage
                        src={item.media_url}
                        alt={item.person_name || "student"}
                        width={44}
                        height={44}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="font-bold text-indigo-600 text-sm">
                        {item.person_name?.charAt(0) || "S"}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <div className="font-bold text-slate-900 text-sm truncate">
                      {item.person_name}
                    </div>

                    <div className="text-xs text-indigo-600 font-semibold truncate">
                      {item.person_designation}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style jsx global>{`
        .slick-dots {
          bottom: -40px;
        }

        .slick-dots li {
          width: auto;
          height: auto;
          margin: 0;
        }

        .slick-dots li button:before {
          display: none;
        }

        .slick-dots li.slick-active div {
          background: #4f46e5 !important;
          width: 1.5rem !important;
          border-radius: 9999px !important;
        }

        .slick-dots li div {
          background: #cbd5e1;
          transition: all 0.3s ease;
        }
      `}</style>
    </motion.div>
  );
};

export default CourseTestimonials;