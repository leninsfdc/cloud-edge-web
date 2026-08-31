import HomeContainer from "@/containers/web/HomeContainer";
import React from "react";
import { Metadata } from "next";
import { CountrySlug } from "@/libs/country-data";
import { buildAlternates } from "@/libs/seo";
import { COUNTRY_HOME_CONTENT } from "@/libs/countryHomeContent";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const override = COUNTRY_HOME_CONTENT[country as CountrySlug];

  return {
    title: override?.metaTitle ??
      "Cloud Edge AI Solutions - Online Training for Salesforce & Digital Marketing",
    description: override?.metaDescription ??
      "Enhance your skills with Cloud Edge AI Solutions' online training. Explore Salesforce Administration and Digital Marketing courses for students and professionals across India, USA, and UK.",
    keywords: [
      "Cloud Edge AI Solutions", "online training", "Salesforce training", "Salesforce Administrator course",
      "Digital Marketing training", "Digital Marketing course", "IT certification", "online certification programs",
      "technology training institute", "career development courses", "corporate training", "professional certification",
    ],
    authors: [{ name: "Cloud Edge AI Solutions" }],
    creator: "Cloud Edge AI Solutions",
    publisher: "Cloud Edge AI Solutions",
    robots: { index: true, follow: true },
    alternates: buildAlternates(country as CountrySlug, ""),
  };
}

const Page = () => {
  return <HomeContainer />;
};

export default Page;
