import React from "react";
import CourseListingContainer from "@/containers/web/CourseListingContainer";
import { getCourses } from "@/app/(asgard)/asgard/academics/courses/actions";
import { Metadata } from "next";
import { CountrySlug, slugToCode } from "@/libs/country-data";
import { getCountryCode } from "@/libs/geo";
import { buildAlternates } from "@/libs/seo";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;

  return {
    title: "Online IT Courses & Certification Programs | Cloud Edge Solutions",
    description:
      "Browse online training courses from Cloud Edge Solutions. Explore Salesforce Administration and Digital Marketing certification programs designed for career growth.",
    keywords: [
      "online IT courses", "Salesforce training", "Salesforce Administrator course",
      "Digital Marketing course", "Cloud Edge Solutions",
      "online certification programs", "technology training",
    ],
    openGraph: {
      title: "Online IT Courses & Certification Programs | Cloud Edge Solutions",
      description: "Explore expert-led online courses and certification programs in Salesforce Administration and Digital Marketing.",
      type: "website",
    },
    alternates: buildAlternates(country as CountrySlug, "/courses"),
  };
}

interface PageProps {
  params: Promise<{ country: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { country } = await params;
  const countryCode = slugToCode(country);

  const courses = await getCourses();

  return (
    <CourseListingContainer courses={courses.data} countryCode={countryCode} />
  );
};

export default Page;
