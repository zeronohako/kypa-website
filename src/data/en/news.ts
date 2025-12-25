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
  {
    id: '2',
    title: 'The 1st “Paddles Without Borders”: Korea x Nigeria Pickleball Friendship Festival',
    date: '2025-08-02',
    summary: 'The first-ever "Paddles Without Borders" festival brought together Korea and Nigeria in a vibrant celebration of friendship and cultural exchange through pickleball.',
    image: '/images/newsbanner-2.jpg',
    slug: 'paddles-without-borders-korea-nigeria-pickleball-festival',
  },
  {
    id: '3',
    title: 'Fall International Pickleball Festival',
    date: '2025-11-05',
    summary: 'An international six-team pickleball festival will be held Nov 22-23, 2025 in the Seoul-Gyeonggi area, with registration open Nov 2-17.',
    image: '/images/fall-international-pickleball-festival/poster_en.jpg',
    slug: 'fall-international-pickleball-festival',
  },
  {
    id: '4',
    title: 'American Celebrities Are Crazy About Pickleball at the Han River… Citizens are Looking Forward to It',
    date: '2025-12-22',
    summary: 'Seoul is converting a low used soccer field at Gwangnaru Han River Park into 14 outdoor pickleball courts, the Han River first and Korea largest public facility, set to open in March 2026 as part of Mayor Oh Se hoon Healthy Seoul initiative.',
    image: '/images/newsbanner-4.jpg',
    slug: 'hanriver',
  },
];
