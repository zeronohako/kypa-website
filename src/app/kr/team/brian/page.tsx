'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function BrianPage() {

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
              src="/images/member-1.jpg"
              alt="Brian"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold mb-2">Brian</h1>
          <h2 className="text-2xl text-[#40937e] mb-6">창립자 및 회장</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Brian은 대한유소년피클볼협회 (KYPA)의 창립자로, 스포츠를 통해 긍정적인 사회적 영향을 만들고자 하는 비전을 가지고 협회를 설립했습니다. 그는 분명한 방향성과 강한 리더십으로 팀을 이끌며, 피클볼을 통해 지역 사회 봉사와 포용을 실천하는 데 헌신해 왔습니다.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            회장으로서 Brian은 KYPA의 전략, 파트너십, 그리고 프로그램 전반을 총괄합니다. 그는 스포츠가 지닌 변화의 힘을 믿으며, 특히 사회적으로 고립되었거나 소외된 청소년들에게 그 영향력이 크다고 생각합니다. 그의 리더십 아래 KYPA는 청소년 성장과 사회적 봉사 분야에서 영향력을 인정받는 빠르게 성장하는 비영리 단체로 자리매김했습니다.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Brian의 지도 아래 KYPA는 전국 규모의 대회와 교육 프로그램을 성공적으로 운영했을 뿐만 아니라, 아시아피클볼연맹(Federation of Pickleball Asia)과 대한민국 기획재정부와 같은 주요 기관들로부터도 인정을 받았습니다.
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
              <source src="/videos/brian-intro.mp4" type="video/mp4" />
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
