import React from "react";
import Image from "next/image";
import { Briefcase, Award } from "lucide-react";

interface Instructor {
  id: number;
  name: string;
  designation: string;
  years_of_experience: number;
  past_companies: string[];
  description: string;
  tags: string[];
  profile_pic: string;
}

interface ITrainersContainerProps {
  instructors: Instructor[];
}

const TrainersContainer: React.FC<ITrainersContainerProps> = ({ instructors }) => {
  return (
    <div className="bg-slate-50/80 min-h-screen pt-28 md:pt-36 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h1 className="font-bricolage-grotesque font-extrabold text-3xl sm:text-4xl md:text-5xl text-slate-900 tracking-tight mb-4">
            Meet Our Trainers
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every Cloud Edge AI Solutions course is led by a working practitioner with real, verifiable industry experience — not just a certified instructor.
          </p>
        </div>

        {instructors.length === 0 ? (
          <p className="text-center text-slate-500">Trainer profiles are being updated. Please check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor) => (
              <div
                key={instructor.id}
                className="bg-white rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.04)] p-6 sm:p-7 flex flex-col gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                    {instructor.profile_pic ? (
                      <Image
                        src={instructor.profile_pic}
                        alt={instructor.name}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div>
                    <h2 className="font-bold text-lg text-slate-900 leading-snug">{instructor.name}</h2>
                    <p className="text-sm text-indigo-600 font-semibold">{instructor.designation}</p>
                  </div>
                </div>

                {instructor.years_of_experience ? (
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                    <Award className="w-4 h-4 text-indigo-500" />
                    <span>{instructor.years_of_experience} years of experience</span>
                  </div>
                ) : null}

                {instructor.past_companies?.length > 0 && (
                  <div className="flex items-start gap-2 text-xs text-slate-500">
                    <Briefcase className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                    <span>{instructor.past_companies.join(", ")}</span>
                  </div>
                )}

                <p className="text-sm text-slate-600 leading-relaxed">{instructor.description}</p>

                {instructor.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {instructor.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainersContainer;
