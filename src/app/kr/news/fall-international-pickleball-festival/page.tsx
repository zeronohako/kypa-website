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
        FALL 선수 초청 피클볼 페스타
      </h1>
      <p className="text-gray-500 mb-10 italic">2025년 11월 5일</p>
    
      <img
        src="/images/fall-international-pickleball-festival/poster_kr.jpg"
        alt="image"
        className="rounded-lg shadow-md w-full mb-12 object-cover h-full"
      />

      <div className="space-y-6 text-gray-800 leading-relaxed text-base">
        <p>
            대한유소년피클볼협회가 주관하는 ‘FALL 선수초청 피클볼페스타’가 2025년 11월 22일(토)~23일(일) 서울·경기권 인접 실내체육관(명지고등학교 체육관 등)에서 열리며, 6개 팀과 나이지리아 선수단이 함께합니다. 
        </p>
        <p>
            미국·유럽·말레이시아·베트남·일본 등 해외 동호인도 초청되며, 평창 I-WANT(아이원)리조트 숙박권 등 시상과 참가자 티셔츠·양말이 제공되고 참가비는 7만원이며 접수 기간은 11/2~11/17 입니다.
        </p>

      </div>
    </main>
  );
}
