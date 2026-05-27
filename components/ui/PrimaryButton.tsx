"use client";

import React from "react";
import Link from "next/link";

interface IPrimaryButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const baseStyles = `
  relative overflow-hidden
  inline-flex items-center justify-center
  px-6 py-3 rounded-[50px]
  text-white text-sm font-semibold
  transition-all duration-300 ease-out
  hover:scale-105
  hover:-translate-y-1
  active:scale-[0.98]
  hover:shadow-[0_10px_30px_rgba(134,94,245,0.45)]
  disabled:opacity-50
  disabled:cursor-not-allowed
  before:absolute before:inset-0
  before:rounded-[50px]
  before:bg-white/10
  before:opacity-0
  hover:before:opacity-100
  before:transition-opacity before:duration-300
  cursor-pointer
`;

const PrimaryButton: React.FC<IPrimaryButtonProps> = ({
  label,
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const buttonStyle: React.CSSProperties = {
    background: `
      radial-gradient(
        65.28% 65.28% at 26.39% 20.83%,
        rgba(255, 255, 255, 0.413) 0%,
        rgba(255, 255, 255, 0) 69.79%,
        rgba(255, 255, 255, 0) 100%
      ),
      radial-gradient(
        92.09% 85.42% at 86.3% 87.5%,
        rgba(0, 0, 0, 0.23) 0%,
        rgba(0, 0, 0, 0) 86.18%
      ),
      #865EF5
    `,
    boxShadow:
      "-1.39px -1.85px 3.24px 0px rgba(255, 255, 255, 0.15) inset",
  };

  const content = (
    <span className="relative z-10">{label}</span>
  );

  // Link Button
  if (href) {
    return (
      <Link
        href={href}
        className={`${baseStyles} ${className}`}
        style={buttonStyle}
      >
        {content}
      </Link>
    );
  }

  // Normal Button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${className}`}
      style={buttonStyle}
    >
      {content}
    </button>
  );
};

export default PrimaryButton;