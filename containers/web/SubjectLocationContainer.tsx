import React from "react";
import Link from "next/link";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Subject } from "@/libs/subjectCatalog";
import { Location, getSiblingLinks } from "@/libs/localSeoLocations";
import { getWhatsAppLink } from "@/utils";

interface Props {
  subject: Subject;
  location: Location;
}

const SubjectLocationContainer: React.FC<Props> = ({ subject, location }) => {
  const siblingLinks = getSiblingLinks(subject.slug, location);
  const h1 = `${subject.name} Training in ${location.displayName}`;
  const instituteHref =
    location.kind === "country"
      ? `/${location.countrySlug}/training-institute`
      : `/${location.countrySlug}/training-institute/${location.slug}`;

  const intro =
    location.kind === "branch"
      ? `Cloud Edge AI Solutions runs a real training branch in ${location.displayName}, alongside live online ${subject.name} training for students who prefer to learn remotely. ${subject.shortDescription}`
      : location.kind === "city"
      ? `Cloud Edge AI Solutions delivers live, instructor-led ${subject.name} training to professionals in ${location.displayName} — there's no physical ${location.displayName} office, but every session is live with a real instructor, not pre-recorded. ${subject.shortDescription}`
      : `Cloud Edge AI Solutions delivers live, instructor-led ${subject.name} training to professionals across ${location.displayName} — entirely online, with no physical local office. ${subject.shortDescription}`;

  const faqs = [
    {
      question:
        location.kind === "branch"
          ? `Is there a ${subject.name} training centre near me in ${location.displayName}?`
          : `Is ${subject.name} training available near me in ${location.displayName}?`,
      answer:
        location.kind === "branch"
          ? `Yes — Cloud Edge AI Solutions has a training branch in ${location.displayName}. Online-only students can also join the same live classes remotely.`
          : `Yes — since training is delivered live online rather than from a physical classroom, it's equally accessible from anywhere in ${location.displayName}, as long as you can join a live session.`,
    },
    ...(location.kind !== "branch"
      ? [
          {
            question: `Do you have a training centre in ${location.displayName}?`,
            answer: `No. Cloud Edge AI Solutions doesn't have a physical office in ${location.displayName}. Training is delivered live online from India-based instructors.`,
          },
        ]
      : []),
    {
      question: `What does the ${subject.name} training cover?`,
      answer:
        subject.highlights.slice(0, 3).join(", ") +
        (subject.certExam ? `. It also includes preparation for ${subject.certExam}.` : "."),
    },
  ];

  const enquiryLink = getWhatsAppLink(
    `Hi Cloud Edge AI Solutions, I'd like to know more about ${subject.name} training in ${location.displayName}.`
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {subject.highlights.map((h) => (
            <div key={h} className="bg-white rounded-xl border border-slate-200/80 px-4 py-3 flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
              <span className="text-sm font-semibold text-slate-800">{h}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-14">
          <a
            href={enquiryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-7 py-3.5 transition-colors"
          >
            Ask About This Course
          </a>
        </div>

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

        {siblingLinks.length > 0 && (
          <div className="mt-14">
            <h2 className="font-bricolage-grotesque font-extrabold text-xl text-slate-900 mb-4">
              Other Training Programmes in {location.displayName}
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {siblingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold bg-white border border-slate-200/80 text-slate-700 hover:text-indigo-600 hover:border-indigo-200 px-4 py-2 rounded-full transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            href={instituteHref}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            See our full software training institute in {location.displayName} →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubjectLocationContainer;
