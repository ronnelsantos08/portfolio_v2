export default function Home() {
    return (
      <section className="flex items-start justify-center">
       <div className="w-full max-w-3xl mx-auto my-10 flex flex-col items-center justify-center px-4 sm:px-10 md:px-10 lg:px-0">
      {/* Headline */}
      <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 font-barriecito text-center">
      Crafting 
      <span
  tabIndex={0}
  className="relative inline-block mx-2 bg-orange-400 transform -rotate-6 px-2 py-1 rounded-2xl 
             hover:rotate-0 focus:rotate-0 active:rotate-0 transition-transform duration-500 ease-in-out">
            ideas
            {/* Decorative icon pinned to the edge */}
            <span className="absolute top-0 sm:[right:-0.5rem] -translate-x-1/4 -translate-y-1/4 text-black text-3xl [rotate:135deg] sm:rotate-[120deg] [right:-1.4rem]">
                ➤
            </span>
            </span>
          into Impactful Experiences
        </h1>
  
        {/* Subtext */}
        <p className="text-lg sm:text-2xl text-gray-700 max-w-3xl font-sans leading-relaxed text-center">
          I’m a web developer and designer, crafting clean, user-friendly interfaces and interactive experiences. I combine creativity with code to build websites that not only look great but work seamlessly.
        </p>
  
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 p-4 md:p-10 lg:items-center lg:justify-center">
        <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative group">
  <img
    src="/ronnel-alt.webp"
    alt="Your Name"
    className="w-full h-full object-cover rounded-full shadow-lg transition-opacity duration-500 ease-in-out group-hover:opacity-0 group-focus-within:opacity-0"
  />
  <img
    src="/ronnel.webp"
    alt="Your Name alternate"
    className="w-full h-full object-cover rounded-full shadow-lg absolute top-0 left-0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100"
  />
  {/* Invisible button for focusability */}
  <button className="absolute inset-0 rounded-full focus:outline-none">
    <span className="sr-only">Toggle photo</span>
  </button>
</div>
  
    {/* Right: Intro */}
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-4xl font-bold mb-4 text-gray-700">Hi, I’m Ronnel</h1>
      <p className="text-lg text-gray-700">
    Let’s create clean, modern, and impactful websites together. I’ll help turn your ideas into interactive and visually appealing digital experiences.
  </p>
  <a
      href="/contact"
      className="inline-block px-6 py-3 bg-indigo-400 my-5 text-white rounded-lg font-semibold shadow-2xl hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-1"
    >
      Let’s Chat
    </a>
    </div>
  </div>
              </div>
            </section>
          );
        }