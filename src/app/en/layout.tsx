// src/app/layout.tsx
import './globals.css'; 
import { Inter } from 'next/font/google';
import Navbar from '@/components/en/Navbar'; 
import Footer from '@/components/en/Footer'; 
import React from 'react'; 
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Korea Youth Pickleball Association (KYPA)',
  description: 'Official Website of Korea Youth Pickleball Association',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> 
        <main className="min-h-screen">
          {children} 
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}