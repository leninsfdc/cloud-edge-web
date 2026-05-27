import React from 'react'
import light from "@/public/icons/light.svg"
import Image from 'next/image'
import WhyChooseUsCard from '@/components/ui/WhyChooseUsCard'
import BadgeLabel from '@/components/shared/BadgeLabel'

const WhyChooseUsSection = () => {
  return (
    <section className='bg-[#010619] py-10 relative overflow-hidden px-4 sm:px-6'>

      {/* Background Blurs (slightly reduced on mobile) */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-40 sm:w-72 h-40 sm:h-72 rounded-full bg-[#6557E380] blur-[120px] sm:blur-[150px]' />
      <div className='absolute -right-20 top-1/2 -translate-y-1/2 w-60 sm:w-125 h-60 sm:h-125 rounded-full bg-[#FF73D86E] blur-[120px] sm:blur-[150px]' />
      <div className='absolute -bottom-10 left-10 sm:left-20 w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-[#0165E080] blur-[120px] sm:blur-[150px]' />
      <div className='absolute -bottom-40 right-0 w-40 sm:w-72 h-40 sm:h-72 rounded-full bg-[#FFB80066] blur-[120px] sm:blur-[150px]' />

      <div className='container mx-auto flex flex-col items-center'>

        {/* Header Badge Wrapper */}
        {/* <div className="relative flex items-center justify-center w-full max-w-xl">

          <div className="absolute inset-0 flex flex-col justify-center gap-2">
            <div className="h-[1px] w-full opacity-70"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, #E0E2EB 25%, transparent 50%, #E0E2EB 75%, transparent 100%)",
              }}
            />
            <div className="h-[1px] w-full opacity-70"
              style={{
                background:
                  "linear-gradient(to right, transparent 0%, #E0E2EB 25%, transparent 50%, #E0E2EB 75%, transparent 100%)",
              }}
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[120px] sm:w-[220px] h-full bg-[radial-gradient(circle,rgba(1,6,25,0.95)_0%,rgba(1,6,25,0.6)_40%,transparent_70%)]" />
          </div>

          <div className="relative z-10 p-[1.5px] rounded-[100px] bg-[linear-gradient(175deg,rgba(224,226,235,0)_0%,#E0E2EB_50%,rgba(224,226,235,0)_100%)]">
            <div className="bg-[#010619] rounded-[100px] p-1.5">

              <div className="bg-white text-black w-fit py-1 pl-1.5 pr-4 rounded-[100px] flex items-center gap-2">
                <div className="bg-[#EDEBFF] rounded-full p-2">
                  <Image src={light} alt="why choose us" className="w-4 h-4" />
                </div>

                <div className="text-xs sm:text-sm font-semibold">
                  Why Choose Us
                </div>
              </div>

            </div>
          </div>


        </div> */}

        <BadgeLabel label='Why Choose Us' />

        {/* Title */}
        <div className='text-white text-center font-medium leading-tight my-10 sm:my-12 text-2xl sm:text-3xl md:text-5xl max-w-xs sm:max-w-md md:max-w-lg'>
          The advantage that gets you hired
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 w-full gap-5 sm:gap-7">

          <div className="sm:col-span-2 lg:col-span-7">
            <WhyChooseUsCard
              icon="🎓"
              title="Certified Expert Trainers"
              description="Every trainer is an active industry professional with 8-15 years of real project experience and current certifications — not just academics."
              statHighlight="8-15"
              statText="yrs avg industry experience per trainer"
            />
          </div>

          <div className='sm:col-span-2 lg:col-span-5'>
            <WhyChooseUsCard
              icon="📹"
              title="Session Recordings"
              description="Every live session is recorded. Access up to 6 months so you can revise, rewatch, and never fall behind."
              statHighlight="6"
              statText="months recording access"
            />
          </div>

          <div className='sm:col-span-1 lg:col-span-4'>
            <WhyChooseUsCard
              icon="🤝"
              title="Placement Assistance"
              description="Resume writing, LinkedIn optimisation, mock interviews and direct referrals to 200+ hiring partners."
              statHighlight="200+"
              statText="hiring partners"
            />
          </div>

          <div className='sm:col-span-1 lg:col-span-4'>
            <WhyChooseUsCard
              icon="⏰"
              title="Flexible Batches"
              description="Weekday evenings and weekend-only batches designed for working professionals. Never miss a class."
            />
          </div>

          <div className='sm:col-span-1 lg:col-span-4'>
            <WhyChooseUsCard
              icon="👥"
              title="Small Batch Sizes"
              description="Maximum 15 students per cohort. More Q&A time, personalised feedback, and direct mentor access."
              statHighlight='≤15'
              statText='students per batch'
            />
          </div>

          <div className='sm:col-span-1 lg:col-span-4'>
            <WhyChooseUsCard
              icon="🏆"
              title="Mock Certification Exams"
              description="500+ exam-quality practice questions curated by certified trainers to prepare you for the real thing."
              statHighlight='500+'
              statText='practice questions'
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection