import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-gray-50">
      <Hero />
      <Skills />
    </main>
  );
}
