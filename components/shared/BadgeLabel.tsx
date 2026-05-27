import React from "react";
import Image from "next/image";
import light from "@/public/icons/light.svg";

interface BadgeLabelProps {
  label: string;
  theme?: "dark" | "light";
  alt?: string;

  // NEW
  labelBgColor?: string;
  labelTextColor?: string;
}

const BadgeLabel: React.FC<BadgeLabelProps> = ({
  label,
  theme = "dark",
  alt = "badge icon",

  // defaults
  labelBgColor,
  labelTextColor,
}) => {
  const isDark = theme === "dark";

  return (
    <div className="relative flex items-center justify-center w-full max-w-xl">
      {/* Lines */}
      <div className="absolute inset-0 flex flex-col justify-center gap-2">
        <div
          className="h-[1px] w-full opacity-70"
          style={{
            background: isDark
              ? "linear-gradient(to right, transparent 0%, #E0E2EB 25%, transparent 50%, #E0E2EB 75%, transparent 100%)"
              : "linear-gradient(to right, transparent 0%, #E1D9FB 25%, transparent 50%, #E1D9FB 75%, transparent 100%)",
          }}
        />

        <div
          className="h-[1px] w-full opacity-70"
          style={{
            background: isDark
              ? "linear-gradient(to right, transparent 0%, #E0E2EB 25%, transparent 50%, #E0E2EB 75%, transparent 100%)"
              : "linear-gradient(to right, transparent 0%, #E1D9FB 25%, transparent 50%, #E1D9FB 75%, transparent 100%)",
          }}
        />
      </div>

      {/* Center Glow */}
      {isDark && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[120px] sm:w-[220px] h-full bg-[radial-gradient(circle,rgba(1,6,25,0.95)_0%,rgba(1,6,25,0.6)_40%,transparent_70%)]" />
        </div>
      )}

      {/* Badge */}
      <div
        className={`relative z-10 p-[1.5px] rounded-[100px] ${
          isDark
            ? "bg-[linear-gradient(175deg,rgba(224,226,235,0)_0%,#E0E2EB_50%,rgba(224,226,235,0)_100%)]"
            : "bg-[linear-gradient(175deg,rgba(0,0,0,0)_0%,#E1D9FB_50%,rgba(0,0,0,0)_100%)]"
        }`}
      >
        <div
          className={`rounded-[100px] p-1.5 ${
            isDark ? "bg-[#010619]" : "bg-white"
          }`}
        >
          <div
            className={`w-fit py-1 pl-1.5 pr-4 rounded-[100px] flex items-center gap-2 ${
              !labelBgColor && isDark
                ? "bg-white text-black"
                : !labelBgColor && !isDark
                ? "bg-white text-black border border-[#E1D9FB]"
                : ""
            }`}
            style={{
              backgroundColor: labelBgColor,
              color: labelTextColor,
            }}
          >
            <div
              className={`rounded-full p-2 ${
                isDark ? "bg-[#EDEBFF]" : "bg-[#F3F4F6]"
              }`}
            >
              <Image src={light} alt={alt} className="w-4 h-4" />
            </div>

            <div className="text-xs sm:text-sm font-semibold">
              {label}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgeLabel;