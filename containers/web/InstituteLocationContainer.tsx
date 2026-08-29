import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Location, getSiblingLinks } from "@/libs/localSeoLocations";
import { getWhatsAppLink } from "@/utils";

interface Props {
  location: Location;
}

const InstituteLocationContainer: React.FC<Props> = ({ location }) => {
  const h1 = `Best Software Training Institute in ${location.displayName}`;
  const courseLinks = getSiblingLinks(null, location);

  const intro =
    location.kind === "branch"
      ? `Cloud Edge Solutions runs a real training branch in ${location.displayName}, offering live, instructor-led courses in Salesforce, Java, Python, Data Science, MuleSoft, SAP, AWS, DevOps, Web Design and UI/UX — in person or online, for students who prefer to learn remotely.`
      : location.kind === "city"
      ? `Cloud Edge Solutions delivers live, instructor-led software training to professionals in ${location.displayName} — there's no physical ${location.displayName} office, but every session is live with a real instructor, not pre-recorded. Courses cover Salesforce, Java, Python, Data Science, MuleSoft, SAP, AWS, DevOps, Web Design and UI/UX.`
      : `Cloud Edge Solutions delivers live, instructor-led software training to professionals across ${location.displayName} — entirely online, with no physical local office. Courses cover Salesforce, Java, Python, Data Science, MuleSoft, SAP, AWS, DevOps, Web Design and UI/UX.`;

  const faqs = [
    {
      question:
        location.kind === "branch"
          ? `Is there a software training institute near me in ${location.displayName}?`
          : `Is there a software training institute serving ${location.displayName}?`,
      answer:
        location.kind === "branch"
          ? `Yes — Cloud Edge Solutions has a training branch in ${location.displayName}. Online-only students can also join the same live classes remotely.`
          : `Yes — Cloud Edge Solutions delivers live, instructor-led software training to students in ${location.displayName}, entirely online, as long as you can join a live session.`,
    },
    ...(location.kind !== "branch"
      ? [
          {
            question: `Do you have a physical training centre in ${location.displayName}?`,
            answer: `No. Cloud Edge Solutions doesn't have a physical office in ${location.displayName}. Training is delivered live online from India-based instructors.`,
          },
        ]
      : []),
    {
      question: `Which courses does Cloud Edge Solutions offer in ${location.displayName}?`,
      answer:
        "Salesforce Administration, Java Full Stack, Python, Data Science, MuleSoft, SAP, AWS, DevOps, Web Design and UI/UX Design — see the full list below for details on each.",
    },
  ];

  const enquiryLink = getWhatsAppLink(
    `Hi Cloud Edge Solutions, I'd like to know more about software training in ${location.displayName}.`
  );

  return (
    <div className="bg-slate-50/80 min-h-screen pt-28 md:pt-36 pb-20">
      <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
        <h1 className="font-bricolage-grotesque font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mb-6 text-center">
          {h1}
        </h1>

        {location.kind === "branch" && location.address && (
          <div className="flex items-center justify-center gap-2 text-sm text-slate-600 mb-8">
            <MapPin className="w-4 h-4 text-indigo-600 shrink-0" />
            <span>{location.address}</span>
          </div>
        )}

        <p className="text-slate-600 leading-relaxed text-base sm:text-lg text-center mb-10">
          {intro}
        </p>

        <div className="flex justify-center mb-14">
          <a
            href={enquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-7 py-3.5 transition-colors"
          >
            Ask About Our Courses
          </a>
        </div>

        {courseLinks.length > 0 && (
          <div className="mb-14">
            <h2 className="font-bricolage-grotesque font-extrabold text-xl text-slate-900 mb-4">
              Courses We Offer in {location.displayName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {courseLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-white rounded-xl border border-slate-200/80 px-4 py-3.5 text-sm font-semibold text-slate-800 hover:text-indigo-600 hover:border-indigo-200 transition-colors"
                >
                  {link.name} Training in {location.displayName}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="space-y-3">
          <h2 className="font-bricolage-grotesque font-extrabold text-xl text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200/80 p-5">
              <h3 className="font-bold text-slate-900 text-sm mb-2">{faq.question}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstituteLocationContainer;
