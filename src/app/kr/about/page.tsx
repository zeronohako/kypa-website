// src/app/about/page.tsx
import Image from 'next/image';
import ContactBlock from '@/components/kr/ContactBlock';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-bold text-center mb-10">About Us</h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          The Korea Youth Pickleball Association is a non-profit organization established in 2023. The KYPA committed to promoting the sport of Pickleball among the youth aged 7-18 in Korea. We organize tournaments, provide coaching and training, and engage in community outreach programs to spread the love for Pickleball. Our goal is to foster a sense of camaraderie, sportsmanship, and personal development among young individuals. Discover the exciting world of pickleball with the KYPA. Come and experience the thrill of this fast-growing sport!
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Youth Pickleball Tournaments</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
          Join our exciting youth Pickleball tournaments and showcase your skills. Compete against other talented players and have a great time on the court. Get ready for some intense matches and unforgettable moments. Information on where and when to be held will be posted in early May every year.
          </p>
        </div>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about-1.jpg" 
            alt="KYPA Story"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <p className="text-lg text-gray-700 leading-relaxed">
          KYPA participated in the World Pickleball Championship held in Andong, South Korea. Check out the live archives of the tournaments.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
          The Ministry of Economy and Finance of the Republic of Korea has announced the sixteen most impressive and contributing NGOs of 2024. To our honor and joy, KYPA has been chosen as one of the sixteen most socially benefitting NGOs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
          KYPA has tirelessly worked to promote pickleball in Korea. The Federation of Pickleball Asia has recognized our efforts and contributions and is declaring KYPA a Federation of Pickleball Asia member.
          </p>
        </div>
        <iframe className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg" src="https://www.youtube.com/embed/VNTC7oaMv64?si=9SXrtU3MIeaiI7Ac"></iframe>

      </section>

      {/* Members Section - Designed to reduce gaps */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-1.jpg" alt="Brian" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">Brian</h3>
            <p className="text-blue-600">Founder, President</p>
            <p className="text-gray-600 mt-2 text-sm">As the founder of KYPA, I lead with a clear vision and direction. All members do their best to contribute to developing KYPA into a community service-oriented sports organization. We strive to improve the quality of life, especially those of socially isolated people. </p>
          </div>
          {/* Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-2.jpg" alt="Edward" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">Edward</h3>
            <p className="text-blue-600">Co-founder, Vice-president</p>
            <p className="text-gray-600 mt-2 text-sm">I&apos;m Edward, a student at Seoul International School. As a co-founder and vice-president, I supervise the Community Outreach Team and Community Volunteer Team. Together with our team officers, we are actively promoting pickleball in Korea and engaging in volunteer initiatives for the underprivileged in our community.</p>
          </div>
          {/* Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Image src="/images/member-3.jpg" alt="Member Name 3" width={120} height={120} className="rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-xl font-bold">Jennie</h3>
            <p className="text-blue-600">Community Outreach Director</p>
            <p className="text-gray-600 mt-2 text-sm">Hello, I am Jennie. As the Community Outreach Director, I strive to engage our organization with the local community, creating meaningful connections and ensuring that our initiatives positively impact those we serve. Together, we want to make pickleball an accessible sport for youth of all backgrounds while building an inclusive community where everyone can enjoy the sport.</p>
          </div>
          {/* Add more members */}
        </div>
      </section>

      {/* Contact Block - positioned after members */}
      <ContactBlock />
    </div>
  );
}