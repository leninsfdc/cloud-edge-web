"use client";

import React, { createContext, useContext, useMemo, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  CountryOption,
  CountrySlug,
  getCountryOption,
} from "./country-data";

export * from "./country-data";

// ─── Context ─────────────────────────────────────────────────────────────────

interface CountryContextValue {
  country: CountryOption;
  /** Navigate to the same page but with a different country prefix & persist preference */
  switchCountry: (slug: CountrySlug) => void;
}

const CountryContext = createContext<CountryContextValue | null>(null);

function setCountryCookie(slug: CountrySlug) {
  if (typeof document !== "undefined") {
    // Persist selected country preference in cookie for 1 year
    document.cookie = `user_country=${slug}; path=/; max-age=31536000; SameSite=Lax`;
  }
}

export function CountryProvider({
  slug,
  children,
}: {
  slug: CountrySlug;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const country = useMemo(() => getCountryOption(slug), [slug]);

  // Persist current active country route to cookie
  useEffect(() => {
    setCountryCookie(slug);
  }, [slug]);

  const switchCountry = (newSlug: CountrySlug) => {
    setCountryCookie(newSlug);
    if (newSlug === slug) return;
    // Replace the leading /{currentSlug} with /{newSlug}
    const rest = pathname.replace(/^\/(in|uk|us|ca)/, "");
    router.push(`/${newSlug}${rest || "/"}`);
  };

  return (
    <CountryContext.Provider value={{ country, switchCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

const DEFAULT_FALLBACK_COUNTRY = getCountryOption("us");

export function useCountry(): CountryContextValue {
  const ctx = useContext(CountryContext);
  if (!ctx) {
    return {
      country: DEFAULT_FALLBACK_COUNTRY,
      switchCountry: () => {},
    };
  }
  return ctx;
}
