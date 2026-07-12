import { brand } from "@/data/content";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#paquetes", label: "Paquetes" },
  { href: "#sobre-flor", label: "Sobre Flor" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5">
        <div className="flex items-center gap-2.5 font-bold text-xl text-accent-dark">
          <span className="w-[34px] h-[34px] rounded-[10px] bg-gradient-to-br from-accent to-accent-mid text-white flex items-center justify-center text-base font-extrabold">
            F
          </span>
          {brand.name}
        </div>

        <nav className="hidden md:flex gap-7 text-[15px] font-medium">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-2.5 items-center">
          <button className="rounded-full border-[1.5px] border-accent-dark text-accent-dark px-5 py-2.5 text-sm font-semibold hover:-translate-y-px transition-transform">
            Ingresar
          </button>
          <button className="rounded-full bg-accent text-white px-5 py-2.5 text-sm font-semibold shadow-[0_6px_16px_rgba(107,44,95,0.28)] hover:-translate-y-px transition-transform">
            Comprar
          </button>
        </div>
      </div>
    </header>
  );
}
