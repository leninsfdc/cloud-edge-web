"use client";

import BadgeLabel from "@/components/shared/BadgeLabel";
import TestimonialCard from "@/components/ui/TestimonialCard";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";

import janesmith from "@/public/images/jane-smith.png";

import leftArrow from "@/public/icons/back-arrow.svg";
import rightArrow from "@/public/icons/forward-arrow.svg";

import Image from "next/image";
import { getRandomTestimonials } from "@/app/(asgard)/asgard/academics/courses/actions";
import { MotionSection } from "@/components/ui/MotionElements";

const TestimonialSection = () => {
  const sliderRef = useRef<Slider | null>(null);
  // No hardcoded fallback reviewers — showing invented names/photos when the
  // real testimonials table is empty is a trust problem, not a placeholder.
  // The section simply doesn't render until genuine testimonials load.
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    getRandomTestimonials(6)
      .then((data) => {
        if (data && data.length > 0) {
          setTestimonials(data);
        }
      })
      .catch((err) => {
        console.error("Failed to load testimonials", err);
      });
  }, []);

  if (testimonials.length === 0) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <MotionSection 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#06042E] py-14 overflow-hidden relative"
    >

      <div className="absolute top-[130px] left-[40px] bg-[#7635D6] w-[350px] h-[350px] rounded-full blur-[200px]" />
      <div className="absolute top-[130px] right-[40px] bg-[#7635D6] w-[350px] h-[350px] rounded-full blur-[200px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-2/2 bg-[#7635D6] w-[250px] h-[250px] rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-1/9 -translate-x-2/2 bg-[#7635D6] w-[250px] h-[250px] rounded-full blur-[200px]" />

      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="flex items-center justify-center flex-col">
          <BadgeLabel label="Testimonials" theme="dark" />
          <div className="text-white text-center font-medium leading-tight my-8 text-3xl sm:text-4xl md:text-5xl">
            What Our Students Say
          </div>
        </div>

        {/* Slider */}
        <div className="mt-10 overflow-hidden">
          <div className="mx-[-12px]">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-3">
                  <TestimonialCard
                    comment={testimonial.review_text || testimonial.comment || ""}
                    name={testimonial.person_name || testimonial.name || ""}
                    rating={testimonial.rating || 5}
                    image={testimonial?.media_url || testimonial.image || janesmith}
                    person_designation={testimonial.person_designation || ""}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Left Button */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-md border cursor-pointer border-white/15 flex items-center justify-center bg-[#FFFFFF12] backdrop-blur-xl transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(180deg, rgba(10, 15, 28, 0.2) 0%, rgba(5, 7, 13, 0.2) 100%), radial-gradient(47.02% 47.02% at 50% 50%, rgba(255, 255, 255, 0.082) 0%, rgba(102, 102, 102, 0) 100%)",
              boxShadow: "0px 0px 6.5px 0px rgba(255, 255, 255, 0.21) inset",
            }}
          >
            <Image src={leftArrow} alt="Previous" className="w-5 h-5" />
          </button>

          {/* Right Button */}
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-md border cursor-pointer border-white/15 flex items-center justify-center bg-[#FFFFFF12] backdrop-blur-xl transition-all duration-300 hover:scale-105"
            style={{
              background:
                "linear-gradient(180deg, rgba(10, 15, 28, 0.2) 0%, rgba(5, 7, 13, 0.2) 100%), radial-gradient(47.02% 47.02% at 50% 50%, rgba(255, 255, 255, 0.082) 0%, rgba(102, 102, 102, 0) 100%)",
              boxShadow: "0px 0px 6.5px 0px rgba(255, 255, 255, 0.21) inset",
            }}
          >
            <Image src={rightArrow} alt="Next" className="w-5 h-5" />
          </button>
        </div>
      </div>
    </MotionSection>
  );
};

export default TestimonialSection;