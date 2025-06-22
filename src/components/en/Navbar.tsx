import Link from 'next/link';
import Image from 'next/image';
import React from 'react'; 
import LanguageSwitcher from '@/components/en/LanguageSwitcher';

export default function Navbar() {
  return (
    <nav className="bg-blue-800 p-4 text-white">
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
        </div>

        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}