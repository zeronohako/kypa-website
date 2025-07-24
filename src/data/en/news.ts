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
    title: 'The 1st Deaf Pickleball Festival Korea 2025',
    date: '2025-07-27',
    summary: 'The 1st Deaf Pickleball Festival Korea 2025 is a landmark event celebrating inclusion, community, and sport by bringing together Deaf and hard-of-hearing individuals through the game of pickleball.',
    image: '/images/newsbanner-1.jpg',
    slug: 'deaf-pickleball-festival-korea-2025',
  },
];
