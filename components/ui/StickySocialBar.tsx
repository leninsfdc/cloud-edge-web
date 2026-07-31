"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import insta from "@/public/icons/insta.svg";
import linkedin from "@/public/icons/linkedin.svg";
import facebook from "@/public/icons/facebook.svg";
import whatsapp from "@/public/icons/whatsapp.svg";
import { getWhatsAppLink } from "@/utils";

const socialItems = [
  {
    label: "WhatsApp",
    tooltip: "Chat on WhatsApp",
    href: getWhatsAppLink(),
    icon: whatsapp,
    external: true,
    bgColor: "bg-[#25D366] shadow-[#25D366]/30",
  },
  {
    label: "LinkedIn",
    tooltip: "Follow on LinkedIn",
    href: "/contact-us",
    icon: linkedin,
    external: false,
    bgColor: "bg-[#0A66C2] shadow-[#0A66C2]/30",
  },
  {
    label: "Instagram",
    tooltip: "Follow on Instagram",
    href: "/contact-us",
    icon: insta,
    external: false,
    bgColor: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[#dc2743]/30",
  },
  {
    label: "Facebook",
    tooltip: "Follow on Facebook",
    href: "/contact-us",
    icon: facebook,
    external: false,
    bgColor: "bg-[#1877F2] shadow-[#1877F2]/30",
  },
];

const StickySocialBar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col items-end gap-2"
      aria-label="Social media quick links"
    >
      <div className="flex flex-col gap-2.5 p-2 rounded-2xl bg-[#07042F]/90 backdrop-blur-md border border-white/10 shadow-xl shadow-indigo-950/20">
        {socialItems.map((item) => (
          <div key={item.label} className="relative group flex items-center">
            {/* Tooltip on hover (left side) */}
            <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 text-white text-xs px-2.5 py-1 font-medium shadow-md opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
              {item.tooltip}
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-slate-900" />
            </span>

            {/* Social Link Button */}
            <Link
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 transform group-hover:scale-115 shadow-md hover:shadow-lg ${item.bgColor}`}
            >
              <Image
                src={item.icon}
                alt={item.label}
                className="w-5 h-5 object-contain"
              />
            </Link>
          </div>
        ))}
      </div>
    </motion.aside>
  );
};

export default StickySocialBar;
