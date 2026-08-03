import { Metadata } from 'next';
export const metadata: Metadata = {
  robots: { index: false, follow: false }
};
import React from 'react';
import CreateUpdateBlogContainer from "@/containers/asgard/blogs/CreateUpdateBlogContainer";

const Page = () => {
    return (
        <div>
            <CreateUpdateBlogContainer />
        </div>
    );
};

export default Page;