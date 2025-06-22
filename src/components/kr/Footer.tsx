// src/components/Footer.tsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Korea Youth Pickleball Association. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          {/* Social media links (placeholders) */}
          <a href="#" className="hover:underline">페이스북</a>
          <a href="#" className="hover:underline">인스타그램</a>
          <a href="#" className="hover:underline">유튜브</a>
        </div>
      </div>
    </footer>
  );
}