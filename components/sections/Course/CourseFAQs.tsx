'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ICourseFAQ } from '@/types'

interface Props {
  faqs?: ICourseFAQ[]
}

const CourseFAQs = ({ faqs = [] }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!faqs.length) return null

  const sortedFaqs = [...faqs].sort(
    (a, b) => a.display_order - b.display_order
  )

  return (
    <div className="mt-12 md:mt-16">
      <h3 className="text-3xl font-bold font-bricolage-grotesque mb-8">
        Frequently Asked Questions
      </h3>

      <div className="space-y-4">
        {sortedFaqs.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={faq.id}
              className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-6 text-left"
              >
                <span className="text-[18px] font-semibold text-[#334155]">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`text-[#94A3B8] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? 'grid-rows-[1fr]'
                    : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-[#64748B] leading-7">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CourseFAQs