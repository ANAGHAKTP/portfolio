import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Background Animations */}
      <div className="fixed top-1/4 right-10 pointer-events-none opacity-10">
        <svg
          className="animate-spin-slow"
          height="100"
          viewBox="0 0 100 100"
          width="100"
        >
          <path
            d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>
      <div className="fixed bottom-1/4 left-10 pointer-events-none opacity-10">
        <svg height="80" viewBox="0 0 100 100" width="80">
          <circle
            cx="50"
            cy="50"
            fill="none"
            r="40"
            stroke="currentColor"
            strokeDasharray="5,5"
            strokeWidth="2"
          ></circle>
        </svg>
      </div>
    </main>
  );
}
