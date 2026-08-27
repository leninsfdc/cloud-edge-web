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
      "Cloud Edge Solutions - Online Training for Salesforce & Digital Marketing",
    description: override?.metaDescription ??
      "Enhance your skills with Cloud Edge Solutions' online training. Explore Salesforce Administration and Digital Marketing courses for students and professionals across India, USA, and UK.",
    keywords: [
      "Cloud Edge Solutions", "online training", "Salesforce training", "Salesforce Administrator course",
      "Digital Marketing training", "Digital Marketing course", "IT certification", "online certification programs",
      "technology training institute", "career development courses", "corporate training", "professional certification",
    ],
    authors: [{ name: "Cloud Edge Solutions" }],
    creator: "Cloud Edge Solutions",
    publisher: "Cloud Edge Solutions",
    robots: { index: true, follow: true },
    alternates: buildAlternates(country as CountrySlug, ""),
  };
}

const Page = () => {
  return <HomeContainer />;
};

export default Page;
