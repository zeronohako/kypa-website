// app/news/page.tsx

import { newsPosts } from '@/data/kr/news';
import NewsCard from '@/components/kr/NewsCard';

export const metadata = {
  title: '최근 소식',
  description: '',
};

export default function NewsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">최근 소식</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsPosts.map((post) => (
          <NewsCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
