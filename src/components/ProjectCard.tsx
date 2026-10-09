import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "../data/projects";
import ProjectVisual from "./ProjectVisual";
import { moveCard, resetCard } from "../lib/motion";
export default function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  return (
    <article
      className={`project-card interactive-card ${project.id === "identity" || project.id === "cotizaflow" ? "featured" : ""}`}
      onPointerMove={moveCard}
      onPointerLeave={resetCard}
    >
      <ProjectVisual type={project.id} />
      <div className="project-content">
        <div className="project-meta">
          <span>
            {project.number} /{" "}
            {project.id === "cotizaflow"
              ? "NUEVO / SAAS & IA APLICADA"
              : project.id === "identity"
              ? "PROYECTO DESTACADO"
              : project.id === "metrics"
                ? "ANALYTICS & FULL-STACK"
                : "BUSINESS AUTOMATION"}
          </span>
          {project.id === "identity" && (
            <span className="small-dot">End-to-end</span>
          )}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="project-features">
          {project.features.map((x) => (
            <li key={x}>
              <Check size={14} />
              {x}
            </li>
          ))}
        </ul>
        <div className="tags">
          {project.tags.map((x) => (
            <span key={x}>{x}</span>
          ))}
        </div>
        <button className="case-button" onClick={() => onOpen(project)}>
          Ver caso de estudio <ArrowUpRight size={18} />
        </button>
      </div>
    </article>
  );
}
