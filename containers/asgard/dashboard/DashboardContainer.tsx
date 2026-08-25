"use client";

import React, { useState, useTransition } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Layers,
  GraduationCap,
  Newspaper,
  Globe,
  Calendar,
  Users,
  CheckCircle2,
  AlertTriangle,
  Info,
  TrendingUp,
  Plus,
  ArrowUpRight,
  Sparkles,
  Tag,
  Clock,
  Activity,
  Pencil,
  Eye,
  RefreshCw,
  Search,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardKPIs } from "@/app/(asgard)/asgard/dashboard/actions";
import { cn } from "@/lib/utils";

interface DashboardContainerProps {
  initialData: DashboardKPIs;
}

const countryNames: Record<string, string> = {
  IN: "India",
  UK: "United Kingdom",
  US: "United States",
  CA: "Canada",
};

export default function DashboardContainer({ initialData }: DashboardContainerProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState<"overview" | "academics" | "blogs" | "alerts">("overview");
  const [searchQuery, setSearchQuery] = useState("");

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const { blogs, courses, batches, batchRegions, content, actionItems } = initialData;

  const activeBlogPercent = blogs.total > 0 ? Math.round((blogs.active / blogs.total) * 100) : 0;
  const activeCoursePercent = courses.total > 0 ? Math.round((courses.active / courses.total) * 100) : 0;
  const activeBatchPercent = batches.total > 0 ? Math.round((batches.active / batches.total) * 100) : 0;
  const activeRegionPercent = batchRegions.total > 0 ? Math.round((batchRegions.active / batchRegions.total) * 100) : 0;

  // Filter recent items by search query if present
  const filteredCourses = courses.recent.filter((c) =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (c.label && c.label.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredBatches = batches.recent.filter((b) =>
    b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.course_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredRegions = batchRegions.recent.filter((r) =>
    r.batch_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.country_code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBlogs = blogs.recent.filter((b) =>
    b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen space-y-8 p-6 lg:p-8">
      {/* Top Banner & Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Management
            </span>
            <span className="text-xs text-muted-foreground">• Asgard Portal</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground mt-1">
            Dashboard & Action Center
          </h1>
          <p className="text-sm text-muted-foreground">
            Real-time KPIs, table analytics, and quick operations for Academics and Blogs.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isPending}
            className="gap-1.5 text-xs font-medium"
          >
            <RefreshCw className={cn("h-3.5 w-3.5", isPending && "animate-spin text-primary")} />
            {isPending ? "Syncing..." : "Refresh KPIs"}
          </Button>

          <Link href="/asgard/academics/courses/create">
            <Button size="sm" className="gap-1.5 text-xs font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
              <Plus className="h-3.5 w-3.5" />
              New Course
            </Button>
          </Link>

          <Link href="/asgard/academics/batches/create">
            <Button size="sm" variant="secondary" className="gap-1.5 text-xs font-semibold">
              <Plus className="h-3.5 w-3.5" />
              New Batch
            </Button>
          </Link>

          <Link href="/asgard/blogs/create">
            <Button size="sm" variant="secondary" className="gap-1.5 text-xs font-semibold">
              <Plus className="h-3.5 w-3.5" />
              New Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Main KPI Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Courses KPI */}
        <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-blue-500/10 p-2.5 text-blue-600">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-600">
              {activeCoursePercent}% Active
            </span>
          </div>

          <div className="mt-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Courses</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-foreground">{courses.total}</span>
              <span className="text-xs text-muted-foreground">total catalog</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span>
                <strong className="text-foreground">{courses.active}</strong> Active
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-amber-600 font-medium">
                <Sparkles className="h-3 w-3" />
                {courses.featured} Featured
              </span>
            </div>
            <Link
              href="/asgard/academics/courses"
              className="inline-flex items-center gap-0.5 text-primary hover:underline font-medium text-[11px]"
            >
              View Table <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Batches KPI */}
        <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-purple-500/10 p-2.5 text-purple-600">
              <Layers className="h-5 w-5" />
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-2 py-0.5 text-xs font-medium text-purple-600">
              {activeBatchPercent}% Active
            </span>
          </div>

          <div className="mt-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Active Batches</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-foreground">{batches.total}</span>
              <span className="text-xs text-muted-foreground">cohorts</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                <Users className="h-3 w-3 text-muted-foreground" />
                <strong className="text-foreground">{batches.totalCapacity}</strong> Seats
              </span>
              <span>•</span>
              <span>
                <strong className="text-foreground">{batches.active}</strong> Live
              </span>
            </div>
            <Link
              href="/asgard/academics/batches"
              className="inline-flex items-center gap-0.5 text-primary hover:underline font-medium text-[11px]"
            >
              View Table <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Batch Regions / Pricing KPI */}
        <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-600">
              <Globe className="h-5 w-5" />
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600">
              {Object.keys(batchRegions.countries).length} Countries
            </span>
          </div>

          <div className="mt-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Regional Pricing</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-foreground">{batchRegions.total}</span>
              <span className="text-xs text-muted-foreground">configured slots</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 text-emerald-600 font-medium">
                <Calendar className="h-3 w-3" />
                {batchRegions.upcomingStarts} Upcoming
              </span>
              <span>•</span>
              <span>
                <strong className="text-foreground">{batchRegions.active}</strong> Active
              </span>
            </div>
            <Link
              href="/asgard/academics/batch-regions"
              className="inline-flex items-center gap-0.5 text-primary hover:underline font-medium text-[11px]"
            >
              View Table <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Blogs KPI */}
        <div className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/40">
          <div className="flex items-center justify-between">
            <div className="rounded-xl bg-amber-500/10 p-2.5 text-amber-600">
              <Newspaper className="h-5 w-5" />
            </div>
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-600">
              {activeBlogPercent}% Published
            </span>
          </div>

          <div className="mt-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Blogs & Articles</p>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-foreground">{blogs.total}</span>
              <span className="text-xs text-muted-foreground">published & drafts</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span>
                <strong className="text-foreground">{blogs.active}</strong> Published
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Tag className="h-3 w-3 text-muted-foreground" />
                {blogs.totalTags} Tags
              </span>
            </div>
            <Link
              href="/asgard/blogs"
              className="inline-flex items-center gap-0.5 text-primary hover:underline font-medium text-[11px]"
            >
              View Table <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Action Items Alert Bar (if any warnings/recommendations) */}
      {actionItems.length > 0 && (
        <div className="rounded-2xl border border-border bg-card/60 p-4 shadow-sm backdrop-blur-sm space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary/10 p-1.5 text-primary">
                <Zap className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Action Checklist & Recommendations</h3>
            </div>
            <span className="text-xs text-muted-foreground font-medium">{actionItems.length} Notice{actionItems.length > 1 ? "s" : ""}</span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            {actionItems.map((item, idx) => (
              <div
                key={idx}
                className={cn(
                  "flex flex-col justify-between rounded-xl border p-3.5 transition-all duration-200",
                  item.type === "warning" && "border-amber-500/30 bg-amber-500/5 text-amber-950 dark:text-amber-200",
                  item.type === "info" && "border-blue-500/30 bg-blue-500/5 text-blue-950 dark:text-blue-200",
                  item.type === "success" && "border-emerald-500/30 bg-emerald-500/5 text-emerald-950 dark:text-emerald-200"
                )}
              >
                <div>
                  <div className="flex items-center gap-1.5 font-semibold text-xs">
                    {item.type === "warning" && <AlertTriangle className="h-3.5 w-3.5 text-amber-600 shrink-0" />}
                    {item.type === "info" && <Info className="h-3.5 w-3.5 text-blue-600 shrink-0" />}
                    {item.type === "success" && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />}
                    <span className="truncate">{item.title}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-border/40 flex justify-end">
                  <Link href={item.link}>
                    <Button size="xs" variant="outline" className="text-xs h-7 gap-1 font-medium hover:bg-background">
                      {item.actionLabel} <ChevronRight className="h-3 w-3" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tabs Navigation & Search Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-border/70 pb-4">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto p-1 bg-muted/40 rounded-xl border border-border/40">
          <button
            onClick={() => setActiveTab("overview")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
              activeTab === "overview"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Activity className="h-3.5 w-3.5" />
            Overview
          </button>

          <button
            onClick={() => setActiveTab("academics")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
              activeTab === "academics"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <GraduationCap className="h-3.5 w-3.5" />
            Academics ({courses.total + batches.total})
          </button>

          <button
            onClick={() => setActiveTab("blogs")}
            className={cn(
              "flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
              activeTab === "blogs"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Newspaper className="h-3.5 w-3.5" />
            Blogs ({blogs.total})
          </button>
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recent records..."
            className="w-full rounded-xl border border-border/70 bg-card pl-9 pr-3 py-1.5 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-xs"
          />
        </div>
      </div>

      {/* TAB CONTENT: Overview */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Analytics Breakdown Row */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Batch Learning Modes Breakdown */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-purple-600" />
                  <h3 className="text-sm font-semibold text-foreground">Batch Delivery Modes</h3>
                </div>
                <Link href="/asgard/academics/batches" className="text-xs text-primary hover:underline">
                  Manage
                </Link>
              </div>

              <div className="space-y-3">
                {Object.entries(batches.modes).length === 0 ? (
                  <p className="text-xs text-muted-foreground py-4 text-center">No batches configured</p>
                ) : (
                  Object.entries(batches.modes).map(([mode, count]) => {
                    const pct = batches.total > 0 ? Math.round((count / batches.total) * 100) : 0;
                    return (
                      <div key={mode} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="capitalize">{mode}</span>
                          <span className="text-muted-foreground">{count} batches ({pct}%)</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-purple-500 transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="rounded-xl bg-muted/40 p-3 text-xs flex justify-between items-center text-muted-foreground">
                <span>Total Student Capacity:</span>
                <strong className="text-foreground">{batches.totalCapacity} Students</strong>
              </div>
            </div>

            {/* Regional Pricing Distribution */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-emerald-600" />
                  <h3 className="text-sm font-semibold text-foreground">Regional Pricing Matrix</h3>
                </div>
                <Link href="/asgard/academics/batch-regions" className="text-xs text-primary hover:underline">
                  Manage
                </Link>
              </div>

              <div className="space-y-3">
                {Object.entries(batchRegions.countries).length === 0 ? (
                  <p className="text-xs text-muted-foreground py-4 text-center">No regions configured</p>
                ) : (
                  Object.entries(batchRegions.countries).map(([code, count]) => {
                    const name = countryNames[code] || code;
                    const pct = batchRegions.total > 0 ? Math.round((count / batchRegions.total) * 100) : 0;
                    return (
                      <div key={code} className="space-y-1">
                        <div className="flex justify-between text-xs font-medium">
                          <span>{name} ({code})</span>
                          <span className="text-muted-foreground">{count} schedules ({pct}%)</span>
                        </div>
                        <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              <div className="rounded-xl bg-muted/40 p-3 text-xs flex justify-between items-center text-muted-foreground">
                <span>Upcoming Start Schedules:</span>
                <strong className="text-foreground">{batchRegions.upcomingStarts} Cohorts</strong>
              </div>
            </div>

            {/* Content & Publication Health */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-amber-600" />
                  <h3 className="text-sm font-semibold text-foreground">Content & Publishing</h3>
                </div>
                <Link href="/asgard/blogs" className="text-xs text-primary hover:underline">
                  Manage
                </Link>
              </div>

              <div className="space-y-3">
                {/* Blog Publication Rate */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span>Blog Publication Rate</span>
                    <span className="text-muted-foreground">{blogs.active}/{blogs.total} Live ({activeBlogPercent}%)</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-amber-500 transition-all duration-500"
                      style={{ width: `${activeBlogPercent}%` }}
                    />
                  </div>
                </div>

                {/* Course Active Rate */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span>Active Course Offerings</span>
                    <span className="text-muted-foreground">{courses.active}/{courses.total} Live ({activeCoursePercent}%)</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-500"
                      style={{ width: `${activeCoursePercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Extra Content Stats */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="rounded-xl bg-muted/40 p-2.5 text-center">
                  <span className="text-[11px] text-muted-foreground">Instructors</span>
                  <p className="text-lg font-bold text-foreground">{content.instructors.total}</p>
                </div>
                <div className="rounded-xl bg-muted/40 p-2.5 text-center">
                  <span className="text-[11px] text-muted-foreground">Homepage Banners</span>
                  <p className="text-lg font-bold text-foreground">{content.banners.total}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tables Grid: Recent Courses & Recent Blogs */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Recent Courses Card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">Recent Academic Courses</h3>
                </div>
                <Link
                  href="/asgard/academics/courses"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                >
                  View All ({courses.total}) <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="divide-y divide-border/50">
                {filteredCourses.length === 0 ? (
                  <p className="text-xs text-muted-foreground py-6 text-center">No courses found</p>
                ) : (
                  filteredCourses.map((c) => (
                    <div key={c.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                      <div className="space-y-1 min-w-0 pr-3">
                        <div className="flex items-center gap-2">
                          <p className="text-xs font-semibold text-foreground truncate">{c.name}</p>
                          {c.is_featured && (
                            <span className="rounded-full bg-amber-500/10 px-1.5 py-0.2 text-[10px] font-medium text-amber-600 border border-amber-500/20">
                              Featured
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-[11px] text-muted-foreground">
                          <span>{c.duration ? `${c.duration} Weeks` : "Flexible"}</span>
                          <span>•</span>
                          <span>{c.batches_count || 0} Batches</span>
                          <span>•</span>
                          <span className={c.is_active ? "text-emerald-600 font-medium" : "text-rose-500"}>
                            {c.is_active ? "Active" : "Draft"}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <Link href={`/asgard/academics/courses/update/${c.id}`}>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                            <Pencil className="h-3.5 w-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Recent Blogs Card */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Newspaper className="h-4 w-4 text-amber-600" />
                  <h3 className="text-sm font-semibold text-foreground">Recent Blog Articles</h3>
                </div>
                <Link
                  href="/asgard/blogs"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                >
                  View All ({blogs.total}) <ChevronRight className="h-3 w-3" />
                </Link>
              </div>

              <div className="divide-y divide-border/50">
                {filteredBlogs.length === 0 ? (
                  <p className="text-xs text-muted-foreground py-6 text-center">No blogs found</p>
                ) : (
                  filteredBlogs.map((b) => (
                    <div key={b.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
                      <div className="flex items-center gap-3 min-w-0 pr-3">
                        {b.media_url ? (
                          <Image
                            src={b.media_url}
                            alt={b.title}
                            width={44}
                            height={44}
                            className="h-11 w-11 shrink-0 rounded-lg object-cover border border-border/60"
                          />
                        ) : (
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted border border-border/60 text-muted-foreground">
                            <Newspaper className="h-5 w-5" />
                          </div>
                        )}
                        <div className="space-y-1 min-w-0">
                          <p className="text-xs font-semibold text-foreground truncate">{b.title}</p>
                          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                            <span className={b.is_active ? "text-emerald-600 font-medium" : "text-amber-600 font-medium"}>
                              {b.is_active ? "Published" : "Draft"}
                            </span>
                            {b.created_at && (
                              <>
                                <span>•</span>
                                <span>{new Date(b.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1">
                        <Link href={`/asgard/blogs/update/${b.id}`}>
                          <Button size="icon" variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-foreground">
                            <Pencil className="h-3.5 w-3.5" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: Academics Hub */}
      {activeTab === "academics" && (
        <div className="space-y-8">
          {/* Batches Table List */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground">Recent Academic Batches & Cohorts</h3>
                <p className="text-xs text-muted-foreground">Delivery modes, assigned courses, class days, and capacity</p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/asgard/academics/batches/create">
                  <Button size="sm" className="text-xs h-8 gap-1">
                    <Plus className="h-3.5 w-3.5" /> Add Batch
                  </Button>
                </Link>
                <Link href="/asgard/academics/batches">
                  <Button size="sm" variant="outline" className="text-xs h-8">
                    View Full Table
                  </Button>
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border/70">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/60 text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Batch Name</th>
                    <th className="px-4 py-3 font-semibold">Course</th>
                    <th className="px-4 py-3 font-semibold">Mode</th>
                    <th className="px-4 py-3 font-semibold">Schedule Days</th>
                    <th className="px-4 py-3 font-semibold">Max Students</th>
                    <th className="px-4 py-3 font-semibold">Regions Configured</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 text-right font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {filteredBatches.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-4 py-8 text-center text-muted-foreground">
                        No batches found
                      </td>
                    </tr>
                  ) : (
                    filteredBatches.map((b) => (
                      <tr key={b.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-semibold text-foreground">{b.name}</td>
                        <td className="px-4 py-3 text-muted-foreground">{b.course_name}</td>
                        <td className="px-4 py-3">
                          <span className="capitalize rounded-md bg-purple-500/10 px-2 py-0.5 font-medium text-purple-700">
                            {b.mode}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground truncate max-w-[150px]">
                          {b.class_days.length > 0 ? b.class_days.join(", ") : "All Days"}
                        </td>
                        <td className="px-4 py-3 font-medium">{b.max_students || 0}</td>
                        <td className="px-4 py-3">
                          <span className={cn(
                            "rounded-full px-2 py-0.5 text-[11px] font-medium",
                            (b.regions_count || 0) > 0
                              ? "bg-emerald-500/10 text-emerald-600"
                              : "bg-amber-500/10 text-amber-700 font-semibold"
                          )}>
                            {b.regions_count || 0} Regions
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className={cn(
                            "rounded-full px-2 py-0.5 text-[11px] font-medium",
                            b.is_active ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600"
                          )}>
                            {b.is_active ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Link href={`/asgard/academics/batches/update/${b.id}`}>
                            <Button size="xs" variant="ghost" className="h-7 text-xs font-medium">
                              Edit
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Batch Regions Table List */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground">Regional Pricing & Start Dates</h3>
                <p className="text-xs text-muted-foreground">Country currency, localized tuition, and upcoming cohort starts</p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/asgard/academics/batch-regions/create">
                  <Button size="sm" className="text-xs h-8 gap-1">
                    <Plus className="h-3.5 w-3.5" /> Add Region
                  </Button>
                </Link>
                <Link href="/asgard/academics/batch-regions">
                  <Button size="sm" variant="outline" className="text-xs h-8">
                    View Full Table
                  </Button>
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border/70">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/60 text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Batch</th>
                    <th className="px-4 py-3 font-semibold">Country</th>
                    <th className="px-4 py-3 font-semibold">Price & Currency</th>
                    <th className="px-4 py-3 font-semibold">Start Date</th>
                    <th className="px-4 py-3 font-semibold">Timezone</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 text-right font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {filteredRegions.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                        No regional pricing found
                      </td>
                    </tr>
                  ) : (
                    filteredRegions.map((r) => (
                      <tr key={r.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3 font-semibold text-foreground">{r.batch_name}</td>
                        <td className="px-4 py-3 font-medium">
                          {countryNames[r.country_code] || r.country_code} ({r.country_code})
                        </td>
                        <td className="px-4 py-3 font-bold text-foreground">
                          {r.price.toFixed(2)} {r.currency}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {r.start_date
                            ? new Date(r.start_date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "-"}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{r.timezone || "-"}</td>
                        <td className="px-4 py-3">
                          <span className={cn(
                            "rounded-full px-2 py-0.5 text-[11px] font-medium",
                            r.is_active ? "bg-emerald-500/10 text-emerald-600" : "bg-rose-500/10 text-rose-600"
                          )}>
                            {r.is_active ? "Active" : "Inactive"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Link href={`/asgard/academics/batch-regions/update/${r.id}`}>
                            <Button size="xs" variant="ghost" className="h-7 text-xs font-medium">
                              Edit
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT: Blogs Hub */}
      {activeTab === "blogs" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-foreground">All Blog Articles & Drafts</h3>
                <p className="text-xs text-muted-foreground">Manage publication status, SEO slugs, and preview live articles</p>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/asgard/blogs/create">
                  <Button size="sm" className="text-xs h-8 gap-1">
                    <Plus className="h-3.5 w-3.5" /> Add Blog
                  </Button>
                </Link>
                <Link href="/asgard/blogs">
                  <Button size="sm" variant="outline" className="text-xs h-8">
                    View Table
                  </Button>
                </Link>
              </div>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border/70">
              <table className="w-full text-left text-xs">
                <thead className="bg-muted/60 text-muted-foreground border-b border-border">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Media</th>
                    <th className="px-4 py-3 font-semibold">Title</th>
                    <th className="px-4 py-3 font-semibold">URL Slug</th>
                    <th className="px-4 py-3 font-semibold">Tags</th>
                    <th className="px-4 py-3 font-semibold">Created Date</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 text-right font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {filteredBlogs.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-4 py-8 text-center text-muted-foreground">
                        No blogs found
                      </td>
                    </tr>
                  ) : (
                    filteredBlogs.map((b) => (
                      <tr key={b.id} className="hover:bg-muted/30 transition-colors">
                        <td className="px-4 py-3">
                          {b.media_url ? (
                            <Image
                              src={b.media_url}
                              alt={b.title}
                              width={48}
                              height={32}
                              className="h-8 w-12 rounded object-cover border border-border/60"
                            />
                          ) : (
                            <div className="h-8 w-12 rounded bg-muted flex items-center justify-center text-muted-foreground">
                              <Newspaper className="h-3.5 w-3.5" />
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3 font-semibold text-foreground max-w-[200px] truncate">{b.title}</td>
                        <td className="px-4 py-3 text-muted-foreground font-mono text-[11px] max-w-[150px] truncate">
                          /{b.url_slug}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          <div className="flex flex-wrap gap-1 max-w-[180px]">
                            {b.tags && b.tags.length > 0 ? (
                              b.tags.slice(0, 2).map((t, idx) => (
                                <span key={idx} className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-medium">
                                  {t}
                                </span>
                              ))
                            ) : (
                              <span>-</span>
                            )}
                            {b.tags && b.tags.length > 2 && (
                              <span className="text-[10px] text-muted-foreground">+{b.tags.length - 2}</span>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {b.created_at
                            ? new Date(b.created_at).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "-"}
                        </td>
                        <td className="px-4 py-3">
                          <span className={cn(
                            "rounded-full px-2 py-0.5 text-[11px] font-medium",
                            b.is_active ? "bg-emerald-500/10 text-emerald-600" : "bg-amber-500/10 text-amber-600 font-semibold"
                          )}>
                            {b.is_active ? "Published" : "Draft"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Link href={`/asgard/blogs/update/${b.id}`}>
                              <Button size="xs" variant="ghost" className="h-7 text-xs font-medium">
                                Edit
                              </Button>
                            </Link>
                            {b.is_active && (
                              <Link href={`/blogs/${b.url_slug}`} target="_blank">
                                <Button size="icon" variant="ghost" className="h-7 w-7 text-muted-foreground hover:text-foreground">
                                  <ExternalLink className="h-3 w-3" />
                                </Button>
                              </Link>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
