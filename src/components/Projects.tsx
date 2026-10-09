import {
  ArrowDownRight,
  PanelsTopLeft,
  MousePointer2,
  Smartphone,
} from "lucide-react";
import { projects, type Project } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { useState } from "react";
const filters = ["Todos", "IA aplicada", "Analítica", "Automatización"] as const;
export default function Projects({
  onOpen,
}: {
  onOpen: (project: Project) => void;
}) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const visible = projects.filter((project) => filter === "Todos" ||
    (filter === "IA aplicada" && ["identity", "cotizaflow"].includes(project.id)) ||
    (filter === "Analítica" && project.id === "metrics") ||
    (filter === "Automatización" && ["livestock", "cotizaflow"].includes(project.id)));
  return (
    <section className="section" id="proyectos">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / TRABAJO SELECCIONADO</p>
          <h2>
            Problemas reales.
            <br />
            Soluciones bien construidas<span>.</span>
          </h2>
        </div>
        <div>
          <p>
            Una selección de proyectos donde
            <br />
            el código se convierte en valor.
          </p>
          <ArrowDownRight className="heading-arrow" size={30} />
        </div>
      </div>
      <div className="project-filters" role="group" aria-label="Filtrar proyectos por especialidad">
        {filters.map((item) => <button key={item} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}</button>)}
        <span role="status">{visible.length} proyectos</span>
      </div>
      <div className="projects-grid">
        {visible.map((x) => (
          <ProjectCard key={x.id} project={x} onOpen={onOpen} />
        ))}
      </div>
      <div className="design-strip">
        <div className="design-icon">
          <PanelsTopLeft size={27} />
        </div>
        <div>
          <h3>También importa cómo se siente usarlo.</h3>
          <p>
            Interfaces web cuidadas, dashboards claros y experiencias que se
            adaptan a cada pantalla.
          </p>
        </div>
        <div className="design-pill">
          <MousePointer2 size={15} /> UI con propósito
        </div>
        <div className="design-pill">
          <Smartphone size={15} /> Responsive
        </div>
      </div>
    </section>
  );
}
