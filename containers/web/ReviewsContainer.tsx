"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { useCountry } from "@/libs/country-context";

interface Review {
  id: string;
  review_text?: string;
  person_name?: string;
  person_designation?: string;
  media_url?: string;
  created_at?: string;
  courses?: { id: string; name: string; url_slug: string };
}

interface IReviewsContainerProps {
  reviews: Review[];
}

const ReviewsContainer: React.FC<IReviewsContainerProps> = ({ reviews }) => {
  const { country } = useCountry();

  return (
    <div className="bg-slate-50/80 min-h-screen pt-28 md:pt-36 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h1 className="font-bricolage-grotesque font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
            Student Reviews
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Genuine feedback from Cloud Edge AI Solutions students, tied to the specific course each review is about.
          </p>
        </div>

        {reviews.length === 0 ? (
          <p className="text-center text-slate-500">Reviews are being updated. Please check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-6 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden bg-slate-100 shrink-0">
                    {review.media_url ? (
                      <Image src={review.media_url} alt={review.person_name || "Reviewer"} fill className="object-cover" />
                    ) : null}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-900">{review.person_name}</p>
                    {review.person_designation && (
                      <p className="text-xs text-slate-500">{review.person_designation}</p>
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">{review.review_text}</p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
                  {review.courses?.url_slug ? (
                    <Link
                      href={`/${country.slug}/courses/${review.courses.url_slug}`}
                      className="font-semibold text-indigo-600 hover:text-indigo-700"
                    >
                      {review.courses.name}
                    </Link>
                  ) : (
                    <span />
                  )}
                  {review.created_at && (
                    <span className="text-slate-400">{moment(review.created_at).format("MMM YYYY")}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewsContainer;
