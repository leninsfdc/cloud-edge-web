import React from "react";
import ContactContainer from "@/containers/web/ContactContainer";
import { Metadata } from "next";
import { CountrySlug } from "@/libs/country-data";
import { buildAlternates } from "@/libs/seo";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;

  return {
    title: "Contact Cloud Edge Solutions | Get in Touch for Course Enquiries & Support",
    description:
      "Contact Cloud Edge Solutions for course information, admissions, corporate training, certification guidance, and support. Reach out to our team for Salesforce Administration and Digital Marketing training.",
    keywords: [
      "Cloud Edge Solutions contact", "IT training institute contact", "Salesforce training enquiry",
      "Digital Marketing training enquiry", "online training support",
      "corporate training", "technology courses", "contact training institute",
    ],
    authors: [{ name: "Cloud Edge Solutions" }],
    creator: "Cloud Edge Solutions",
    publisher: "Cloud Edge Solutions",
    robots: { index: true, follow: true },
    category: "Education",
    alternates: buildAlternates(country as CountrySlug, "/contact-us"),
  };
}

const Page = () => {
  return <ContactContainer />;
};

export default Page;
