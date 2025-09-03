"use client";

import { useInView } from "react-intersection-observer";

const services = [
  { title: "Personal Website", description: "Showcase your portfolio, blog, or personal brand with a sleek and modern design." },
  { title: "Business Website", description: "Build a professional website for your company to increase visibility and credibility." },
  { title: "Digital Product", description: "I help clients design, develop, and optimize digital products that are functional, engaging, and scalable." },
  { title: "Freelancing Service", description: "I offer a range of freelancing services to help businesses and individuals with their digital needs." },
];

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="services" className="pb-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-12">
        {/* Left Side: Service Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1 border-2 border-gray-100 shadow-2xl p-10 rounded bg-gray-100">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-orange-100/20 border border-orange-100 rounded-xl shadow">
              <h3 className="text-md sm:text-xl font-bold font-mono text-orange-600 mb-2">{service.title}</h3>
              <p className="text-gray-700 sm:text-md text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side: Heading + Paragraph */}
        <div className="flex-1 flex flex-col justify-center">
        <h2
  ref={ref}
  className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4 font-russo flex flex-wrap gap-2"
>
  {/* Services */}
  <span
    className={`inline-block transition-all duration-700 ease-out ${
      inView ? "opacity-100 translate-y-0 delay-[0ms]" : "opacity-0 translate-y-8"
    }`}
  >
    Services
  </span>

  {/* I */}
  <span
    className={`inline-block transition-all duration-700 ease-out ${
      inView ? "opacity-100 translate-y-0 delay-[150ms]" : "opacity-0 translate-y-8"
    }`}
  >
    I
  </span>

  {/* Offer (tilt preserved) */}
  <span
    className={`inline-block transition-all duration-700 ease-out ${
      inView ? "opacity-100 translate-y-0 delay-[300ms]" : "opacity-0 translate-y-8"
    }`}
  >
    <span className="relative inline-block bg-purple-400 -rotate-6 px-2 py-1 rounded-2xl hover:rotate-0 focus:rotate-0 active:rotate-0 transition-transform duration-500 ease-in-out">
      Offer
      {/* Question mark */}
      <span
        aria-hidden="true"
        className={`absolute top-0 [right:-2rem] -translate-x-1/4 -translate-y-1/4 text-black text-5xl ${
          inView ? "question-animate" : "question-start"
        }`}
        style={{ animationDelay: "500ms" }}
      >
        ?
      </span>
    </span>
  </span>
</h2>


          {/* Paragraph is now static (no inView animation) */}
          <p className="text-lg sm:text-2xl text-gray-600 font-sans">
            Whether you need a personal portfolio, a professional business site,
            a digital product platform, or freelance service setup, I deliver
            tailored solutions that help you succeed online.
          </p>
        </div>
      </div>
    </section>
  );
}
