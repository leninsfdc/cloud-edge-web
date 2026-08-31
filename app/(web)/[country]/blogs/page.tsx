import React from "react";
import { getBlogs } from "@/app/(asgard)/asgard/blogs/actions";
import BlogContainer from "@/containers/web/BlogContainer";
import { Metadata } from "next";
import { CountrySlug } from "@/libs/country-data";
import { buildAlternates } from "@/libs/seo";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;

  return {
    title: "Blog | Cloud Edge AI Solutions - IT Training, Career Tips & Technology Insights",
    description:
      "Explore the Cloud Edge AI Solutions blog for expert insights, career guidance, and certification tips on Salesforce and Digital Marketing.",
    alternates: buildAlternates(country as CountrySlug, "/blogs"),
  };
}

const Page = async () => {
  const blogs = await getBlogs(1, 4);
  return <BlogContainer blogs={blogs} />;
};

export default Page;
