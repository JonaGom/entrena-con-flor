import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Crown, Star } from "lucide-react";
import { categories, categoryPitches, disciplineComparison } from "@/data/content";
import { getIcon } from "@/lib/icon-map";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

const FlowerIcon = getIcon("flower");
const FlameIcon = getIcon("flame");

export default function Categories() {
  return (
    <section id="servicios" className="px-6 pt-8 pb-6">
      <SectionHead
        kicker="Nuestras disciplinas"
        title="Elegí cómo querés entrenar"
        description="Dos disciplinas, un mismo objetivo: sentirte mejor cada día."
      />

      <div className="max-w-6xl mx-auto">
        {/* Tarjetas grandes por disciplina, con foto real de Flor. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {categories.map((cat, i) => {
            const pitch = categoryPitches.find((p) => p.slug === cat.slug);
            const CategoryIcon = getIcon(cat.icon);
            if (!pitch) return null;
            return (
              <Reveal key={cat.slug} delay={i * 60}>
                <Link
                  href={`/clases?categoria=${cat.slug}`}
                  className="group relative block aspect-[4/5] sm:aspect-[16/12] rounded-3xl overflow-hidden border border-white/10 shadow-[0_16px_40px_rgba(62,25,56,0.14)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={pitch.photo}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

                  <div className="relative z-10 h-full flex flex-col justify-between p-7 sm:p-8 text-white">
                    <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/30 backdrop-blur-md flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5" strokeWidth={2} />
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-[28px] font-extrabold mb-1.5">{cat.title}</h3>
                      <div className="w-10 h-1 rounded-full bg-gold mb-3" />
                      <p className="text-white/85 text-[14.5px] max-w-[85%] mb-4">{pitch.tagline}</p>
                      <ul className="mb-6 space-y-1.5">
                        {pitch.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-[13.5px] text-white/90">
                            <Check className="w-4 h-4 text-gold shrink-0" strokeWidth={2.5} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold transition-colors duration-300 group-hover:bg-white group-hover:text-accent-dark">
                        Ver clases
                        <ArrowRight className="w-4 h-4" strokeWidth={2} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* Comparación rápida entre las dos disciplinas. */}
        <Reveal>
          <div className="flex items-center gap-4 md:gap-6 mb-8">
            <div className="hidden sm:flex shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white items-center justify-center text-accent shadow-[0_10px_24px_rgba(62,25,56,0.12)]">
              <FlowerIcon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.75} />
            </div>

            <div className="flex-1 rounded-3xl bg-accent-light/60 border border-accent-light p-6 md:p-8">
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-[11px] sm:text-[12px] font-bold text-accent uppercase tracking-[1px] text-left">
                  Pilates Mat
                </div>
                <div className="text-sm sm:text-base font-extrabold text-center">¿Cuál elegir?</div>
                <div className="text-[11px] sm:text-[12px] font-bold text-accent uppercase tracking-[1px] text-right">
                  GAP
                </div>
              </div>

              <div>
                {disciplineComparison.map((row, i) => {
                  const RowIcon = getIcon(row.icon);
                  return (
                    <div
                      key={row.label}
                      className={
                        "grid grid-cols-3 gap-2 items-center py-3 " +
                        (i !== disciplineComparison.length - 1 ? "border-b border-accent/10" : "")
                      }
                    >
                      <div className="text-[12.5px] sm:text-[13.5px] text-text text-left">
                        {row.pilatesMat}
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 text-center text-[10.5px] sm:text-[11.5px] font-bold text-accent-dark/70 uppercase tracking-[0.4px]">
                        <RowIcon className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                        {row.label}
                      </div>
                      <div className="text-[12.5px] sm:text-[13.5px] text-text text-right">{row.gap}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="hidden sm:flex shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-white items-center justify-center text-[#c9622e] shadow-[0_10px_24px_rgba(62,25,56,0.12)]">
              <FlameIcon className="w-7 h-7 md:w-8 md:h-8" strokeWidth={1.75} />
            </div>
          </div>
        </Reveal>

        {/* Banner Full Access. */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-dark via-accent to-accent-mid text-white">
            <div className="relative z-10 flex flex-wrap items-center gap-6 p-7 md:p-9">
              <div className="flex-1 min-w-[220px]">
                <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/25 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold mb-3">
                  <Star className="w-3 h-3" fill="currentColor" strokeWidth={0} />
                  Recomendado
                </div>
                <h3 className="text-2xl md:text-[26px] font-extrabold mb-1.5">¿No podés decidir?</h3>
                <p className="text-white/80 text-[14.5px] max-w-md">
                  Con Full Access tenés Pilates Mat + GAP juntos, en un solo plan.
                </p>
              </div>

              <div className="flex items-center gap-3.5 bg-white/10 border border-white/15 rounded-2xl px-5 py-4 backdrop-blur-sm">
                <div className="w-11 h-11 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                  <Crown className="w-5 h-5" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-gold font-bold text-[11px] uppercase tracking-wide">Full Access</div>
                  <div className="text-sm text-white/85">Todo el contenido, un solo plan.</div>
                </div>
              </div>

              <Link
                href="/membresia"
                className="inline-flex items-center gap-2 rounded-full bg-gold text-[#3a2400] px-7 py-3.5 text-base font-semibold shadow-[0_10px_26px_rgba(232,163,61,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(232,163,61,0.45)] hover:bg-[#f0b04f] whitespace-nowrap"
              >
                Quiero Full Access
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
