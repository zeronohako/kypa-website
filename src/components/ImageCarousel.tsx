// src/components/ImageCarousel.tsx
'use client'; 
import { useState, useEffect } from 'react';
import Image from 'next/image'; 
import React from 'react';

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images?: ImageItem[]; 
}

export default function ImageCarousel({ images = [] }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto-advance the carousel
    if (images.length === 0) return; // Prevent errors if no images
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer); // Cleanup on unmount
  }, [images.length]);

  if (!images || images.length === 0) {
    return null; // Don't render if no images are provided
  }

  const currentImage = images[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto h-96 overflow-hidden rounded-lg shadow-xl">
      <Image
        src={currentImage.src}
        alt={currentImage.alt}
        fill 
        className="object-cover transition-opacity duration-1000 ease-in-out"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={currentIndex === 0} // Prioritize first image for faster loading
      />

      {/* Navigation Dots (optional) */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}