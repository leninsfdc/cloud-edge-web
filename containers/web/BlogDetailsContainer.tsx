"use client";

import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import {
  CalendarDays,
  Clock,
  ArrowLeft,
  Share2,
  ChevronRight,
  Tag,
  Sparkles,
  BookOpen,
  Send,
} from "lucide-react";
import { toast } from "react-hot-toast";
import placeholder from "@/public/images/placeholder.jpg";
import { IBlogs } from "@/types";
import BadgeLabel from "@/components/shared/BadgeLabel";
import PrimaryButton from "@/components/ui/PrimaryButton";
import AuthorCard from "@/components/ui/AuthorCard";
import { useCountry } from "@/libs/country-context";
import { isOptimizableImageUrl } from "@/lib/utils";

interface IProps {
  blogData: IBlogs;
}

const BlogDetailsContainer: FC<IProps> = ({ blogData }) => {
  const { country } = useCountry();
  const getCountryHref = (href: string) => `/${country.slug}${href === "/" ? "" : href}`;

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Blog link copied to clipboard!");
    }
  };

  const handleShareSocial = (platform: "twitter" | "linkedin" | "whatsapp") => {
    if (typeof window === "undefined") return;
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blogData?.title || "Check out this article on Cloud Edge");

    let shareUrl = "";
    if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
    } else if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === "whatsapp") {
      shareUrl = `https://wa.me/?text=${title}%20${url}`;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="bg-[#F8F7FF] min-h-screen pb-20">
      {/* Top Banner & Header Section */}
      <section className="bg-gradient-to-b from-[#EFEEFC] via-[#F4F2FF] to-[#F8F7FF] pt-28 md:pt-36 pb-12 md:pb-16 border-b border-[#E4E0FA]">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Top Navigation & Breadcrumbs */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <Link
              href={getCountryHref("/blogs")}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#6C5CFF] hover:text-[#5E4AE3] bg-white px-4 py-2 rounded-full border border-[#DDDFF5] shadow-2xs hover:shadow-xs transition-all transform hover:-translate-x-0.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Articles</span>
            </Link>

            {/* Breadcrumb Trail */}
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-xs text-slate-500 overflow-x-auto"
            >
              <Link href={getCountryHref("/")} className="hover:text-[#7C6EF8]">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link href={getCountryHref("/blogs")} className="hover:text-[#7C6EF8]">
                Blogs
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-slate-800 font-medium truncate max-w-[200px] sm:max-w-[300px]">
                {blogData.title}
              </span>
            </nav>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="flex justify-center">
              <BadgeLabel label="Blog Insight" theme="light" labelBgColor="#EDEBFF" />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#07042F] leading-tight">
              {blogData.title}
            </h1>

            {/* Meta Items */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 pt-2">
              {/* Publication Date */}
              <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#DDDFF5] shadow-2xs">
                <CalendarDays className="w-4 h-4 text-[#7C6EF8]" />
                <span>{moment(blogData.created_at).format("MMMM DD, YYYY")}</span>
              </div>

              {/* Estimated Reading Time */}
              <div className="flex items-center gap-1.5 bg-white/80 px-3.5 py-1.5 rounded-full border border-[#DDDFF5] shadow-2xs">
                <Clock className="w-4 h-4 text-[#7C6EF8]" />
                <span>{blogData.read_time || "5 min read"}</span>
              </div>

              {/* Tag Pills */}
              {blogData.tags && blogData.tags.length > 0 && (
                <div className="flex items-center gap-1.5 flex-wrap">
                  {blogData.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 bg-[#7C6EF8]/10 text-[#7C6EF8] text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <main className="container mx-auto px-4 sm:px-6 -mt-6 sm:-mt-8">
        <div className="max-w-6xl mx-auto">
          {/* Featured Hero Media */}
          <div className="relative w-full h-[260px] sm:h-[380px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-white/60 mb-10 bg-slate-100">
            <Image
              src={(blogData?.media_url && blogData.media_url.trim() !== "") ? blogData.media_url : placeholder}
              alt={blogData?.title || "Blog Cover Image"}
              fill
              unoptimized={!!blogData?.media_url && !isOptimizableImageUrl(blogData.media_url)}
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT: Main Blog Body */}
            <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md shadow-slate-200/40">
              {/* HTML Blog Content */}
              <div
                className="blog-detail prose prose-indigo max-w-none text-slate-800"
                dangerouslySetInnerHTML={{ __html: blogData.description || "" }}
              />

              {/* Tags Section Footer */}
              {blogData.tags && blogData.tags.length > 0 && (
                <div className="pt-8 mt-10 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
                    Topics:
                  </span>
                  {blogData.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg hover:bg-slate-200 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Social Share Bar */}
              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#F8F7FF] p-4 sm:p-5 rounded-2xl">
                <span className="text-xs font-bold text-[#07042F] uppercase tracking-wider">
                  Share this Article:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShareSocial("linkedin")}
                    className="px-3.5 py-2 rounded-xl bg-[#0A66C2] text-white text-xs font-semibold hover:bg-[#084e96] transition-all shadow-2xs"
                  >
                    LinkedIn
                  </button>
                  <button
                    onClick={() => handleShareSocial("twitter")}
                    className="px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-all shadow-2xs"
                  >
                    Twitter / X
                  </button>
                  <button
                    onClick={() => handleShareSocial("whatsapp")}
                    className="px-3.5 py-2 rounded-xl bg-[#25D366] text-white text-xs font-semibold hover:bg-[#1eb956] transition-all shadow-2xs"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="p-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-[#7C6EF8] hover:text-[#7C6EF8] transition-all shadow-2xs"
                    title="Copy Article Link"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Author Details Card Section */}
              <div className="mt-10">
                <AuthorCard
                  authorName={blogData.author_name}
                  authorRole={blogData.author_role}
                  authorImage={blogData.author_image}
                  authorBio={blogData.author_bio}
                />
              </div>
            </article>

            {/* RIGHT: Sidebar Widgets */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Author Quick Preview Widget */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
                  Article Author
                </h3>
                <AuthorCard
                  authorName={blogData.author_name}
                  authorRole={blogData.author_role}
                  authorImage={blogData.author_image}
                  authorBio={blogData.author_bio}
                  compact={true}
                />
              </div>

              {/* Course Promo CTA Card */}
              <div className="bg-gradient-to-br from-[#07042F] to-[#1E195E] rounded-3xl p-6 sm:p-7 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#7C6EF8]/20 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                    <Sparkles className="w-5 h-5 text-[#FFC224]" />
                  </div>

                  <h3 className="text-xl font-bold leading-tight">
                    Ready to Boost Your Career in Cloud & Enterprise Tech?
                  </h3>

                  <p className="text-xs text-white/80 leading-relaxed">
                    Gain hands-on training with 100% practical live projects, certified SAP & Salesforce mentors, and direct placement support.
                  </p>

                  <div className="pt-2">
                    <PrimaryButton
                      href={getCountryHref("/courses")}
                      label="Explore Courses"
                      className="w-full flex justify-center py-3 text-sm font-semibold shadow-lg shadow-indigo-900/50"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Consultation Request Box */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#7C6EF8]/10 flex items-center justify-center text-[#7C6EF8]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#07042F]">
                      Have Questions?
                    </h4>
                    <p className="text-xs text-slate-500">
                      Talk to our career advisory team
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Our advisors reply within 60 minutes. Get personalized roadmap recommendations for your background.
                </p>

                <a
                  href="https://wa.me/447442586325?text=Hi%20Cloud%20Edge%20Solutions%2C%20I%20have%20questions%20regarding%20courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#7C6EF8] hover:bg-[#6859e3] text-white text-xs font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Chat with Advisory Team</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetailsContainer;