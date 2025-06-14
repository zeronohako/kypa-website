// src/components/ContactBlock.tsx
import Link from 'next/link';
import React from 'react';

interface ContactBlockProps {
  title?: string;
  email?: string;
  phone?: string;
  address?: string;
}

export default function ContactBlock({
  title = "Contact Us",
  email = "info@koreaypa.org",
  phone = "+82-10-1234-5678",
  address = "Seoul, South Korea"
}: ContactBlockProps) {
  return (
    <div className="bg-blue-700 text-white p-8 rounded-lg shadow-lg text-center max-w-2xl mx-auto my-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-2">
        <strong>Email:</strong> <a href={`mailto:${email}`} className="underline">{email}</a>
      </p>
      <p className="text-lg mb-4">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="text-lg">{address}</p>
      <Link href="/contact" className="mt-6 inline-block bg-white text-blue-700 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
        View Full Contact Page
      </Link>
    </div>
  );
}