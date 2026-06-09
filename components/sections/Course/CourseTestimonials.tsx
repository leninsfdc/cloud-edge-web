'use client'

import React, { useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import quotes from '@/public/icons/quotes.svg'

import { ICourseTestimonial } from '@/types'

interface Props {
  testimonials?: ICourseTestimonial[]
}
const Arrow = ({
  onClick,
  direction,
}: {
  onClick?: () => void
  direction: 'left' | 'right'
}) => (
  <button
    onClick={onClick}
    className="flex items-center justify-center cursor-pointer"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={direction === 'right' ? 'rotate-180' : ''}
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#6557E3"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
)

const CourseTestimonials = ({ testimonials = [] }: Props) => {
  if (!testimonials.length) return null

  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: testimonials.length > 1,
    infinite: testimonials.length > 2,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: false,
    adaptiveHeight: false,

    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="mt-8 flex justify-center gap-2">
          {React.Children.toArray(dots).slice(0, 3)}
        </ul>
      </div>
    ),

    customPaging: () => (
      <div className="h-2 w-2 rounded-full bg-[#D9D9D9]" />
    ),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  }

  return (
    <div className="mt-12 md:mt-16 rounded-[24px] md:rounded-[28px] border border-[#E2E8F0] bg-white p-5 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 md:mb-8">
        <h3 className="font-bricolage-grotesque text-2xl md:text-3xl font-bold text-[#1E293B]">
          What Our Students Say
        </h3>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button onClick={() => sliderRef.current?.slickPrev()}>
            <Arrow direction="left" />
          </button>

          <button onClick={() => sliderRef.current?.slickNext()}>
            <Arrow direction="right" />
          </button>
        </div>
      </div>

      <div className="mt-6 md:mt-8 overflow-hidden">        <Slider ref={sliderRef}  {...settings}>
        {testimonials.map((item) => (
          <div key={item.id}>
            <div className="pr-0 md:pr-8 min-h-[240px] md:h-[260px] flex flex-col">
              <Image
                src={quotes}
                alt="quotes"
                className="mb-4 md:mb-5 h-6 w-6 md:h-8 md:w-8" />

              <div className="min-h-[110px] md:h-[120px]">                <p
                className="text-sm md:text-[15px] leading-6 md:leading-7 text-[#64748B] overflow-hidden"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                }}
              >
                "{item.review_text}"
              </p>
              </div>

              <div className="mt-auto flex items-center gap-3 pt-4 md:pt-6">
                {item.media_url ? (
                  <Image
                    src={item.media_url}
                    alt={item.person_name || 'student'}
                    width={48}
                    height={48}
                    className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover object-[center_25%]"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E3E1FA] font-semibold text-[#6557E3]">
                    {item.person_name?.charAt(0)}
                  </div>
                )}

                <div className="min-w-0">
                  <div className="font-semibold text-[#334155] truncate">
                    {item.person_name}
                  </div>

                  <div
                    className="text-sm text-[#94A3B8] overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {item.person_designation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>

      <style jsx global>{`
        .slick-dots {
          bottom: -40px;
        }

        .slick-dots li {
          width: auto;
          height: auto;
          margin: 0;
        }

        .slick-dots li button:before {
          display: none;
        }

        .slick-dots li.slick-active div {
          background: #6557e3 !important;
        }

        .slick-dots li div {
          background: #d9d9d9;
          transition: all 0.2s ease;
        }
      `}
      </style>
    </div>
  )
}

export default CourseTestimonials