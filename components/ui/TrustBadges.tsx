"use client";

import React from "react";

export const GoogleIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

export const TrustpilotIcon = () => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
    <path
      fill="#00b67a"
      d="M12 0l3.668 7.431 8.2 1.192-5.934 5.784 1.399 8.165L12 18.723l-7.333 3.849 1.399-8.165L.132 8.623l8.2-1.192L12 0z"
    />
  </svg>
);

export const StarRating = ({ count = 5 }: { count?: number }) => (
  <div className="flex items-center gap-0.5">
    {[...Array(count)].map((_, i) => (
      <svg
        key={i}
        className="w-3.5 h-3.5 fill-[#FFC224]"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

interface TrustBadgesProps {
  theme?: "light" | "dark";
  unified?: boolean;
  className?: string;
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({
  theme = "light",
  unified = false,
  className = "",
}) => {
  const isDark = theme === "dark";

  if (unified) {
    return (
      <div
        className={`inline-flex items-center gap-3 sm:gap-5 px-5 sm:px-6 py-2.5 rounded-full border border-[#8B7DFF33] bg-white/90 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 ${className}`}
      >
        {/* Google side */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <GoogleIcon />
          <span className="font-bold text-slate-800 text-xs sm:text-sm">4.9</span>
          <StarRating />
          <span className="text-[11px] sm:text-xs text-slate-500 font-medium hidden sm:inline">(Google)</span>
        </div>

        {/* Divider */}
        <div className="h-4 w-px bg-slate-200" />

        {/* Trustpilot side */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <TrustpilotIcon />
          <span className="font-bold text-slate-800 text-xs sm:text-sm">4.8</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="w-3 h-3 sm:w-3.5 sm:h-3.5 bg-[#00b67a] rounded-xs flex items-center justify-center"
              >
                <svg className="w-2 h-2 fill-white" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            ))}
          </div>
          <span className="text-[11px] sm:text-xs text-slate-500 font-medium hidden sm:inline">Trustpilot</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-3 sm:gap-4 ${className}`}
    >
      {/* Google Review Badge */}
      <a
        href="https://google.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border transition-all duration-300 transform hover:scale-105 ${
          isDark
            ? "bg-white/10 border-white/15 text-white hover:bg-white/20 shadow-md"
            : "bg-white/90 border-[#DDDFF5] text-slate-800 hover:bg-white shadow-xs"
        }`}
      >
        <GoogleIcon />
        <div className="flex items-center gap-1.5 text-xs">
          <span className="font-bold">4.9</span>
          <StarRating />
          <span className={isDark ? "text-white/70" : "text-slate-500"}>
            (Google Reviews)
          </span>
        </div>
      </a>

      {/* Trustpilot Badge */}
      <a
        href="https://trustpilot.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border transition-all duration-300 transform hover:scale-105 ${
          isDark
            ? "bg-white/10 border-white/15 text-white hover:bg-white/20 shadow-md"
            : "bg-white/90 border-[#DDDFF5] text-slate-800 hover:bg-white shadow-xs"
        }`}
      >
        <TrustpilotIcon />
        <div className="flex items-center gap-1.5 text-xs">
          <span className="font-bold">4.8</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="w-3 h-3 bg-[#00b67a] rounded-xs flex items-center justify-center"
              >
                <svg
                  className="w-2 h-2 fill-white"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>
            ))}
          </div>
          <span className={isDark ? "text-white/70" : "text-slate-500"}>
            Trustpilot
          </span>
        </div>
      </a>
    </div>
  );
};

export default TrustBadges;
