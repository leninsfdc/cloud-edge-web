"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    tier: "Individual",
    title: "Course Enrol",
    price: "Contact us",
    note: "for local pricing in your currency",
    description:
      "Join an upcoming open cohort. 0% EMI available in India and UK.",
    features: [
      "Live instructor-led sessions",
      "Sandbox system access every class",
      "Recordings for 6 months",
      "3 full mock certification exams",
      "12-month placement support",
      "Student community access",
    ],
    buttonText: "Browse Courses",
    buttonLink: "/courses",
    featured: false,
  },
  {
    tier: "Individual+",
    title: "Course + Job Support",
    price: "Contact us",
    note: "for local pricing in your currency",
    description:
      "Full course plus placement support and 3 months of job support once you start — so you land the role and thrive in it.",
    features: [
      "Everything in Course Enrol",
      "CV & LinkedIn optimisation",
      "Mock interviews with instructors",
      "200+ employer network access",
      "Job Support Programme — 3 months",
      "Weekly advisor check-ins on the job",
    ],
    buttonText: "Enquire on WhatsApp",
    buttonLink:
      "https://wa.me/447442586325?text=Hi+Cloud+Edge+Solutions",
    featured: true,
  },
  {
    tier: "Business",
    title: "Corporate L&D",
    price: "Custom",
    note: "from 3 seats · invoice billing",
    description:
      "Bespoke pricing for teams and organisations, with volume discounts and PO invoicing.",
    features: [
      "Private dedicated cohort",
      "Custom curriculum",
      "Monthly L&D progress reports",
      "Post-delivery instructor access",
      "Public sector invoicing accepted",
    ],
    buttonText: "Request Proposal",
    buttonLink: "mailto:corporate@cloudedge.in",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-slate-50/90 py-12 lg:py-16 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/90 px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-indigo-700 shadow-2xs">
            Transparent Pricing
          </div>

          <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-bricolage-grotesque">
            Transparent pricing. Flexible payment.
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600 font-medium">
            All courses available in INR, GBP, USD and CAD. 0% EMI available on every plan.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`relative flex flex-col justify-between rounded-[32px] p-8 transition-all duration-300 ${
                plan.featured
                  ? "bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 text-white shadow-[0_25px_60px_rgba(99,102,241,0.25)] border border-indigo-400/40"
                  : "bg-white/80 backdrop-blur-xl border border-slate-200/80 text-slate-900 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-indigo-300 hover:shadow-xl"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-indigo-600 shadow-md border border-indigo-100">
                  Most Popular
                </div>
              )}

              <div>
                <p
                  className={`text-xs font-extrabold uppercase tracking-wider ${
                    plan.featured ? "text-indigo-200" : "text-indigo-600"
                  }`}
                >
                  {plan.tier}
                </p>

                <h3
                  className={`mt-2 text-2xl font-extrabold tracking-tight font-bricolage-grotesque ${
                    plan.featured ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.title}
                </h3>

                <div
                  className={`mt-4 text-4xl font-extrabold font-bricolage-grotesque ${
                    plan.featured ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.price}
                </div>

                <p
                  className={`mt-1 text-xs font-medium ${
                    plan.featured ? "text-white/70" : "text-slate-500"
                  }`}
                >
                  {plan.note}
                </p>

                <p
                  className={`mt-5 text-sm leading-relaxed font-medium ${
                    plan.featured ? "text-white/85" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div
                  className={`my-6 border-t ${
                    plan.featured ? "border-white/20" : "border-slate-100"
                  }`}
                />

                {/* Features list */}
                <ul className="space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-3 text-xs sm:text-sm font-medium ${
                        plan.featured ? "text-white/90" : "text-slate-600"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.featured
                            ? "bg-white/20 text-white"
                            : "bg-indigo-50 text-indigo-600 border border-indigo-100"
                        }`}
                      >
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                {plan.buttonLink.startsWith("/") ? (
                  <Link
                    href={plan.buttonLink}
                    className={`inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-bold shadow-md transition-all duration-300 transform hover:-translate-y-0.5 ${
                      plan.featured
                        ? "bg-white text-indigo-900 hover:bg-slate-100"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20"
                    }`}
                  >
                    {plan.buttonText}
                  </Link>
                ) : (
                  <a
                    href={plan.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex w-full items-center justify-center rounded-full px-6 py-4 text-sm font-bold shadow-md transition-all duration-300 transform hover:-translate-y-0.5 ${
                      plan.featured
                        ? "bg-white text-indigo-900 hover:bg-slate-100"
                        : "bg-indigo-600 text-white hover:bg-indigo-700 shadow-indigo-500/20"
                    }`}
                  >
                    {plan.buttonText}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}