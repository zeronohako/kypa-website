import Image from 'next/image';
import ContactBlock from '@/components/kr/ContactBlock';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-center mb-10">소개</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">우리의 사명</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          대한청소년피클볼협회(KYPA)는 2023년에 설립된 비영리 단체로, 7세부터 18세까지의 청소년들에게 피클볼을 알리고 확산하는 데 힘쓰고 있습니다. 저희는 청소년 대상의 대회를 개최하고, 전문적인 코칭 및 훈련 프로그램을 운영하며, 지역 사회와 함께하는 다양한 활동을 통해 피클볼의 매력을 전하고 있습니다. KYPA는 청소년들이 스포츠를 통해 협동심, 스포츠 정신, 그리고 개인의 성장을 경험할 수 있도록 돕고자 합니다. 빠르게 성장하고 있는 피클볼의 세계를 함께 경험해보세요! 새로운 즐거움이 여러분을 기다리고 있습니다.

        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">청소년 피클볼 대회</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            대한 유소년 피클볼 협회(KYPA)는 유소년 만이 참여하는 국내 토너먼트를 매년 개최합니다. 개최 장소와 일시는 매년 5월초에 KYPA 홈페이지에 공지 예정입니다.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about-1.jpg" 
            alt="KYPA Story"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
            대한 유소년 피클볼 협회(KYPA)는 2024년 6월 대한민국 안동에서 개최된 세계피클볼 대회에 참여해, 국내외로 피클볼을 알리는데 노력을 다 했습니다!
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            대한민국 기획재정부는 2024년도 사회적으로 가장 큰 기여를 하고 있는 공익법인 16곳을 지정 발표했습니다. 대한 유소년 피클볼 협회(KYPA)는 영광스럽게도 이 16개 단체 중 한 단체로 인정되었음을 공지합니다. 
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            대한 유소년 피클볼 협회(KYPA)의 피클볼 활성화를 위한 노력을 인정하여, 아시아 피클볼 연합은 KYPA를 연합의 공식 멤버로 인정할것을 예정고지했습니다.
          </p>
        </div>
        <iframe className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg" src="https://www.youtube.com/embed/VNTC7oaMv64?si=9SXrtU3MIeaiI7Ac"></iframe>

      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-1.jpg" alt="Brian" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">Brian</h3>
            <p className="text-[#40937e]">창립자 및 회장</p>
            <p className="text-gray-600 mt-2 text-sm">대한유소년피클볼 협회 창립자이자 회장인 Brian입니다. 협회 모든 구성원은 협회의 중요한 기여자들입니다. 저는 협회 회장으로서 이 소중한 참여를 조율하여 대한유소년피클볼 협회를 국내외에서 인정 받는 유소년 스포츠 조직으로 만들겠습니다. 동시에 소외계층의 삶의 질을 피클볼을 통해 증진시키는데 최선을 다할 것입니다.</p>
          </div>
          {/* Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-2.jpg" alt="Edward" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">Edward</h3>
            <p className="text-[#40937e]">공동창립자 및 부회장</p>
            <p className="text-gray-600 mt-2 text-sm">저는 대학유소년피클볼 협회의 공동창립자이자 부회장을 맡고 있는 서울국제학교에 재학중인 Edward입니다. 협회의 지역봉사활동 팀을 관리/감독하고 있으며 우리 사회에 도움이 필요한 사람들을 찾아가 돕는 데 앞장서겠습니다.</p>
          </div>
          {/* Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-3.jpg" alt="Member Name 3" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">Jennie</h3>
            <p className="text-[#40937e]">커뮤니티 아웃리치 디렉터</p>
            <p className="text-gray-600 mt-2 text-sm">저는 대한 유소년 피클볼 협회와 지역 사회간의 교류를 통해 우리의 이니셔티브가 더 많은 사람들에게 긍정적 영향을 미칠 수 있도록 노력하고 있습니다. 피클볼이라는 멋진 스포츠를 다양한 청소년들이 함께 즐길 수 있도록 힘쓰겠습니다!</p>
          </div>
          {/* Add more members */}
        </div>
      </section>

      <ContactBlock />
    </div>
  );
}