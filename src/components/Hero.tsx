export default function Home() {
    return (
      <section id="home" className="flex items-start justify-center w-full">
       <div className="w-full max-w-3xl mx-auto my-10 flex flex-col items-center justify-center px-4 sm:px-10 md:px-10 lg:px-0">
      {/* Headline */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 font-russo mb-6 text-center">
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
        <p className="text-lg sm:text-2xl max-w-3xl text-gray-600 font-sans leading-relaxed text-center">
          I&apos;m a web developer and designer, crafting clean, user-friendly interfaces and interactive experiences. I combine creativity with code to build websites that not only look great but work seamlessly.
        </p>
  
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 p-4 md:p-10 lg:items-center lg:justify-center">
      {/* Container for the entire profile card, with relative positioning */}
      <div className="relative flex flex-col items-center max-w-sm w-full">
        
        {/* Square profile photo, now at the top layer */}
   {/* Profile photo wrapper */}
<div className="relative h-54 w-60 sm:h-52 sm:w-52 md:h-70 md:w-80 overflow-hidden z-20 group mx-auto">
  {/* Default photo */}
  <img 
    src="/ronnel-alt-removebg.png"
    alt="Profile photo"
    className="w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0 group-focus-within:opacity-0"
  />
  {/* Hover/focus photo */}
  <img 
    src="/ronnel.png"
    alt="Alternate profile photo"
    className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus-within:opacity-100"
  />
  {/* Invisible button */}
  <button className="absolute inset-0 w-full h-full focus:outline-none">
    <span className="sr-only">Toggle profile photo</span>
  </button>
</div>

{/* First box (orange background) */}
<div className="relative w-64 md:w-85 -mt-47 md:-mt-55 py-15  md:py-16 pt-32  md:pt-39 bg-orange-400 text-white rounded-xl shadow-xl z-0 mx-auto">
</div>

{/* Second box (purple border) */}
<div className="relative w-64 md:w-85 -mt-44 md:-mt-50 py-15 md:py-5 pt-32  md:pt-50 border-2 border-purple-500 rounded-xl z-10 -left-5 sm:-left-4 md:-left-5 mx-auto">
</div>
</div>
    {/* Right: Intro */}
    <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 font-russo">Hi, I&apos;m Ronnel</h2>
      <p className="text-lg sm:text-2xl text-gray-600 font-sans">
    Let&apos;s create clean, modern, and impactful websites together. I&apos;ll help turn your ideas into interactive and visually appealing digital experiences.
  </p>
    <a 
     href="https://m.me/ronnel.santos08"
     target="_blank" 
     rel="noopener noreferrer"
   className="custom-button shadow-2xl">
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