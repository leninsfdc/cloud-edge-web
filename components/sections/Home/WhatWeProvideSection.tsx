import WhatWeProvideCard from "@/components/ui/WhatWeProvideCard";
import React from "react";

import laptopIcon from "@/public/icons/laptop.svg";
import trainingPerson from "@/public/icons/training-person.svg";
import buildingIcon from "@/public/icons/building.svg";
import caseIcon from "@/public/icons/case.svg";

const WhatWeProvideData = [
  {
    image: laptopIcon,
    title: "Learning That Works Anywhere",
    description:
      "Access flexible learning with expert-led live and on-demand sessions.",
  },
  {
    image: trainingPerson,
    title: "Training That Happens In Person",
    description:
      "Experience hands-on learning with direct guidance and real-time collaboration.",
  },
  {
    image: buildingIcon,
    title: "Skills That Grow Your Team",
    description:
      "Empower your team with tailored training solutions for business success.",
  },
  {
    image: caseIcon,
    title: "Support That Moves You Forward",
    description:
      "Receive expert guidance on live projects to solve problems and accelerate growth.",
  },
];

const WhatWeProvideSection = () => {
  return (
    <section className="bg-[#F5F4F9] py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >
          {WhatWeProvideData.map((data, index) => {
            return (
              <WhatWeProvideCard
                key={index}
                icon={data.image}
                title={data.title}
                description={data.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvideSection;