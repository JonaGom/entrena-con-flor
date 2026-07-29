import { categories, categoryPitches, disciplineComparison } from "@/data/content";
import { getIcon } from "@/lib/icon-map";
import CategoryPhotoCard from "./CategoryPhotoCard";
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
            if (!pitch) return null;
            return (
              <Reveal key={cat.slug} delay={i * 60}>
                <CategoryPhotoCard
                  category={cat}
                  pitch={pitch}
                  href={`/clases?categoria=${cat.slug}`}
                  ctaLabel="Ver clases"
                />
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
      </div>
    </section>
  );
}
