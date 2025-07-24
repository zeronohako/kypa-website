// app/news/page.tsx

import { newsPosts } from '@/data/en/news';
import NewsCard from '@/components/en/NewsCard';

export const metadata = {
  title: 'Recent News',
  description: 'Check out recent news happening on KYPA.',
};

export default function NewsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Recent News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsPosts.map((post) => (
          <NewsCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
