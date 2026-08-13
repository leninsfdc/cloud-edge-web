import React from "react";
import CourseListingContainer from "@/containers/web/CourseListingContainer";
import { getCourses } from "@/app/(asgard)/asgard/academics/courses/actions";
import { Metadata } from "next";
import { slugToCode } from "@/libs/country-data";
import { getCountryCode } from "@/libs/geo";

export const metadata: Metadata = {
  title: "Online IT Courses & Certification Programs | Cloud Edge Solutions",
  description:
    "Browse industry-leading online training courses from Cloud Edge Solutions. Explore Salesforce, SAP, AWS, Data Science, Java, Power BI, AI, Cloud Computing, and other certification programs designed for career growth.",
  keywords: [
    "online IT courses", "Salesforce training", "SAP training", "AWS certification",
    "Data Science course", "Java training", "Power BI course", "Cloud Edge Solutions",
    "online certification programs", "technology training",
  ],
  openGraph: {
    title: "Online IT Courses & Certification Programs | Cloud Edge Solutions",
    description: "Explore expert-led online courses and certification programs in Salesforce, SAP, AWS, Data Science, Java, Power BI, and more.",
    type: "website",
  },
};

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
