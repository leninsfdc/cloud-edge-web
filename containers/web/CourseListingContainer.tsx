"use client";

import React, { useMemo, useState } from "react";
import CourseCard from "@/components/ui/CourseCard";
import { getNearestBatch } from "@/components/sections/Home/ExploreCoursesSection";
import { Sparkles, Search, BookOpen, ShieldCheck, CheckCircle2, Award, Zap } from "lucide-react";
import { motion } from "framer-motion";

import { useCountry } from "@/libs/country-context";
import { getRegionForCountry, formatRegionPrice } from "@/libs/country-data";

interface CourseListingContainerProps {
  courses: any[];
  countryCode?: string;
}

const CATEGORIES = ["All Programs", "Salesforce Courses", "SAP Courses"];

const CourseListingContainer = ({
  courses,
  countryCode,
}: CourseListingContainerProps) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Programs");
  const { country } = useCountry();

  const activeCountryCode = countryCode || country?.code;

  const filteredCourses = useMemo(() => {
    let result = courses || [];

    // Filter by active country: only show courses that have a batch for this country
    if (activeCountryCode) {
      const countryFiltered = result.filter(
        (c) => getRegionForCountry(c, activeCountryCode) !== null
      );
      // If any course has country-specific batches, apply country filter
      if (countryFiltered.length > 0) {
        result = countryFiltered;
      }
    }

    // Filter by domain category
    if (selectedCategory === "Salesforce Courses") {
      result = result.filter(
        (c) =>
          c.name?.toLowerCase().includes("salesforce") ||
          c.label?.toLowerCase().includes("salesforce")
      );
    } else if (selectedCategory === "SAP Courses") {
      result = result.filter(
        (c) =>
          c.name?.toLowerCase().includes("sap") ||
          c.label?.toLowerCase().includes("sap")
      );
    }

    // Filter by search keyword
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      result = result.filter(
        (course) =>
          course.name?.toLowerCase().includes(q) ||
          course.description?.toLowerCase().includes(q) ||
          course.label?.toLowerCase().includes(q)
      );
    }

    return result;
  }, [courses, search, selectedCategory, activeCountryCode]);

  return(
    <div className = "bg-slate-50/90 min-h-screen" >

      {/* HERO SECTION */ }
      < section className = "relative overflow-hidden bg-slate-50/90 pb-12 pt-24 sm:pt-28 md:pt-32 border-b border-slate-200/80" >
        {/* Ambient Glows */ }
        < div className = "absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[120px] pointer-events-none" />

        {/* Mesh Pattern */ }
        <div
          className = "absolute inset-0 opacity-15 pointer-events-none"
          style = {{
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
      <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">Explore Our Programs</span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="max-w-4xl font-bricolage-grotesque font-extrabold tracking-tight text-slate-900 leading-[1.08] text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
    >
      Industry-Aligned{" "}
      <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
        SAP & Salesforce Courses
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-4 max-w-2xl text-base sm:text-lg text-slate-600 font-medium leading-relaxed"
    >
      Learn from active practitioners with real system access from day one, 3 full mock certification exams, and 12-month placement support.
    </motion.p>
  </div>
      </section >

  {/* FILTER BAR & LISTING GRID */ }
  < section className = "container mx-auto px-4 sm:px-6 py-12" >

    {/* Filter Control Bar */ }
    < div className = "mb-10 bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[28px] p-5 shadow-[0_10px_30px_rgba(15,23,42,0.03)] flex flex-col md:flex-row items-center justify-between gap-4" >

      {/* Category Tabs */ }
      < div className = "flex flex-wrap items-center gap-2 w-full md:w-auto" >
      {
        CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-extrabold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${selectedCategory === cat
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200/80"
              }`}
          >
            {cat}
          </button>
        ))
      }
          </div >

  {/* Search Box */ }
  < div className = "relative w-full md:w-80" >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by course name or keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all font-medium"
            />
          </div >
        </div >

  {/* Course Count Indicator */ }
  < div className = "mb-6 flex items-center justify-between" >
    <p className="text-xs sm:text-sm text-slate-500 font-semibold">
      Showing <strong className="text-slate-900 font-extrabold">{filteredCourses.length}</strong> certified course{filteredCourses.length === 1 ? "" : "s"}
    </p>
        </div >

  {/* Course Cards Grid */ }
  < div className = "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch" >
  {
    filteredCourses.map((course) => {
      const region = getRegionForCountry(course, activeCountryCode);
      const formatted = formatRegionPrice(region);
      const price = formatted ? formatted.price : "";

      return (
        <CourseCard
          key={course.id}
          icon={course.icon_media_url || "/images/course-placeholder.png"}
          category={course.label || "Certification"}
          categoryColor="#6366F1"
          title={course.name}
          description={course.description}
          price={price || "0% EMI"}
          url={`/${country.slug}/courses/${course.url_slug}`}
        />
      );
    })
  }
        </div >

  {/* EMPTY STATE */ }
{
  filteredCourses.length === 0 && (
    <div className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[32px] p-12 text-center space-y-3 my-8">
      <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto text-xl">
        🔎
      </div>
      <h3 className="text-xl font-bold text-slate-900 font-bricolage-grotesque">
        No courses found
      </h3>
      <p className="text-slate-500 text-sm font-medium max-w-sm mx-auto">
        We couldn't find any courses matching "{search}". Try searching for Salesforce, FICO, MM, or clear your search query.
      </p>
      <button
        onClick={() => {
          setSearch("");
          setSelectedCategory("All Programs");
        }}
        className="inline-flex items-center gap-2 text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 px-4 py-2 rounded-full transition-colors cursor-pointer"
      >
        Clear Search & Filters
      </button>
    </div>
  )
}

{/* BOTTOM GUARANTEE TRUST BAR */ }
<div className="mt-16 rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur-xl p-8 shadow-[0_10px_30px_rgba(15,23,42,0.03)]">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
    <div className="flex items-center gap-4 py-2 lg:px-4">
      <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
        <Zap size={22} />
      </div>
      <div>
        <h4 className="font-bricolage-grotesque text-sm font-extrabold text-slate-900">100% Live Sessions</h4>
        <p className="text-xs text-slate-500 font-medium">Never pre-recorded videos</p>
      </div>
    </div>

    <div className="flex items-center gap-4 py-2 lg:px-4 pt-4 sm:pt-2">
      <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
        <CheckCircle2 size={22} />
      </div>
      <div>
        <h4 className="font-bricolage-grotesque text-sm font-extrabold text-slate-900">Real System Access</h4>
        <p className="text-xs text-slate-500 font-medium">Hands-on from day one</p>
      </div>
    </div>

    <div className="flex items-center gap-4 py-2 lg:px-4 pt-4 lg:pt-2">
      <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shrink-0">
        <Award size={22} />
      </div>
      <div>
        <h4 className="font-bricolage-grotesque text-sm font-extrabold text-slate-900">3 Full Mock Exams</h4>
        <p className="text-xs text-slate-500 font-medium">88% first-attempt pass</p>
      </div>
    </div>

    <div className="flex items-center gap-4 py-2 lg:px-4 pt-4 lg:pt-2">
      <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
        <ShieldCheck size={22} />
      </div>
      <div>
        <h4 className="font-bricolage-grotesque text-sm font-extrabold text-slate-900">12-Month Placement</h4>
        <p className="text-xs text-slate-500 font-medium">Resume & mock coaching</p>
      </div>
    </div>
  </div>
</div>

      </section >
    </div >
  );
};

export default CourseListingContainer;