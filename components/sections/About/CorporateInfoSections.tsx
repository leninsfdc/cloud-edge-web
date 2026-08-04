import { getFeaturedTestimonials } from '@/app/(asgard)/asgard/academics/courses/actions';
import React from 'react';
import { MotionDiv, MotionSection } from '@/components/ui/MotionElements';
import ResilientImage from '@/components/ui/ResilientImage';
import { Sparkles, Star } from 'lucide-react';
import { getInstructures } from "@/app/(asgard)/asgard/content/instructures/actions";

// DATA STRUCTURES
const principles = [
  {
    title: "Practitioners as Teachers",
    description: "Every instructor holds active certifications and works on real implementations. Your trainer is a practitioner with 8–14 years of field experience — not someone who only teaches.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M16 7a4 4 0 11-8 0 4 4 0 018 0zM23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
      </svg>
    )
  },
  {
    title: "Live & Hands-On Always",
    description: "No pre-recorded content. Every session is live on Zoom with real SAP or Salesforce system access so students practise in the same environment they will use on the job.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Certification Outcomes",
    description: "We measure success by exam passes, not completions. Every programme includes dedicated exam prep, full mock tests and a structured exam strategy session.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.119l-3.976-2.888c-.784-.57-.381-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    title: "Truly Global Community",
    description: "Students from India, UK, UAE, USA and Canada share the same classroom. That diversity enriches every discussion and builds a genuine global professional network.",
    icon: (
      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
      </svg>
    )
  },
  {
    title: "Career-First Philosophy",
    description: "Course completion is the beginning. Our 12-month placement support, resume guidance and mock interview coaching are built into every programme at no extra cost.",
    icon: (
      <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: "Accessible Pricing",
    description: "World-class training should not require a world-class budget. We price in local currency for India, UK, USA and Canada and offer 0% EMI on every single course.",
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];


const industries = [
  {
    name: "Banking & Financial Services",
    desc: "SAP FICO and Salesforce Financial Services Cloud are standard across retail banking, investment firms and insurance.",
    icon: (
      <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: "Manufacturing & Automotive",
    desc: "SAP MM, PP and FICO are mission-critical in automotive and consumer goods. Among the largest SAP user bases globally.",
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    name: "Healthcare & Pharmaceuticals",
    desc: "NHS, hospital trusts and pharma companies increasingly use Salesforce Health Cloud and SAP for HR and supply chain.",
    icon: (
      <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    name: "Retail & E-commerce",
    desc: "Salesforce Commerce Cloud, Marketing Cloud and SAP S/4HANA power the largest retail chains and e-commerce platforms.",
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    )
  },
  {
    name: "Oil, Gas & Energy",
    desc: "SAP MM, PM and Basis are deeply embedded in the energy sector. High demand in the Middle East, UK North Sea and India.",
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 014 9 15.3 15.3 0 01-4 9 15.3 15.3 0 01-4-9 15.3 15.3 0 014-9z" />
      </svg>
    )
  },
  {
    name: "IT Services & Consulting",
    desc: "Infosys, TCS, Wipro, Accenture, Capgemini and IBM are among the largest hirers of Cloud Edge graduates globally.",
    icon: (
      <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
];

const CorporateInfoSections: React.FC = async () => {
  // const featuredTestimonials = await getFeaturedTestimonials();
  const featuredTestimonials = await getFeaturedTestimonials();

  const { data: instructors } = await getInstructures(1, 20);

  const getInitials = (name: string) =>
    name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  return (
    <div className="bg-slate-50/90">

      {/* 1. VALUES SECTION */}
      <MotionSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 lg:py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">What We Stand For</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-slate-900 leading-tight">
              Six Principles That Drive Everything We Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, index) => (
              <MotionDiv
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[28px] p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-5 shrink-0 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="font-bricolage-grotesque text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                    {item.description}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 2. INSTRUCTORS SECTION */}
      <MotionSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 lg:py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-12 max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs">
              <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">The People Behind the Courses</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-slate-900 leading-tight">
              Meet Our Instructors
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-medium">
              Every instructor is an active practitioner with at least 8 years of hands-on consulting experience and a current certification in what they teach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* {instructors.map((instructor, idx) => (
              <MotionDiv 
                key={idx} 
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[28px] p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md ${instructor.color}`}>
                      {instructor.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bricolage-grotesque text-base font-bold text-slate-900">
                        {instructor.name}
                      </h3>
                      <div className="text-xs text-indigo-600 font-bold">{instructor.role}</div>
                      <div className="text-[11px] text-slate-400 font-semibold mt-0.5">{instructor.meta}</div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium mb-5">
                    {instructor.bio}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                  {instructor.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-700 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </MotionDiv>
            ))} */}
            {instructors.map((instructor) => (
              <MotionDiv
                key={instructor.id}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[28px] p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {instructor.profile_pic ? (
                      <ResilientImage
                        src={instructor.profile_pic}
                        alt={instructor.name}
                        className="w-14 h-14 rounded-2xl object-cover shrink-0"
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold shrink-0">
                        {getInitials(instructor.name)}
                      </div>
                    )}

                    <div>
                      <h3 className="font-bricolage-grotesque text-base font-bold text-slate-900">
                        {instructor.name}
                      </h3>

                      <div className="text-xs text-indigo-600 font-bold">
                        {instructor.designation}
                      </div>

                      <div className="text-[11px] text-slate-400 font-semibold mt-0.5">
                        {instructor.years_of_experience} Years
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium mb-5">
                    {instructor.description}
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-4">
                  {instructor.past_companies?.length > 0 && (
                    <p className="text-xs text-slate-500 mb-3">
                      <span className="font-semibold">Past Companies:</span>{" "}
                      {instructor.past_companies.join(", ")}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {instructor.tags?.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-50 border border-slate-200/80 text-slate-700 px-2.5 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 3. TESTIMONIALS SECTION */}
      <MotionSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 lg:py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs">
              <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">Student Success Stories</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-slate-900 leading-tight">
              5,800+ Students Can’t Be Wrong
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTestimonials?.map((testi) => (
              <MotionDiv
                key={testi.id}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[28px] p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium italic mb-6">
                    &ldquo;{testi.review_text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  {testi.media_url && testi.media_url.trim() !== "" ? (
                    <ResilientImage
                      src={testi.media_url}
                      alt={testi.person_name || "testimonial"}
                      className="w-10 h-10 rounded-full object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-xs">
                      {getInitials(testi.person_name || "")}
                    </div>
                  )}

                  <div>
                    <h4 className="font-bricolage-grotesque text-sm font-bold text-slate-900">
                      {testi.person_name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {testi.person_designation}
                    </p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

      {/* 4. INDUSTRIES SECTION */}
      <MotionSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 lg:py-16 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 bg-indigo-50/90 border border-indigo-200/80 px-4 py-1.5 rounded-full shadow-2xs">
              <span className="text-xs text-indigo-700 font-extrabold uppercase tracking-wider">Sector Coverage</span>
            </div>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl font-bricolage-grotesque tracking-tight text-slate-900 leading-tight">
              Industries Our Students Work In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, idx) => (
              <MotionDiv
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-[28px] p-7 shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-xl hover:border-indigo-300 transition-all duration-300 flex flex-col gap-3.5"
              >
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 shadow-inner">
                  {ind.icon}
                </div>
                <div>
                  <h3 className="font-bricolage-grotesque text-base sm:text-lg font-bold text-slate-900 mb-1">
                    {ind.name}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-medium">
                    {ind.desc}
                  </p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </MotionSection>

    </div>
  );
};

export default CorporateInfoSections;
