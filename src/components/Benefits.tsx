import Image from "next/image";
import { platformBenefits } from "@/data/content";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

// Sección corta debajo del Hero: comunica el valor de la plataforma en
// menos de 10 segundos, antes de mostrar disciplinas y membresías.
export default function Benefits() {
  return (
    <section className="px-6 py-16 md:py-20">
      <SectionHead
        kicker="¿Por qué elegirnos?"
        title="Entrenar debería adaptarse a tu vida, no al revés."
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
        {platformBenefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 90}>
            <div className="h-full flex flex-col rounded-2xl overflow-hidden border border-accent-light bg-white shadow-[0_10px_30px_rgba(62,25,56,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.12)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={b.photo}
                  alt={b.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 360px"
                  className="object-cover"
                />
                <span className="absolute top-3 left-4 text-3xl font-extrabold text-white/70 [text-shadow:0_2px_10px_rgba(0,0,0,0.35)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-2 px-6 py-6">
                <div className="w-8 h-[3px] rounded-full bg-gold" />
                <h3 className="text-[16px] font-semibold">{b.title}</h3>
                <p className="text-[13.5px] text-muted leading-relaxed">{b.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
