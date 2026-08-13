import { notFound } from "next/navigation";
import AOSProvider from "@/components/shared/AOSProvider";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import ScrollToTop from "@/components/ui/ScrollToTop";
import StickySocialBar from "@/components/ui/StickySocialBar";
import React from "react";
import { CountryProvider } from "@/libs/country-context";
import { CountrySlug, VALID_SLUGS } from "@/libs/country-data";

interface CountryLayoutProps {
  children: React.ReactNode;
  params: Promise<{ country: string }>;
}

const CountryLayout = async ({ children, params }: CountryLayoutProps) => {
  const { country } = await params;

  // Validate country segment — 404 for anything not in our list
  if (!VALID_SLUGS.includes(country as CountrySlug)) {
    notFound();
  }

  return (
    <CountryProvider slug={country as CountrySlug}>
      <main>
        <Navbar />
        {children}
        <StickySocialBar />
        <ScrollToTop />
        <Footer />
        <AOSProvider />
      </main>
    </CountryProvider>
  );
};

export default CountryLayout;
