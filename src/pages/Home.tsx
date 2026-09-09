import { useEffect, useState } from "react";
import WebDesigns from "../components/WebDesigns";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ProjectModal from "../components/ProjectModal";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import About from "../components/About";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import type { Project } from "../data/projects";
export default function Home() {
  const [project, setProject] = useState<Project | null>(null);
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.04 },
    );
    document.querySelectorAll(".section").forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <div className="page-shell">
        <Navbar />
        <main id="contenido">
          <Hero />
          <div className="stack-ribbon" aria-label="Stack principal">
            <span>BUILT ON A SOLID FOUNDATION</span>
            <strong>.NET</strong>
            <strong>React</strong>
            <strong>PostgreSQL</strong>
            <strong>Microsoft Azure</strong>
            <strong>AWS</strong>
            <strong className="ribbon-ai">+ Applied AI</strong>
          </div>
          <Projects onOpen={setProject} />
          <WebDesigns />
          <Experience />
          <Skills />
          <About />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
      <ProjectModal project={project} onClose={() => setProject(null)} />
    </>
  );
}
