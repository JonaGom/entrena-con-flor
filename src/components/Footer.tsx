import { brand } from "@/data/content";

export default function Footer() {
  return (
    <footer id="faq" className="bg-[#1e0e1b] text-white/70 px-6 pt-12 pb-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-6 pb-6 border-b border-white/10">
        <div>
          <h4 className="text-white text-sm mb-3">{brand.name}</h4>
          <a href="#servicios" className="block text-white/65 text-[13.5px] mb-2">
            Servicios
          </a>
          <a href="#paquetes" className="block text-white/65 text-[13.5px] mb-2">
            Paquetes
          </a>
          <a href="#sobre-flor" className="block text-white/65 text-[13.5px] mb-2">
            Sobre Flor
          </a>
        </div>
        <div>
          <h4 className="text-white text-sm mb-3">Ayuda</h4>
          <a href="#faq" className="block text-white/65 text-[13.5px] mb-2">
            Preguntas frecuentes
          </a>
          <a href="#" className="block text-white/65 text-[13.5px] mb-2">
            Medios de pago
          </a>
          <a href="#" className="block text-white/65 text-[13.5px] mb-2">
            Cancelar suscripción
          </a>
        </div>
        <div>
          <h4 className="text-white text-sm mb-3">Contacto</h4>
          <a href="#" className="block text-white/65 text-[13.5px] mb-2">
            WhatsApp
          </a>
          <a href="#" className="block text-white/65 text-[13.5px] mb-2">
            Instagram
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto text-[12.5px] text-white/45 text-center mt-[18px]">
        Mockup de ejemplo — © 2026. Nombre, marca y contenido a definir.
      </div>
    </footer>
  );
}
