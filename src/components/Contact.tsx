import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";
export default function Contact() {
  return (
    <section className="contact-section section" id="contacto">
      <div className="availability">
        <span /> ABIERTO A NUEVAS OPORTUNIDADES
      </div>
      <h2>
        ¿Construimos
        <br />
        algo <em>útil</em>
        <span>?</span>
      </h2>
      <p>
        Estoy abierto a oportunidades en desarrollo backend, full-stack,
        <br className="desktop-break" /> cloud, automatización e integración de
        inteligencia artificial.
      </p>
      <a className="contact-email" href="mailto:jarc2003@hotmail.com">
        jarc2003@hotmail.com <ArrowUpRight />
      </a>
      <div className="contact-details">
        <a href="tel:+529241973633">
          <Phone size={15} /> +52 924 197 3633
        </a>
        <span>
          <MapPin size={15} /> Boca del Río, Veracruz, México
        </span>
      </div>
      <div className="social-placeholders">
        <a
          href="https://www.linkedin.com/in/adolfo-ramos-61b004386/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Adolfo Ramos (abre en otra pesta?a)"
        >
          <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
        </a>
        <a
          href="https://github.com/azazazaza1462-design?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Repositorios de GitHub (abre en otra pesta?a)"
        >
          <Github size={16} /> GitHub <ArrowUpRight size={13} />
        </a>
        <a href="mailto:jarc2003@hotmail.com">
          <Mail size={15} /> Email ↗
        </a>
      </div>
    </section>
  );
}
