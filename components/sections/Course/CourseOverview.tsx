import { ICourse } from '@/types'
import Image from 'next/image';
import React from 'react'
import cap from "@/public/icons/cap.svg"
import book from "@/public/icons/book-purple.svg"
import module from "@/public/icons/module.svg"
import WeekModuleCard from '@/components/ui/WeekModuleCard';

interface ICourseOverviewProps {
  course: ICourse;
}

const CourseOverview: React.FC<ICourseOverviewProps> = ({ course }) => {
  return (
    <div className=' bg-[#F8FAFC] py-16'>
      <div className=' container mx-auto'>
        <div className=' grid grid-cols-12'>
          {/* left */}
          <div className='col-span-7 space-y-4'>
            <div className='bg-[#E3E1FA] rounded-2xl px-4 py-2 w-fit text-[#6557E3] text-xs font-semibold flex items-center justify-center gap-3 '>
              <Image src={cap} alt='cap' className=' w-5 h-5' />
              {course.label}
            </div>
            <h3 className=' font-bricolage-grotesque font-bold text-4xl'>Course Overview</h3>
            <p className=' text-[#475569] tracking-wide'>{course.overview}</p>
            <div>
              <div className=' flex items-center gap-3'>
                <div className=' flex items-center gap-3'>
                  <Image src={book} alt='book' className=' w-4 h-4' />
                  <div className=' text-[14px] text-[#334155] font-medium'>Full Syllabus</div>
                </div>
                <div className=' flex items-center gap-3'>
                  <Image src={module} alt='module' className=' w-4 h-4' />
                  <div className=' text-[14px] text-[#334155] font-medium'>{course.modules?.length} Modules</div>
                </div>
              </div>

              <div>
                {
                  course.modules?.map((m) => {
                    return (
                      <WeekModuleCard label={`WEEK ${m.display_order}`} title={m.title} points={m.points} />
                    )
                  })
                }
              </div>
            </div>
          </div>


          <div className=' col-span-5'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseOverview