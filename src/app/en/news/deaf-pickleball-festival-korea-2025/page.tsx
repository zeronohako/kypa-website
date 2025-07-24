'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link'

export default function NationalYouthPickleball2025() {

  const router = useRouter();
  
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 mt-20 bg-white rounded-xl shadow-lg">
      <Link href="/news" className="text-[#40937e] hover:underline mb-8 inline-block text-lg">
        ← Back to News
      </Link>

      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
        The 1st Deaf Pickleball Festival Korea 2025
      </h1>
      <p className="text-gray-500 mb-10 italic">July 27, 2025</p>

      <img
        src="/images/deaf-pickleball-festival-korea-2025/1.jpg"
        alt="image"
        className="rounded-lg shadow-md w-full mb-12 object-cover max-h-96"
      />

      <div className="space-y-6 text-gray-800 leading-relaxed text-base">
        <p>
            The inaugural Deaf Pickleball Festival Korea 2025 successfully concluded, marking a historic milestone for the Deaf sports community in Korea. Held over July 19, this vibrant festival brought together Deaf athletes, families, and supporters from across the nation to celebrate pickleball, friendship, and inclusivity.
        </p>
        <p>
            Throughout the festival, participants showcased impressive skills and sportsmanship in competitive tournaments spanning multiple categories, from beginner to advanced levels. The atmosphere was electric with enthusiastic cheers, fierce rallies, and unforgettable moments on the courts.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-900">Highlights Video</h2>
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
          Beyond the matches, the festival featured inspiring workshops led by expert Deaf pickleball players, offering valuable training and strategies that empowered newcomers and veterans alike. Social events and cultural programs provided opportunities for meaningful connections and shared celebrations of Deaf culture and heritage.
        </p>

        <p>
          The 1st Deaf Pickleball Festival Korea 2025 has not only elevated the sport’s presence within the Deaf community but also sparked inspiration for future events and greater awareness nationwide. We extend our deepest gratitude to all participants, volunteers, sponsors, and supporters who made this unforgettable event a reality.
        </p>

        <p>
            We look forward to continuing this momentum and welcoming even more players and fans in the years ahead!
        </p>
      </div>
    </main>
  );
}
