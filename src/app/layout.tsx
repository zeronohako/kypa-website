// src/app/layout.tsx
import './globals.css'; // Don't forget Tailwind CSS directives are in here
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar'; // Import Navbar
import Footer from '@/components/Footer'; // Import Footer
import React from 'react'; // React is implicitly imported, but good practice

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Korea YPA - Youth Pickleball Association',
  description: 'Official Website of Korea Youth Pickleball Association',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {/* Your Navbar component */}
        <main className="min-h-screen"> {/* Main content area */}
          {children} {/* This is where your page content will be rendered */}
        </main>
        <Footer /> {/* Your Footer component */}
      </body>
    </html>
  );
}