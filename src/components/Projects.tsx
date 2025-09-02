"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ProjectItem {
  name: string;
  url: string;
  description: string;
}

interface ProjectCategory {
  id: number;
  title: string;
  video: string;
  items: ProjectItem[];
}

const projects: ProjectCategory[] = [
  {
    id: 1,
    title: "Business Website",
    video: "/projects/project2.webm",
    items: [
      { name: "The JC Studios", url: "https://thejcstudios.com", description: "Professional website designed for photo and video studios Showcases creativity and quality. Focuses on visual storytelling.Core frontend tech (React, Vite, TypeScript) Content management (Contentful), APIs (Google Drive API, SMTP Email),UX & accessibility (Responsive Design, a11y),SEO and analytics (SEO Optimization,Testing and version control (Unit Testing, Git),Deployment and automation (CI/CD, Vercel Serverless Functions)Performance optimization " },
      { name: "T&G Travelers", url: "#", description: "E-commerce website with Stripe integration and fast checkout." },
    ],
  },
  {
    id: 2,
    title: "Digital Invitation",
    video: "/projects/project1.webm",
    items: [
      { name: "Wedding", url: "https://ourwedding-2rr6.vercel.app/", description: "Interactive digital wedding invitation with RSVP support." },
      { name: "JC Wedding", url: "https://jcwedding.thejcstudios.com", description: "Custom digital invitation for mobile with animated backgrounds." },
    ],
  },
  {
    id: 3,
    title: "Portfolio Website",
    video: "/projects/project3.webm",
    items: [
      { name: "JC Portfolio", url: "/", description: "Personal portfolio website showcasing Photography projects and Event Coverage." },
      { name: "Emerson Portfolio", url: "/", description: "Portfolio for Emerson featuring case studies and blog." },
    ],
  },
  {
    id: 4,
    title: "Digital Product",
    video: "/projects/project4.webm",
    items: [
      { name: "Logo and Banners", url: "/", description: "Landing page for digital app product with download links." },
      { name: "File Uploading Project", url: "/", description: "Web-based productivity tool Image Optimization site." },
    ],
  },
];

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000 })]
  );
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
  
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
  
    emblaApi.on("select", onSelect);
    onSelect();
  
    return (): void => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);
  

  return (
    <section id="projects" className="max-w-full md:max-w-6xl mx-auto px-6 lg:px-12 py-20">
      <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
      <p className="text-center text-gray-600 mb-12">
      Here are some of the projects I’ve worked on, showcasing my skills in web development, front-end design, and digital solutions. Each project reflects my focus on creating clean, functional, and user-friendly digital products..
      </p>

      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_40%] px-4 transition-all duration-500 cursor-pointer ${
                activeIndex === i
                  ? "scale-100 opacity-100 z-10"
                  : "scale-90 opacity-50 z-0"
              }`}
              onClick={() => setSelectedCategory(project)}
            >
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h2 className="text-xl text-orange-500 font-mono mb-3">{project.title}</h2>
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

     {/* Modal */}
{selectedCategory && (
  <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">
    <div
      className="bg-white rounded-xl max-w-3xl w-full h-[90vh] overflow-y-auto p-6 relative
                 transform scale-90 opacity-0 transition-all duration-300 ease-out
                 animate-modal-open"
    >
      <button
        onClick={() => setSelectedCategory(null)}
        className="absolute top-4 right-4 text-orange-400 hover:text-purple-400"
      >
        <X size={24} />
      </button>

      {/* Category Video */}
      <h2 className="text-2xl font-bold mb-4 ">{selectedCategory.title}</h2>
      <video
        src={selectedCategory.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* List of projects */}
      <div className="space-y-4">
        {selectedCategory.items.map((item, idx) => (
     <details
     key={idx}
     className="shadow-2xl rounded overflow-hidden"
   >
     <summary className="cursor-pointer text-lg font-mono px-4 py-2 bg-orange-300 hover:bg-purple-300 transition">
       {item.name}
     </summary>
     <div className="overflow-hidden transition-all duration-300 max-h-0 group-open:max-h-96 px-4 py-2 text-gray-700">
       <p className="mb-2">{item.description}</p>
       <a
         href={item.url}
         target="_blank"
         className="menu-link inline-block w-30 my-2 bg-orange-400 text-center !text-black rounded py-1"
       >
         See Live
       </a>
     </div>
   </details>
        ))}
      </div>
    </div>
  </div>
)}
    </section>
  );
}
