'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function IsaacPage() {

  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] ?? 'en'; // fallback to 'en'
  const withLocale = (path: string) => `/${currentLocale}${path}`;

  return (
    <div className="container mx-auto py-12 px-4">
      <Link href={withLocale('/about')} className="text-[#40937e] hover:underline mb-8 inline-block text-lg">
        ← 돌아가기
      </Link>

      {/* Image and Bio Section */}
      <div className="flex flex-col md:flex-row items-start gap-12 mb-20">
        {/* Portrait Image */}
        <div className="w-full md:w-1/3">
          <div className="relative w-full aspect-[3/4] md:h-[600px] shadow-xl overflow-hidden rounded-lg">
            <Image
              src="/images/member-4.jpg"
              alt="Isaac"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold mb-2">Isaac</h1>
          <h2 className="text-2xl text-[#40937e] mb-6">공동설립자 및 부회장</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Isaac은 공동 창립자이자 부대표로서, 모든 연령과 배경의 사람들이 건강을 증진하고 공동체와 연결되며 포용성을 느낄 수 있도록 피클볼의 접근성을 높이는 다양한 이니셔티브를 주도하고 있습니다.
          </p>
          
        </div>
      </div>

      {/* Intro Video Section */}
      <section className="mb-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">자기소개 영상</h3>
        <div className="w-full max-w-4xl mx-auto">
            <video
            controls
            className="w-full h-[500px] object-cover rounded-lg shadow-lg mb-4"
            preload="metadata"
            >
              <source src="/videos/Isaac-intro.mp4" type="video/mp4" />
              브라우저가 동영상 태그를 호환하지 않습니다.
            </video>
            <p className="text-md text-gray-700 leading-relaxed">
            KYPA와 함께한 여정과 피클볼을 통해 청소년들에게 힘을 실어주고자 하는 자신의 비전을 공유합니다.
            </p>
        </div>
      </section>

    </div>
  );
}
