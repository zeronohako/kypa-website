// src/app/page.tsx
import Image from 'next/image'; // For the hero image
import Link from 'next/link';
import ImageCarousel from '@/components/kr/ImageCarousel';
import ContactBlock from '@/components/kr/ContactBlock';
import React from 'react'; // Explicit import for clarity

export default function HomePage() {
  const carouselImages = [
    { src: '/images/carousel-1.jpg', alt: 'image1' },
    { src: '/images/carousel-2.jpg', alt: 'image2' },
    { src: '/images/carousel-3.jpg', alt: 'image3' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-white text-center">
        <Image
          src="/images/carousel-1.jpg" 
          alt="Youth Pickleball Players"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="z-10 bg-white p-8 rounded-lg mx-4 shadow-lg">
          <h1 className="text-black text-4xl md:text-6xl font-extrabold mb-4">
            대한유소년피클협회 
          </h1>
          <p className="text-black text-xl md:text-2xl mb-8">
            피클볼을 통해 어린이와 청소년을 더 건강하게!
          </p>
          <Link href="/join-us" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            우리 사회의 스포츠 소외 계층에게 스포츠를 통한 건강한 삶을 선물합니다.
          </Link>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">KYPA 소개</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          대한 유소년 피클볼 협회(KYPA)는 2023년, 대한민국에 피클볼을 더 널리 알리고자 설립되었습니다. KYPA는 국내 경기 기획 및 운영, 피클볼 코칭, 소외계층을 위한 피클볼 교육 봉사를 주요 사업으로 하고 있습니다. KYPA 멤버가 되는 조건은 단 하나,대한민국 7-18세의 유소년이면 됩니다. 피클볼을 통해 몸과 마음을 건강하게, 그리고 우리 사회를 더 건강하게 만들어 주세요!
        </p>
        <div className="text-center mt-8">
          <Link href="/about" className="text-blue-600 hover:underline text-xl">
            더 알아보기 →
          </Link>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">우리의 프로그램</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">청소년 대회</h3>
              <p className="text-gray-600">
                모든 실력의 청소년들이 참가할 수 있는 흥미진진한 대회
              </p>
            </div>
            {/* Program 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">코칭 & 훈련</h3>
              <p className="text-gray-600">
                기술과 전략 향상을 위한 전문적인 지도
              </p>
            </div>
            {/* Program 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">지역 사회 봉사</h3>
              <p className="text-gray-600">
                학교 및 지역 사회에 피클볼을 알리는 활동
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">우리들의 순간들</h2>
        <ImageCarousel images={carouselImages} />
      </section>

      {/* Sponsors Section (Now on Home) */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">스폰서</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image src="/images/sponsor-logo.jpg" alt="Sponsor" width={500} height={300} className="object-contain" />
        </div>
      </section>

      {/* Streamlined Contact Block */}
      <ContactBlock />
    </div>
  );
}