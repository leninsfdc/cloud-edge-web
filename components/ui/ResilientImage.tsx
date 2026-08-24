"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";
import capIcon from "@/public/icons/cap.svg";
import { isOptimizableImageUrl } from "@/lib/utils";

interface ResilientImageProps extends Omit<ImageProps, "src"> {
  src?: any;
  fallbackSrc?: any;
  width?: number;
  height?: number;
  fill?: boolean;
}

export default function ResilientImage({
  src,
  fallbackSrc = capIcon,
  alt = "image",
  className = "",
  width,
  height,
  fill,
  ...props
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  const isValidString = typeof src === "string" && src.trim() !== "";
  const isObjectSrc = Boolean(src && typeof src === "object" && "src" in src);

  let finalSrc = fallbackSrc;
  if (!hasError && (isValidString || isObjectSrc)) {
    finalSrc = src;
  }

  const isExternalUrl =
    typeof finalSrc === "string" &&
    (finalSrc.startsWith("http://") || finalSrc.startsWith("https://"));

  // Only bypass Next.js image optimization for external hosts that aren't
  // configured in next.config.ts remotePatterns — otherwise this was
  // disabling resizing/WebP/AVIF/srcset for every Supabase-hosted course
  // image (the vast majority of real content images) despite the config
  // already allowing that host to be optimized.
  const needsUnoptimized = isExternalUrl && !isOptimizableImageUrl(finalSrc as string);

  const isStringSrc = typeof finalSrc === "string";

  // If fill mode is active, omit width and height as required by Next.js <Image />
  if (fill) {
    return (
      <Image
        src={finalSrc}
        alt={alt || "image"}
        fill
        unoptimized={needsUnoptimized}
        onError={() => setHasError(true)}
        className={className}
        {...props}
      />
    );
  }

  // Next.js requires width & height when src is a string and fill is not used.
  // Default to 500 if width/height are not specified for string sources.
  const computedWidth = width ?? (isStringSrc ? 500 : undefined);
  const computedHeight = height ?? (isStringSrc ? 500 : undefined);

  return (
    <Image
      src={finalSrc}
      alt={alt || "image"}
      width={computedWidth}
      height={computedHeight}
      unoptimized={needsUnoptimized}
      onError={() => setHasError(true)}
      className={className}
      {...props}
    />
  );
}
