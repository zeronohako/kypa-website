'use client';

import Link from 'next/link'

export default function NationalYouthPickleball2025() {
  
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 mt-20 bg-white rounded-xl shadow-lg">
      <Link href="/news" className="text-[#40937e] hover:underline mb-8 inline-block text-lg">
        ← Back to News
      </Link>

      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
        The 1st “Paddles Without Borders”: Korea x Nigeria Pickleball Friendship Festival
      </h1>
      <p className="text-gray-500 mb-10 italic">August 3, 2025</p>

      <img
        src="/images/paddles-without-borders-korea-nigeria-pickleball-festival/1.jpg"
        alt="image"
        className="rounded-lg shadow-md w-full mb-12 object-cover max-h-96"
      />

      <div className="space-y-6 text-gray-800 leading-relaxed text-base">
        <p>
            KYPA is proud to announce the inaugural “Paddles Without Borders” Korea x Nigeria Pickleball Friendship Festival, co-hosted with the Nigeria Pickleball Federation (NPF), to be held in Korea this November 2025!
        </p>
        <p>
            This festival marks the beginning of an exciting new chapter in international cultural exchange through pickleball between Korea and Nigeria. We are honored to launch this meaningful partnership.
        </p>

      </div>
    </main>
  );
}
