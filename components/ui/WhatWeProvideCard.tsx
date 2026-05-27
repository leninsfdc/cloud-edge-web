import React from "react";
import Image, { StaticImageData } from "next/image";

interface WhatWeProvideCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

const WhatWeProvideCard: React.FC<WhatWeProvideCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div
      className="
        bg-[#ECEAF7]
        border border-[#4C3D8F1A]
        rounded-[22px] sm:rounded-[30px]
        shadow-inner
        backdrop-blur-[10px]
        p-5 sm:p-6 lg:p-7
        space-y-4
        h-full
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_10px_30px_rgba(76,61,143,0.12)]
      "
    >
      <div
        className="
          w-[60px] h-[60px]
          sm:w-[70px] sm:h-[70px]
          lg:w-[77px] lg:h-[77px]
          rounded-full
          flex items-center justify-center
          shrink-0
          transition-transform duration-300
          hover:scale-105
        "
        style={{
          background:
            "linear-gradient(325.21deg, #C9C2E8 6.26%, #8878CC 93.74%)",
          boxShadow:
            "5px 5px 28px 0px rgba(76, 61, 143, 0.3), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.3)",
        }}
      >
        <Image
          src={icon}
          alt={title}
          className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
        />
      </div>

      <div
        className="
          text-[#161439]
          font-semibold
          text-base sm:text-lg lg:text-xl
          leading-snug
          pr-0 sm:pr-6 lg:pr-12
        "
      >
        {title}
      </div>

      <div
        className="
          text-[#5A5B62]
          text-sm sm:text-[15px]
          leading-relaxed
          pr-0 md:pr-6
        "
      >
        {description}
      </div>
    </div>
  );
};

export default WhatWeProvideCard;