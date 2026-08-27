"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useCountry } from "@/libs/country-context";

export default function CTASection() {
  const { country } = useCountry();
  return (
    <section className="bg-slate-50/90 py-4 lg:py-6 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-indigo-700 via-indigo-800 to-purple-800 px-6 py-10 text-center shadow-[0_20px_50px_rgba(99,102,241,0.2)] md:px-12 md:py-12"
        >
          {/* Glassy Blur Orbs */}
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-400/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-bricolage-grotesque">
              Ready to transform your IT career?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-white/85 font-medium">
              Browse all SAP and Salesforce courses, book a free demo
              session, or message us on WhatsApp for personalised career guidance.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Link
                href={`/${country.slug}/courses`}
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-white
                  px-7 py-3.5
                  text-xs sm:text-sm font-bold text-slate-900
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                "
              >
                <span>Browse All Courses</span>
                <ArrowRight size={15} />
              </Link>

              <a
                href="https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center gap-2
                  rounded-full
                  bg-emerald-600 hover:bg-emerald-700
                  px-7 py-3.5
                  text-xs sm:text-sm font-bold text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-xl
                "
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}