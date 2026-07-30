// components/ui/MobileNavbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import logo from "@/public/logo.svg";
import PrimaryButton from "./PrimaryButton";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface MobileNavbarProps {
  navItems: NavItem[];
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Top Bar */}
      <div className="flex items-center justify-between  bg-white px-5 py-3">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src={logo}
            alt="Cloud Edge"
            priority
            className="h-8 w-auto"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center bg-white"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden mt-3"
          >
            <div className="rounded-3xl border border-[#8B7DFF2E] bg-white p-5 shadow-lg">
              <nav className="flex flex-col gap-4">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;

                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, type: "spring", stiffness: 120 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between rounded-xl px-3 py-3 transition-all duration-300 hover:translate-x-1 hover:bg-primary/5 active:scale-95 ${
                          isActive
                            ? "bg-primary/10 font-semibold text-primary"
                            : "text-[#1D1F20]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              isActive ? "bg-[#FFC224]" : "bg-[#FFC224]/40"
                            }`}
                          />
                          <span>{item.label}</span>
                        </div>

                        {item.hasDropdown && (
                          <ChevronDown
                            size={18}
                            className="text-[#1D1F20]/60"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-5">
                <PrimaryButton href="/contact-us" label="Contact Us" className="w-full!" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
