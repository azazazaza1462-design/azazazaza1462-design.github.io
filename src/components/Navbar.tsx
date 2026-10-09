import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Code2 } from "lucide-react";
const links = [
  ["proyectos", "Proyectos"],
  ["diseno-web", "Diseño web"],
  ["experiencia", "Experiencia"],
  ["stack", "Stack"],
  ["sobre-mi", "Sobre mí"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -65% 0px" });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <header className="site-header">
      <a href="#inicio" className="logo" aria-label="José Ramos, inicio">
        <Code2 size={24} />
        <span>
          jose<span className="muted">.ramos</span>
          <span className="accent">_</span>
        </span>
      </a>
      <button
        className="menu-toggle icon-button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <nav
        id="navigation"
        className={open ? "nav-open" : ""}
        aria-label="Navegación principal"
      >
        {links.map(([id, label]) => (
          <a key={id} href={`#${id}`} aria-current={active === id ? "location" : undefined} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-contact"
          href="#contacto"
          onClick={() => setOpen(false)}
        >
          Hablemos <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}
