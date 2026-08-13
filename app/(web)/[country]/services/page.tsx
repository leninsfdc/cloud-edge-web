import ServicesContainer from "@/containers/web/services/ServicesContainer";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Cloud Edge Solutions",
  description:
    "Discover our comprehensive range of services including corporate training, certification programs, and professional technology consulting.",
  keywords: [
    "Cloud Edge Services", "IT consulting", "Corporate training",
    "Professional certification", "Technology services",
  ],
};

const Page = () => {
  return (
    <div>
      <ServicesContainer />
    </div>
  );
};

export default Page;
