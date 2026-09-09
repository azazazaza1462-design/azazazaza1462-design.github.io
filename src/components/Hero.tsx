import {
  ArrowDown,
  ArrowUpRight,
  MapPin,
  Code2,
  Cloud,
  Globe2,
} from "lucide-react";
export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-copy">
        <div className="availability">
          <span /> Disponible para nuevas oportunidades
        </div>
        <p className="hero-name">JOSÉ ADOLFO RAMOS CARMONA</p>
        <h1>
          Software Engineer<span className="accent">.</span>
        </h1>
        <h2>
          Ideas claras.
          <br />
          Software que <span>hace la diferencia.</span>
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
      <div className="hero-art">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="code-window">
          <div className="window-bar">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>SoftwareEngineer.cs</span>
            <Code2 size={15} />
          </div>
          <div className="code-content">
            <div className="code-line">
              <span className="comment">
                // Turning real problems into software.
              </span>
            </div>
            <div className="code-line">
              <span className="purple">public sealed class</span>{" "}
              <span className="mint">SoftwareEngineer</span>
            </div>
            <div className="code-line">{"{"}</div>
            <div className="code-line">
              {"    "}
              <span className="purple">public string</span> Name{" "}
              <span className="purple">=&gt;</span>
            </div>
            <div className="code-line">
              {"        "}
              <span className="sand">"José Adolfo Ramos Carmona"</span>;
            </div>
            <div className="code-line"> </div>
            <div className="code-line">
              {"    "}
              <span className="purple">public string[]</span> Stack{" "}
              <span className="purple">=&gt;</span>
            </div>
            <div className="code-line">{"    ["}</div>
            {[".NET 10", "React", "PostgreSQL", "Azure", "Claude"].map(
              (x, i) => (
                <div className="code-line" key={x}>
                  {"        "}
                  <span className="sand">"{x}"</span>
                  {i < 4 ? "," : ""}
                </div>
              ),
            )}
            <div className="code-line">{"    ];"}</div>
            <div className="code-line">{"}"}</div>
          </div>
          <div className="code-status">
            <span>
              <span className="status-dot" /> Ready to build
            </span>
            <span>C# · UTF-8</span>
          </div>
        </div>
        <div className="floating-label">
          <span className="floating-icon">
            <Code2 size={18} />
          </span>
          <div>
            Built with purpose.<small>Engineered to scale.</small>
          </div>
        </div>
      </div>
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
