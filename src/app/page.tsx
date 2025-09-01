import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-50">
      <Hero />
      <Skills />
      <Services />
      <Experience />
    </main>
  );
}
