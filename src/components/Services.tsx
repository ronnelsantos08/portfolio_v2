// src/components/Services.tsx
"use client";

const services = [
  {
    title: "Personal Website",
    description: "Showcase your portfolio, blog, or personal brand with a sleek and modern design.",
  },
  {
    title: "Business Website",
    description: "Build a professional website for your company to increase visibility and credibility.",
  },
  {
    title: "Digital Product",
    description: "Create and sell digital products like e-books, templates, and online courses.",
  },
  {
    title: "Freelancing Service",
    description: "Offer your skills and services online with an attractive and functional platform.",
  },
];

export default function Services() {
  return (
    <section id ="services" className="pb-10 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-12">
        {/* Left Side: Service Boxes in 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 border-2 border-gray-100 shadow-2xl p-10 rounded bg-gray-100">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-orange-100/20 border border-orange-100 rounded-xl shadow "
            >
              <h3 className="text-xl font-bold text-orange-600 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side: Heading + Paragraph */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Services I  
            <span
                tabIndex={0}
                className="relative inline-block mx-2 bg-purple-300 transform -rotate-6 px-2 py-1 rounded-2xl 
                            hover:rotate-0 focus:rotate-0 active:rotate-0 transition-transform duration-500 ease-in-out">
                Offer
                <span className="absolute top-0 [right:-2rem] -translate-x-1/4 -translate-y-1/4 text-black text-5xl">
                    ?
                </span>
                </span>

          </h1>
          <p className="text-lg text-gray-700">
            Whether you need a personal portfolio, a professional business site, a digital product platform, or freelance service setup, I deliver tailored solutions that help you succeed online.
          </p>
        </div>
      </div>
    </section>
  );
}
