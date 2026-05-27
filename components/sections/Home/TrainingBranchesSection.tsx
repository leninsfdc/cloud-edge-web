'use client'

import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BadgeLabel from '@/components/shared/BadgeLabel'
import vijaywada from '@/public/images/vijaywada.png'
import kakinada from '@/public/images/kakinada.png'
import hyderabad from '@/public/images/hyderabad.png'

interface Branch {
  id: number
  city: string
  name: string
  address: string
  image: string
}

const branches: Branch[] = [
  {
    id: 1,
    city: 'Vijayawada',
    name: 'CloudEdge Vijayawada Center',
    address: '3rd Floor, SR Plaza, MG Road, Benz Circle, Vijayawada - 520010',
    image: vijaywada.src,
  },
  {
    id: 2,
    city: 'Kakinada',
    name: 'CloudEdge Kakinada Branch',
    address: '2nd Floor, Sai Trade Center, Main Road, Ramanayapeta, Kakinada – 533005',
    image: kakinada.src,
  },
  {
    id: 3,
    city: 'Hyderabad',
    name: 'CloudEdge Hyderabad Hub',
    address: '5th Floor, TechSquare Tower, Hitech City, Madhapur, Hyderabad – 500081',
    image: hyderabad.src,
  },
]

interface BranchCardProps {
  branch: Branch
}

const BranchCard: React.FC<BranchCardProps> = ({ branch }) => (
  <div className="flex items-center gap-5 bg-[#FFFFFF1A] rounded-2xl p-5 border border-[#EFEDED] mx-3 backdrop-blur-md h-full">
    <div className="flex-shrink-0">
      <img
        src={branch.image}
        alt={branch.city}
        className="w-36 h-36 object-cover rounded-2xl"
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.src = `https://placehold.co/144x144/e2e8f0/94a3b8?text=${branch.city}`
        }}
      />
    </div>
    <div className="flex flex-col gap-1.5 min-w-0 flex-1">
      <span
        className="self-start text-xs font-medium px-3 py-1 rounded-full mb-1"
        style={{ backgroundColor: '#FEEEF9', color: '#F232B2' }}
      >
        {branch.city}
      </span>
      <h3 className="text-[#1D1F20] font-semibold text-base leading-snug">
        {branch.name}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{branch.address}</p>
    </div>
  </div>
)

interface CustomDotsProps {
  total: number
  current: number
  onClick: (index: number) => void
}

const CustomDots: React.FC<CustomDotsProps> = ({ total, current, onClick }) => (
  <div className="flex items-center justify-center gap-2 mt-8">
    {Array.from({ length: total }).map((_, i) => (
      <button
        key={i}
        onClick={() => onClick(i)}
        aria-label={`Go to slide ${i + 1}`}
        className="transition-all duration-300 focus:outline-none"
        style={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          border: `2px solid ${i === current ? '#7C6EF8' : '#C7C2F5'}`,
          backgroundColor: i === current ? '#7C6EF8' : 'transparent',
          padding: 0,
          cursor: 'pointer',
        }}
      />
    ))}
  </div>
)

const TrainingBranchesSection: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null)
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: false, // keeps all tracks the same height
    afterChange: (index: number) => setCurrentSlide(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const handleDotClick = (index: number): void => {
    sliderRef.current?.slickGoTo(index)
  }

  return (
    <div className="bg-white py-10 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-10">
          <BadgeLabel label="Training Branches" theme="light" labelBgColor="#EDEBFF" />
          <div className="text-[#1D1F20] text-center font-medium leading-tight my-8 text-3xl sm:text-4xl md:text-5xl">
            Find Our Training Branches Worldwide
          </div>
        </div>

        {/* Slider — force equal row height via CSS */}
        <style>{`
          .branches-slider .slick-track {
            display: flex !important;
          }
          .branches-slider .slick-slide {
            height: inherit !important;
          }
          .branches-slider .slick-slide > div {
            height: 100%;
          }
        `}</style>

        <div className="branches-slider max-w-full overflow-hidden">
          <Slider ref={sliderRef} {...settings}>
            {branches.map((branch: Branch) => (
              <div key={branch.id} className="px-2">
                <BranchCard branch={branch} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Custom Dots */}
        <CustomDots
          total={branches.length}
          current={currentSlide}
          onClick={handleDotClick}
        />
      </div>
    </div>
  )
}

export default TrainingBranchesSection
