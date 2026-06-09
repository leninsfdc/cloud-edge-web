import CreateUpdateCourseContainer from '@/containers/asgard/academics/CreateUpdateCourseContainer';
import React from 'react';
import { getCourses } from '../actions';
import { ICourse } from '@/types';

const CreateCoursePage = async () => {

  const courses = (await getCourses()).data as ICourse[];

  return (
    <CreateUpdateCourseContainer courses={courses} />
  );
};

export default CreateCoursePage;
