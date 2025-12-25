import Image from 'next/image'; 
import Link from 'next/link';
import ImageCarousel from '@/components/en/ImageCarousel';
import ContactBlock from '@/components/en/ContactBlock';
import React from 'react'; 

export default function HomePage() {
  const carouselImages = [
    { src: '/images/carousel-1.jpg', alt: 'image1' },
    { src: '/images/carousel-2.jpg', alt: 'image2' },
    { src: '/images/carousel-3.jpg', alt: 'image3' },
    { src: '/images/carousel-4.JPG', alt: 'image4' },
    { src: '/images/carousel-5.JPG', alt: 'image5' },
    { src: '/images/carousel-6.JPG', alt: 'image6' },
    { src: '/images/carousel-7.jpg', alt: 'image7' },
    { src: '/images/carousel-8.jpg', alt: 'image8' },
    { src: '/images/carousel-9.jpg', alt: 'image9' },
    { src: '/images/carousel-10.jpg', alt: 'image10' },
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
        <div className="z-10 bg-white p-3 rounded-lg mx-4 shadow-lg mt-50 md:p-6 md:mb-0">
          <h1 className="text-black text-4xl md:text-6xl font-extrabold mb-4">
            Korea Youth Pickleball Association
          </h1>
          <p className="text-black text-xl md:text-2xl mb-8">
            Empowering the youth through <strong>Pickleball</strong> !
          </p>
          <Link href="/join-us" 
          className="bg-[#52b49b] hover:bg-[#48a58d] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
          >
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
          <Link href="/about" className="text-[#40937e] hover:underline text-xl">
            Learn More About Us →
          </Link>
        </div>
      </section>

      {/* News Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Recent News</h2>
        <div className="bg-white rounded-2xl shadow hover:shadow-lg overflow-hidden transition-all p-4">
          <img 
            src="/images/fall-international-pickleball-festival/poster_en.jpg" 
            alt="" 
            className="mx-auto max-w-xs object-contain"
          />
          <div className="mt-4">
            <Link href={`/news/fall-international-pickleball-festival`}>
              <h3 className="text-lg font-semibold text-black hover:underline cursor-pointer">
                Fall International Pickleball Festival
              </h3>
            </Link>
            <p className="text-sm text-gray-500">November 5, 2025</p>
            <p className="mt-2 text-sm text-gray-700 line-clamp-3">
              An international six-team pickleball festival will be held Nov 22-23, 2025 in the Seoul-Gyeonggi area, with registration open Nov 2-17.
            </p>
            <Link 
              href={`/news/fall-international-pickleball-festival`} 
              className="inline-block mt-4 text-[#40937e] hover:underline text-sm"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
      </section>

      {/* Programs Section */}
      <section className="bg-white py-16 px-4">
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

      <section className="bg-gray-100 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Moments</h2>
        <ImageCarousel images={carouselImages} />
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Valued Sponsors</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image src="/images/sponsor-logo.jpg" alt="Sponsor 1" width={500} height={300} className="object-contain" />
        </div>
      </section>

      {/* Streamlined Contact Block */}
      <ContactBlock />
    </div>
  );
}