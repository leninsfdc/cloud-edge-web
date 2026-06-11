import React from 'react';
import Image from "next/image";
import whoWeAreIcon from "@/public/icons/who-we-are-icon.svg"

const WhoWeAreSection = () => {
  return (
      <div className={"bg-white py-12"}>
        <div className={"container mx-auto"}>
          <div className={"flex items-center justify-center flex-col"}>
            <div className={"flex items-center justify-around w-fit bg-[#F1F1FD] border border-[#E0E7FF] px-4 py-2 rounded-4xl gap-2"}>
              <Image src={whoWeAreIcon} alt={"Who WeAre"} className={"w-4 h-4"}/>
              <span className={"text-sm text-[#8B79FD] font-medium"}>Who We Are</span>
            </div>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight leading-tight max-w-6xl text-center mt-5">
              The live SAP & Salesforce training company for
              <span className="text-[#6557E3]"> India, UK & beyond</span>
            </h2>
            <p className={" text-[#64748B] text-center max-w-4xl mt-5"}>Founded in 2019 by working SAP and Salesforce consultants, Cloud Edge delivers live, instructor-led training to professionals across India, the UK, the UAE, the USA and Canada — with real system access, certification exam prep and 12-month placement support built into every course.</p>
          </div>
        </div>
      </div>
  );
};

export default WhoWeAreSection;