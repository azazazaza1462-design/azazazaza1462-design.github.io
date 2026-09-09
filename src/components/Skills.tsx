import { skills } from "../data/skills";
export default function Skills() {
  return (
    <section className="section" id="stack">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / TOOLKIT</p>
          <h2>
            Las herramientas detrás
            <br />
            de cada solución<span>.</span>
          </h2>
        </div>
        <p>
          Backend como base. Full-stack como visión.
          <br />
          IA como diferenciador.
        </p>
      </div>
      <div className="skills-grid">
        {skills.map((x) => (
          <article className="skill-card" key={x.name}>
            <div className="skill-title">
              <h3>{x.name}</h3>
              <span>{x.symbol}</span>
            </div>
            <div className="tags">
              {x.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
