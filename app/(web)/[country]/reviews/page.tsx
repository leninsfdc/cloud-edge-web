import React from "react";
import { Metadata } from "next";
import { getAllTestimonials } from "@/app/(asgard)/asgard/academics/courses/actions";
import ReviewsContainer from "@/containers/web/ReviewsContainer";
import { CountrySlug } from "@/libs/country-data";
import { buildAlternates } from "@/libs/seo";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;

  return {
    title: "Student Reviews | Cloud Edge Solutions",
    description:
      "Read genuine student reviews of Cloud Edge Solutions' Salesforce, AWS, SAP, Data Science and Power BI training courses.",
    alternates: buildAlternates(country as CountrySlug, "/reviews"),
  };
}

const Page = async () => {
  const reviews = await getAllTestimonials();
  return <ReviewsContainer reviews={reviews} />;
};

export default Page;
