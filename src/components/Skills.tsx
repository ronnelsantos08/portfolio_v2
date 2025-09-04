"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const skills = [
  { name: "REACT", file: "/lottie/react.lottie" },
  { name: "JAVASCRIPT", file: "/lottie/java.lottie" },
  { name: "HTML5", file: "/lottie/html.lottie" },
  { name: "CSS", file: "/lottie/css.lottie" },
  { name: "GIT", file: "/lottie/git.lottie" },
  { name: "SQL", file: "/lottie/sql.lottie" },
  { name: "NODE", file: "/lottie/node.lottie" },
  { name: "TYPESCRIPT", file: "/lottie/ts.lottie" },
  { name: "PHP", file: "/lottie/php.lottie" },
  { name: "MONGO", file: "/lottie/mongo.lottie" },
  { name: "TAILWIND", file: "/lottie/tailwind.lottie" },
  { name: "NEXT", file: "/lottie/next.lottie" },
];

export default function Skills() {
  return (
    <section className="z-1 pb-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 font-russo">My Skills</h2>
        <p className="text-lg sm:text-2xl text-gray-600 font-sans mb-12">
          Technologies I work with and enjoy building with. From front-end to back-end, these are the technologies I use to craft performant and visually stunning web applications.
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-4 sm:gap-8 gap-10 justify-items-center border-2 border-orange-400 items-center px-15 py-5 rounded shadow-xl bg-[rgba(246,186,83,0.02)]">

          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center space-y-0">
              <DotLottieReact
                src={skill.file}
                loop
                autoplay
                style={{ width: 50, height: 50 }}
              />
              <span className="sm:text-lg text-sm font-semibold font-mono text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
