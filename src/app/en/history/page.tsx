import React from 'react';

const historyItems = [
  { date: 'September 2023', description: 'Formed a pickleball group in Korea with three friends from the school tennis team.' },
  { date: 'March 2024', description: 'Established Korea’s first nonprofit pickleball public interest organization, Korea Youth Pickleball Association (KYPA), with 50 members.' },
  { date: 'May 2024', description: 'Participated in the Utah University Asia Campus Pickleball Tournament for middle and high school students.' },
  { date: 'May 2024', description: 'Obtained an official coaching certificate from the Korea Middle and High School Pickleball Federation.' },
  { date: 'June 2024', description: 'Introduced a youth division for the first time at the 1st Pickleball World Championship Korea Tournament.' },
  { date: 'September 2024', description: 'Founded the Seoul International School Pickleball Club (with 9 members).' },
  { date: 'October 2024', description: 'Launched an After-School Enrichment (ASE) Pickleball Program for middle school students at Seoul International School.' },
  { date: 'November 2024', description: 'Completed an International Sign Language course (CURSA U3491483).' },
  { date: 'November 2024', description: 'Began teaching pickleball to middle school students with hearing impairments at Seoul School for the Deaf.' },
  { date: 'November 2024', description: 'Hosted a fundraising event through the sale of pickleball gear.' },
  { date: 'December 2024', description: 'KYPA became an official member of the Pickleball World Federation (PWF).' },
  { date: 'January 2025', description: 'Held the 1st Youth-Paired Pickleball Tournament, featuring mixed doubles matches between hearing and hearing-impaired youth.' },
  { date: 'February 2025', description: 'KYPA President Brian Ji was elected as Deputy Regional Director of Asia and Chair of the Youth Development Committee at the Pickleball World Federation (PWF).' },
  { date: 'May 2025', description: 'Organized a teacher-student paired pickleball event and clinic at Seoul International School.' },
  { date: 'June 2025', description: 'Participated in the Pickleball World Championship Korea Jeju Tournament.' },
  { date: 'July 2025', description: 'Scheduled to host the 1st paired pickleball event for hearing-impaired adults.' },
  { date: 'October 2025', description: 'Scheduled to host the 1st Pickleball Deaflympic in Korea.' },
  { date: '', description: 'KYPA has grown into an official youth pickleball organization with active student participation and exchange from schools such as SIS, KIS, SFS, YISS, Chadwick, Cheongshim International Academy, and St. Paul Academy.' },
];


export default function HistoryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">History</h1>

      <div className="space-y-6 text-left text-gray-700">
        {historyItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300 pb-4">
            <p className="text-sm font-semibold text-[#38816f]">{item.date}</p>
            <p className="mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
