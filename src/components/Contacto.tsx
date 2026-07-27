import { contact } from "@/data/content";
import SectionHead from "./SectionHead";

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
          <div className="text-3xl mb-3">💬</div>
          <div className="font-bold mb-1">WhatsApp</div>
          <div className="text-[13.5px] text-muted">Respuesta rápida</div>
        </a>

        <a
          href={contact.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white border border-accent-light rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.1)]"
        >
          <div className="text-3xl mb-3">📷</div>
          <div className="font-bold mb-1">Instagram</div>
          <div className="text-[13.5px] text-muted">{contact.instagramHandle}</div>
        </a>

        <a
          href={`mailto:${contact.email}`}
          className="group bg-white border border-accent-light rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.1)]"
        >
          <div className="text-3xl mb-3">✉️</div>
          <div className="font-bold mb-1">Email</div>
          <div className="text-[13.5px] text-muted break-all">{contact.email}</div>
        </a>
      </div>
    </section>
  );
}
