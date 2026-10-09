import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ArrowRight, Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Code2, Send, Sparkles } from "lucide-react";

const email = "jarc2003@hotmail.com";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyStatus("idle"), 5000);
  };

  return (
    <section className="contact-section section contact-redesign" id="contacto" aria-labelledby="contact-title">
      <div className="contact-ambient" aria-hidden="true"><i /><i /><div className="contact-grid" /></div>
      <div className="contact-layout">
        <div className="contact-copy">
          <div className="availability"><span /> ABIERTO A NUEVAS OPORTUNIDADES</div>
          <p className="contact-eyebrow">EL SIGUIENTE PROYECTO EMPIEZA CON UN HOLA</p>
          <h2 id="contact-title">¿Construimos<br />algo <em>útil</em><span>?</span></h2>
          <p className="contact-intro">Una idea que necesita tomar forma. Un equipo que busca sumar talento. Un proceso que podría funcionar mejor. Hablemos de cómo convertirlo en software.</p>
          <div className="contact-specialties"><span>Backend .NET</span><span>Full-stack</span><span>Cloud & IA</span></div>
          <a className="button primary contact-cta" href={"mailto:" + email + "?subject=" + encodeURIComponent("Hablemos de un proyecto")}>Iniciar conversación <ArrowUpRight size={19} /></a>
          <div className="contact-signal" aria-hidden="true">
            <svg className="contact-signal-lines" viewBox="0 0 330 86" fill="none">
              <path d="M30 43H300" className="signal-base" />
              <path d="M30 43H300" className="signal-travel" />
              <circle cx="165" cy="43" r="27" className="signal-ring" />
              <circle cx="165" cy="43" r="36" className="signal-ring outer" />
            </svg>
            <div className="signal-stop"><Code2 size={19} /></div>
            <div className="signal-stop signal-core"><Send size={21} /></div>
            <div className="signal-stop"><Sparkles size={19} /></div>
            <div className="signal-labels"><span>Una idea</span><span>Una conversación</span><span>Una solución</span></div>
          </div>
        </div>

        <div className="contact-panel">
          <div className="contact-panel-heading"><span className="contact-panel-dot" /><span>HABLEMOS / CONTACTO DIRECTO</span><Mail size={16} /></div>
          <div className="contact-mail-block">
            <span className="contact-channel-icon"><Mail size={22} /></span>
            <div><small>ESCRÍBEME</small><a className="contact-email" href={"mailto:" + email}>{email}<ArrowUpRight size={19} /></a></div>
          </div>
          <div className="contact-copy-row">
            <button className="copy-email" onClick={copyEmail} aria-label="Copiar correo electrónico">{copyStatus === "copied" ? <Check size={14} /> : <Copy size={14} />}{copyStatus === "copied" ? "Correo copiado" : "Copiar correo"}</button>
            <span className="contact-copy-feedback" role="status">{copyStatus === "copied" ? "Listo para pegar." : copyStatus === "error" ? "No se pudo copiar. Usa el enlace de correo." : ""}</span>
          </div>
          <div className="contact-channel-list">
            <a className="contact-channel" href="tel:+529241973633"><span className="contact-channel-icon"><Phone size={19} /></span><div><small>TAMBIÉN POR TELÉFONO</small><strong>+52 924 197 3633</strong></div><ArrowUpRight size={18} /></a>
            <div className="contact-channel"><span className="contact-channel-icon"><MapPin size={19} /></span><div><small>DESDE VERACRUZ, MÉXICO</small><strong>Boca del Río</strong><p>Inglés avanzado para equipos internacionales.</p></div></div>
          </div>
          <div className="contact-socials">
            <a href="https://www.linkedin.com/in/adolfo-ramos-61b004386/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Adolfo Ramos (abre en otra pestaña)"><Linkedin size={19} /><span><strong>LinkedIn</strong><small>Conectemos</small></span><ArrowUpRight size={16} /></a>
            <a href="https://github.com/azazazaza1462-design?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="Repositorios de GitHub (abre en otra pestaña)"><Github size={19} /><span><strong>GitHub</strong><small>Explora mi código</small></span><ArrowUpRight size={16} /></a>
          </div>
          <div className="contact-panel-footer"><Code2 size={14} /><span>De una buena conversación a una buena solución.</span><ArrowRight size={14} /></div>
        </div>
      </div>
      <div className="contact-bottom-line"><span>JOSÉ ADOLFO RAMOS CARMONA</span><span>Software Engineer <i /> Ideas claras. Software útil.</span></div>
    </section>
  );
}
