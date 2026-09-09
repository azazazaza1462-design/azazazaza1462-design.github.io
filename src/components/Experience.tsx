import {
  Code2,
  Cloud,
  PanelsTopLeft,
  Workflow,
  ArrowUpRight,
} from "lucide-react";
import { experience } from "../data/experience";
const icons = [Code2, Cloud, PanelsTopLeft, Workflow];
export default function Experience() {
  return (
    <section className="section experience-section" id="experiencia">
      <div className="section-heading">
        <div>
          <p className="eyebrow">02 / EXPERIENCIA</p>
          <h2>
            Ingeniería en el mundo real<span>.</span>
          </h2>
        </div>
        <p>
          De los requerimientos de negocio
          <br />
          al software en producción.
        </p>
      </div>
      <div className="experience-layout">
        <div className="company">
          <div className="company-mark">
            H<span>↗</span>
          </div>
          <h3>Helius Consulting</h3>
          <p>
            Software Developer /<br />
            Software Engineer
          </p>
          <span className="company-label">
            <span /> Experiencia profesional
          </span>
          <a href="#proyectos">
            Explorar el trabajo <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="experience-grid">
          {experience.map((x, i) => {
            const Icon = icons[i];
            return (
              <article key={x.title}>
                <Icon size={21} />
                <h3>{x.title}</h3>
                <p>{x.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
