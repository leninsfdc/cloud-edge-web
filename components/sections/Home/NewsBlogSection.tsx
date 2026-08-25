"use client";
import BadgeLabel from '@/components/shared/BadgeLabel';
import React, { useEffect, useState } from 'react';
import BlogCard from '@/components/ui/BlogCard';
import SecondaryButton from '@/components/ui/SecondaryButton';
import { MotionSection, MotionDiv } from '@/components/ui/MotionElements';
import { getBlogs } from '@/app/(asgard)/asgard/blogs/actions';
import { IBlogs } from '@/types';
import { useCountry } from '@/libs/country-context';
import moment from 'moment';

const getCategoryStyle = (category: string) => {
  const cat = (category || "").toLowerCase();
  if (cat.includes("salesforce")) {
    return { bg: "#EEEDFC", text: "#6557E3" };
  }
  if (cat.includes("devops")) {
    return { bg: "#FEEEF9", text: "#F232B2" };
  }
  if (cat.includes("ui") || cat.includes("ux") || cat.includes("design")) {
    return { bg: "#F8EDEB", text: "#B5493B" };
  }
  if (cat.includes("ai") || cat.includes("intelligence") || cat.includes("cloud") || cat.includes("aws")) {
    return { bg: "#E6EAF1", text: "#193D83" };
  }
  if (cat.includes("sap")) {
    return { bg: "#E0F2FE", text: "#0284C7" };
  }
  if (cat.includes("java") || cat.includes("development") || cat.includes("code")) {
    return { bg: "#FEF2F2", text: "#DC2626" };
  }
  return { bg: "#F3E8FF", text: "#9333EA" };
};

const getBlogCategory = (blog: IBlogs | any) => {
  if (blog.category) return blog.category;
  if (blog.tags && blog.tags.length > 0 && blog.tags[0]) {
    return blog.tags[0];
  }
  const title = (blog.title || "").toLowerCase();
  if (title.includes("salesforce")) return "Salesforce";
  if (title.includes("sap")) return "SAP";
  if (title.includes("devops")) return "DevOps";
  if (title.includes("ui") || title.includes("ux")) return "UI / UX";
  if (title.includes("ai")) return "AI";
  if (title.includes("aws") || title.includes("cloud")) return "Cloud";
  if (title.includes("java")) return "Java";
  return "Article";
};

const formatBlogDate = (dateVal?: Date | string) => {
  if (!dateVal) return moment().format("MMMM DD, YYYY");
  const parsed = moment(dateVal);
  return parsed.isValid() ? parsed.format("MMMM DD, YYYY") : String(dateVal);
};

const BlogCardSkeleton = () => {
  return (
    <div className="w-full rounded-[28px] border border-[#ECECEC] bg-white p-5 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-5 animate-pulse">
        {/* Image skeleton */}
        <div className="w-full sm:w-[180px] h-[220px] sm:h-[180px] rounded-[24px] bg-slate-200 flex-shrink-0" />

        {/* Content skeleton */}
        <div className="flex flex-1 flex-col justify-between">
          <div>
            {/* Category badge skeleton */}
            <div className="w-24 h-6 rounded-full bg-slate-200" />

            {/* Title skeleton */}
            <div className="mt-4 space-y-2">
              <div className="w-full h-6 rounded-md bg-slate-200" />
              <div className="w-3/4 h-6 rounded-md bg-slate-200" />
            </div>

            {/* Date skeleton */}
            <div className="mt-4 border-b border-dashed border-[#EBEBEB] pb-4">
              <div className="w-28 h-4 rounded-md bg-slate-200" />
            </div>
          </div>

          {/* Button skeleton */}
          <div className="pt-4">
            <div className="w-32 h-10 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

const NewsBlogSection = () => {
  const { country } = useCountry();
  const [blogs, setBlogs] = useState<IBlogs[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getBlogs(1, 6, true)
      .then((res) => {
        if (isMounted && res?.data) {
          // Take up to 6 blogs, if lower than 6 just use what's returned
          setBlogs(res.data.slice(0, 6));
        }
      })
      .catch((err) => {
        console.error("Error fetching blogs for NewsBlogSection:", err);
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <MotionSection
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className='bg-[#F8F8FA] py-10 relative'
    >
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#F232B2] blur-[300px]" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#6557E3] blur-[300px]" />
      <div className='container mx-auto px-4 sm:px-6'>
        <div className='flex items-center justify-center flex-col'>
          <BadgeLabel label='News & Blogs' theme='light' />
          <div className="text-[#1D1F20] text-center font-medium leading-tight my-8 text-3xl sm:text-4xl md:text-5xl">
            Our Latest Article Feed
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            Array.from({ length: 2 }).map((_, index) => (
              <BlogCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : blogs.length > 0 ? (
            blogs.map((blog, index) => {
              const category = getBlogCategory(blog);
              const style = getCategoryStyle(category);
              const formattedDate = formatBlogDate(blog.created_at);
              const blogSlug = blog.url_slug || "";
              const href = blogSlug ? `/${country.slug}/blogs/${blogSlug}` : `/${country.slug}/blogs`;

              return (
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  key={blog.id || blog.url_slug || index}
                >
                  <BlogCard
                    image={blog.media_url}
                    category={category}
                    title={blog.title || "Untitled Article"}
                    date={formattedDate}
                    categoryBgColor={style.bg}
                    categoryTextColor={style.text}
                    href={href}
                  />
                </MotionDiv>
              );
            })
          ) : null}
        </div>

        <div className='flex items-center justify-center mt-14 sm:mt-20'>
          <SecondaryButton
            text='View All Articles'
            bgColor='#6557E3'
            borderColor='#6557E3'
            shadowColor='#3A1078'
            href={`/${country.slug}/blogs`}
          />
        </div>
      </div>
    </MotionSection>
  );
};

export default NewsBlogSection;
