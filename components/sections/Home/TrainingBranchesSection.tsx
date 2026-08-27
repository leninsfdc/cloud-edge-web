'use client'

import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BadgeLabel from '@/components/shared/BadgeLabel'
import { MotionSection } from '@/components/ui/MotionElements'
import { MapPin, Phone, ArrowRight, Navigation } from 'lucide-react'
import Link from 'next/link'
import { useCountry } from '@/libs/country-context'

import vijaywada from '@/public/images/vijaywada.png'
import kakinada from '@/public/images/kakinada.png'
import hyderabad from '@/public/images/hyderabad.png'

interface Branch {
  id: number
  city: string
  name: string
  address: string
  phone: string
  image: string
  /** Slug of the dedicated /in/salesforce-training/[location] page for this branch, if one exists. */
  citySlug?: string
}

const branches: Branch[] = [
  {
    id: 1,
    city: 'Vijayawada',
    name: 'CloudEdge Vijayawada Center',
    address: '3rd Floor, SR Plaza, MG Road, Benz Circle, Vijayawada - 520010',
    phone: '+91 98765 43210',
    image: vijaywada.src,
    citySlug: 'vijayawada',
  },
  {
    id: 2,
    city: 'Kakinada',
    name: 'CloudEdge Kakinada Branch',
    address: '2nd Floor, Sai Trade Center, Main Road, Ramanayapeta, Kakinada – 533005',
    phone: '+91 98765 43211',
    image: kakinada.src,
  },
  {
    id: 3,
    city: 'Hyderabad',
    name: 'CloudEdge Hyderabad Hub',
    address: '5th Floor, TechSquare Tower, Hitech City, Madhapur, Hyderabad – 500081',
    phone: '+91 98765 43212',
    image: hyderabad.src,
    citySlug: 'hyderabad',
  },
  {
    id: 4,
    city: 'Visakhapatnam',
    name: 'CloudEdge Vizag Center',
    address: '4th Floor, VIP Towers, VIP Road, Siripuram, Visakhapatnam – 530003',
    phone: '+91 98765 43213',
    image: vijaywada.src,
  },
  {
    id: 5,
    city: 'Bangalore',
    name: 'CloudEdge Bangalore Hub',
    address: '1st Floor, Tech Heights, Outer Ring Road, Marathahalli, Bangalore – 560037',
    phone: '+91 98765 43214',
    image: hyderabad.src,
  },
]

interface BranchCardProps {
  branch: Branch
  isActive?: boolean
}

