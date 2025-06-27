import React from 'react';

const historyItems = [
  { date: '2023년 9월', description: '한국에서 테니스팀 친구들 3명과 함께 피클볼 단체 조직' },
  { date: '2024년 3월', description: '한국 최초의 비영리 피클볼 공익법인 ‘대한유소년피클볼협회’ 설립' },
  { date: '2024년 5월', description: '유타대학 아시아캠퍼스 중고등부 피클볼 대회 참가' },
  { date: '2024년 5월', description: '한국중고등피클볼연맹 공식 코칭 자격증 획득' },
  { date: '2024년 6월', description: '제1회 피클볼 월드 챔피언쉽 코리아 토너먼트에 유소년부 대회 최초 도입' },
  { date: '2024년 9월', description: '서울국제학교 피클볼클럽 결성 (회원수 9명)' },
  { date: '2024년 10월', description: '서울국제학교에서 중학교 방과후 피클볼 프로그램 시작' },
  { date: '2024년 11월', description: '국제수화코스 수료 (CURSA U3491483)' },
  { date: '2024년 11월', description: '서울 농학교의 청각장애 중학생 대상 피클볼 수업 시작' },
  { date: '2024년 11월', description: '피클볼 기어 판매 펀드레이징 이벤트 개최' },
  { date: '2024년 12월', description: 'KYPA가 Pickleball World Federation(PWF)의 정식 회원으로 가입' },
  { date: '2025년 1월', description: '청각장애청소년과 비청각장애인들의 혼합 복식 경기인 제1회 Youth-Paired 피클볼 토너먼트 개최' },
  { date: '2025년 2월', description: 'KYPA의 President인 Brian Ji가 PWF의 아시아 지역 부국장 및 청소년 개발 위원회 위원장으로 선출' },
  { date: '2025년 5월', description: '교사와 학생들의 Paired 피클볼 이벤트 및 피클볼 클리닉 개최' },
  { date: '2025년 6월', description: '피클볼 월드 챔피언쉽 코리아 제주 참가' },
  { date: '2025년 7월', description: '성인 청각장애인 대상 제1회 paired 피클볼 이벤트 개최 예정' },
  { date: '2025년 10월', description: '한국에서 제1회 청각장애인 피클볼 Deaflympic 개최 예정' },
  { date: '', description: '현재 KYPA는 SIS, KIS, SFS, YISS, Chadwick, 청심국제학교, 세인트폴아카데미 등의 학생들이 가입하고 활발히 교류하는 공식 유소년 피클볼 단체로 성장' },
];



export default function HistoryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">연혁</h1>

      <div className="space-y-6 text-left text-gray-700">
        {historyItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <p className="text-sm font-semibold text-[#38816f]">{item.date}</p>
            <p className="mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
