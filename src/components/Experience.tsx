// src/components/ExperienceSection.tsx
"use client";

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Bachelor’s Degree in Information Technology",
      company: "Cavite State University",
      date: "2018 – 2023",
      description:
        "Specialized in software development, databases, and system analysis. Graduated with strong technical foundations.",
      style: "bg-black/70 text-white",
    },
    {
      role: "Technical Analyst",
      company: "Yngen Datacomm Corp.",
      date: "Jan 2024 - Jan 2025",
      description:
        "Supporting system integration and troubleshooting by analyzing technical documentation and coordinating with developers and stakeholders.",
      style: "bg-white/50 text-gray-800",
    },
    {
      role: "Freelance Web Developer",
      company: "Upwork",
      date: "2017 – Present",
      description:
        "Develop responsive, dynamic, and optimized web applications for startups and small businesses. Optimized website performance for mobile devices, resulting in improved loading times. Collaborated with senior developers on various web projects, learning best practices in front-end development.",
      style: "bg-white/50 text-gray-800",
    },
    {
      role: "Freelance IT Consultant",
      company: "Self-Employed",
      date: "2018 – 2019",
      description:
        "Advised small businesses on IT strategies, infrastructure, and cybersecurity best practices. Managed client relationships and project timelines independently. Gained initial exposure to full-stack development and client requirements gathering.",
      style: "bg-white/50 text-gray-800",
    },
  ];

  return (
    <section id="experience" className="py-20 z-10 w-full">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
          Experience
        </h2>

        {/* Mobile: Horizontal scroll | Desktop: Grid */}
        <div className="flex gap-6 overflow-x-auto md:grid md:grid-cols-2 md:gap-10 scrollbar-hide">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`rounded shadow-lg p-6 flex-shrink-0 w-[60%] sm:w-[60%] md:w-auto ${exp.style}`}
            >
              <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
              <p className="text-sm opacity-80 mb-3">
                {exp.company} — {exp.date}
              </p>
              <p className="text-base">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
