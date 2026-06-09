import CourseBatchSection from '@/components/sections/Course/CourseBatchSection';
import CourseCtaSection from '@/components/sections/Course/CourseCtaSection';
import CourseHeroSection from '@/components/sections/Course/CourseHeroSection';
import CourseOverview from '@/components/sections/Course/CourseOverview';
import { ICourse } from '@/types'
import React from 'react'


interface ICourseDetailsContainer {
  data: ICourse;
}

const CourseDetailsContainer: React.FC<ICourseDetailsContainer> = ({data}) => {
  return (
    <div>
      <CourseHeroSection course={data} />
      <CourseBatchSection  batches={data.batches || []} duration={data.duration || 0} />
      <CourseOverview course={data} />
      <CourseCtaSection />
    </div>
  )
}

export default CourseDetailsContainer