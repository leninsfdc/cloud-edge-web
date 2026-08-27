export type CountryCode = "IN" | "UK" | "US" | "CA" | "AU";
export type CountrySlug = "in" | "uk" | "usa" | "ca" | "australia";

export interface CountryOption {
  code: CountryCode;
  slug: CountrySlug;
  name: string;
  shortName: string;
  flag: string;
  flagUrl: string;
  currency: string;
  currencySymbol: string;
}

export const COUNTRIES: CountryOption[] = [
  {
    code: "IN",
    slug: "in",
    name: "India",
    shortName: "India",
    flag: "🇮🇳",
    flagUrl: "https://flagsapi.com/IN/flat/64.png",
    currency: "INR",
    currencySymbol: "₹",
  },
  {
    code: "UK",
    slug: "uk",
    name: "United Kingdom",
    shortName: "UK",
    flag: "🇬🇧",
    flagUrl: "https://flagsapi.com/GB/flat/64.png",
    currency: "GBP",
    currencySymbol: "£",
  },
  {
    code: "US",
    slug: "usa",
    name: "United States",
    shortName: "USA",
    flag: "🇺🇸",
    flagUrl: "https://flagsapi.com/US/flat/64.png",
    currency: "USD",
    currencySymbol: "$",
  },
  {
    code: "CA",
    slug: "ca",
    name: "Canada",
    shortName: "Canada",
    flag: "🇨🇦",
    flagUrl: "https://flagsapi.com/CA/flat/64.png",
    currency: "CAD",
    currencySymbol: "$",
  },
  {
    code: "AU",
    slug: "australia",
    name: "Australia",
    shortName: "Australia",
    flag: "🇦🇺",
    flagUrl: "https://flagsapi.com/AU/flat/64.png",
    currency: "AUD",
    currencySymbol: "A$",
  },
];

export const VALID_SLUGS: CountrySlug[] = ["in", "uk", "usa", "ca", "australia"];

export function slugToCode(slug: string): CountryCode {
  const map: Record<string, CountryCode> = { in: "IN", uk: "UK", usa: "US", ca: "CA", australia: "AU" };
  return map[slug.toLowerCase()] ?? "US";
}

export function codeToSlug(code: CountryCode): CountrySlug {
  const map: Record<CountryCode, CountrySlug> = { IN: "in", UK: "uk", US: "usa", CA: "ca", AU: "australia" };
  return map[code] ?? "usa";
}

export function getCountryOption(slugOrCode: string): CountryOption {
  const normalized = slugOrCode.toLowerCase();
  return (
    COUNTRIES.find((c) => c.slug === normalized || c.code === normalized.toUpperCase()) ??
    COUNTRIES.find((c) => c.code === "US")!
  );
}

// ─── Country Batch Region Helper ─────────────────────────────────────────────

const COUNTRY_CODE_ALIASES: Record<string, string[]> = {
  IN: ["IN", "INDIA"],
  UK: ["UK", "GB", "GBR"],
  US: ["US", "USA"],
  CA: ["CA", "CAN"],
  AU: ["AU", "AUS"],
};

/**
 * Returns the active batch region for a specific country if the course has one.
 */
export function getRegionForCountry(course: any, countryCode?: string) {
  if (!course?.batches?.length || !countryCode) return null;
  const target = countryCode.toUpperCase();
  const aliases = COUNTRY_CODE_ALIASES[target] || [target];

  for (const batch of course.batches) {
    if (batch.is_active === false || batch.is_deleted) continue;
    if (batch.batch_regions?.length) {
      for (const region of batch.batch_regions) {
        if (
          region.is_active !== false &&
          !region.is_deleted &&
          aliases.includes((region.country_code || "").toUpperCase())
        ) {
          return region;
        }
      }
    }
  }
  return null;
}

// ISO currency code -> display symbol. Single source of truth — reused by
// formatRegionPrice() below and by CourseEnrollmentCard/CourseOverview so the
// same region never renders with a different symbol (or the raw ISO code) in
// different places.
const CURRENCY_SYMBOLS: Record<string, string> = {
  INR: "₹",
  GBP: "£",
  USD: "$",
  CAD: "$",
  AUD: "A$",
};

export function getCurrencySymbol(currency?: string | null): string {
  if (!currency) return "$";
  return CURRENCY_SYMBOLS[currency.toUpperCase()] ?? "$";
}

/**
 * Formats a region's price with proper currency symbol according to its currency.
 */
export function formatRegionPrice(region: any) {
  if (!region) return null;
  const currencySymbol = getCurrencySymbol(region.currency);

  const numPrice = region.discounted_price || region.price;
  if (numPrice === undefined || numPrice === null) return null;

  const priceStr = `${currencySymbol}${Number(numPrice).toLocaleString()}`;
  const oldPriceStr = `${currencySymbol}${Math.round(Number(numPrice) * 1.2).toLocaleString()}`;

  return { price: priceStr, oldPrice: oldPriceStr, rawPrice: numPrice, currencySymbol };
}
