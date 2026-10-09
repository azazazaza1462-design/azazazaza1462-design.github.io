import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Code2,
  Cloud,
  Globe2,
} from "lucide-react";
import DevelopmentFlow from "./DevelopmentFlow";
export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-copy">
        <div className="availability">
          <span /> Disponible para nuevas oportunidades
        </div>
        <p className="hero-name">JOSÉ ADOLFO RAMOS CARMONA</p>
        <p className="hero-role">SOFTWARE ENGINEER / FULL-STACK & APPLIED AI</p>
        <h1>
          Construyo ideas.<br /><span className="hero-gradient">Entrego software.</span>
        </h1>
        <h2>
          Del primer concepto <span>a una solución real.</span>
        </h2>
        <p className="hero-description">
          Construyo software que conecta negocio, datos e inteligencia
          artificial. Especializado en <strong>.NET, React y cloud</strong>, de
          la arquitectura a una experiencia que funciona.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#proyectos">
            Explorar proyectos <ArrowDown size={17} />
          </a>
          <a className="button secondary" href="#contacto">
            Contactarme <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="hero-location">
          <MapPin size={14} /> Boca del Río, Veracruz, México
        </div>
      </div>
      <div className="hero-art technology-stage" aria-label="Globo animado con tecnologías de backend, frontend, datos, cloud e inteligencia artificial">
        <div className="world-stage-heading"><span className="world-live-dot" /> TECHNOLOGY UNIVERSE <span>3D / LIVE</span></div>
        <div className="world-stage-footer">
          <div><span className="world-orbit-symbol">◎</span><div>Mi mundo, en código.<small>Backend · Frontend · Cloud · AI</small></div></div>
          <p><span>❯</span> imagine → build → ship<span className="code-cursor" aria-hidden="true">▍</span></p>
        </div>
      </div>
      <DevelopmentFlow />
      <div className="hero-facts">
        <div>
          <Code2 />
          <strong>2+ años</strong>
          <span>construyendo soluciones</span>
        </div>
        <div>
          <Cloud />
          <strong>Azure + AWS</strong>
          <span>del código a la nube</span>
        </div>
        <div>
          <Globe2 />
          <strong>Advanced English</strong>
          <span>ready for global teams</span>
        </div>
        <a href="#proyectos" aria-label="Descubrir proyectos">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