const BranchCard: React.FC<BranchCardProps> = ({ branch, isActive }) => (
  <div
    className={`branch-card flex flex-col sm:flex-row items-center gap-5 rounded-3xl p-5 border transition-all duration-500 h-full cursor-pointer relative overflow-hidden ${isActive
        ? 'bg-white border-2 border-[#7C6EF8] shadow-2xl shadow-[#7C6EF8]/20 scale-105 z-10'
        : 'bg-white/80 border border-slate-200/90 shadow-sm opacity-85 scale-95 hover:opacity-100 hover:scale-100'
      }`}
  >
    <div className="relative flex-shrink-0 w-full sm:w-auto">
      <img
        src={branch.image}
        alt={branch.city}
        className={`w-full h-44 sm:w-36 sm:h-36 object-cover rounded-2xl transition-transform duration-300 ${isActive ? 'ring-2 ring-[#7C6EF8]/50 shadow-md' : 'border border-slate-100'
          }`}
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.src = `https://placehold.co/144x144/e2e8f0/94a3b8?text=${branch.city}`
        }}
      />
    </div>

    <div className="flex flex-col gap-2 min-w-0 flex-1 w-full">
      <div className="flex items-center justify-between gap-2">
        <span
          className={`self-start text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 transition-colors ${isActive
              ? 'bg-[#7C6EF8]/10 text-[#7C6EF8]'
              : 'bg-pink-50 text-pink-600'
            }`}
        >
          <Navigation className="w-3 h-3" />
          {branch.city}
        </span>
      </div>

      <h3
        className={`font-bold text-base leading-snug transition-colors ${isActive ? 'text-[#07042F]' : 'text-slate-800'
          }`}
      >
        {branch.citySlug ? (
          <Link href={`/in/salesforce-training/${branch.citySlug}`} className="hover:text-[#7C6EF8] hover:underline">
            {branch.name}
          </Link>
        ) : (
          branch.name
        )}
      </h3>

      <div className="flex items-start gap-1.5 text-slate-500 text-xs leading-relaxed">
        <MapPin className="w-4 h-4 text-[#7C6EF8] shrink-0 mt-0.5" />
        <span className="line-clamp-2">{branch.address}</span>
      </div>


      <div className="pt-2 flex items-center justify-between border-t border-slate-100 mt-1">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-all group ${isActive ? 'text-[#7C6EF8] hover:text-[#5E4AE3]' : 'text-slate-600 hover:text-[#7C6EF8]'
            }`}
        >
          <span>Get Directions</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </div>
)

interface CustomDotsProps {
  total: number
  current: number
  onClick: (index: number) => void
}

const CustomDots: React.FC<CustomDotsProps> = ({ total, current, onClick }) => (
  <div className="flex items-center justify-center gap-2.5 mt-10">
    {Array.from({ length: total }).map((_, i) => {
      const isSelected = i === current
      return (
        <button
          key={i}
          onClick={() => onClick(i)}
          aria-label={`Go to slide ${i + 1}`}
          className="transition-all duration-300 focus:outline-none cursor-pointer"
          style={{
            width: isSelected ? 28 : 10,
            height: 10,
            borderRadius: 9999,
            backgroundColor: isSelected ? '#7C6EF8' : '#DCD9F8',
            boxShadow: isSelected ? '0 2px 8px rgba(124, 110, 248, 0.4)' : 'none',
          }}
        />
      )
    })}
  </div>
)

const TrainingBranchesSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const { country } = useCountry()

  // These are physical India branches — showing them on other countries'
  // homepages misrepresents CloudEdge as having a local presence it doesn't.
  if (country.slug !== "in") return null

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    pauseOnHover: true,
    beforeChange: (_current: number, next: number) => {
      setCurrentSlide(next % branches.length)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0px',
        },
      },
    ],
  }

  const handleDotClick = (index: number): void => {
    sliderRef.current?.slickGoTo(index)
  }

  return (
    <MotionSection
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-white via-[#F7F6FF] to-white py-16 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">

        <div className="flex flex-col items-center justify-center mb-12">
          <BadgeLabel label="Training Branches" theme="light" labelBgColor="#EDEBFF" />
          <h2 className="text-[#07042F] text-center font-bold tracking-tight leading-tight mt-4 text-3xl sm:text-4xl md:text-5xl max-w-2xl">
            Find Our Training Branches Worldwide
          </h2>
          <p className="text-slate-500 text-center text-sm sm:text-base mt-3 max-w-lg">
            Visit any of our state-of-the-art learning hubs equipped with modern infrastructure and expert instructors.
          </p>
        </div>


        <style>{`
          .branches-slider .slick-track {
            display: flex !important;
            align-items: center !important;
            padding: 24px 0 !important;
          }
          .branches-slider .slick-slide {
            padding: 0 12px;
            transition: all 0.4s ease;
          }
          .branches-slider .slick-slide > div {
            height: 100%;
          }
          /* Desktop Centered Active Slide Styling */
          @media (min-width: 640px) {
            .branches-slider .slick-slide.slick-center .branch-card {
              background-color: #ffffff !important;
              border-color: #7C6EF8 !important;
              border-width: 2px !important;
              transform: scale(1.06) !important;
              box-shadow: 0 20px 35px -10px rgba(124, 110, 248, 0.25) !important;
              opacity: 1 !important;
              z-index: 20 !important;
            }
            .branches-slider .slick-slide:not(.slick-center) .branch-card {
              opacity: 0.75 !important;
              transform: scale(0.96) !important;
            }
          }
          /* Mobile View Fix: Always 100% Opacity and full crisp clarity */
          @media (max-width: 639px) {
            .branches-slider .slick-slide .branch-card {
              opacity: 1 !important;
              transform: scale(1) !important;
              box-shadow: 0 10px 25px -5px rgba(124, 110, 248, 0.15) !important;
              border-color: #7C6EF8 !important;
              border-width: 2px !important;
            }
          }
        `}</style>

        <div className="branches-slider max-w-full">
          <Slider ref={sliderRef} {...settings}>
            {branches.map((branch: Branch, index: number) => {
              const isActive = index === currentSlide
              return (
                <div key={branch.id}>
                  <BranchCard branch={branch} isActive={isActive} />
                </div>
              )
            })}
          </Slider>
        </div>


        <CustomDots
          total={branches.length}
          current={currentSlide}
          onClick={handleDotClick}
        />
      </div>
    </MotionSection>
  )
}

export default TrainingBranchesSection
