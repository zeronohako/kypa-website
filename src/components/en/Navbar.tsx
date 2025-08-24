"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/components/en/LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: "#52b49b",
        background: "linear-gradient(90deg, #52b49b 0%, #89ccbb 100%)",
      }}
      className="p-4 text-white shadow-md relative"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title */}
        <Link href="/" className="flex items-center">
            <Image
              src="/images/kypa-logo.jpg"
              alt="Korea Youth Pickleball Association Logo"
              width={120}
              height={40}
              priority
            />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-lg font-medium">
          <Link href="/about" className="hover:text-yellow-100 transition-colors duration-200">
            About
          </Link>
          <Link href="/history" className="hover:text-yellow-100 transition-colors duration-200">
            History
          </Link>
          <Link href="/news" className="hover:text-yellow-100 transition-colors duration-200">
            News
          </Link>
          <Link href="/join-us" className="hover:text-yellow-100 transition-colors duration-200">
            Join Us
          </Link>
          <Link href="/contact" className="hover:text-yellow-100 transition-colors duration-200">
            Contact
          </Link>
        </div>

        {/* Language Switcher (always visible on desktop, inside dropdown on mobile) */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#52b49b] text-white px-4 py-4 space-y-4 text-lg font-medium shadow-md">
          <Link href="/about" className="block hover:text-yellow-100" onClick={() => setOpen(false)}>
            About
          </Link>
          <Link href="/history" className="block hover:text-yellow-100" onClick={() => setOpen(false)}>
            History
          </Link>
          <Link href="/news" className="block hover:text-yellow-100" onClick={() => setOpen(false)}>
            News
          </Link>
          <Link href="/join-us" className="block hover:text-yellow-100" onClick={() => setOpen(false)}>
            Join Us
          </Link>
          <Link href="/contact" className="block hover:text-yellow-100" onClick={() => setOpen(false)}>
            Contact
          </Link>

          {/* Language Switcher in mobile menu */}
          <LanguageSwitcher />
        </div>
      )}
    </nav>
  );
}
