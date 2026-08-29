// import React from 'react'
// import contactIcon from "@/public/icons/contact.svg"
// import emailIcon from "@/public/icons/email.svg"
// import callIcon from "@/public/icons/call.svg"
// import visitIcon from "@/public/icons/visit.svg"
// import Image from 'next/image'
// import Link from 'next/link'
// import contactImg from "@/public/images/contact.png"

// const GetinTouchCard = () => {
//   return (
//     <div
//       className='bg-[#FFFFFF1A] border border-[#BDCDE9] rounded-[24px] sm:rounded-[30px] w-full h-full p-5 sm:p-6 relative overflow-hidden'
//       style={{ boxShadow: "4px 4px 0px 0px rgba(189, 205, 233, 1)" }}
//     >
//       {/* Blur */}
//       <div className='absolute top-24 right-0 bg-[#7635D6] w-20 h-20 blur-[150px]' />
//       <div className='absolute bottom-24 -left-2 bg-[#F77A40] w-20 h-20 blur-[150px]' />

//       <div className='text-black font-semibold text-2xl mb-8 sm:mb-10 relative z-10'>
//         Get In Touch
//       </div>

//       <div className='space-y-6 sm:space-y-8 relative z-10'>

//         {/* Contact */}
//         <div className='flex items-start gap-3'>
//           <Image
//             src={contactIcon}
//             alt='contact'
//             className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
//           />

//           <div>
//             <h4 className='font-semibold text-black'>
//               Contact Person
//             </h4>

//             <h5 className='text-[#6E6E6E] text-sm'>
//               Teja Gongati
//             </h5>
//           </div>
//         </div>

//         {/* Email */}
//         <div className='flex items-start gap-3'>
//           <Image
//             src={emailIcon}
//             alt='email'
//             className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
//           />

//           <div className='min-w-0'>
//             <h4 className='font-semibold text-black'>
//               Email Us
//             </h4>

//             <Link
//               href={"mailto:info@cloudedge.in"}
//               className='text-[#6E6E6E] text-sm break-all'
//             >
//               info@cloudedge.in
//             </Link>
//           </div>
//         </div>

//         {/* Call */}
//         <div className='flex items-start gap-3'>
//           <Image
//             src={callIcon}
//             alt='Call'
//             className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
//           />

//           <div>
//             <h4 className='font-semibold text-black'>
//               Call Us
//             </h4>

//             <Link
//               href={"tel:+447442586325"}
//               className='text-[#6E6E6E] text-sm'
//             >
//               +44 74425 86325
//             </Link>
//           </div>
//         </div>

//         {/* Address */}
//         <div className='flex items-start gap-3'>
//           <Image
//             src={visitIcon}
//             alt='visit'
//             className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
//           />

//           <div className='min-w-0'>
//             <h4 className='font-semibold text-black'>
//               Visit Us
//             </h4>

//             <h5 className='text-[#6E6E6E] text-sm leading-6 pr-10'>
//               1-8, Tempalli, Gannavaram, Krishna District, Andhra Pradesh, India - 521286
//             </h5>
//           </div>
//         </div>

//         <div className='relative flex-1 min-h-[180px] mt-8'>
//           <Image
//             src={contactImg}
//             alt='contact-img'
//             fill
//             className='object-contain object-bottom'
//           />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default GetinTouchCard



import React from 'react'
import contactIcon from "@/public/icons/contact.svg"
import emailIcon from "@/public/icons/email.svg"
import callIcon from "@/public/icons/call.svg"
import visitIcon from "@/public/icons/visit.svg"
import Image from 'next/image'
import Link from 'next/link'
import contactImg from "@/public/images/contact.png"
import { MailOpen, MapPinHouse, PhoneCall, Users } from 'lucide-react'

const GetinTouchCard = () => {
  return (
    <div
      className='bg-[#FFFFFF1A] border border-[#BDCDE9] rounded-[24px] sm:rounded-[30px] w-full h-full p-5 sm:p-6 relative overflow-hidden'
      style={{ boxShadow: "4px 4px 0px 0px rgba(189, 205, 233, 1)" }}
    >
      {/* Blur */}
      <div className='absolute top-24 right-0 bg-[#7635D6] w-20 h-20 blur-[150px]' />
      <div className='absolute bottom-24 -left-2 bg-[#F77A40] w-20 h-20 blur-[150px]' />

      <h2 className='text-black font-semibold text-2xl mb-8 sm:mb-10 relative z-10'>
        Get In Touch
      </h2>

      <div className='space-y-6 sm:space-y-8 relative z-10'>

        {/* Contact */}
        <div className='flex items-start gap-3'>
          {/* <Image
            src={contactIcon}
            alt='contact'
            className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
          /> */}
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md bg-teal-500/15 shadow-lg text-teal-500">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>

          <div>
            <h3 className='font-semibold text-black'>
              Contact Person
            </h3>

            <p className='text-[#6E6E6E] text-sm'>
              Teja Gongati
            </p>
          </div>
        </div>

        {/* Email */}
        <div className='flex items-start gap-3'>
          {/* <Image
            src={emailIcon}
            alt='email'
            className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
          /> */}
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md bg-purple-500/15 shadow-lg text-purple-600">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </div>

          <div className='min-w-0'>
            <h3 className='font-semibold text-black'>
              Email Us
            </h3>

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
          {/* <Image
              src={callIcon}
              alt='Call'
              className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
            /> */}

          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md bg-amber-500/15 shadow-lg text-amber-500">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </div>

          <div>
            <h3 className='font-semibold text-black'>
              Call Us
            </h3>

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
          {/* <Image
            src={visitIcon}
            alt='visit'
            className='w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] shrink-0'
          /> */}
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md bg-pink-500/15 shadow-lg text-pink-500">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>

          <div className='min-w-0'>
            <h3 className='font-semibold text-black'>
              Visit Us
            </h3>

            <p className='text-[#6E6E6E] text-sm leading-6 pr-10'>
              1-8, Tempalli, Gannavaram, Krishna District, Andhra Pradesh, India - 521286
            </p>
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