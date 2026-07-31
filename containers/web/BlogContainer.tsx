"use client";

import React from 'react';
import { IResponse } from "@/types";
import BlogWithSidebar from "@/components/sections/Blog/BlogWithSidebar";
import { Sparkles, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

interface IBlogContainerProps {
  blogs: IResponse;
}

const BlogContainer: React.FC<IBlogContainerProps> = ({ blogs }) => {
  return (
    <div className="bg-slate-50/90 min-h-screen">
      {/* HERO SECTION */}
      <div className="relative overflow-hidden bg-slate-50/90 pb-12 pt-24 sm:pt-28 md:pt-32 border-b border-slate-200/80">
        {/* Ambient Glow Orbs */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Mesh Pattern */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(99,102,241,.15) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative container mx-auto px-4 sm:px-6 flex flex-col items-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center mt-5 gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">Education & Career Insights</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl font-bricolage-grotesque font-extrabold tracking-tight text-slate-900 leading-[1.08] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Insights, Industry Trends &{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
              Career Guidance
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 font-medium leading-relaxed"
          >
            Explore expert articles, certification roadmaps, salary insights, and practical guides for SAP, Salesforce, and enterprise technologies.
          </motion.p>
        </div>
      </div>

      {/* BLOG CONTENT SECTION WITH SIDEBAR */}
      <div className="py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <BlogWithSidebar blogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;