"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Send, CheckCircle2, ArrowRight, MessageCircle, Sparkles, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/utils";
import customerExcutive from "@/public/images/customer-excutive.png";

const EnquiryFormSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    course: "",
    country: "India",
    experience: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data: ", formData);
    setIsSubmitted(true);
  };

  return (
    <section className="bg-slate-50 py-16 sm:py-24 relative overflow-hidden" id="enquiry-form">
      {/* Background Subtle Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-indigo-200/40 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-200/40 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-extrabold uppercase tracking-wider mb-4 shadow-2xs">
            <Sparkles size={14} />
            <span>Fast Track Career Guidance</span>
          </div>

          <h2 className="font-bricolage-grotesque text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Enquire Now & Get Free Advisor Session
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 font-medium leading-relaxed">
            Fill in your details below to receive course syllabus, fee structures, and immediate access to a live 1-on-1 advisor.
          </p>
        </div>

        {/* Form & Support Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* LEFT PANEL: ENQUIRY FORM BLOCK */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[32px] p-6 sm:p-9 shadow-[0_15px_40px_rgba(15,23,42,0.04)] flex flex-col justify-between"
          >
            <div className="space-y-6">

              <div>
                <h3 className="font-bricolage-grotesque text-2xl font-extrabold text-slate-900">
                  Course Enquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  We respect your privacy. No spam — only genuine course guidance.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="font-bricolage-grotesque text-2xl font-bold text-emerald-900">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-emerald-800 font-medium max-w-md mx-auto leading-relaxed">
                    Thank you! Our career advisory team has received your enquiry and will contact you via WhatsApp/Email within 60 minutes.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 hover:text-emerald-900 underline mt-2"
                  >
                    <span>Submit another enquiry</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="firstName" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="lastName" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="course" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                        Course Interested In *
                      </label>
                      <select
                        id="course"
                        required
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 outline-none transition-all"
                      >
                        <option value="">Select a course</option>
                        <option value="Salesforce Admin">Salesforce Admin (ADM-201)</option>
                        <option value="Salesforce Dev">Salesforce Development & LWC</option>
                        <option value="SAP FICO">SAP FICO Financial Accounting</option>
                        <option value="SAP MM">SAP MM Materials Management</option>
                        <option value="Full Stack Development">Full Stack Web Development</option>
                        <option value="Digital Marketing">Digital Marketing Mastery</option>
                        <option value="AWS Solutions Architect">AWS Solutions Architect</option>
                        <option value="Other">Other Custom Requirement</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="experience" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                        Current Profile / Status
                      </label>
                      <select
                        id="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 outline-none transition-all"
                      >
                        <option value="">Select your status</option>
                        <option value="Fresh Graduate">Fresh Graduate / Student</option>
                        <option value="IT Working Professional">IT Working Professional</option>
                        <option value="Non-IT Career Switcher">Non-IT Career Switcher</option>
                        <option value="Job Seeker">Active Job Seeker</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                      Message / Specific Questions (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ask about batch timings, fees, placement assistance, or prerequisites..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:bg-white focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-extrabold text-sm tracking-wide transition-all duration-200 shadow-md shadow-indigo-500/25 flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >
                    <span>Submit Enquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* RIGHT PANEL: QUICK CONTACT WIDGET CARDS (Height Matched with Left Panel) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">

            {/* WhatsApp Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-[28px] border border-slate-800 bg-slate-950 p-6 text-white relative overflow-hidden shadow-xl"
            >
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-indigo-600/30 filter blur-xl pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-emerald-400 text-xl">
                  💬
                </div>

                <div>
                  <h3 className="font-bricolage-grotesque text-lg font-bold text-white mb-1">
                    Need Instant Answers?
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    Skip the form and chat directly with a live course advisor on WhatsApp. We typically respond in under 60 minutes.
                  </p>
                </div>

                <a
                  href={getWhatsAppLink("Hi Cloud Edge Solutions, I would like quick course guidance.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold transition-all duration-200 shadow-md hover:shadow-emerald-500/25"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp Now</span>
                </a>
              </div>
            </motion.div>

            {/* Guarantees Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-[28px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-5 space-y-3 shadow-[0_10px_30px_rgba(15,23,42,0.03)]"
            >
              <h4 className="font-bricolage-grotesque text-base font-extrabold text-slate-900">
                What You Get When You Enquire
              </h4>

              <div className="space-y-2">
                {[
                  "60-minute average response time on weekdays",
                  "Free live demo class before paying anything",
                  "Course curriculum breakdown & fee structure",
                  "0% EMI instalment plan details"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4.5 h-4.5 text-indigo-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-600 font-medium leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Customer Executive Support Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-indigo-50/90 via-white to-purple-50/70 backdrop-blur-xl p-4 text-center space-y-2 shadow-[0_10px_30px_rgba(15,23,42,0.03)] overflow-hidden relative group"
            >
              <div className="relative w-full h-32 sm:h-36 mx-auto flex items-center justify-center">
                <Image
                  src={customerExcutive}
                  alt="Customer Executive Advisor Support"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <h5 className="font-bricolage-grotesque text-sm font-extrabold text-slate-900">
                  Dedicated Student Support
                </h5>
                <p className="text-[11px] text-slate-500 font-medium leading-tight">
                  Our career executives are online to assist you with course selection.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default EnquiryFormSection;