import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountrySlug } from "@/libs/country-data";
import { SITE_URL, ORG_NAME } from "@/libs/seo";
import { SALESFORCE_CITY_PAGES, SALESFORCE_COURSE_PATH } from "@/libs/salesforceLocationContent";
import SalesforceLocalContainer from "@/containers/web/SalesforceLocalContainer";

type Props = {
  params: Promise<{ country: string; location: string }>;
};

function resolvePage(country: string, location: string) {
  const page = SALESFORCE_CITY_PAGES[location];
  // A city page only exists at its real country segment — /in/salesforce-training/hyderabad,
  // never /uk/salesforce-training/hyderabad — so there's exactly one indexable URL per city.
  if (!page || page.countrySlug !== country) return null;
  return page;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, location } = await params;
  const page = resolvePage(country, location);
  if (!page) return { title: "Not Found" };

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `${SITE_URL}/${country}/salesforce-training/${location}` },
  };
}

const Page = async ({ params }: Props) => {
  const { country, location } = await params;
  const page = resolvePage(country, location);
  if (!page) notFound();

  const canonicalUrl = `${SITE_URL}/${country}/salesforce-training/${location}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `${ORG_NAME} — ${page.city}`,
    url: canonicalUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: page.address,
      addressLocality: page.city,
      addressRegion: page.region,
      addressCountry: (country as CountrySlug).toUpperCase(),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${country}` },
      { "@type": "ListItem", position: 2, name: page.h1, item: canonicalUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SalesforceLocalContainer cityPage={page} courseHref={`/${country}/${SALESFORCE_COURSE_PATH}`} />
    </>
  );
};

export default Page;
