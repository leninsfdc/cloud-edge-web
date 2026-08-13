"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import logo from "@/public/logo.svg";
import PrimaryButton from "./PrimaryButton";
import MobileNavbar from "./MobileNavbar";

import TopBar from "./TopBar";

import CountryPicker from "./CountryPicker";
import { useCountry } from "@/libs/country-context";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Services", href: "/services", hasDropdown: false },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact-us" },
  { label: "Blogs", href: "/blogs", hasDropdown: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { country } = useCountry();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getCountryHref = (href: string) => {
    return `/${country.slug}${href === "/" ? "" : href}`;
  };

  const NavContent = () => (
    <div className="flex items-center justify-between gap-4">
      {/* Logo */}
      <Link href={getCountryHref("/")}>
        <Image src={logo} alt="Cloud Edge" priority className="h-8 w-auto" />
      </Link>

      {/* Nav Links */}
      <nav className="flex items-center gap-5">
        {navItems.map((item, index) => {
          const targetHref = getCountryHref(item.href);
          const isActive = pathname === targetHref || (item.href !== "/" && pathname.startsWith(targetHref));
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={targetHref}
                className={`group flex items-center gap-2 transition-colors duration-300 ${isActive
                  ? "font-semibold text-primary"
                  : "font-normal text-[#1D1F20] hover:text-primary"
                  }`}
              >
                <span
                  className={`h-2 w-2 rounded-full transition-all duration-200 ${isActive
                    ? "bg-[#FFC224] opacity-100"
                    : "bg-[#FFC224] opacity-0"
                    }`}
                />
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown size={16} className="text-[#1D1F20]/60" />
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Country Picker & Button */}
      <div className="flex items-center gap-3">
        <CountryPicker variant="light" compact />
        <PrimaryButton href={getCountryHref("/contact-us")} label="Contact Us" />
      </div>
    </div>
  );

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 hidden md:block">
        {/* TopBar container - visible at top, collapses smoothly on scroll */}
        <div
          className={`transition-all duration-300 overflow-hidden ${
            isScrolled ? "max-h-0 opacity-0" : "max-h-16 opacity-100"
          }`}
        >
          <TopBar />
        </div>

        {/* Unscrolled Navbar */}
        <div
          className={`transition-opacity duration-300 ${
            isScrolled ? "opacity-0 pointer-events-none absolute inset-x-0 top-0" : "opacity-100 relative"
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="my-3 rounded-full border border-[#8B7DFF2E] bg-white px-8 py-3 shadow-xs">
              <NavContent />
            </div>
          </div>
        </div>

        {/* Scrolled Navbar */}
        <div
          className={`absolute inset-x-0 top-0 transition-all duration-500 ${
            isScrolled
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          <div className="w-full bg-white/90 backdrop-blur-md border-b border-black/5 shadow-xs">
            <div className="container mx-auto w-full px-8 py-3">
              <NavContent />
            </div>
          </div>
        </div>
      </header>

      <header className="block md:hidden fixed top-0 left-0 w-full z-50">
        <TopBar />
        <MobileNavbar navItems={navItems} />
      </header>
    </>
  );
};

export default Navbar;