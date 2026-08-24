import { Metadata } from "next";
import { getCourseBySlug } from "@/app/(asgard)/asgard/academics/courses/actions";
import CourseDetailsContainer from "@/containers/web/CourseDetailsContainer";
import { ICourse } from "@/types";
import { CountrySlug, slugToCode } from "@/libs/country-data";
import { buildAlternates, SITE_URL, ORG_NAME } from "@/libs/seo";

type Props = {
  params: Promise<{ country: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country, slug } = await params;
  const course = await getCourseBySlug(slug) as ICourse;

  if (!course) {
    return {
      title: "Course Not Found | Cloud Edge Solutions",
      description: "The requested course could not be found.",
    };
  }

  return {
    title: `${course.name} Training & Certification | Cloud Edge Solutions`,
    description:
      course.description ||
      `Enroll in ${course.name} online training and certification program with expert instructors at Cloud Edge Solutions.`,
    keywords: course.tags || "",
    openGraph: {
      title: `${course.name} Training & Certification`,
      description:
        course.description ||
        `Learn ${course.name} with industry-focused online training.`,
      images: course.media_url
        ? [{ url: course.media_url, width: 1200, height: 630 }]
        : [],
      type: "website",
    },
    alternates: buildAlternates(country as CountrySlug, `/courses/${slug}`),
  };
}

const Page = async ({ params }: Props) => {
  const { country, slug } = await params;
  const countryCode = slugToCode(country);

  const courseData = await getCourseBySlug(slug) as ICourse;

  if (!courseData) {
    return <CourseDetailsContainer data={courseData} countryCode={countryCode} />;
  }

  const canonicalUrl = `${SITE_URL}/${country}/courses/${slug}`;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: courseData.name,
    description: courseData.description || `${courseData.name} training and certification program.`,
    url: canonicalUrl,
    ...(courseData.media_url ? { image: courseData.media_url } : {}),
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      sameAs: SITE_URL,
    },
    ...(courseData.faqs && courseData.faqs.length > 0
      ? {
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
          },
        }
      : {}),
  };

  const faqSchema =
    courseData.faqs && courseData.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: courseData.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/${country}` },
      { "@type": "ListItem", position: 2, name: "Courses", item: `${SITE_URL}/${country}/courses` },
      { "@type": "ListItem", position: 3, name: courseData.name, item: canonicalUrl },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CourseDetailsContainer data={courseData} countryCode={countryCode} />
    </>
  );
};

export default Page;
