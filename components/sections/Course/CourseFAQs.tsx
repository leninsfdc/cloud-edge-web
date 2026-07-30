'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { ICourseFAQ } from '@/types'
import { motion, AnimatePresence } from 'framer-motion'

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 md:mt-16"
    >
      <h3 className="text-3xl font-bold font-bricolage-grotesque mb-8">
        Frequently Asked Questions
      </h3>

      <div className="space-y-4">
        {sortedFaqs.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-colors hover:border-[#cbd5e1]"
            >
              <button
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-6 text-left transition-colors hover:bg-gray-50"
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

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#64748B] leading-7">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default CourseFAQs