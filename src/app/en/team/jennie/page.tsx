import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function JenniePage() {
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
              src="/images/member-3.jpg"
              alt="Jennie"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        </div>

        {/* Bio Text */}
        <div className="w-full md:w-2/3">
          <h1 className="text-5xl font-bold mb-2">Jennie</h1>
          <h2 className="text-2xl text-[#40937e] mb-6">Community Outreach Director</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Jennie leads KYPA&apos;s efforts to actively engage with the local community, creating meaningful connections that ensure the organization&apos;s programs make a lasting and positive impact on those they serve.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            She is deeply committed to making pickleball accessible and welcoming to youth from diverse backgrounds, fostering an inclusive environment where everyone feels encouraged to participate and enjoy the sport.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Through her dedication and leadership, Jennie plays a crucial role in strengthening KYPA&apos;s mission of community building and social outreach, using sport as a powerful tool for connection and empowerment.
          </p>
        </div>
      </div>

      {/* Intro Video Section */}
      <section className="mb-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Meet Jennie</h3>
        <div className="w-full max-w-4xl mx-auto">
          <video
            controls
            className="w-full h-[500px] object-cover rounded-lg shadow-lg mb-4"
            preload="metadata"
          >
            <source src="/videos/jennie-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-md text-gray-700 leading-relaxed">
            Jennie leads KYPA&apos;s efforts to build community and make pickleball welcoming for all youth.
          </p>
        </div>
      </section>


    </div>
  );
}
