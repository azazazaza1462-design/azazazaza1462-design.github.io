import { Code2, Terminal, ShieldCheck, Rocket } from "lucide-react";

const stages = [
  { icon: Code2, title: "Código", detail: "Ideas que toman forma" },
  { icon: Terminal, title: "Build", detail: "Arquitectura y ejecución" },
  { icon: ShieldCheck, title: "Pruebas", detail: "Confianza en cada cambio" },
  { icon: Rocket, title: "Entrega", detail: "Software listo para avanzar" },
];

export default function DevelopmentFlow() {
  return (
    <div className="development-flow" aria-label="Flujo de desarrollo: código, compilación, pruebas y entrega">
      <div className="flow-heading"><span className="eyebrow">DEL CÓDIGO A LA EXPERIENCIA</span><span className="flow-indicator" aria-hidden="true">● development in motion</span></div>
      <div className="flow-stages">
        {stages.map(({ icon: Icon, title, detail }, index) => (
          <div className="flow-stage" key={title} style={{ animationDelay: `${index * 1.5}s` }}>
            <span className="flow-icon"><Icon size={22} /></span>
            <div><strong>{title}</strong><small>{detail}</small></div>
            <span className="flow-number">0{index + 1}</span>
          </div>
        ))}
      </div>
      <div className="flow-track" aria-hidden="true"><span /></div>
    </div>
  );
}
