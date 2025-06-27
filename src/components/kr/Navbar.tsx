'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import LanguageSwitcher from '@/components/en/LanguageSwitcher';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] ?? 'en'; // fallback to 'en'

  const withLocale = (path: string) => `/${currentLocale}${path}`;

  return (
    <nav style={{ backgroundColor: '#52b49b', background: 'linear-gradient(90deg, #52b49b 0%, #89ccbb 100%)'}} className="p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={withLocale('/')} className="flex items-center">
          <Image
            src="/images/kypa-logo.jpg"
            alt="Korea Youth Pickleball Association Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        <div className="space-x-6 text-lg font-medium">
          <Link href={withLocale('/about')} className="hover:text-yellow-100 transition-colors duration-200">
            소개
          </Link>
          <Link href={withLocale('/history')} className="hover:text-yellow-100 transition-colors duration-200">
            연혁
          </Link>
          <Link href={withLocale('/join-us')} className="hover:text-yellow-100 transition-colors duration-200">
            가입
          </Link>
          <Link href={withLocale('/contact')} className="hover:text-yellow-100 transition-colors duration-200">
            연락처
          </Link>
        </div>

        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
