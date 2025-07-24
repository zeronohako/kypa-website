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
];
