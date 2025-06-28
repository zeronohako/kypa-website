import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BrianPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <Link href="/about" className="text-[#40937e] hover:underline mb-8 inline-block text-lg">
        ← Back to Team
      </Link>

      {/* Image and Bio Section */}
      <div className="flex flex-col md:flex-row items-start gap-12 mb-20">
        {/* Portrait Image */}
        <div className="w-full md:w-1/3">
          <div className="relative w-full aspect-[3/4] md:h-[600px] shadow-xl overflow-hidden rounded-lg">
            <Image
              src="/images/member-1.jpg"
              alt="Brian"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold mb-2">Brian</h1>
          <h2 className="text-2xl text-[#40937e] mb-6">Founder, President</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Brian is the visionary behind the Korea Youth Pickleball Association (KYPA), founding the organization with a mission to create a
            positive social impact through sports. With a clear direction and strong leadership, he has built a team committed to community service and
            inclusivity through pickleball.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            As President, Brian oversees KYPA&apos;s strategy, partnerships, and programs. He believes in the transformative power of sports—
            especially for youth who are socially isolated or underserved. His leadership has shaped KYPA into a rapidly growing nonprofit
            recognized for its impact on youth development and social outreach.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Under his guidance, KYPA has not only fostered national-level tournaments and training programs but also gained acknowledgment
            from major organizations like the Federation of Pickleball Asia and the Ministry of Economy and Finance of Korea.
          </p>
        </div>
      </div>

      {/* Intro Video Section */}
      <section className="mb-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Meet Brian</h3>
        <div className="w-full max-w-4xl mx-auto">
            <video
            controls
            className="w-full h-[500px] object-cover rounded-lg shadow-lg mb-4"
            preload="metadata"
            >
              <source src="/videos/brian-intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-md text-gray-700 leading-relaxed">
            Brian shares his journey with KYPA and his vision for empowering youth through pickleball.
            </p>
        </div>
      </section>

    </div>
  );
}
