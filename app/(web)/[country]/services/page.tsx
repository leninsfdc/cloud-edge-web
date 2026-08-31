import ServicesContainer from "@/containers/web/services/ServicesContainer";
import React from "react";
import { Metadata } from "next";
import { CountrySlug } from "@/libs/country-data";
import { buildAlternates } from "@/libs/seo";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;

  return {
    title: "Our Services | Cloud Edge AI Solutions",
    description:
      "Discover our comprehensive range of services including corporate training, certification programs, and professional technology consulting.",
    keywords: [
      "Cloud Edge AI Services", "IT consulting", "Corporate training",
      "Professional certification", "Technology services",
    ],
    alternates: buildAlternates(country as CountrySlug, "/services"),
  };
}

const Page = () => {
  return (
    <div>
      <ServicesContainer />
    </div>
  );
};

export default Page;
