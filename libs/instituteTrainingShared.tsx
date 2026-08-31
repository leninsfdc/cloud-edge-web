import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, ORG_NAME } from "./seo";
import { LOCATIONS, Location } from "./localSeoLocations";
import InstituteLocationContainer from "@/containers/web/InstituteLocationContainer";

function resolveInstituteCountryPage(country: string): Location | null {
  const location = Object.values(LOCATIONS).find(
    (l) => l.kind === "country" && l.countrySlug === country
  );
  return location ?? null;
}

function resolveInstituteLocationPage(country: string, locationSlug: string): Location | null {
  const location = LOCATIONS[locationSlug];
  if (!location || location.kind === "country" || location.countrySlug !== country) {
    return null;
  }
  return location;
}

function buildTitle(location: Location) {
  return `Best Software Training Institute in ${location.displayName} | ${ORG_NAME}`;
}

function buildDescription(location: Location) {
  return location.kind === "branch"
    ? `Cloud Edge AI Solutions runs a real training branch in ${location.displayName}, offering Salesforce, Java, Python, Data Science, MuleSoft and more — live online or in person.`
    : `Cloud Edge AI Solutions delivers live online software training to professionals in ${location.displayName}, covering Salesforce, Java, Python, Data Science, MuleSoft and more.`;
}

export async function buildInstituteCountryMetadata(country: string): Promise<Metadata> {
  const location = resolveInstituteCountryPage(country);
  if (!location) return { title: "Not Found" };

  return {
    title: buildTitle(location),
    description: buildDescription(location),
    alternates: { canonical: `${SITE_URL}/${country}/training-institute` },
  };
}

export async function buildInstituteLocationMetadata(country: string, locationSlug: string): Promise<Metadata> {
  const location = resolveInstituteLocationPage(country, locationSlug);
  if (!location) return { title: "Not Found" };

  return {
    title: buildTitle(location),
    description: buildDescription(location),
    alternates: { canonical: `${SITE_URL}/${country}/training-institute/${locationSlug}` },
  };
}

function renderInstitutePage(country: string, location: Location) {
  const canonicalUrl =
    location.kind === "country"
      ? `${SITE_URL}/${country}/training-institute`
      : `${SITE_URL}/${country}/training-institute/${location.slug}`;

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${country}` },
        { "@type": "ListItem", position: 2, name: buildTitle(location).split(" | ")[0], item: canonicalUrl },
      ],
    },
  ];

  if (location.kind === "branch" && location.address) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: `${ORG_NAME} — ${location.displayName}`,
      url: canonicalUrl,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address,
        addressLocality: location.displayName,
        addressRegion: location.region,
        addressCountry: country.toUpperCase(),
      },
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <InstituteLocationContainer location={location} />
    </>
  );
}

export function renderInstituteCountryPage(country: string) {
  const location = resolveInstituteCountryPage(country);
  if (!location) notFound();
  return renderInstitutePage(country, location);
}

export function renderInstituteLocationPage(country: string, locationSlug: string) {
  const location = resolveInstituteLocationPage(country, locationSlug);
  if (!location) notFound();
  return renderInstitutePage(country, location);
}
