import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/components/ui/Footer";
import AOSProvider from "@/components/shared/AOSProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloud Edge",
  description: "Built For Smart, Future Ready Learning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistSans.className} h-full antialiased`}
    >
      <body className="min-h-full">
        <Navbar />
        {children}
        <Footer />
        <AOSProvider />
      </body>
    </html>
  );
}
