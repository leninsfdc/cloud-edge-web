import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, ORG_NAME } from "./seo";
import { SUBJECTS } from "./subjectCatalog";
import { LOCATIONS } from "./localSeoLocations";
import SubjectLocationContainer from "@/containers/web/SubjectLocationContainer";

function resolveCountryPage(subjectSlug: string, country: string) {
  const subject = SUBJECTS[subjectSlug];
  const location = Object.values(LOCATIONS).find(
    (l) => l.kind === "country" && l.countrySlug === country
  );
  if (!subject || !location) return null;
  return { subject, location };
}

function resolveLocationPage(subjectSlug: string, country: string, locationSlug: string) {
  const subject = SUBJECTS[subjectSlug];
  const location = LOCATIONS[locationSlug];
  if (!subject || !location || location.kind === "country" || location.countrySlug !== country) {
    return null;
  }
  return { subject, location };
}

export async function buildSubjectCountryMetadata(subjectSlug: string, country: string): Promise<Metadata> {
  const resolved = resolveCountryPage(subjectSlug, country);
  if (!resolved) return { title: "Not Found" };

  const { subject, location } = resolved;
  return {
    title: `${subject.name} Training in ${location.displayName} | Cloud Edge AI Solutions`,
    description: `${subject.shortDescription} Live online training, no physical office in ${location.displayName}.`,
    alternates: { canonical: `${SITE_URL}/${country}/${subjectSlug}-training` },
  };
}

export function renderSubjectCountryPage(subjectSlug: string, country: string) {
  const resolved = resolveCountryPage(subjectSlug, country);
  if (!resolved) notFound();

  const { subject, location } = resolved;
  const canonicalUrl = `${SITE_URL}/${country}/${subjectSlug}-training`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${country}` },
      { "@type": "ListItem", position: 2, name: `${subject.name} Training in ${location.displayName}`, item: canonicalUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SubjectLocationContainer subject={subject} location={location} />
    </>
  );
}

export async function buildSubjectLocationMetadata(
  subjectSlug: string,
  country: string,
  locationSlug: string
): Promise<Metadata> {
  const resolved = resolveLocationPage(subjectSlug, country, locationSlug);
  if (!resolved) return { title: "Not Found" };

  const { subject, location } = resolved;
  return {
    title: `${subject.name} Training in ${location.displayName} | Cloud Edge AI Solutions`,
    description: `${subject.shortDescription} ${
      location.kind === "branch"
        ? `Live online training plus a real CloudEdge AI branch in ${location.displayName}.`
        : `Live online training, no physical office in ${location.displayName}.`
    }`,
    alternates: { canonical: `${SITE_URL}/${country}/${subjectSlug}-training/${locationSlug}` },
  };
}

export function renderSubjectLocationPage(subjectSlug: string, country: string, locationSlug: string) {
  const resolved = resolveLocationPage(subjectSlug, country, locationSlug);
  if (!resolved) notFound();

  const { subject, location } = resolved;
  const canonicalUrl = `${SITE_URL}/${country}/${subjectSlug}-training/${locationSlug}`;

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${country}` },
        { "@type": "ListItem", position: 2, name: `${subject.name} Training in ${location.displayName}`, item: canonicalUrl },
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
      <SubjectLocationContainer subject={subject} location={location} />
    </>
  );
}
