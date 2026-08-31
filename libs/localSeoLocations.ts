import { CountrySlug } from "./country-data";
import { SUBJECTS } from "./subjectCatalog";
import { SALESFORCE_COUNTRY_PAGES, SALESFORCE_CITY_PAGES } from "./salesforceLocationContent";

/**
 * "branch" = genuine physical CloudEdge AI address, gets real address+schema.
 * "city" = no physical office there — honest online-only framing, no
 *   LocalBusiness/address schema (there's no local business to describe).
 * "country" = broader country-wide online-only page.
 */
export type LocationKind = "branch" | "city" | "country";

export interface Location {
  slug: string;
  countrySlug: CountrySlug;
  kind: LocationKind;
  displayName: string;
  region: string;
  address?: string;
}

export const LOCATIONS: Record<string, Location> = {
  hyderabad: {
    slug: "hyderabad",
    countrySlug: "in",
    kind: "branch",
    displayName: "Hyderabad",
    region: "Telangana, India",
    address: "5th Floor, TechSquare Tower, Hitech City, Madhapur, Hyderabad – 500081",
  },
  vijayawada: {
    slug: "vijayawada",
    countrySlug: "in",
    kind: "branch",
    displayName: "Vijayawada",
    region: "Andhra Pradesh, India",
    address: "3rd Floor, SR Plaza, MG Road, Benz Circle, Vijayawada - 520010",
  },
  visakhapatnam: {
    slug: "visakhapatnam",
    countrySlug: "in",
    kind: "branch",
    displayName: "Visakhapatnam",
    region: "Andhra Pradesh, India",
    address: "4th Floor, VIP Towers, VIP Road, Siripuram, Visakhapatnam – 530003",
  },
  bengaluru: {
    slug: "bengaluru",
    countrySlug: "in",
    kind: "branch",
    displayName: "Bengaluru",
    region: "Karnataka, India",
    address: "1st Floor, Tech Heights, Outer Ring Road, Marathahalli, Bangalore – 560037",
  },
  chennai: {
    slug: "chennai",
    countrySlug: "in",
    kind: "city",
    displayName: "Chennai",
    region: "Tamil Nadu, India",
  },
  london: {
    slug: "london",
    countrySlug: "uk",
    kind: "city",
    displayName: "London",
    region: "United Kingdom",
  },
  "new-york": {
    slug: "new-york",
    countrySlug: "usa",
    kind: "city",
    displayName: "New York",
    region: "United States",
  },
  texas: {
    slug: "texas",
    countrySlug: "usa",
    kind: "city",
    displayName: "Texas",
    region: "United States",
  },
  uk: {
    slug: "uk",
    countrySlug: "uk",
    kind: "country",
    displayName: "the UK",
    region: "United Kingdom",
  },
  usa: {
    slug: "usa",
    countrySlug: "usa",
    kind: "country",
    displayName: "the USA",
    region: "United States",
  },
  dubai: {
    slug: "dubai",
    countrySlug: "uae",
    kind: "city",
    displayName: "Dubai",
    region: "United Arab Emirates",
  },
  uae: {
    slug: "uae",
    countrySlug: "uae",
    kind: "country",
    displayName: "the UAE",
    region: "United Arab Emirates",
  },
};

/**
 * Every other training programme with a real page at this exact location —
 * used to cross-link the ~90 subject x location pages plus the 4 Salesforce
 * local pages so none of them are orphaned (no page reachable only via the
 * sitemap, with zero internal links pointing to it).
 */
export function getSiblingLinks(currentSubjectSlug: string | null, location: Location) {
  const links: { name: string; href: string }[] = [];

  // A city without its own dedicated Salesforce page (e.g. an online-only
  // city like London or Dubai) can still link to its country's Salesforce
  // page if one exists — otherwise cities in a country that only has
  // Salesforce branch pages (no country-wide page) get no Salesforce link
  // at all, even though Salesforce training is genuinely available there.
  const hasCityPage = location.kind !== "country" && !!SALESFORCE_CITY_PAGES[location.slug];
  const hasCountryPage = !!SALESFORCE_COUNTRY_PAGES[location.countrySlug];
  const hasSalesforceHere = hasCityPage || hasCountryPage;

  if (hasSalesforceHere && currentSubjectSlug !== "salesforce") {
    links.push({
      name: "Salesforce",
      href:
        hasCityPage
          ? `/${location.countrySlug}/salesforce-training/${location.slug}`
          : `/${location.countrySlug}/salesforce-training`,
    });
  }

  for (const sibling of Object.values(SUBJECTS)) {
    if (sibling.slug === currentSubjectSlug) continue;
    links.push({
      name: sibling.name,
      href:
        location.kind === "country"
          ? `/${location.countrySlug}/${sibling.slug}-training`
          : `/${location.countrySlug}/${sibling.slug}-training/${location.slug}`,
    });
  }

  return links;
}
