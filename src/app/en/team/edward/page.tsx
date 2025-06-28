import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function EdwardPage() {
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
              src="/images/member-2.jpg"
              alt="Edward"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold mb-2">Edward</h1>
          <h2 className="text-2xl text-[#40937e] mb-6">Co-founder, Vice-President</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Edward is the co-founder and vice-president of the Korea Youth Pickleball Association (KYPA), where he plays a vital role in advancing the organization&apos;s mission to promote pickleball and strengthen community ties throughout Korea. With a deep commitment to social impact, Edward actively oversees the Community Outreach and Volunteer Teams, guiding their efforts to engage local communities and provide meaningful support to underprivileged youth through various volunteer initiatives.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Through his dedicated leadership, Edward helps shape KYPA&apos;s strategic growth and expanding influence, ensuring that the organization remains a leading force in youth development and social inclusion. His work not only promotes pickleball as an accessible sport for all but also fosters a welcoming environment that empowers young people to build confidence, skills, and connections that extend beyond the court.
          </p>
      </div>
      </div>

      {/* Intro Video Section */}
      <section className="mb-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Meet Edward</h3>
        <div className="w-full max-w-4xl mx-auto">
          <video
            controls
            className="w-full h-[500px] object-cover rounded-lg shadow-lg mb-4"
            preload="metadata"
          >
            <source src="/videos/edward-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-md text-gray-700 leading-relaxed">
            Edward inspires volunteerism and grows pickleball access for underserved youth in Korea.
          </p>
        </div>
      </section>


    </div>
  );
}
