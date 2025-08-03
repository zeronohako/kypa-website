'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link'

export default function NationalYouthPickleball2025() {

  const pathname = usePathname();
  const currentLocale = pathname?.split('/')[1] ?? 'en'; // fallback to 'en'
  const withLocale = (path: string) => `/${currentLocale}${path}`;
  
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 mt-20 bg-white rounded-xl shadow-lg">
      <Link href={withLocale('/news/')} className="text-[#40937e] hover:underline mb-8 inline-block text-lg">
        ← 돌아가기
      </Link>

      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
        제1회 "국경 없는 패들": 한국 x 나이지리아 피클볼 우정 축제
      </h1>
      <p className="text-gray-500 mb-10 italic">2025년 8월 3일</p>

      <img
        src="/images/paddles-without-borders-korea-nigeria-pickleball-festival/1.jpg"
        alt="image"
        className="rounded-lg shadow-md w-full mb-12 object-cover max-h-96"
      />

      <div className="space-y-6 text-gray-800 leading-relaxed text-base">
        <p>
            KYPA는 나이지리아 피클볼 연맹(NPF)과 공동 주최하는 제1회 "국경 없는 패들" 한국 x 나이지리아 피클볼 우정 축제를 2025년 11월 한국에서 개최하게 되어 자랑스럽게 생각합니다!

        </p>
        <p>
            이 축제는 한국과 나이지리아가 피클볼을 통해 국제 문화 교류의 새로운 장을 여는 것을 의미합니다. 이 뜻깊은 파트너십을 시작하게 되어 영광입니다.
        </p>
      </div>
    </main>
  );
}
