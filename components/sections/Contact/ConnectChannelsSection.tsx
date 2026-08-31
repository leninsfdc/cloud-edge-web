"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Mail, Phone, Ticket, Sparkles } from "lucide-react";
import whatsapp from "@/public/images/whatsapp.svg";
import email from "@/public/images/email.svg";
import phone from "@/public/images/phone.svg";
import ticket from "@/public/images/ticket.svg";
import { getWhatsAppLink } from "@/utils";
import ResilientImage from "@/components/ui/ResilientImage";
import { motion } from "framer-motion";

import CountryPicker from "@/components/ui/CountryPicker";

const ConnectChannelsSection = () => {
  return (
    <section className="bg-slate-50/90 py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADER WITH COUNTRY PICKER */}
        <div className="flex flex-col md:flex-row items-center gap-4 mb-12 max-w-7xl mx-auto justify-center">

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl space-y-3"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">How to Reach Us</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-bricolage-grotesque tracking-tight text-slate-900 leading-tight">
              Four Ways to Connect
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-lg mx-auto">
              Have questions about modules or timelines? Get in touch with our live advisors right now through any channel below.
            </p>
          </motion.div>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {/* CARD 1: WHATSAPP */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <a
              href={getWhatsAppLink("Hi Cloud Edge AI Solutions, I would like to make an enquiry.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden h-full flex flex-col justify-between bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[28px] p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-emerald-400/60"
            >
              {/* Top-Right Decorative Half Circle */}
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-emerald-100/70 pointer-events-none transition-transform duration-300 group-hover:scale-110" />

              <div className="relative z-10">
                {/* Vibrant Green WhatsApp Icon Wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md shadow-[#25D366]/20 transition-transform group-hover:scale-105">
                  <ResilientImage src={whatsapp} fallbackSrc={whatsapp} alt="WhatsApp" className="w-6 h-6 object-contain filter brightness-0 invert" />
                </div>

                <div className="mt-5">
                  <span className="text-[10px] tracking-wider uppercase font-extrabold text-slate-400">
                    WhatsApp Chat
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 font-bricolage-grotesque tracking-tight mt-0.5 group-hover:text-emerald-600 transition-colors">
                    +44 744 258 6325
                  </h4>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full w-fit mt-6">
                  Fastest — reply within 60 min
                </p>
              </div>
            </a>
          </motion.div>

          {/* CARD 2: EMAIL */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <a
              href="mailto:info@cloudedge.in"
              className="group relative overflow-hidden h-full flex flex-col justify-between bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[28px] p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-400/60"
            >
              {/* Top-Right Decorative Half Circle */}
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-indigo-100/70 pointer-events-none transition-transform duration-300 group-hover:scale-110" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shadow-inner">
                  <ResilientImage src={email} fallbackSrc={email} alt="Email" className="w-6 h-6 object-contain" />
                </div>

                <div className="mt-5">
                  <span className="text-[10px] tracking-wider uppercase font-extrabold text-slate-400">
                    Email Support
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 font-bricolage-grotesque tracking-tight mt-0.5 group-hover:text-indigo-600 transition-colors">
                    info@cloudedge.in
                  </h4>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-xs text-indigo-700 font-bold bg-indigo-50 border border-indigo-200/80 px-3.5 py-1.5 rounded-full w-fit mt-6">
                  Detailed queries — 2 hrs
                </p>
              </div>
            </a>
          </motion.div>

          {/* CARD 3: PHONE */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <a
              href="tel:+447442586325"
              className="group relative overflow-hidden h-full flex flex-col justify-between bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[28px] p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-purple-400/60"
            >
              {/* Top-Right Decorative Half Circle */}
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-purple-100/70 pointer-events-none transition-transform duration-300 group-hover:scale-110" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center shadow-inner">
                  <ResilientImage src={phone} fallbackSrc={phone} alt="Phone" className="w-6 h-6 object-contain" />
                </div>

                <div className="mt-5">
                  <span className="text-[10px] tracking-wider uppercase font-extrabold text-slate-400">
                    Direct Phone Line
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 font-bricolage-grotesque tracking-tight mt-0.5 group-hover:text-purple-600 transition-colors">
                    +44 744 258 6325
                  </h4>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-xs text-purple-700 font-bold bg-purple-50 border border-purple-200/80 px-3.5 py-1.5 rounded-full w-fit mt-6">
                  Mon–Sat 9 AM–7 PM BST
                </p>
              </div>
            </a>
          </motion.div>

          {/* CARD 4: FREE DEMO CLASS (ORANGE) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <a
              href="mailto:info@cloudedge.in?subject=Free Demo Class Request"
              className="group relative overflow-hidden h-full flex flex-col justify-between bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[28px] p-6 transition-all duration-300 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-orange-400/60"
            >
              {/* Top-Right Decorative Half Circle */}
              <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-orange-100/80 pointer-events-none transition-transform duration-300 group-hover:scale-110" />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20">
                  <ResilientImage src={ticket} fallbackSrc={ticket} alt="Demo Class" className="w-6 h-6 object-contain filter brightness-0 invert" />
                </div>

                <div className="mt-5">
                  <span className="text-[10px] tracking-wider uppercase font-extrabold text-amber-600">
                    Free Demo Class
                  </span>
                  <h4 className="text-base font-extrabold text-slate-900 font-bricolage-grotesque tracking-tight mt-0.5 group-hover:text-amber-600 transition-colors">
                    Book a Free Demo
                  </h4>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-xs text-amber-700 font-bold bg-amber-50 border border-amber-200/80 px-3.5 py-1.5 rounded-full w-fit mt-6">
                  Attend live before you enrol
                </p>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ConnectChannelsSection;