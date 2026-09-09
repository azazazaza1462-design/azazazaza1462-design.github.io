import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "../data/skills";
export default function Certifications() {
  return (
    <section className="section certifications">
      <div className="section-heading">
        <div>
          <p className="eyebrow">05 / APRENDIZAJE CONTINUO</p>
          <h2>
            Seguir aprendiendo es parte del trabajo<span>.</span>
          </h2>
        </div>
      </div>
      <div className="cert-grid">
        {certifications.map((x) => (
          <article key={x.name}>
            <div className="cert-top">
              <Award size={22} />
              <span>{x.year}</span>
            </div>
            <h3>{x.name}</h3>
            <p>
              {x.institution}
              <ArrowUpRight size={15} aria-hidden="true" />
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
