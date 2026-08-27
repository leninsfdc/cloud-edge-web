import React from "react";
import { Metadata } from "next";
import { getInstructures } from "@/app/(asgard)/asgard/content/instructors/actions";
import TrainersContainer from "@/containers/web/TrainersContainer";
import { CountrySlug } from "@/libs/country-data";
import { buildAlternates } from "@/libs/seo";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;

  return {
    title: "Our Trainers | Cloud Edge Solutions",
    description:
      "Meet the Salesforce, SAP, AWS, Data Science and Power BI trainers behind Cloud Edge Solutions' courses — working practitioners with real industry experience.",
    alternates: buildAlternates(country as CountrySlug, "/trainers"),
  };
}

const Page = async () => {
  const result = await getInstructures(1, 50);
  return <TrainersContainer instructors={result.data || []} />;
};

export default Page;
