import { ArrowUpRight, GraduationCap } from "lucide-react";
export default function About() {
  return (
    <section className="section about-section" id="sobre-mi">
      <div>
        <p className="eyebrow">04 / SOBRE MÍ</p>
        <h2>
          Curiosidad por entender.
          <br />
          Pasión por construir<span>.</span>
        </h2>
        <p className="about-lead">
          Soy José, Ingeniero en Sistemas Computacionales y Software Engineer en
          Veracruz, México.
        </p>
        <p>
          Con más de 2 años de experiencia combinada en desarrollo de software,
          proyectos profesionales, soluciones en producción y proyectos
          independientes, trabajo con backend, aplicaciones full-stack, APIs
          REST, bases de datos y cloud.
        </p>
        <p>
          Mi stack principal es C#, .NET, ASP.NET Core, PostgreSQL, React y
          Microsoft Azure. También tengo experiencia con AWS, Python, TypeScript
          y automatización de procesos. Me interesan el código mantenible, las
          arquitecturas escalables y el aprendizaje continuo.
        </p>
        <a className="text-link" href="#contacto">
          Conversemos <ArrowUpRight size={17} />
        </a>
      </div>
      <aside className="education">
        <GraduationCap size={28} />
        <p className="eyebrow">EDUCACIÓN</p>
        <h3>Ingeniería en Sistemas Computacionales</h3>
        <p>Universidad Cristóbal Colón</p>
        <div className="education-bottom">
          <span>2021 — 2026</span>
          <span className="accent">Formación concluida</span>
        </div>
        <small>En proceso de titulación / certificación del título.</small>
        <div className="language">
          <span>Comunicación sin fronteras</span>
          <strong>Inglés avanzado ↗</strong>
        </div>
      </aside>
    </section>
  );
}
