import React from "react";
import { Star, Sparkles } from "lucide-react";
import { getFeaturedTestimonials } from "@/app/(asgard)/asgard/academics/courses/actions";
import ResilientImage from "@/components/ui/ResilientImage";
import { MotionSection, MotionDiv } from "@/components/ui/MotionElements";

const colors = [
  "#6366F1",
  "#8B5CF6",
  "#06B6D4",
  "#10B981",
  "#F59E0B",
  "#EC4899",
];

const TestimonialsSection = async () => {
  const testimonials = await getFeaturedTestimonials();

  return (
    <section className="bg-slate-50/90 py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Header Block */}
        <MotionSection
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-12 space-y-3"
        >
          <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">What Students Say</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight font-bricolage-grotesque">
            Trusted by Professionals{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
              Across 15+ Countries
            </span>
          </h2>
        </MotionSection>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((item, idx) => {
            const initials =
              item.person_name
                ?.split(" ")
                .map((word: string) => word[0])
                .join("")
                .slice(0, 2)
                .toUpperCase() || "NA";

            const avatarColor = colors[idx % colors.length];

            return (
              <MotionDiv
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[28px] p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, sIdx) => (
                      <Star
                        key={sIdx}
                        size={14}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium italic mb-6">
                    &ldquo;{item.review_text}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                  {item.media_url ? (
                    <ResilientImage
                      src={item.media_url}
                      alt={item.person_name}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div
                      style={{ backgroundColor: avatarColor }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-xs"
                    >
                      {initials}
                    </div>
                  )}

                  <div className="truncate">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight font-bricolage-grotesque">
                      {item.person_name}
                    </h4>

                    <p className="text-xs font-medium text-slate-500 truncate mt-0.5">
                      {item.person_designation}
                    </p>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;