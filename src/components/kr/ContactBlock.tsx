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
  title,
  email = "info.kypa@gmail.com",
  phone = "+82-10-2113-2282",
  address,
}: ContactBlockProps) {

  return (
    <div style={{background: 'linear-gradient(90deg, #52b49b 0%, #89ccbb 100%)'}} className="text-white p-8 rounded-lg shadow-lg text-center max-w-2xl mx-auto my-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-lg mb-2">
        <strong>이메일:</strong> <a href={`mailto:${email}`} className="underline">{email}</a>
      </p>
      <p className="text-lg mb-4">
        <strong>전화번호:</strong> {phone}
      </p>
      <p className="text-lg">{address}</p>
      <Link href="/contact" className="mt-6 inline-block bg-white text-[#52b49b] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors">
        더 알아보기
      </Link>
    </div>
  );
}