"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";
import { COUNTRIES, CountrySlug, useCountry } from "@/libs/country-context";

interface CountryPickerProps {
  /** Visual variant — "dark" for TopBar/Navbar, "light" for section use */
  variant?: "dark" | "light";
  compact?: boolean;
}

export default function CountryPicker({ variant = "light", compact = false }: CountryPickerProps) {
  const { country, switchCountry } = useCountry();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isDark = variant === "dark";

  return (
    <div ref={ref} className="relative z-50">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`
          flex items-center gap-2 rounded-full border transition-all duration-200 cursor-pointer select-none
          ${compact ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-xs sm:text-sm"}
          ${isDark
            ? "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-xs"
            : "bg-white/90 backdrop-blur-md border-slate-200/90 text-slate-800 hover:bg-slate-50 hover:border-indigo-200 shadow-2xs"
          }
        `}
      >
        {/* Flag image from flagsapi.com */}
        <img
          src={country.flagUrl}
          alt={country.name}
          className="w-4 h-4 sm:w-4.5 sm:h-4.5 object-contain rounded-xs shrink-0 filter drop-shadow-2xs"
          loading="eager"
        />

        <span className="font-extrabold tracking-tight">
          {compact ? country.shortName : country.name}
        </span>

        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? "rotate-180 text-indigo-600" : "text-slate-400"}`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className={`
            absolute right-0 top-full mt-2 w-48 rounded-2xl border shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150
            ${isDark
              ? "bg-[#07042F]/95 backdrop-blur-xl border-white/15 text-white"
              : "bg-white/95 backdrop-blur-xl border-slate-200/90 text-slate-800"
            }
          `}
          role="listbox"
        >
          <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 border-b border-slate-100/50">
            Select Country
          </div>

          <div className="p-1 space-y-0.5">
            {COUNTRIES.map((c) => {
              const isActive = c.code === country.code;
              return (
                <button
                  key={c.slug}
                  role="option"
                  aria-selected={isActive}
                  onClick={() => {
                    switchCountry(c.slug as CountrySlug);
                    setOpen(false);
                  }}
                  className={`
                    w-full flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl text-xs transition-all duration-150 cursor-pointer
                    ${isActive
                      ? isDark
                        ? "bg-indigo-600/30 text-white font-bold border border-indigo-500/40"
                        : "bg-indigo-50/90 text-indigo-700 font-bold border border-indigo-200/80"
                      : isDark
                        ? "text-white/80 hover:bg-white/10"
                        : "text-slate-700 hover:bg-slate-100/80"
                    }
                  `}
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src={c.flagUrl}
                      alt={c.name}
                      className="w-4.5 h-4.5 object-contain rounded-xs shrink-0"
                    />
                    <div className="text-left leading-tight">
                      <div className="font-extrabold">{c.shortName}</div>
                      <div className={`text-[10px] ${isActive ? "text-indigo-600 font-semibold" : "text-slate-400"}`}>
                        {c.currency} ({c.currencySymbol})
                      </div>
                    </div>
                  </div>

                  {isActive && (
                    <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 stroke-[3]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
