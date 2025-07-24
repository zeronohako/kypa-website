import Link from 'next/link';
import { NewsPost } from '@/data/en/news';

export default function NewsCard({ title, date, summary, image, slug }: NewsPost) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition-all">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <Link href={`/news/${slug}`}>
            <h3 className="text-lg font-semibold text-black hover:underline cursor-pointer">{title}</h3>
        </Link>
        <p className="text-sm text-gray-500">{new Date(date).toLocaleDateString('en')}</p>
        <p className="mt-2 text-sm text-gray-700 line-clamp-3">{summary}</p>
        <Link href={`/news/${slug}`} className="inline-block mt-4 text-[#40937e] hover:underline text-sm">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}
