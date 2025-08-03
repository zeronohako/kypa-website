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
        2025년 제1회 한국 농인 피클볼 페스티벌 행사
      </h1>
      <p className="text-gray-500 mb-10 italic">2025년 7월 27일</p>

      <img
        src="/images/deaf-pickleball-festival-korea-2025/1.jpg"
        alt="image"
        className="rounded-lg shadow-md w-full mb-12 object-cover max-h-96"
      />

      <div className="space-y-6 text-gray-800 leading-relaxed text-base">
        <p>
            역사적인 첫 번째 한국 농인 피클볼 페스티벌 2025가 7월 19일에 성공적으로 마무리되었습니다. 이번 페스티벌은 전국의 농인 선수들과 가족, 그리고 피클볼을 사랑하는 모든 이들이 모여 스포츠와 우정, 그리고 포용의 가치를 함께 나누는 뜻깊은 자리였습니다.
        </p>
        <p>
            대회 기간 동안 참가자들은 초보부터 고급 선수까지 다양한 부문에서 뛰어난 실력과 페어플레이 정신을 보여주었으며, 치열한 경기와 열정 가득한 응원으로 코트가 뜨겁게 달아올랐습니다.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">하이라이트 동영상</h2>
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg mb-8">
            <video
                controls
                className="w-full h-full rounded-lg"
                >
                <source src="/videos/deaf-pickleball-festival-korea-2025/1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        <p>
          또한, 전문가 농인 선수들이 진행한 워크숍에서는 참가자들이 기술과 전략을 배우며 실력을 한층 키우는 소중한 시간이 되었습니다. 페스티벌 내내 이어진 사회적 교류와 문화 프로그램은 농인 문화와 유산을 함께 축하하고, 참가자 간의 유대감을 더욱 깊게 다지는 기회가 되었습니다.
        </p>

        <p>
          이번 제1회 한국 농인 피클볼 페스티벌 2025는 농인 스포츠의 위상을 높이고, 앞으로 더 많은 행사와 전국적인 관심을 불러일으키는 계기가 되었습니다. 참가해주신 모든 분들과 자원봉사자, 후원자분들께 깊은 감사의 말씀을 드립니다.
        </p>

        <p>
          앞으로도 더 많은 선수와 팬들이 함께할 수 있는 뜻깊은 행사를 계속 만들어가겠습니다!
        </p>
      </div>
    </main>
  );
}
