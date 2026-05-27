import React from 'react'
import contactIcon from "@/public/icons/contact.svg"
import emailIcon from "@/public/icons/email.svg"
import callIcon from "@/public/icons/call.svg"
import visitIcon from "@/public/icons/visit.svg"
import Image from 'next/image'
import Link from 'next/link'
import contactImg from "@/public/images/contact.png"

const GetinTouchCard = () => {
  return (
    <div
      className='bg-[#FFFFFF1A] border border-[#BDCDE9] rounded-[24px] sm:rounded-[30px] w-full h-full p-5 sm:p-6 relative overflow-hidden'
      style={{ boxShadow: "4px 4px 0px 0px rgba(189, 205, 233, 1)" }}
    >
      {/* Blur */}
      <div className='absolute top-24 right-0 bg-[#7635D6] w-20 h-20 blur-[150px]' />
      <div className='absolute bottom-24 -left-2 bg-[#F77A40] w-20 h-20 blur-[150px]' />

      <div className='text-black font-semibold text-2xl mb-8 sm:mb-10 relative z-10'>
        Get In Touch
      </div>

      <div className='space-y-6 sm:space-y-8 relative z-10'>

        {/* Contact */}
        <div className='flex items-start gap-3'>
          <Image
            src={contactIcon}
            alt='contact'
            className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
          />

          <div>
            <h4 className='font-semibold text-black'>
              Contact Person
            </h4>

            <h5 className='text-[#6E6E6E] text-sm'>
              Teja Gongati
            </h5>
          </div>
        </div>

        {/* Email */}
        <div className='flex items-start gap-3'>
          <Image
            src={emailIcon}
            alt='email'
            className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
          />

          <div className='min-w-0'>
            <h4 className='font-semibold text-black'>
              Email Us
            </h4>

            <Link
              href={"mailto:info@cloudedge.in"}
              className='text-[#6E6E6E] text-sm break-all'
            >
              info@cloudedge.in
            </Link>
          </div>
        </div>

        {/* Call */}
        <div className='flex items-start gap-3'>
          <Image
            src={callIcon}
            alt='Call'
            className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
          />

          <div>
            <h4 className='font-semibold text-black'>
              Call Us
            </h4>

            <Link
              href={"tel:+447442586325"}
              className='text-[#6E6E6E] text-sm'
            >
              +44 74425 86325
            </Link>
          </div>
        </div>

        {/* Address */}
        <div className='flex items-start gap-3'>
          <Image
            src={visitIcon}
            alt='visit'
            className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
          />

          <div className='min-w-0'>
            <h4 className='font-semibold text-black'>
              Visit Us
            </h4>

            <h5 className='text-[#6E6E6E] text-sm leading-6 pr-10'>
              1-8, Tempalli, Gannavaram, Krishna District, Andhra Pradesh, India - 521286
            </h5>
          </div>
        </div>

        <div className='relative flex-1 min-h-[180px] mt-8'>
          <Image
            src={contactImg}
            alt='contact-img'
            fill
            className='object-contain object-bottom'
          />
        </div>

      </div>
    </div>
  )
}

export default GetinTouchCard