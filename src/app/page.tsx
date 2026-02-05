import {
  ParticleBackground,
  Navigation,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
