import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL, ORG_NAME } from "@/libs/seo";
import { SUBJECTS } from "@/libs/subjectCatalog";
import { LOCATIONS } from "@/libs/localSeoLocations";
import SubjectLocationContainer from "@/containers/web/SubjectLocationContainer";

type Props = {
  params: Promise<{ country: string; subjectSlug: string; location: string }>;
};

function resolve(country: string, subjectSlug: string, locationSlug: string) {
  const subject = SUBJECTS[subjectSlug];
  const location = LOCATIONS[locationSlug];
  // A city/branch page only exists at its real country segment, and never
  // for "country"-kind locations (those are served by the parent route).
  if (!subject || !location || location.kind === "country" || location.countrySlug !== country) {
    return null;
  }
  return { subject, location };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, subjectSlug, location: locationSlug } = await params;
  const resolved = resolve(country, subjectSlug, locationSlug);
  if (!resolved) return { title: "Not Found" };

  const { subject, location } = resolved;
  return {
    title: `${subject.name} Training in ${location.displayName} | Cloud Edge Solutions`,
    description: `${subject.shortDescription} ${
      location.kind === "branch"
        ? `Live online training plus a real CloudEdge branch in ${location.displayName}.`
        : `Live online training, no physical office in ${location.displayName}.`
    }`,
    alternates: { canonical: `${SITE_URL}/${country}/${subjectSlug}-training/${locationSlug}` },
  };
}

const Page = async ({ params }: Props) => {
  const { country, subjectSlug, location: locationSlug } = await params;
  const resolved = resolve(country, subjectSlug, locationSlug);
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
};

export default Page;
