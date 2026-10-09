import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  X,
  Monitor,
  Smartphone,
  ArrowRight,
  Command,
  Layers,
  AudioLines,
} from "lucide-react";
import { designs, type Design } from "../data/designs";
import { moveCard, resetCard } from "../lib/motion";

function DesignPreview({ design }: { design: Design }) {
  return (
    <div className={`design-preview preview-${design.id}`} aria-hidden="true">
      <div className="concept-browser">
        <span>● ● ●</span>
        <span>
          {design.id === "saas"
            ? "orbit / workspace"
            : design.id === "architecture"
              ? "forma / selected works"
              : "aural / collection 01"}
        </span>
        <span>↗</span>
      </div>
      {design.id === "saas" ? (
        <div className="orbit-site">
          <div className="concept-nav">
            <b>
              <Command size={16} /> orbit
            </b>
            <span>Product · Solutions · Resources</span>
            <i>Get started ↗</i>
          </div>
          <div className="orbit-intro">
            <small>LESS FRICTION. MORE FLOW.</small>
            <h4>
              Your next big idea.
              <br />
              <em>All in one space.</em>
            </h4>
            <p>A calmer place to plan, build, and move forward.</p>
            <div className="concept-cta">
              Find your flow <ArrowRight size={13} />
            </div>
          </div>
          <div className="orbit-workspace">
            <aside>
              <Command size={16} />
              <span>Workspace</span>
              <span>Overview</span>
              <span className="selected">Projects</span>
              <span>Activity</span>
              <span>Settings</span>
            </aside>
            <div className="workspace-main">
              <div className="workspace-heading">
                <b>Product launch</b>
                <span>+ New task</span>
              </div>
              <div className="workspace-columns">
                {["To do", "In progress", "Review"].map((title, i) => (
                  <div key={title}>
                    <small>
                      <i />
                      {title}
                    </small>
                    {[0, 1].map((n) => (
                      <div className="task-tile" key={n}>
                        <label>
                          {["DESIGN", "ENGINEERING", "PRODUCT"][(i + n) % 3]}
                        </label>
                        <strong>
                          {
                            [
                              ["Brand exploration", "Design system"],
                              ["Build the experience", "Component library"],
                              ["Website direction", "Launch checklist"],
                            ][i][n]
                          }
                        </strong>
                        <div>
                          <span className="task-avatar" />
                          <span className="task-avatar second" />
                          <span>•••</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : design.id === "architecture" ? (
        <div className="forma-site">
          <div className="concept-nav">
            <b>
              forma<span>®</span>
            </b>
            <span>Studio · Projects · Contact</span>
            <i>Let’s talk ↗</i>
          </div>
          <div className="forma-intro">
            <small>ARCHITECTURE & INTERIORS</small>
            <h4>
              Spaces for
              <br />
              <em>the way we live.</em>
            </h4>
            <span className="forma-arrow">↗</span>
          </div>
          <div className="architecture-photo">
            <img src={`${import.meta.env.BASE_URL}images/forma-architecture.jpg`} width="1400" height="933" alt="" loading="lazy" />
            <div className="photo-project-label"><span>01 / SELECTED SPACES</span><strong>Light. Form. Perspective.</strong><span>View project ↗</span></div>
          </div>
          <div className="forma-bottom">
            <span>
              Thoughtful spaces.
              <br />
              Lasting impressions.
            </span>
            <span>Explore selected work ↗</span>
          </div>
        </div>
      ) : (
        <div className="aural-site">
          <div className="concept-nav">
            <b>
              <AudioLines size={17} /> AURAL
            </b>
            <span>Sound · Design · Collection</span>
            <i>Explore ↗</i>
          </div>
          <div className="aural-body">
            <div className="aural-copy">
              <small>THE EVERYDAY, REIMAGINED.</small>
              <h4>
                Less noise.
                <br />
                <em>More you.</em>
              </h4>
              <p>
                Find a little space.
                <br />
                Make it sound like you.
              </p>
              <div className="concept-cta">
                Meet the collection <ArrowRight size={13} />
              </div>
              <span className="color-options">
                <i />
                <i />
                <i /> Choose your tone
              </span>
            </div>
            <div className="product-photo">
              <img src={`${import.meta.env.BASE_URL}images/aural-headphones.jpg`} width="1200" height="805" alt="" loading="lazy" />
              <span className="product-photo-label">THE LISTENING EDIT / 01</span>
              <div className="product-photo-specs"><span>Over-ear</span><span>Wireless</span><span>Everyday essentials</span></div>
            </div>
          </div>
          <div className="aural-bottom">
            <span>DESIGNED FOR YOUR EVERYDAY</span>
            <span>Sound, without the distractions. ↗</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default function WebDesigns() {
  const [selected, setSelected] = useState<Design | null>(null);
  const [mobile, setMobile] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!selected) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.current?.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [selected]);
  return (
    <section className="section web-designs" id="diseno-web">
      <div className="section-heading">
        <div>
          <p className="eyebrow">DESIGN LAB / EXPLORACIONES VISUALES</p>
          <h2>
            Buen software.
            <br />
            Una primera impresión memorable<span>.</span>
          </h2>
        </div>
        <p>
          Diseño que se puede explorar.
          <br />
          Producto, arquitectura y comercio digital.
        </p>
      </div>
      <p className="design-disclosure">
        <Layers size={15} /> Conceptos de diseño creados para este portafolio.
        Marcas ficticias, sin relación con clientes reales.
      </p>
      <div className="design-gallery">
        {designs.map((design) => (
          <article className="design-card interactive-card" key={design.id} onPointerMove={moveCard} onPointerLeave={resetCard}>
            <button
              className="design-open"
              aria-label={`Ver diseño ${design.name}`}
              onClick={() => {
                setMobile(false);
                setSelected(design);
              }}
            >
              <DesignPreview design={design} />
              <span className="design-open-overlay">
                Explorar diseño <ArrowUpRight size={18} />
              </span>
            </button>
            <div className="design-card-info">
              <small>{design.category}</small>
              <h3>{design.name}</h3>
              <p>{design.description}</p>
              <button
                className="case-button"
                onClick={() => {
                  setMobile(false);
                  setSelected(design);
                }}
              >
                Ver diseño <ArrowUpRight size={18} />
              </button>
            </div>
          </article>
        ))}
      </div>
      <small className="photo-credit">Fotografía de referencia: <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a> · Interfaces implementadas en React y CSS.</small>
      <dialog
        className="design-dialog"
        ref={dialog}
        aria-labelledby="design-dialog-title"
        onCancel={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
      >
        {selected && (
          <>
            <div className="design-dialog-toolbar">
              <div>
                <small>CONCEPTO VISUAL</small>
                <h3 id="design-dialog-title">{selected.name}</h3>
              </div>
              <div
                className="device-switch"
                aria-label="Tamaño de vista previa"
              >
                <button
                  aria-label="Vista de escritorio"
                  aria-pressed={!mobile}
                  onClick={() => setMobile(false)}
                >
                  <Monitor size={18} />
                </button>
                <button
                  aria-label="Vista móvil"
                  aria-pressed={mobile}
                  onClick={() => setMobile(true)}
                >
                  <Smartphone size={18} />
                </button>
              </div>
              <button
                autoFocus
                className="icon-button"
                aria-label="Cerrar diseño"
                onClick={() => setSelected(null)}
              >
                <X size={20} />
              </button>
            </div>
            <div className={`design-stage ${mobile ? "device-mobile" : ""}`}>
              <DesignPreview design={selected} />
            </div>
            <div className="design-dialog-description">
              <p>{selected.details}</p>
              <a href="mailto:jarc2003@hotmail.com">
                Hablemos de tu sitio web <ArrowUpRight size={16} />
              </a>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
