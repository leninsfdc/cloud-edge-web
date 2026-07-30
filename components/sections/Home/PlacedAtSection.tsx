import MarqueeSlider from '@/components/shared/MarqueeSlider'
import { MotionSection } from '@/components/ui/MotionElements'
import React from 'react'
import amazon from "@/public/marquee/amazon.png"
import amdocs from "@/public/marquee/amdocs.png"
import genpact from "@/public/marquee/genpact.png"
import sony from "@/public/marquee/sony.png"

const PlacedAtSection = () => {
  return (
    <MotionSection 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='py-15'
    >
      <MarqueeSlider title="Alumni placed at" images={[{url: amazon.src, alt:"Amazon"}, {url: amdocs.src, alt: "Amdocs"}, {url: genpact.src, alt: "Genpact"}, {url: sony.src, alt: "Sony"}]} />
    </MotionSection>
  )
}

export default PlacedAtSection