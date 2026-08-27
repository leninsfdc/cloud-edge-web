import { MetadataRoute } from "next";
import { getAllCoursesForSitemap } from "@/app/(asgard)/asgard/academics/courses/actions";
import { getAllBlogsForSitemap } from "@/app/(asgard)/asgard/blogs/actions";
import { VALID_SLUGS } from "@/libs/country-data";
import { SITE_URL, buildSitemapLanguages } from "@/libs/seo";
import { SALESFORCE_COUNTRY_PAGES, SALESFORCE_CITY_PAGES } from "@/libs/salesforceLocationContent";
import { SUBJECTS } from "@/libs/subjectCatalog";
import { LOCATIONS } from "@/libs/localSeoLocations";

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
  { path: "/trainers", changeFrequency: "monthly", priority: 0.6 },    // Trainers
  { path: "/reviews", changeFrequency: "weekly", priority: 0.6 },      // Reviews
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [courses, blogs] = await Promise.all([
    getAllCoursesForSitemap().catch(() => []),
    getAllBlogsForSitemap().catch(() => []),
  ]);

  const sitemapEntries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Every bare (non-country) URL 307-redirects via proxy.ts geo-routing — it
  // is never a 200 page, so it must not be listed here (Search Console would
  // flag it as "Page with redirect" and waste crawl budget). Only the
  // country-prefixed URLs are real, indexable pages.

  // 1. Country-prefixed static pages (for /in, /uk, /us, /ca)
  for (const route of STATIC_ROUTES) {
    const languages = buildSitemapLanguages(route.path);
    for (const countrySlug of VALID_SLUGS) {
      sitemapEntries.push({
        url: `${SITE_URL}/${countrySlug}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: { languages },
      });
    }
  }

  // 2. Dynamic course pages (country-prefixed only)
  for (const course of courses) {
    if (!course.url_slug) continue;
    const lastMod = course.created_at ? new Date(course.created_at) : now;
    const languages = buildSitemapLanguages(`/courses/${course.url_slug}`);

    for (const countrySlug of VALID_SLUGS) {
      sitemapEntries.push({
        url: `${SITE_URL}/${countrySlug}/courses/${course.url_slug}`,
        lastModified: lastMod,
        changeFrequency: "weekly",
        priority: 0.8,
        alternates: { languages },
      });
    }
  }

  // 3. Dynamic blog pages (country-prefixed only)
  for (const blog of blogs) {
    if (!blog.url_slug) continue;
    const lastMod = blog.created_at ? new Date(blog.created_at) : now;
    const languages = buildSitemapLanguages(`/blogs/${blog.url_slug}`);

    for (const countrySlug of VALID_SLUGS) {
      sitemapEntries.push({
        url: `${SITE_URL}/${countrySlug}/blogs/${blog.url_slug}`,
        lastModified: lastMod,
        changeFrequency: "monthly",
        priority: 0.6,
        alternates: { languages },
      });
    }
  }

  // 4. Salesforce local-SEO pages — only the specific country/city
  // combinations that actually exist (no cartesian product across
  // VALID_SLUGS; most combinations 404 by design, see resolvePage()).
  for (const page of Object.values(SALESFORCE_COUNTRY_PAGES)) {
    sitemapEntries.push({
      url: `${SITE_URL}/${page.countrySlug}/salesforce-training`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }
  for (const page of Object.values(SALESFORCE_CITY_PAGES)) {
    sitemapEntries.push({
      url: `${SITE_URL}/${page.countrySlug}/salesforce-training/${page.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  // 5. Generic subject x location local-SEO pages (SAP, MuleSoft, Java, AWS,
  // DevOps, Data Science, Python, Web Design, UI/UX) — every subject against
  // every location, since none of these subjects has location-specific
  // restrictions. Salesforce is deliberately excluded here (handled by its
  // own dedicated implementation above, not this generic system).
  for (const subject of Object.values(SUBJECTS)) {
    for (const location of Object.values(LOCATIONS)) {
      const url =
        location.kind === "country"
          ? `${SITE_URL}/${location.countrySlug}/${subject.slug}-training`
          : `${SITE_URL}/${location.countrySlug}/${subject.slug}-training/${location.slug}`;

      sitemapEntries.push({
        url,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return sitemapEntries;
}
