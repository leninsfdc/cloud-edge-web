import Image from "next/image";
import SecondaryButton from "./SecondaryButton";
import calendarIcon from "@/public/icons/calendar.svg";
import ResilientImage from "./ResilientImage";
import placeholder from "@/public/images/placeholder.jpg";
import Link from "next/link";

interface BlogCardProps {
  image: any;
  category: string;
  title: string;
  date: string;
  categoryBgColor?: string;
  categoryTextColor?: string;
  href?: string;
}

const BlogCard = ({
  image,
  category,
  title,
  date,
  categoryBgColor = "#FCEAF3",
  categoryTextColor = "#FF4FA2",
  href = "/blogs",
}: BlogCardProps) => {
  return (
    <div
      className="
        group
        w-full rounded-[28px]
        border border-[#ECECEC]
        bg-white
        p-5 sm:p-6
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
      "
    >
      <div className="flex flex-col sm:flex-row gap-5">

        {/* Image */}
        <Link
          href={href}
          className="
            relative
            w-full sm:w-[180px]
            h-[220px] sm:h-[180px]
            overflow-hidden
            rounded-[24px]
            flex-shrink-0
            block
            bg-slate-100
          "
        >
          <ResilientImage
            src={image || placeholder}
            fallbackSrc={placeholder}
            alt={title}
            fill
            className="
              object-cover
              transition-transform duration-500
              group-hover:scale-105
            "
          />
        </Link>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-between">
          <div>

            {/* Category */}
            <div
              className="
                inline-flex items-center
                rounded-full
                px-4 py-1
                text-xs font-medium
                transition-all duration-300
                group-hover:scale-105
              "
              style={{
                backgroundColor: categoryBgColor,
                color: categoryTextColor,
              }}
            >
              {category}
            </div>

            {/* Title */}
            <Link href={href} className="block">
              <h3
                className="
                  mt-4
                  text-[22px] sm:text-[24px]
                  leading-[125%]
                  font-semibold
                  text-[#111111]
                  line-clamp-2
                  transition-colors duration-300
                  group-hover:text-[#6557E3]
                "
              >
                {title}
              </h3>
            </Link>

            {/* Date */}
            <div className="mt-4 border-b border-dashed border-[#EBEBEB] pb-4">
              <div className="flex items-center gap-2">
                <Image
                  src={calendarIcon}
                  alt="calendar"
                  width={16}
                  height={16}
                  className="transition-transform duration-300 group-hover:rotate-6"
                />

                <p className="text-sm text-[#6E6E6E]">
                  {date}
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="pt-4">
            <SecondaryButton
              text="Learn More"
              bgColor="#C591FB"
              shadowColor="#C591FB"
              href={href}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
