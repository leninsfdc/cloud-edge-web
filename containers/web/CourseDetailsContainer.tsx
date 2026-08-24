import CourseBatchSection from '@/components/sections/Course/CourseBatchSection';
import CourseCtaSection from '@/components/sections/Course/CourseCtaSection';
import CourseHeroSection from '@/components/sections/Course/CourseHeroSection';
import CourseOverview from '@/components/sections/Course/CourseOverview';
import { ICourse } from '@/types'
import React from 'react'
import { PricingCountryCode } from '@/libs/geo';


interface ICourseDetailsContainer {
  data: ICourse;
  countryCode?: PricingCountryCode;
}

const CourseDetailsContainer: React.FC<ICourseDetailsContainer> = ({data, countryCode}) => {
  return (
    <div>
      <CourseHeroSection course={data} />
      <CourseBatchSection  batches={data.batches || []} duration={data.duration || 0} />
      <CourseOverview course={data} countryCode={countryCode} />
      <CourseCtaSection courseName={data.name} />
    </div>
  )
}

export default CourseDetailsContainer