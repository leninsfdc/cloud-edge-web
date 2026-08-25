"use server";

import { createClient } from "@/libs/supabase/server";

export interface DashboardKPIs {
  blogs: {
    total: number;
    active: number;
    inactive: number;
    totalTags: number;
    recent: {
      id: string;
      title: string;
      url_slug: string;
      media_url?: string;
      tags: string[];
      is_active: boolean;
      created_at: string;
    }[];
  };
  courses: {
    total: number;
    active: number;
    inactive: number;
    featured: number;
    recent: {
      id: string;
      name: string;
      label?: string;
      duration?: number;
      is_featured?: boolean;
      is_active?: boolean;
      created_at: string;
      url_slug?: string;
      batches_count?: number;
    }[];
  };
  batches: {
    total: number;
    active: number;
    inactive: number;
    totalCapacity: number;
    modes: Record<string, number>;
    recent: {
      id: string;
      name: string;
      course_id: string;
      course_name: string;
      mode: string;
      class_days: string[];
      max_students?: number;
      is_active?: boolean;
      created_at: string;
      regions_count?: number;
    }[];
  };
  batchRegions: {
    total: number;
    active: number;
    inactive: number;
    countries: Record<string, number>;
    upcomingStarts: number;
    recent: {
      id: string;
      batch_id: string;
      batch_name: string;
      country_code: string;
      price: number;
      currency: string;
      start_date?: string | null;
      timezone?: string | null;
      is_active?: boolean;
      created_at: string;
    }[];
  };
  content: {
    banners: { total: number };
    instructors: { total: number };
  };
  actionItems: {
    type: "warning" | "info" | "success";
    title: string;
    description: string;
    link: string;
    actionLabel: string;
  }[];
}

