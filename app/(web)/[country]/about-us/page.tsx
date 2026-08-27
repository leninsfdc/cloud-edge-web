import React from "react";
import AboutUsContainer from "@/containers/web/AboutUsContainer";
import { Metadata } from "next";
import { CountrySlug } from "@/libs/country-data";
import { buildAlternates } from "@/libs/seo";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;

  return {
    title: "About Cloud Edge Solutions | Leading Online IT Training & Certification Programs",
    description:
      "Learn more about Cloud Edge Solutions, a trusted provider of online IT training and certification programs. Empowering learners worldwide with expert-led courses in Salesforce Administration and Digital Marketing.",
    alternates: buildAlternates(country as CountrySlug, "/about-us"),
  };
}

const Page = () => {
  return <AboutUsContainer />;
};

export default Page;
