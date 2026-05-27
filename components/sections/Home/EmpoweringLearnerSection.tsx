import React from 'react'
import peopleIcon from "@/public/icons/people.svg"
import Image from 'next/image'
import empoweringLearnerImage from "@/public/images/empowering-learner.png"
import bookIcon from "@/public/icons/book.svg"
import learningIcon from "@/public/icons/learning.svg"
import careerIcon from "@/public/icons/career.svg"
import industryIcon from "@/public/icons/industry.svg"
import peoplePurpleIcon from "@/public/icons/people-purple.svg"
import capBlue from "@/public/icons/cap-blue.svg"
import videoGreen from "@/public/icons/video-green.svg"
import globPink from "@/public/icons/glob-pink.svg"

const EmpoweringLearnerSection = () => {
  return (
    <section className='bg-white py-12 lg:py-20 relative overflow-hidden'>

      {/* Blur Backgrounds */}
      <div className='absolute bg-[#E9D5FF] w-[300px] md:w-[450px] h-[300px] md:h-[560px] top-[-80px] left-[-100px] opacity-40 rounded-full blur-[100px]' />

      <div className='absolute bg-[#F368B380] w-[300px] md:w-[450px] h-[300px] md:h-[560px] top-[180px] right-[-100px] opacity-40 rounded-full blur-[100px]' />

      <div className='container mx-auto px-4'>

        <div
          className='rounded-[24px] md:rounded-[30px] p-5 sm:p-7 md:p-10 bg-gradient-to-b from-[#FFFFFF] to-[#FBFBFD] relative overflow-hidden'
          style={{
            boxShadow: "0px 0px 10px rgba(133, 120, 252, 0.07)"
          }}
        >

          {/* Right Image */}
          <div className='absolute right-0 top-0 z-0 hidden lg:block'>
            <Image
              src={empoweringLearnerImage}
              alt='Empowering Learners'
              className='w-[450px] xl:w-[612px] h-auto object-contain'
            />
          </div>

          <div className='relative z-20'>

            <div className='space-y-6 md:space-y-7'>

              {/* Badge */}
              <div className=' flex items-center justify-center md:justify-start'>
                <div className='flex items-center justify-center  gap-2 bg-[#F1F1FD] border border-[#E0E7FF] w-fit rounded-full py-[6px] px-[16px]'>
                  <Image
                    src={peopleIcon}
                    alt='people'
                    className='w-4 h-4'
                  />

                  <span className='text-[#8B79FD] text-sm font-medium'>
                    Empowering Learners
                  </span>
                </div>

              </div>

              {/* Heading */}
              <h3 className='font-semibold text-[34px] sm:text-[40px] lg:text-[48px] max-w-xl tracking-[-1px] lg:tracking-[-1.5px] leading-tight text-center sm:text-left'>
                Empowering Learners With Expert Led{" "}

                <span
                  className='bg-clip-text text-transparent'
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #6366F1 0%, #8B5CF6 100%)",
                  }}
                >
                  Training
                </span>{" "}

                <span
                  className='bg-clip-text text-transparent'
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, #6366F1 0%, #8B5CF6 100%)",
                  }}
                >
                  Programs
                </span>
              </h3>

              {/* Description */}
              <p className='text-[#64748B] text-base md:text-lg max-w-xl text-center sm:text-left'>
                We combine industry expertise, practical learning and
                personalized guidance to help you build future-ready skills
                and achieve your goals.
              </p>

              {/* Feature Cards */}
              <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-3xl'>

                <div className='bg-[#FFFFFF1A] border border-[#F8FAFC] rounded-2xl p-4 md:p-5 shadow-inner backdrop-blur-[2px] flex flex-col items-center sm:items-start text-center sm:text-left'>
                  <Image
                    src={bookIcon}
                    alt='Expert-Led Courses'
                    className='w-14 h-14 md:w-16 md:h-16'
                  />

                  <span className='text-sm font-semibold mt-2'>
                    Expert-Led <br /> Courses
                  </span>
                </div>

                <div className='bg-[#FFFFFF1A] border border-[#F8FAFC] rounded-2xl p-4 md:p-5 shadow-inner backdrop-blur-[2px] flex flex-col items-center sm:items-start text-center sm:text-left'>
                  <Image
                    src={learningIcon}
                    alt='Practical Learning'
                    className='w-14 h-14 md:w-16 md:h-16'
                  />

                  <span className='text-sm font-semibold mt-2'>
                    Practical <br /> Learning
                  </span>
                </div>

                <div className='bg-[#FFFFFF1A] border border-[#F8FAFC] rounded-2xl p-4 md:p-5 shadow-inner backdrop-blur-[2px] flex flex-col items-center sm:items-start text-center sm:text-left'>
                  <Image
                    src={careerIcon}
                    alt='Career Support'
                    className='w-14 h-14 md:w-16 md:h-16'
                  />

                  <span className='text-sm font-semibold mt-2'>
                    Career <br /> Support
                  </span>
                </div>

                <div className='bg-[#FFFFFF1A] border border-[#F8FAFC] rounded-2xl p-4 md:p-5 shadow-inner backdrop-blur-[2px] flex flex-col items-center sm:items-start text-center sm:text-left'>
                  <Image
                    src={industryIcon}
                    alt='Industry Relevant'
                    className='w-14 h-14 md:w-16 md:h-16'
                  />

                  <span className='text-sm font-semibold mt-2'>
                    Industry <br /> Relevant
                  </span>
                </div>

              </div>

              {/* Stats Section */}
              <div className='bg-[#FFFFFF1A] border border-[#F8FAFC] rounded-2xl p-2 md:p-5 shadow-inner backdrop-blur-[2px] mt-8 md:mt-14'>

                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 divide-y sm:divide-y divide-[#F1F5F9] xl:divide-y-0 xl:divide-x'>

                  {/* Card 1 */}
                  <div className='flex items-center gap-4 p-4'>
                    <div className='w-14 h-14 rounded-full bg-[#E0E7FF] flex items-center justify-center shrink-0'>
                      <Image
                        src={peoplePurpleIcon}
                        alt='Active Learners'
                        className='w-6 h-6'
                      />
                    </div>

                    <div className='space-y-1'>
                      <div className='text-[#4F46E5] text-[22px] font-extrabold leading-none'>
                        15K+
                      </div>

                      <div className='text-sm font-semibold text-[#1E293B] uppercase'>
                        Active Learners
                      </div>

                      <div className='text-xs text-[#94A3B8]'>
                        Growing community worldwide
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className='flex items-center gap-4 p-4'>
                    <div className='w-14 h-14 rounded-full bg-[#DBEAFE] flex items-center justify-center shrink-0'>
                      <Image
                        src={capBlue}
                        alt='Expert Instructors'
                        className='w-6 h-6'
                      />
                    </div>

                    <div className='space-y-1'>
                      <div className='text-[#2563EB] text-[22px] font-extrabold leading-none'>
                        1.8K+
                      </div>

                      <div className='text-sm font-semibold text-[#1E293B] uppercase'>
                        Expert Instructors
                      </div>

                      <div className='text-xs text-[#94A3B8]'>
                        Industry professionals
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className='flex items-center gap-4 p-4'>
                    <div className='w-14 h-14 rounded-full bg-[#D1EBE5] flex items-center justify-center shrink-0'>
                      <Image
                        src={videoGreen}
                        alt='Live Sessions'
                        className='w-6 h-6'
                      />
                    </div>

                    <div className='space-y-1'>
                      <div className='text-[#059669] text-[22px] font-extrabold leading-none'>
                        120+
                      </div>

                      <div className='text-sm font-semibold text-[#1E293B] uppercase'>
                        Live Sessions
                      </div>

                      <div className='text-xs text-[#94A3B8]'>
                        Every month
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className='flex items-center gap-4 p-4'>
                    <div className='w-14 h-14 rounded-full bg-[#F2DCEA] flex items-center justify-center shrink-0'>
                      <Image
                        src={globPink}
                        alt='Countries Reached'
                        className='w-6 h-6'
                      />
                    </div>

                    <div className='space-y-1'>
                      <div className='text-[#DB2777] text-[22px] font-extrabold leading-none'>
                        150+
                      </div>

                      <div className='text-sm font-semibold text-[#1E293B] uppercase'>
                        Countries Reached
                      </div>

                      <div className='text-xs text-[#94A3B8]'>
                        Global impact
                      </div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default EmpoweringLearnerSection