import React from "react";

interface WhyChooseUsCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  statHighlight?: string;
  statText?: string;
}

const WhyChooseUsCard: React.FC<WhyChooseUsCardProps> = ({
  icon = "🎓",
  title,
  description,
  statHighlight,
  statText,
}) => {
  return (
    <div
      className="
        group
        rounded-[24px] sm:rounded-[30px]
        p-[1px]
        w-full h-full
        bg-linear-to-br from-white/10 to-transparent
        transition-all duration-500 ease-out
        hover:-translate-y-2
        hover:scale-[1.02]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.35)]
      "
    >
      <div
        className="
          relative overflow-hidden
          rounded-[24px] sm:rounded-[30px]
          w-full h-full
          border border-white/15
          transition-all duration-500
          group-hover:border-white/25
        "
        style={{
          background:
            "linear-gradient(180deg, rgba(10, 15, 28, 0.2) 0%, rgba(5, 7, 13, 0.2) 100%), radial-gradient(47.02% 47.02% at 50% 50%, rgba(255, 255, 255, 0.082) 0%, rgba(102, 102, 102, 0) 100%)",
          boxShadow:
            "0px 0px 6.5px 0px rgba(255, 255, 255, 0.21) inset",
        }}
      >
        {/* Glow Effect */}
        <div
          className="
            absolute inset-0 opacity-0
            group-hover:opacity-100
            transition-opacity duration-500
            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]
            pointer-events-none
          "
        />

        <div className="relative z-10 p-5 sm:p-6 md:p-8 space-y-4 sm:space-y-5">

          {/* Icon */}
          <div
            className="
              w-11 h-11 sm:w-13 sm:h-13
              rounded-full bg-[#FFFFFF1A]
              text-2xl sm:text-3xl
              flex items-center justify-center
              shadow-inner border border-white/15
              transition-all duration-500
              group-hover:scale-110
              group-hover:rotate-3
              group-hover:bg-white/20
            "
          >
            {icon}
          </div>

          {/* Title */}
          <div
            className="
              text-base sm:text-lg md:text-xl
              text-white font-semibold leading-snug
              transition-all duration-300
              group-hover:text-white
            "
          >
            {title}
          </div>

          {/* Description */}
          <div className="text-sm sm:text-[15px] text-[#FFFFFF80] tracking-[-0.25px] leading-6">
            {description}
          </div>

          {/* Stats */}
          {(statHighlight || statText) && (
            <div className="text-[#888A93] text-sm sm:text-base tracking-[-0.25px] leading-relaxed">
              <span
                className="
                  font-semibold text-2xl sm:text-3xl
                  text-[#00A1E0]
                  transition-all duration-500
                  group-hover:text-[#38CFFF]
                "
              >
                {statHighlight}
              </span>{" "}
              {statText}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;