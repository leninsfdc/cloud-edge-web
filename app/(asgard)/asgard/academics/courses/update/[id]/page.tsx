import { getCourseById, getCourses } from '../../actions';
import CreateUpdateCourseContainer from '@/containers/asgard/academics/CreateUpdateCourseContainer';
import React from 'react';
import { notFound } from 'next/navigation';
import { ICourse } from '@/types';

const UpdateCoursePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  try {
    const { id } = await params
    const course = await getCourseById(id);

    const courses = (await getCourses()).data as ICourse[];

    if (!course) {
      return notFound();
    }
    return (
      <CreateUpdateCourseContainer data={course} courses={courses} />
    );
  } catch (error) {
    return notFound();
  }
};

export default UpdateCoursePage;
