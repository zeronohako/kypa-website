'use client';

import Link from 'next/link'

export default function NationalYouthPickleball2025() {
  
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 mt-20 bg-white rounded-xl shadow-lg">
      <Link href="/news" className="text-[#40937e] hover:underline mb-8 inline-block text-lg">
        ← Back to News
      </Link>

      <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
        Fall International Pickleball Festival
      </h1>
      <p className="text-gray-500 mb-10 italic">November 5, 2025</p>

      <img
        src="/images/fall-international-pickleball-festival/poster_en.jpg"
        alt="image"
        className="rounded-lg shadow-md w-full mb-12 object-cover h-full"
      />

      <div className="space-y-6 text-gray-800 leading-relaxed text-base">
        <p>
            The Korea Youth Pickleball Association will host the Fall Invitational Pickleball Festival on Nov 22 to 23, 2025, at Myeongji High School Gymnasium and nearby indoor venues in the Seoul/Gyeonggi area, with six teams participating and a visiting Nigerian delegation.
        </p>
        <p>
            Players from the U.S., Europe, Malaysia, Vietnam, and Japan are invited, with prizes including I-Want Resort Yongpyong stays plus T-shirts & socks for participants; registration is ₩70,000 and runs Nov 2 to 17 via pickleballpeople.co.kr.
        </p>

      </div>
    </main>
  );
}
