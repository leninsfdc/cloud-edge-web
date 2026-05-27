import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import DefaultArrowIcon from "@/public/icons/arrow.svg";

interface SecondaryButtonProps {
  text?: string;
  onClick?: () => void;
  href?: string;

  // Styling
  className?: string;
  textClassName?: string;

  // Colors
  bgColor?: string;
  borderColor?: string;
  shadowColor?: string;
  textColor?: string;

  // Icon
  showIcon?: boolean;
  icon?: StaticImageData | string;
  iconAlt?: string;

  // Optional
  type?: "button" | "submit" | "reset";
}

const SecondaryButton = ({
  text = "Enroll Now",
  onClick,
  href,

  className = "",
  textClassName = "",

  bgColor = "#65ADFD",
  borderColor = "rgba(255, 255, 255, 1)",
  shadowColor = "rgba(49, 125, 208, 1)",
  textColor = "#FFFFFF",

  showIcon = true,
  icon = DefaultArrowIcon,
  iconAlt = "arrow",

  type = "button",
}: SecondaryButtonProps) => {
  const buttonContent = (
    <>
      <span
        className={`
          font-bold whitespace-nowrap
          text-sm sm:text-base
          transition-all duration-300
          ${textClassName}
        `}
      >
        {text}
      </span>

      {showIcon && (
        <Image
          src={icon}
          alt={iconAlt}
          className="
            w-3.5 h-3.5 sm:w-4 sm:h-4
            object-contain
            transition-transform duration-300
            group-hover:translate-x-1
          "
        />
      )}
    </>
  );

  const commonClasses = `
    group
    relative overflow-hidden
    w-fit
    px-5 md:px-6
    py-2.5 sm:py-3
    rounded-[9830.1px]
    flex items-center justify-center
    gap-2 sm:gap-4
    transition-all duration-300 ease-out
    hover:-translate-y-1
    hover:scale-[1.02]
    active:translate-y-[1px]
    hover:shadow-lg
    cursor-pointer
    ${className}
  `;

  const commonStyles = {
    backgroundColor: bgColor,
    color: textColor,
    border: `0.47px solid ${borderColor}`,
    boxShadow: `3.6px 3.6px 0px 0px ${shadowColor}`,
  };

  // If href exists → render Link
  if (href) {
    return (
      <Link
        href={href}
        className={commonClasses}
        style={commonStyles}
      >
        {buttonContent}
      </Link>
    );
  }

  // Otherwise render button
  return (
    <button
      type={type}
      onClick={onClick}
      className={commonClasses}
      style={commonStyles}
    >
      {buttonContent}
    </button>
  );
};

export default SecondaryButton;