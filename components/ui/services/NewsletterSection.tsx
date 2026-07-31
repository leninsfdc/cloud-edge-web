"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function NewsletterSection() {
  return (
    <section className="bg-slate-50/90 pt-4 pb-12 lg:pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-xl px-6 py-10 text-center shadow-[0_15px_40px_rgba(15,23,42,0.04)] md:px-12 md:py-12"
        >
          {/* Background Ambient Orbs */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            {/* Icon */}
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-inner">
              <Mail size={24} />
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 font-bricolage-grotesque">
              Subscribe To Our Newsletter
            </h2>

            {/* Description */}
            <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
              Get the latest SAP and Salesforce course updates, career tips, and placement insights delivered straight to your inbox.
            </p>

            {/* Form */}
            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  h-12 flex-1
                  rounded-full
                  border border-slate-200/80
                  bg-slate-50/80 backdrop-blur-md
                  px-5
                  text-xs sm:text-sm text-slate-900
                  outline-none
                  transition-all duration-300
                  placeholder:text-slate-400
                  focus:border-indigo-400
                  focus:bg-white
                  focus:shadow-[0_0_0_4px_rgba(99,102,241,0.15)]
                  font-medium
                "
              />

              <button
                type="submit"
                className="
                  h-12
                  rounded-full
                  bg-indigo-600 hover:bg-indigo-700
                  px-7
                  text-xs sm:text-sm font-bold text-white
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-lg hover:shadow-indigo-500/25
                  shrink-0
                "
              >
                Subscribe Now
              </button>
            </form>

            {/* Bottom Text */}
            <p className="mt-3 text-[11px] font-semibold text-slate-400">
              No spam ever. Unsubscribe with 1 click anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}