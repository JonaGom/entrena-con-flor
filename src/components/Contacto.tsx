import { Mail, MessageCircle } from "lucide-react";
import { contact } from "@/data/content";
import SectionHead from "./SectionHead";

// lucide-react sacó los íconos de marca (Instagram incluido) de sus
// versiones recientes, así que lo dibujamos a mano con el mismo estilo
// (stroke, 24x24, currentColor) para que combine con el resto de íconos.
function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Contacto() {
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

  return (
    <section id="contacto" className="scroll-mt-24 bg-accent-light/40 px-6 py-20">
      <SectionHead
        kicker="Contacto"
        title="¿Tenés dudas? Escribinos"
        description="Contestamos por WhatsApp o Instagram — elegí lo que te quede más cómodo."
      />

      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white border border-accent-light rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.1)]"
        >
          <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-accent-light flex items-center justify-center text-accent">
            <MessageCircle className="w-5 h-5" strokeWidth={2} />
          </div>
          <div className="font-bold mb-1">WhatsApp</div>
          <div className="text-[13.5px] text-muted">Respuesta rápida</div>
        </a>

        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white border border-accent-light rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.1)]"
        >
          <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-accent-light flex items-center justify-center text-accent">
            <InstagramIcon className="w-5 h-5" />
          </div>
          <div className="font-bold mb-1">Instagram</div>
          <div className="text-[13.5px] text-muted">{contact.instagramHandle}</div>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="group bg-white border border-accent-light rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.1)]"
        >
          <div className="w-11 h-11 mx-auto mb-3 rounded-xl bg-accent-light flex items-center justify-center text-accent">
            <Mail className="w-5 h-5" strokeWidth={2} />
          </div>
          <div className="font-bold mb-1">Email</div>
          <div className="text-[13.5px] text-muted break-all">{contact.email}</div>
        </a>
      </div>
    </section>
  );
}
