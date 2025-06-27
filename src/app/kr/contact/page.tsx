// src/app/contact/page.tsx
import React from 'react';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">

      <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
        {/* Contact Information */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">연락처</h2>
          <div className="space-y-4 text-lg text-gray-700">
            <p><strong>이메일: </strong> <a href="mailto:info.kypa@gmail.com" className="text-[#40937e] hover:underline">info.kypa@gmail.com</a></p>
            <p><strong>전화번호: </strong> +82-10-2113-2282</p>
            <p><strong>주소: </strong>
              <br />
              서울특별시 강남구 강남대로 308 랜드마크타워 지하 1층 (06253)
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6">문의하기</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="contact-name" className="block text-gray-700 text-sm font-bold mb-2">이름:</label>
              <input type="text" id="contact-name" name="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="홍길동" required />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-gray-700 text-sm font-bold mb-2">이메일:</label>
              <input type="email" id="contact-email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="honggildong@email.com" required />
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-gray-700 text-sm font-bold mb-2">제목:</label>
              <input type="text" id="contact-subject" name="subject" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="제목" required />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-gray-700 text-sm font-bold mb-2">내용:</label>
              <textarea id="contact-message" name="message" rows={6} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="내용"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-[#52b49b] hover:bg-[#48a58d] text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
                문의하기
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-center mb-6">위치</h2>
        <div className="relative w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.731226019321!2d127.02921677741747!3d37.49066847205834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca14fcc62f89d%3A0xc49604c4847a487e!2s308%20Gangnam-daero%2C%20Gangnam%20District%2C%20Seoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1749877165026!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="KYPA Location Map"
          ></iframe>
        </div>
      </section>
    </div>
  );
}