import React from "react";
import { Metadata } from "next";
import BlogDetailsContainer from "@/containers/web/BlogDetailsContainer";
import { getBlogBySlug } from "@/app/(asgard)/asgard/blogs/actions";
import { IBlogs } from "@/types";
import { CountrySlug } from "@/libs/country-data";
import { buildAlternates, stripHtml, SITE_URL, ORG_NAME } from "@/libs/seo";

type Props = {
  params: Promise<{ country: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, slug } = await params;
  const blog = await getBlogBySlug(slug) as IBlogs;

  if (!blog) {
    return {
      title: "Blog Not Found | Cloud Edge Solutions",
      description: "The requested blog article could not be found.",
    };
  }

  // blog.description holds the full HTML article body (rendered via
  // dangerouslySetInnerHTML in BlogDetailsContainer) — it must be stripped
  // to plain text before use as a <meta description>, otherwise raw HTML
  // markup ends up in the tag.
  const plainDescription = blog.description
    ? stripHtml(blog.description)
    : `Read ${blog.title} on the Cloud Edge Solutions blog.`;

  return {
    title: `${blog.title} | Cloud Edge Solutions`,
    description: plainDescription,
    openGraph: {
      title: blog.title,
      description: plainDescription,
      images: blog.media_url
        ? [{ url: blog.media_url, width: 1200, height: 630 }]
        : [],
      type: "article",
    },
    alternates: buildAlternates(country as CountrySlug, `/blogs/${slug}`),
  };
}

const Page = async ({ params }: Props) => {
  const { country, slug } = await params;
  const blogData = await getBlogBySlug(slug) as IBlogs;

  if (!blogData) {
    return <BlogDetailsContainer blogData={blogData} />;
  }

  const canonicalUrl = `${SITE_URL}/${country}/blogs/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogData.title,
    description: blogData.description ? stripHtml(blogData.description) : undefined,
    image: blogData.media_url || undefined,
    datePublished: blogData.created_at,
    url: canonicalUrl,
    author: {
      "@type": "Person",
      name: blogData.author_name || ORG_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${country}` },
      { "@type": "ListItem", position: 2, name: "Blogs", item: `${SITE_URL}/${country}/blogs` },
      { "@type": "ListItem", position: 3, name: blogData.title, item: canonicalUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <BlogDetailsContainer blogData={blogData} />
    </>
  );
};

export default Page;
