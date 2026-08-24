import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Hosts configured in next.config.ts `images.remotePatterns` — must stay in
// sync with that file. Only these hosts can safely go through next/image's
// optimizer; any other external URL needs `unoptimized` to avoid a runtime
// error for an unconfigured host.
const OPTIMIZABLE_IMAGE_HOSTS = [
  "ehrmhvmsbhmwvexxvuqd.supabase.co",
  "images.unsplash.com",
  "placehold.co",
];

export function isOptimizableImageUrl(url: string): boolean {
  try {
    return OPTIMIZABLE_IMAGE_HOSTS.includes(new URL(url).hostname);
  } catch {
    return false;
  }
}
