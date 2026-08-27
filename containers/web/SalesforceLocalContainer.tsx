import React from "react";
import Link from "next/link";
import { MapPin, CheckCircle2 } from "lucide-react";
import { CountryWidePage, CityPage } from "@/libs/salesforceLocationContent";

interface Props {
  countryPage?: CountryWidePage;
  cityPage?: CityPage;
  courseHref: string;
}

const SalesforceLocalContainer: React.FC<Props> = ({ countryPage, cityPage, courseHref }) => {
  const page = cityPage ?? countryPage!;
  const h1 = cityPage ? cityPage.h1 : countryPage!.h1;
  const intro = cityPage ? cityPage.intro : countryPage!.intro;
  const faqs = cityPage ? cityPage.faqs : countryPage!.faqs;

  return (
    <div className="bg-slate-50/80 min-h-screen pt-28 md:pt-36 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <h1 className="font-bricolage-grotesque font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mb-6 text-center">
          {h1}
        </h1>

        {cityPage && (
          <div className="flex items-center justify-center gap-2 text-sm text-slate-600 mb-8">
            <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>{cityPage.address}</span>
          </div>
        )}

        <div className="space-y-4 mb-10">
          {intro.map((paragraph, i) => (
            <p key={i} className="text-slate-600 leading-relaxed text-base sm:text-lg text-center">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex justify-center mb-14">
          <Link
            href={courseHref}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-7 py-3.5 transition-colors"
          >
            View the Salesforce Administrator Course
          </Link>
        </div>

        <div className="space-y-3">
          <h2 className="font-bricolage-grotesque font-extrabold text-xl text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200/80 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-2 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                {faq.question}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed pl-6">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SalesforceLocalContainer;
