"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="py-20 z-10 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 font-russo">
            Got a Business
            <span
              tabIndex={0}
              className="relative inline-block mx-2 bg-orange-400 transform -rotate-6 px-2 py-1 rounded-2xl 
                         hover:rotate-0 focus:rotate-0 active:rotate-0 transition-transform duration-500 ease-in-out"
            >
              ideas?
              {/* Decorative icon pinned to the edge */}
              <span className="absolute top-0 -translate-x-1/4 -translate-y-1/4 text-black text-3xl sm:[right:-0.5rem] [rotate:135deg] sm:rotate-[120deg] [right:-1.4rem]">
                ➤
              </span>
            </span>
          </h2>

          <p className="text-lg sm:text-2xl text-gray-600 font-['Gemunu_Libre'] mb-4">
            I love turning ideas into reality. Whether it&apos;s a personal website, a business platform, or a digital product, I build solutions that are functional, modern, and user-friendly.
          </p>

          <p className="text-lg sm:text-2xl text-gray-600 font-sans mb-6">
            I focus on clean design, responsive development, and practical features that help your idea succeed in the digital world. Let&apos;s create something amazing together.
          </p>

          <a 
     href="https://m.me/ronnel.santos08"
     target="_blank" 
     rel="noopener noreferrer"
   className="custom-button shadow-2xl !w-36">
  <div className="front !w-36">
    <span>Get started</span>
  </div>
</a>
        </div>

        {/* Right: Image */}
        <div className="w-100 lg:w-1/2 flex justify-center">
          <Image
            src="/lets-go.png"
            alt="Personal business idea illustration"
            width={200}
            height={200}
            className="md:w-100 w-70 h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
