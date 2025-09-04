"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const headingWords = ["Got", "a", "Business"];

  return (
    <section className="py-20 z-10 w-full" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
          {/* Animated H2 */}
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 font-russo">
            {headingWords.map((word, i) => (
              <span
                key={i}
                className={`inline-block mr-2 transition-all duration-700 ease-out
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 0.2}s` }}
              >
                {word}
              </span>
            ))}

            {/* Orange Highlight + Tilt */}
            <div
                className={`inline-block transform transition-transform duration-500 ease-in-out
                  ${inView ? "rotate-6 scale-105" : "rotate-0 scale-95"}`}
                style={{ transitionDelay: inView ? "800ms" : "0ms" }}
              >
                {/* Inner span handles hover immediately */}
                <span
                  tabIndex={0}
                  className="relative inline-block mx-2 bg-orange-400 px-2 py-1 rounded-2xl transform transition-transform duration-300 ease-in-out hover:-rotate-6 hover:shadow-lg"
                >
                  ideas?
                  {/* Decorative icon */}
                  <span
                    className={`absolute top-[-0.9375rem] -translate-x-1/4 -translate-y-1/4 text-black text-3xl sm:[right:-1rem] [right:-1.4rem] transition-all duration-700 ease-out
                      ${inView ? "opacity-100 translate-y-0 rotate-[120deg]" : "opacity-0 -translate-y-6 rotate-0"}`}
                    style={{ transitionDelay: `${headingWords.length * 0.25}s` }}
                  >
                    ✦
                  </span>
                </span>
              </div>
          </h2>

          {/* Paragraphs (no animation) */}
          <p className="text-lg sm:text-2xl text-gray-600 font-sans mb-4">
            I love turning ideas into reality. Whether it&apos;s a personal website, a business platform, or a digital product, I build solutions that are functional, modern, and user-friendly.
          </p>

          <p className="text-lg sm:text-2xl text-gray-600 font-sans mb-6">
            I focus on clean design, responsive development, and practical features that help your idea succeed in the digital world. Let&apos;s create something amazing together.
          </p>

          {/* Button */}
          <a 
            href="https://m.me/ronnel.santos08"
            target="_blank" 
            rel="noopener noreferrer"
            className="custom-button shadow-2xl !w-36"
          >
            <div className="front !w-36">
              <span>Get started</span>
            </div>
          </a>
        </div>

        {/* Right: Image */}
        <div className="w-100 lg:w-1/2 flex justify-center">
          <Image
            src="/lets-go.webp"
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
