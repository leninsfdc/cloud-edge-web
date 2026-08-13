// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Phone, Mail, Clock } from "lucide-react";
// import insta from "@/public/icons/insta.svg";
// import linkedin from "@/public/icons/linkedin.svg";
// import facebook from "@/public/icons/facebook.svg";
// import whatsapp from "@/public/icons/whatsapp.svg";
// import { getWhatsAppLink } from "@/utils";

// const socialLinks = [
//   {
//     label: "WhatsApp",
//     href: getWhatsAppLink(),
//     icon: whatsapp,
//     external: true,
//     hoverBg: "hover:bg-[#25D366]/20 hover:border-[#25D366]/40",
//   },
//   {
//     label: "LinkedIn",
//     href: "/contact-us",
//     icon: linkedin,
//     external: false,
//     hoverBg: "hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40",
//   },
//   {
//     label: "Instagram",
//     href: "/contact-us",
//     icon: insta,
//     external: false,
//     hoverBg: "hover:bg-[#E4405F]/20 hover:border-[#E4405F]/40",
//   },
//   {
//     label: "Facebook",
//     href: "/contact-us",
//     icon: facebook,
//     external: false,
//     hoverBg: "hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40",
//   },
// ];

// const TopBar = () => {
//   return (
//     <div className="w-full bg-[#07042F] text-white/90 text-xs border-b border-white/10 transition-all duration-300">
//       <div className="container mx-auto px-4 md:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
//         {/* Left Side: Contact Information */}
//         <div className="flex items-center flex-wrap justify-center sm:justify-start gap-4 md:gap-6 text-white/80">
//           <a
//             href="tel:+447442586325"
//             className="flex items-center gap-1.5 hover:text-[#FFC224] transition-colors duration-200"
//           >
//             <Phone className="w-3.5 h-3.5 text-[#FFC224]" />
//             <span className="font-medium tracking-tight">+44 744 258 6325</span>
//           </a>

//           <span className="hidden sm:inline text-white/20">|</span>

//           <a
//             href="mailto:info@cloudedge.in"
//             className="flex items-center gap-1.5 hover:text-[#FFC224] transition-colors duration-200"
//           >
//             <Mail className="w-3.5 h-3.5 text-[#6C5CFF]" />
//             <span className="font-medium">info@cloudedge.in</span>
//           </a>

//           <span className="hidden md:inline text-white/20">|</span>

//           <div className="hidden md:flex items-center gap-1.5 text-white/70">
//             <Clock className="w-3.5 h-3.5 text-white/50" />
//             <span>Mon – Sat: 7:00 AM - 8:00 PM</span>
//           </div>
//         </div>

//         {/* Right Side: Social Media Icons */}
//         <div className="flex items-center gap-2">
//           <span className="text-[11px] text-white/60 font-medium hidden lg:inline mr-1">
//             Follow Us:
//           </span>
//           <div className="flex items-center gap-1.5">
//             {socialLinks.map((item) => (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 target={item.external ? "_blank" : undefined}
//                 rel={item.external ? "noopener noreferrer" : undefined}
//                 aria-label={item.label}
//                 title={item.label}
//                 className={`h-7 w-7 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-200 hover:scale-110 ${item.hoverBg}`}
//               >
//                 <Image
//                   src={item.icon}
//                   alt={item.label}
//                   className="w-3.5 h-3.5 object-contain"
//                 />
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopBar;




"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock } from "lucide-react";
import insta from "@/public/icons/insta.svg";
import linkedin from "@/public/icons/linkedin.svg";
import facebook from "@/public/icons/facebook.svg";
import whatsapp from "@/public/icons/whatsapp.svg";
import { getWhatsAppLink } from "@/utils";

const socialLinks = [
  {
    label: "WhatsApp",
    href: getWhatsAppLink(),
    icon: whatsapp,
    external: true,
    hoverBg: "hover:bg-[#25D366]/20 hover:border-[#25D366]/40",
  },
  {
    label: "LinkedIn",
    href: "/contact-us",
    icon: linkedin,
    external: false,
    hoverBg: "hover:bg-[#0A66C2]/20 hover:border-[#0A66C2]/40",
  },
  {
    label: "Instagram",
    href: "/contact-us",
    icon: insta,
    external: false,
    hoverBg: "hover:bg-[#E4405F]/20 hover:border-[#E4405F]/40",
  },
  {
    label: "Facebook",
    href: "/contact-us",
    icon: facebook,
    external: false,
    hoverBg: "hover:bg-[#1877F2]/20 hover:border-[#1877F2]/40",
  },
];

const TopBar = () => {
  return (
    <div className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#07042F]/90 via-[#8B5CF6]/80 to-[#07042F]/90 backdrop-blur-md text-white/90 text-xs border-b border-white/15 shadow-2xl shadow-indigo-950/20 transition-all duration-300">
      <div className="container mx-auto px-4 md:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left Side: Contact Information */}
        <div className="flex items-center flex-wrap justify-center sm:justify-start gap-4 md:gap-6 text-white/90">
          <a
            href="tel:+447442586325"
            className="flex items-center gap-1.5 hover:text-[#FFC224] transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5 text-[#FFC224]" />
            <span className="font-medium tracking-tight">+44 744 258 6325</span>
          </a>

          <span className="hidden sm:inline text-white/20">|</span>

          <a
            href="mailto:info@cloudedge.in"
            className="flex items-center gap-1.5 hover:text-[#FFC224] transition-colors duration-200"
          >
            <Mail className="w-3.5 h-3.5 text-[#FFC224]" />
            <span className="font-medium">info@cloudedge.in</span>
          </a>

          <span className="hidden md:inline text-white/20">|</span>

          <div className="hidden md:flex items-center gap-1.5 text-white/80">
            <Clock className="w-3.5 h-3.5 text-[#FFC224]" />
            <span>Mon – Sat: 7:00 AM - 8:00 PM</span>
          </div>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-white/70 font-medium hidden lg:inline mr-1">
            Follow Us:
          </span>
          <div className="flex items-center gap-1.5">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                aria-label={item.label}
                title={item.label}
                className={`h-7 w-7 rounded-lg border border-white/15 bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110 ${item.hoverBg}`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  className="w-3.5 h-3.5 object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;