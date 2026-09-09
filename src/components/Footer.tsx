import { Code2, ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <footer>
      <a href="#inicio" className="logo">
        <Code2 size={20} /> jose.ramos<span className="accent">_</span>
      </a>
      <p>© {new Date().getFullYear()} José Adolfo Ramos Carmona</p>
      <a href="#inicio" className="back-top">
        Volver arriba <ArrowUp size={15} />
      </a>
    </footer>
  );
}
