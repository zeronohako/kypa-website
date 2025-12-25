// data/en/news.ts

export interface NewsPost {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  slug: string;
}

export const newsPosts: NewsPost[] = [
  {
    id: '1',
    title: '2025년 제1회 한국 농인 피클볼 페스티벌 행사',
    date: '2025-07-27',
    summary: '2025년 제1회 한국 농인 피클볼 페스티벌은 피클볼 경기를 통해 농인 및 난청인들을 하나로 모으며 포용, 공동체, 그리고 스포츠를 기념하는 역사적인 행사입니다.',
    image: '/images/newsbanner-1.jpg',
    slug: 'deaf-pickleball-festival-korea-2025',
  },
  {
    id: '2',
    title: '제1회 "국경 없는 패들": 한국 x 나이지리아 피클볼 우정 축제',
    date: '2025-08-03',
    summary: '제1회 “국경 없는 패들” 페스티벌은 한국과 나이지리아가 함께한 피클볼을 통한 우정과 문화 교류의 축제였습니다.',
    image: '/images/newsbanner-2.jpg',
    slug: 'paddles-without-borders-korea-nigeria-pickleball-festival',
  },
  {
    id: '3',
    title: 'FALL 선수 초청 피클볼 페스타',
    date: '2025-11-05',
    summary: '11월 22~23일 서울·경기에서 국제 선수초청 피클볼페스타가 열리며, 참가 접수는 11월 2~17일 진행됩니다.',
    image: '/images/fall-international-pickleball-festival/poster_kr.jpg',
    slug: 'fall-international-pickleball-festival',
  },
];
