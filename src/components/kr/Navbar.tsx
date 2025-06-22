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
    <nav className="bg-blue-800 p-4 text-white">
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

        <div className="space-x-6">
          <Link href={withLocale('/about')} className="hover:underline">
            소개
          </Link>
          <Link href={withLocale('/join-us')} className="hover:underline">
            가입하기
          </Link>
          <Link href={withLocale('/contact')} className="hover:underline">
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
