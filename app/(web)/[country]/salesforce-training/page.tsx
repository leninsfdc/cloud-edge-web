import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountrySlug } from "@/libs/country-data";
import { SITE_URL } from "@/libs/seo";
import { SALESFORCE_COUNTRY_PAGES, SALESFORCE_COURSE_PATH } from "@/libs/salesforceLocationContent";
import SalesforceLocalContainer from "@/containers/web/SalesforceLocalContainer";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const page = SALESFORCE_COUNTRY_PAGES[country as CountrySlug];
  if (!page) return { title: "Not Found" };

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `${SITE_URL}/${country}/salesforce-training` },
  };
}

const Page = async ({ params }: Props) => {
  const { country } = await params;
  const page = SALESFORCE_COUNTRY_PAGES[country as CountrySlug];
  if (!page) notFound();

  const canonicalUrl = `${SITE_URL}/${country}/salesforce-training`;

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SalesforceLocalContainer countryPage={page} courseHref={`/${country}/${SALESFORCE_COURSE_PATH}`} />
    </>
  );
};

export default Page;
