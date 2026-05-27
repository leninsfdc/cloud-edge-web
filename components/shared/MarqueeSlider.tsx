"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import star from "@/public/marquee/star.png"

interface IMarqueeSliderProps {
  title: React.ReactNode;
  images: {
    url?: string;
    alt?: string;
  }[];
}

const MarqueeSlider: React.FC<IMarqueeSliderProps> = ({ title, images }) => {
  return (
    <div className="w-full pt-6 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">

          <div className="w-full md:w-48  leading-tight text-center md:text-left mb-6 md:mb-0 text-[#AEBDC4] uppercase font-semibold">
            {title}
          </div>

          <div className="flex-1 w-full overflow-hidden">
            <Marquee
              gradient={false}
              speed={40}
              pauseOnHover
              autoFill
            >
              {images.map((img, i) => {
                if (!img.url) return null;

                return (
                  <div
                    key={i}
                    className="flex items-center mx-6"
                  >
                    {/* Logo */}
                    <div className="flex items-center justify-center w-[150px] h-[80px]">
                      <Image
                        src={img.url}
                        alt={img.alt ?? "Partner"}
                        width={140}
                        height={80}
                        className="object-contain opacity-90 hover:opacity-100 transition-all"
                      />
                    </div>

                    {/* Separator */}
                    <Image
                      src={star}
                      alt="separator"
                      className="w-6 h-6 mx-6 opacity-60"
                    />
                  </div>
                );
              })}
            </Marquee>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MarqueeSlider;
