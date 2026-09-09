import { useEffect, useRef } from "react";
import { X, ArrowDown, Check } from "lucide-react";
import type { Project } from "../data/projects";
export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project) return;
    const dialog = ref.current!;
    const previous = document.activeElement as HTMLElement | null;
    dialog.showModal();
    const before = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = before;
      previous?.focus();
    };
  }, [project]);
  return (
    <dialog
      ref={ref}
      className="project-modal"
      aria-labelledby="case-title"
      onCancel={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project && (
        <article>
          <button
            autoFocus
            className="modal-close icon-button"
            onClick={onClose}
            aria-label="Cerrar caso de estudio"
          >
            <X />
          </button>
          <p className="eyebrow">CASO DE ESTUDIO / {project.number}</p>
          <h2 id="case-title">{project.name}</h2>
          <p className="muted">
            {project.company} · {project.category}
          </p>
          <div className="case-intro">{project.description}</div>
          <div className="case-grid">
            <section>
              <h3>El problema</h3>
              <p>{project.problem}</p>
            </section>
            <section>
              <h3>La solución</h3>
              <p>{project.solution}</p>
            </section>
          </div>
          <section>
            <h3>Mi participación</h3>
            <p>{project.contribution}</p>
          </section>
          <section>
            <h3>Arquitectura & flujo</h3>
            <ol className="architecture">
              {project.architecture.map((step, i) => (
                <li key={step}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  {step}
                  {i < project.architecture.length - 1 && (
                    <ArrowDown size={14} />
                  )}
                </li>
              ))}
            </ol>
          </section>
          <section>
            <h3>Características & resultados técnicos</h3>
            <ul className="results">
              {project.results.map((x) => (
                <li key={x}>
                  <Check size={17} />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Tecnologías</h3>
            <div className="tags">
              {project.technologies.map((x) => (
                <span key={x}>{x}</span>
              ))}
            </div>
          </section>
          <a className="button primary" href="mailto:jarc2003@hotmail.com">
            Hablemos de ingeniería ↗
          </a>
        </article>
      )}
    </dialog>
  );
}
