"use client";

import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const headline = ["Crafting", "ideas", "into", "Impactful", "Experiences"];

  return (
    <section id="home" className="flex items-start justify-center w-full">
      <div className="w-full max-w-3xl mx-auto my-10 flex flex-col items-center justify-center px-4 sm:px-10 md:px-10 lg:px-0">
        {/* Headline (staggered) */}
        <h1
          ref={ref}
          className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-russo mb-6 text-center flex flex-wrap justify-center gap-2"
        >
          {headline.map((word, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 ease-out transform
                ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              {word === "ideas" ? (
                <span
                  tabIndex={0}
                  className="relative inline-block bg-orange-400 transform -rotate-6 px-2 py-1 rounded-2xl 
                             hover:rotate-0 focus:rotate-0 active:rotate-0 transition-transform duration-500 ease-in-out"
                >
                  {word}
                  {/* Arrow that flies in from top-right and “hits” the badge */}
                  <span
                    aria-hidden="true"
                    className={`arrow-start text-black text-3xl sm:text-4xl ${inView ? "arrow-animate" : ""}`}
                  >
                    ➤
                  </span>
                </span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        {/* Subtext (no animation) */}
        <p className="text-lg sm:text-2xl max-w-3xl text-gray-600 font-sans leading-relaxed text-center">
          I&apos;m a web developer and designer, crafting clean, user-friendly interfaces and interactive experiences.
          I combine creativity with code to build websites that not only look great but work seamlessly.
        </p>

        {/* Profile + intro (unchanged) */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 p-4 md:p-10 lg:items-center lg:justify-center">
          <div className="relative flex flex-col items-center max-w-sm w-full">
            <div className="relative h-54 w-60 sm:h-52 sm:w-52 md:h-70 md:w-80 overflow-hidden z-20 group mx-auto">
              <img
                src="/ronnel-alt-removebg.png"
                alt="Profile photo"
                className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0 group-focus-within:opacity-0"
              />
              <img
                src="/ronnel.png"
                alt="Alternate profile photo"
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100"
              />
              <button className="absolute inset-0 w-full h-full focus:outline-none">
                <span className="sr-only">Toggle profile photo</span>
              </button>
            </div>
            <div className="relative w-64 md:w-85 -mt-47 md:-mt-55 py-15  md:py-16 pt-32  md:pt-39 bg-orange-400 text-white rounded-xl shadow-xl z-0 mx-auto"></div>
            <div className="relative w-64 md:w-85 -mt-44 md:-mt-50 py-15 md:py-5 pt-32  md:pt-50 border-2 border-purple-500 rounded-xl z-10 -left-5 sm:-left-4 md:-left-5 mx-auto"></div>
          </div>

          <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 font-russo">Hi, I&apos;m Ronnel</h2>
            <p className="text-lg sm:text-2xl text-gray-600 font-sans">
              Let&apos;s create clean, modern, and impactful websites together. I&apos;ll help turn your ideas into
              interactive and visually appealing digital experiences.
            </p>
            <a
              href="https://m.me/ronnel.santos08"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-button shadow-2xl"
            >
              <div className="front">
                <span>Let&apos;s chat</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
