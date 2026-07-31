"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import check from "@/public/icons/check-purple.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface WeekModuleCardProps {
  label: string;
  title: string;
  points: string[];
}

const WeekModuleCard: React.FC<WeekModuleCardProps> = ({
  label,
  title,
  points,
}) => {
  const [open, setOpen] = useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-indigo-200/80 hover:shadow-md transition-all duration-300"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors hover:bg-slate-50/60 cursor-pointer"
      >
        <div className="flex items-center gap-4">
          <span className="bg-indigo-50/90 text-indigo-700 border border-indigo-200/60 text-xs font-bold px-3.5 py-1 rounded-full shadow-2xs">
            {label}
          </span>

          <h4 className="text-slate-900 font-bold text-lg md:text-xl font-bricolage-grotesque">
            {title}
          </h4>
        </div>

        <div className="w-8 h-8 rounded-full bg-slate-100/80 flex items-center justify-center border border-slate-200/50">
          {open ? (
            <ChevronUp className="w-4 h-4 text-indigo-600" />
          ) : (
            <ChevronDown className="w-4 h-4 text-slate-400" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 space-y-3.5 border-t border-slate-100/80">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-100">
                    <Image src={check} alt="check" className="w-3 h-3" />
                  </div>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WeekModuleCard;