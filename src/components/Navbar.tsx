// src/components/Navbar.tsx
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'; // React is implicitly imported in TSX, but good practice for clarity

export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Site Title */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/kypa-logo.jpg" // Path to your logo image in the public folder
            alt="Korea Youth Pickleball Association Logo" // Important for accessibility
            width={120} // Adjust width as needed for your logo size
            height={40} // Adjust height as needed for your logo size (maintain aspect ratio)
            priority // Optional: if this logo is always visible, hint to Next.js to load it faster
          />
        </Link>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/join-us" className="hover:underline">
            Join Us
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          {/* Sponsors will be moved to homepage, so no separate link needed for now */}
        </div>

        {/* Language Toggle Placeholder - We'll add functionality later */}
        <div className="border border-white px-3 py-1 rounded">
          EN / KR
        </div>
      </div>
    </nav>
  );
}