import { MetadataRoute } from "next";
import { getAllCoursesForSitemap } from "@/app/(asgard)/asgard/academics/courses/actions";
import { getAllBlogsForSitemap } from "@/app/(asgard)/asgard/blogs/actions";
import { VALID_SLUGS } from "@/libs/country-data";

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://cloud-edge-web.vercel.app").replace(/\/$/, "");

interface StaticRoute {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

// All static pages across the site
const STATIC_ROUTES: StaticRoute[] = [
  { path: "", changeFrequency: "daily", priority: 1.0 },             // Home
  { path: "/courses", changeFrequency: "daily", priority: 0.9 },      // Courses Listing
  { path: "/services", changeFrequency: "weekly", priority: 0.8 },     // Services
  { path: "/blogs", changeFrequency: "weekly", priority: 0.8 },        // Blogs Listing
  { path: "/about-us", changeFrequency: "monthly", priority: 0.7 },    // About Us
  { path: "/contact-us", changeFrequency: "monthly", priority: 0.7 },  // Contact Us
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [courses, blogs] = await Promise.all([
    getAllCoursesForSitemap().catch(() => []),
    getAllBlogsForSitemap().catch(() => []),
  ]);

  const sitemapEntries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // 1. Bare root static pages (without country prefix)
  for (const route of STATIC_ROUTES) {
    sitemapEntries.push({
      url: `${BASE_URL}${route.path || "/"}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    });
  }

  // 2. Country-prefixed static pages (for /in, /uk, /us, /ca)
  for (const countrySlug of VALID_SLUGS) {
    for (const route of STATIC_ROUTES) {
      sitemapEntries.push({
        url: `${BASE_URL}/${countrySlug}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }
  }

  // 3. Dynamic course pages (bare root & country-prefixed)
  for (const course of courses) {
    if (!course.url_slug) continue;
    const lastMod = course.created_at ? new Date(course.created_at) : now;

    // Bare course URL
    sitemapEntries.push({
      url: `${BASE_URL}/courses/${course.url_slug}`,
      lastModified: lastMod,
      changeFrequency: "weekly",
      priority: 0.8,
    });

    // Country-prefixed course URLs
    for (const countrySlug of VALID_SLUGS) {
      sitemapEntries.push({
        url: `${BASE_URL}/${countrySlug}/courses/${course.url_slug}`,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  // 4. Dynamic blog pages (bare root & country-prefixed)
  for (const blog of blogs) {
    if (!blog.url_slug) continue;
    const lastMod = blog.created_at ? new Date(blog.created_at) : now;

    // Bare blog URL
    sitemapEntries.push({
      url: `${BASE_URL}/blogs/${blog.url_slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly",
      priority: 0.6,
    });

    // Country-prefixed blog URLs
    for (const countrySlug of VALID_SLUGS) {
      sitemapEntries.push({
        url: `${BASE_URL}/${countrySlug}/blogs/${blog.url_slug}`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return sitemapEntries;
}
