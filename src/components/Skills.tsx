"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const skills = [
  { name: "React", file: "/lottie/react.lottie" },
  { name: "JavaScript", file: "/lottie/java.lottie" },
  { name: "HTML", file: "/lottie/html.lottie" },
  { name: "CSS", file: "/lottie/css.lottie" },
  { name: "Git", file: "/lottie/git.lottie" },
  { name: "sql.js", file: "/lottie/sql.lottie" },
  { name: "Node.js", file: "/lottie/node.lottie" },
  { name: "ts", file: "/lottie/ts.lottie" },
];

export default function Skills() {
  return (
    <section className="z-1 pb-30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-8 text-gray-700">My Skills</h2>
        <p className="text-gray-700 mb-12">
          Technologies I work with and enjoy building with. From front-end to back-end, these are the technologies I use to craft performant and visually stunning web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center border-2 border-orange-400 items-center px-20 py-5 rounded shadow-xl bg-[rgba(246,186,83,0.02)]">

          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center space-y-2">
              <DotLottieReact
                src={skill.file}
                loop
                autoplay
                style={{ width: 70, height: 70 }}
              />
              <span className="text-lg font-semibold text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