export async function getDashboardKPIs(): Promise<DashboardKPIs> {
  const supabase = await createClient();

  // Parallel data fetching
  const [
    blogsRes,
    recentBlogsRes,
    coursesRes,
    recentCoursesRes,
    batchesRes,
    recentBatchesRes,
    regionsRes,
    recentRegionsRes,
    bannersRes,
    instructorsRes,
  ] = await Promise.allSettled([
    // 1. All Blogs
    supabase
      .from("blogs")
      .select("id, is_active, tags"),

    // 2. Recent Blogs
    supabase
      .from("blogs")
      .select("id, title, url_slug, media_url, tags, is_active, created_at")
      .order("created_at", { ascending: false })
      .limit(6),

    // 3. All Courses
    supabase
      .from("courses")
      .select("id, is_active, is_featured, is_deleted")
      .eq("is_deleted", false),

    // 4. Recent Courses with Batches count
    supabase
      .from("courses")
      .select(`
        id,
        name,
        label,
        duration,
        url_slug,
        is_featured,
        is_active,
        created_at,
        batches (id, is_deleted)
      `)
      .eq("is_deleted", false)
      .order("created_at", { ascending: false })
      .limit(6),

    // 5. All Batches
    supabase
      .from("batches")
      .select("id, is_active, mode, max_students, is_deleted, course_id")
      .eq("is_deleted", false),

    // 6. Recent Batches with Course info & Regions count
    supabase
      .from("batches")
      .select(`
        id,
        name,
        course_id,
        mode,
        class_days,
        max_students,
        is_active,
        created_at,
        courses (id, name),
        batch_regions (id, is_deleted)
      `)
      .eq("is_deleted", false)
      .order("created_at", { ascending: false })
      .limit(6),

    // 7. All Batch Regions
    supabase
      .from("batch_regions")
      .select("id, is_active, country_code, start_date, is_deleted")
      .eq("is_deleted", false),

    // 8. Recent Batch Regions with Batch name
    supabase
      .from("batch_regions")
      .select(`
        id,
        batch_id,
        country_code,
        price,
        currency,
        start_date,
        timezone,
        is_active,
        created_at,
        batches (id, name)
      `)
      .eq("is_deleted", false)
      .order("created_at", { ascending: false })
      .limit(6),

    // 9. Banners
    supabase
      .from("banners")
      .select("id"),

    // 10. Instructors
    supabase
      .from("instructures")
      .select("id"),
  ]);

  // Process Blogs
  const blogsData = blogsRes.status === "fulfilled" && blogsRes.value.data ? blogsRes.value.data : [];
  const blogsActive = blogsData.filter((b) => b.is_active).length;
  const blogsInactive = blogsData.length - blogsActive;
  const allTags = new Set<string>();
  blogsData.forEach((b) => {
    if (Array.isArray(b.tags)) {
      b.tags.forEach((t: string) => t && allTags.add(t));
    }
  });

  const recentBlogs = (recentBlogsRes.status === "fulfilled" && recentBlogsRes.value.data
    ? recentBlogsRes.value.data
    : []) as DashboardKPIs["blogs"]["recent"];

  // Process Courses
  const coursesData = coursesRes.status === "fulfilled" && coursesRes.value.data ? coursesRes.value.data : [];
  const coursesActive = coursesData.filter((c) => c.is_active !== false).length;
  const coursesInactive = coursesData.length - coursesActive;
  const coursesFeatured = coursesData.filter((c) => c.is_featured).length;

  const rawRecentCourses = recentCoursesRes.status === "fulfilled" && recentCoursesRes.value.data
    ? recentCoursesRes.value.data
    : [];

  const recentCourses: DashboardKPIs["courses"]["recent"] = rawRecentCourses.map((c: any) => ({
    id: c.id,
    name: c.name,
    label: c.label,
    duration: c.duration,
    is_featured: c.is_featured,
    is_active: c.is_active !== false,
    created_at: c.created_at,
    url_slug: c.url_slug,
    batches_count: Array.isArray(c.batches)
      ? c.batches.filter((b: any) => !b.is_deleted).length
      : 0,
  }));

  // Process Batches
  const batchesData = batchesRes.status === "fulfilled" && batchesRes.value.data ? batchesRes.value.data : [];
  const batchesActive = batchesData.filter((b) => b.is_active).length;
  const batchesInactive = batchesData.length - batchesActive;
  const totalCapacity = batchesData.reduce((acc, b) => acc + (b.max_students || 0), 0);

  const batchModes: Record<string, number> = {};
  batchesData.forEach((b) => {
    const mode = (b.mode || "online").toLowerCase();
    batchModes[mode] = (batchModes[mode] || 0) + 1;
  });

  const rawRecentBatches = recentBatchesRes.status === "fulfilled" && recentBatchesRes.value.data
    ? recentBatchesRes.value.data
    : [];

  const recentBatches: DashboardKPIs["batches"]["recent"] = rawRecentBatches.map((b: any) => ({
    id: b.id,
    name: b.name,
    course_id: b.course_id,
    course_name: b.courses?.name || "Unassigned",
    mode: b.mode || "Online",
    class_days: Array.isArray(b.class_days) ? b.class_days : [],
    max_students: b.max_students || 0,
    is_active: b.is_active ?? true,
    created_at: b.created_at,
    regions_count: Array.isArray(b.batch_regions)
      ? b.batch_regions.filter((r: any) => !r.is_deleted).length
      : 0,
  }));

  // Process Batch Regions
  const regionsData = regionsRes.status === "fulfilled" && regionsRes.value.data ? regionsRes.value.data : [];
  const regionsActive = regionsData.filter((r) => r.is_active).length;
  const regionsInactive = regionsData.length - regionsActive;

  const countriesCount: Record<string, number> = {};
  let upcomingStarts = 0;
  const now = new Date();

  regionsData.forEach((r) => {
    const code = (r.country_code || "UNKNOWN").toUpperCase();
    countriesCount[code] = (countriesCount[code] || 0) + 1;
    if (r.start_date && new Date(r.start_date) >= now) {
      upcomingStarts++;
    }
  });

  const rawRecentRegions = recentRegionsRes.status === "fulfilled" && recentRegionsRes.value.data
    ? recentRegionsRes.value.data
    : [];

  const recentRegions: DashboardKPIs["batchRegions"]["recent"] = rawRecentRegions.map((r: any) => ({
    id: r.id,
    batch_id: r.batch_id,
    batch_name: r.batches?.name || "Unassigned Batch",
    country_code: r.country_code || "",
    price: Number(r.price ?? 0),
    currency: r.currency || "USD",
    start_date: r.start_date,
    timezone: r.timezone,
    is_active: r.is_active ?? true,
    created_at: r.created_at,
  }));

  // Process Content
  const bannersData = bannersRes.status === "fulfilled" && bannersRes.value.data ? bannersRes.value.data : [];
  const instructorsData = instructorsRes.status === "fulfilled" && instructorsRes.value.data ? instructorsRes.value.data : [];

  // Generate Action Items & System Health Checks
  const actionItems: DashboardKPIs["actionItems"] = [];

  // Check draft blogs
  if (blogsInactive > 0) {
    actionItems.push({
      type: "info",
      title: `${blogsInactive} Draft / Inactive Blog${blogsInactive > 1 ? "s" : ""}`,
      description: "You have unpublished blog posts that are not visible to public visitors.",
      link: "/asgard/blogs",
      actionLabel: "Review Blogs",
    });
  }

  // Check batches without regions
  const batchesWithoutRegions = recentBatches.filter((b) => (b.regions_count || 0) === 0);
  if (batchesWithoutRegions.length > 0) {
    actionItems.push({
      type: "warning",
      title: `${batchesWithoutRegions.length} Batch${batchesWithoutRegions.length > 1 ? "es" : ""} Missing Regional Pricing`,
      description: "Batches need regional pricing and schedules configured to allow student enrollment.",
      link: "/asgard/academics/batch-regions",
      actionLabel: "Configure Regions",
    });
  }

  // Check courses with no batches
  const coursesWithoutBatches = recentCourses.filter((c) => (c.batches_count || 0) === 0);
  if (coursesWithoutBatches.length > 0) {
    actionItems.push({
      type: "warning",
      title: `${coursesWithoutBatches.length} Course${coursesWithoutBatches.length > 1 ? "s" : ""} Without Active Batches`,
      description: "Ensure upcoming batches are scheduled for all active courses to capture leads.",
      link: "/asgard/academics/batches",
      actionLabel: "Add Batches",
    });
  }

  if (actionItems.length === 0) {
    actionItems.push({
      type: "success",
      title: "All Academic & Blog Pipeline Checks Passed",
      description: "All courses have batches, regions are configured, and blog posts are up to date.",
      link: "/asgard/academics/courses",
      actionLabel: "View Courses",
    });
  }

  return {
    blogs: {
      total: blogsData.length,
      active: blogsActive,
      inactive: blogsInactive,
      totalTags: allTags.size,
      recent: recentBlogs,
    },
    courses: {
      total: coursesData.length,
      active: coursesActive,
      inactive: coursesInactive,
      featured: coursesFeatured,
      recent: recentCourses,
    },
    batches: {
      total: batchesData.length,
      active: batchesActive,
      inactive: batchesInactive,
      totalCapacity,
      modes: batchModes,
      recent: recentBatches,
    },
    batchRegions: {
      total: regionsData.length,
      active: regionsActive,
      inactive: regionsInactive,
      countries: countriesCount,
      upcomingStarts,
      recent: recentRegions,
    },
    content: {
      banners: { total: bannersData.length },
      instructors: { total: instructorsData.length },
    },
    actionItems,
  };
}
