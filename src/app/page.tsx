// src/app/page.tsx
import Image from 'next/image'; // For the hero image
import Link from 'next/link';
import ImageCarousel from '@/components/ImageCarousel';
import ContactBlock from '@/components/ContactBlock';
import React from 'react'; // Explicit import for clarity

export default function HomePage() {
  const carouselImages = [
    { src: '/images/carousel-1.jpg', alt: 'Youth playing pickleball' },
    { src: '/images/carousel-2.jpg', alt: 'Pickleball court' },
    { src: '/images/carousel-3.jpg', alt: '' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center justify-center text-white text-center">
        <Image
          src="/images/carousel-1.jpg" 
          alt="Youth Pickleball Players"
          fill
          className="object-cover -z-10"
          priority
        />
        <div className="z-10 bg-white p-8 rounded-lg mx-4 shadow-lg">
          <h1 className="text-black text-4xl md:text-6xl font-extrabold mb-4">
            Korea Youth Pickleball Association
          </h1>
          <p className="text-black text-xl md:text-2xl mb-8">
            Empowering the youth through <strong>Pickleball</strong> !
          </p>
          <Link href="/join-us" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
            Join Us Today!
          </Link>
        </div>
      </section>

      {/* About Section Snippet */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About KYPA</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          The Korea Youth Pickleball Association is a non-profit organization established in 2023. The KYPA committed to promoting the sport of Pickleball among the youth aged 7-18 in Korea. We organize tournaments, provide coaching and training, and engage in community outreach programs to spread the love for Pickleball. Our goal is to foster a sense of camaraderie, sportsmanship, and personal development among young individuals. Discover the exciting world of pickleball with the KYPA. Come and experience the thrill of this fast-growing sport!
        </p>
        <div className="text-center mt-8">
          <Link href="/about" className="text-blue-600 hover:underline text-xl">
            Learn More About Us →
          </Link>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Youth Tournaments</h3>
              <p className="text-gray-600">
                Exciting competitions for young players of all skill levels.
              </p>
            </div>
            {/* Program 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Coaching & Training</h3>
              <p className="text-gray-600">
                Professional guidance to develop skills and strategies.
              </p>
            </div>
            {/* Program 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-semibold mb-4">Community Outreach</h3>
              <p className="text-gray-600">
                Promoting pickleball in schools and local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section (used to consolidate extra images) */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Moments</h2>
        <ImageCarousel images={carouselImages} />
      </section>

      {/* Sponsors Section (Now on Home) */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Valued Sponsors</h2>
        {/* Placeholder for sponsor logos - You'll replace these with actual images */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image src="/images/sponsor-logo.jpg" alt="Sponsor 1" width={500} height={300} className="object-contain" />
        </div>
      </section>

      {/* Streamlined Contact Block */}
      <ContactBlock />
    </div>
  );
}