import { Metadata } from 'next';
export const metadata: Metadata = {
  robots: { index: false, follow: false }
};
import React from 'react'
import BlogContainer from "@/containers/asgard/blogs/BlogContainer";
import {getBlogs} from "@/app/(asgard)/asgard/blogs/actions";
import {IBlogs} from "@/types";

const page = async () => {
  const blogs = (await getBlogs(1, 100, null)).data as IBlogs[];

  return (
      <BlogContainer results={blogs} />
  )
}

export default page