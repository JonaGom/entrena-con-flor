import { platformBenefits } from "@/data/content";
import Reveal from "./Reveal";

// Sección corta debajo del Hero: comunica el valor de la plataforma en
// menos de 10 segundos, antes de mostrar disciplinas y membresías.
export default function Benefits() {
  return (
    <section className="px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-8">
        {platformBenefits.map((b, i) => (
          <Reveal key={b.title} delay={i * 90}>
            <div className="h-full flex flex-col items-center text-center gap-3 rounded-2xl border border-accent-light bg-white px-6 py-8 shadow-[0_10px_30px_rgba(62,25,56,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.12)]">
              <div className="w-14 h-14 rounded-2xl bg-accent-light flex items-center justify-center text-2xl">
                {b.icon}
              </div>
              <h3 className="text-[16px] font-semibold">{b.title}</h3>
              <p className="text-[13.5px] text-muted leading-relaxed">{b.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
