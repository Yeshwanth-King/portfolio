import Navigation from "@/components/layout/Navigation";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import ScrollRestoration from "@/components/ScrollRestoration";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <ScrollRestoration />
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}
