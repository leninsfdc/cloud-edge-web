import { CountrySlug, VALID_SLUGS } from "./country-data";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://cloud-edge-web.vercel.app"
).replace(/\/$/, "");

export const ORG_NAME = "Cloud Edge Solutions";
export const ORG_CONTACT_PHONE = "+447442586325";

// Region-only hreflang codes — the site is English-only today, but each
// country route serves region-specific pricing/currency/salary content,
// so hreflang signals "same content, different market" rather than
// duplicate content.
const HREFLANG_MAP: Record<CountrySlug, string> = {
  in: "en-IN",
  uk: "en-GB",
  us: "en-US",
  ca: "en-CA",
};

const DEFAULT_COUNTRY: CountrySlug = "us";

/**
 * Builds canonical + hreflang alternates for a country-prefixed route so
 * every /in, /uk, /us, /ca variant self-canonicalizes and cross-references
 * its siblings, instead of looking like duplicate content to search engines.
 */
export function buildAlternates(country: CountrySlug, path: string) {
  const cleanPath = !path || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;

  const languages: Record<string, string> = {};
  for (const slug of VALID_SLUGS) {
    languages[HREFLANG_MAP[slug]] = `${SITE_URL}/${slug}${cleanPath}`;
  }
  languages["x-default"] = `${SITE_URL}/${DEFAULT_COUNTRY}${cleanPath}`;

  return {
    canonical: `${SITE_URL}/${country}${cleanPath}`,
    languages,
  };
}

/** Same map, keyed for sitemap.ts entries (no self-referencing canonical needed there). */
export function buildSitemapLanguages(path: string) {
  return buildAlternates(DEFAULT_COUNTRY, path).languages;
}

/** Strips HTML tags and collapses whitespace so rich-text fields can be used as plain-text meta descriptions. */
export function stripHtml(html: string, maxLength = 160): string {
  const text = html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1).trimEnd()}…`;
}
