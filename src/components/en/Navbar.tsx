import Link from 'next/link';
import Image from 'next/image';
import React from 'react'; 
import LanguageSwitcher from '@/components/en/LanguageSwitcher';

export default function Navbar() {
  return (
    <nav style={{ backgroundColor: '#52b49b', background: 'linear-gradient(90deg, #52b49b 0%, #89ccbb 100%)'}} className="p-4 text-white shadow-md">
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
        <div className="space-x-6 text-lg font-medium">
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

        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}