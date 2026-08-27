import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountrySlug } from "@/libs/country-data";
import { SITE_URL } from "@/libs/seo";
import { SUBJECTS } from "@/libs/subjectCatalog";
import { LOCATIONS } from "@/libs/localSeoLocations";
import SubjectLocationContainer from "@/containers/web/SubjectLocationContainer";

type Props = {
  params: Promise<{ country: string; subjectSlug: string }>;
};

function resolve(country: string, subjectSlug: string) {
  const subject = SUBJECTS[subjectSlug];
  const location = Object.values(LOCATIONS).find(
    (l) => l.kind === "country" && l.countrySlug === country
  );
  if (!subject || !location) return null;
  return { subject, location };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, subjectSlug } = await params;
  const resolved = resolve(country, subjectSlug);
  if (!resolved) return { title: "Not Found" };

  const { subject, location } = resolved;
  return {
    title: `${subject.name} Training in ${location.displayName} | Cloud Edge Solutions`,
    description: `${subject.shortDescription} Live online training, no physical office in ${location.displayName}.`,
    alternates: { canonical: `${SITE_URL}/${country}/${subjectSlug}-training` },
  };
}

const Page = async ({ params }: Props) => {
  const { country, subjectSlug } = await params;
  const resolved = resolve(country, subjectSlug);
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
};

export default Page;
