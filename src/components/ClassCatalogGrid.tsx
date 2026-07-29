"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Sparkles, Video } from "lucide-react";
import { categories, getCatalogClassThumbnail, type CatalogClass, type Category } from "@/data/content";
import { getIcon } from "@/lib/icon-map";

function ClassCard({ clase, category }: { clase: CatalogClass; category?: Category }) {
  const CategoryIcon = category ? getIcon(category.icon) : null;
  // Miniatura real de esta clase puntual si ya está cargada (mismo frame
  // que se usa en /catalogo); si no hay una todavía, usamos la genérica de
  // la disciplina como respaldo.
  const thumbnail = getCatalogClassThumbnail(clase.slug) ?? category?.thumbnail;
  return (
    <Link
      href={`/clases/${clase.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-accent-light transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.12)] hover:border-accent/30"
    >
      <div className="relative aspect-video">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={clase.title}
            fill
            sizes="280px"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(120%_140%_at_15%_0%,var(--brand-accent-mid)_0%,var(--brand-accent-dark)_100%)] flex items-center justify-center text-white/80">
            <Video className="w-8 h-8" strokeWidth={1.5} />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />

        {/* Etiqueta de enfoque, arriba a la izquierda */}
        <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 rounded-md bg-black/45 backdrop-blur-sm px-2 py-1 text-[10.5px] font-bold uppercase tracking-[.4px] text-white">
          {CategoryIcon && <CategoryIcon className="w-3 h-3" strokeWidth={2.5} />}
          {clase.tag}
        </span>

        {/* Duración, abajo a la derecha */}
        <span className="absolute bottom-2.5 right-2.5 rounded-md bg-black/55 backdrop-blur-sm px-2 py-1 text-[11px] font-semibold text-white">
          {clase.duration}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-[14.5px] font-semibold mb-1 leading-snug line-clamp-2">{clase.title}</h3>
        <div className="text-xs text-muted">
          {clase.weekLabel} · {clase.dayLabel}
        </div>
      </div>
    </Link>
  );
}

// Tarjeta grande para el video más reciente de una disciplina — se muestra
// arriba de todo al entrar a GAP o Pilates Mat desde el nav (a pedido de
// Jonathan), así lo último que subió Flor es lo primero que se ve.
function FeaturedClassCard({ clase, category }: { clase: CatalogClass; category: Category }) {
  const CategoryIcon = getIcon(category.icon);
  const thumbnail = getCatalogClassThumbnail(clase.slug) ?? category.thumbnail;

  return (
    <Link
      href={`/clases/${clase.slug}`}
      className="group grid grid-cols-1 md:grid-cols-[1.2fr_1fr] rounded-3xl overflow-hidden border border-accent-light bg-white shadow-[0_16px_40px_rgba(62,25,56,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(62,25,56,0.16)] hover:border-accent/30"
    >
      <div className="relative aspect-video md:aspect-auto min-h-[220px]">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={clase.title}
            fill
            sizes="(max-width: 768px) 100vw, 640px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-[radial-gradient(120%_140%_at_15%_0%,var(--brand-accent-mid)_0%,var(--brand-accent-dark)_100%)] flex items-center justify-center text-white/80">
            <Video className="w-10 h-10" strokeWidth={1.5} />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

        <span className="absolute top-3.5 left-3.5 inline-flex items-center gap-1.5 rounded-full bg-gold text-[#3a2400] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[.5px]">
          <Sparkles className="w-3 h-3" strokeWidth={2.5} />
          Más reciente
        </span>

        <span className="absolute bottom-3.5 right-3.5 rounded-md bg-black/55 backdrop-blur-sm px-2.5 py-1.5 text-[12px] font-semibold text-white">
          {clase.duration}
        </span>

        <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-accent-dark shadow-lg">
            <Play className="w-6 h-6 ml-0.5" fill="currentColor" strokeWidth={0} />
          </span>
        </span>
      </div>

      <div className="p-6 md:p-8 flex flex-col justify-center">
        <div className="inline-flex items-center gap-1.5 text-[12px] font-bold text-accent uppercase tracking-[.6px] mb-2.5">
          <CategoryIcon className="w-3.5 h-3.5" strokeWidth={2.5} />
          {clase.tag}
        </div>
        <h3 className="text-xl md:text-2xl font-extrabold mb-2 leading-snug">{clase.title}</h3>
        <p className="text-[14.5px] text-muted mb-4 line-clamp-3">{clase.description}</p>
        <div className="text-xs text-muted">
          {clase.weekLabel} · {clase.dayLabel}
        </div>
      </div>
    </Link>
  );
}

function CategoryRow({ category, classes }: { category: Category; classes: CatalogClass[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const CategoryIcon = getIcon(category.icon);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  if (classes.length === 0) return null;

  return (
    <div className="mb-12 last:mb-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-extrabold flex items-center gap-2">
          <CategoryIcon className="w-5 h-5 text-accent" strokeWidth={2} />
          {category.title}
        </h2>
        <Link
          href={`/clases?categoria=${category.slug}`}
          className="text-accent font-semibold text-[13px] hover:text-accent-mid transition-colors duration-300"
        >
          Ver todas →
        </Link>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {classes.map((clase) => (
            <div key={clase.slug} className="shrink-0 w-[240px] sm:w-[270px] snap-start">
              <ClassCard clase={clase} category={category} />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label={`Ver clases anteriores de ${category.title}`}
          onClick={() => scrollBy(-1)}
          className="hidden md:flex absolute -left-4 top-[38%] -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-accent-light shadow-[0_6px_16px_rgba(62,25,56,0.15)] items-center justify-center text-accent-dark hover:bg-accent-light transition-colors"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label={`Ver más clases de ${category.title}`}
          onClick={() => scrollBy(1)}
          className="hidden md:flex absolute -right-4 top-[38%] -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-accent-light shadow-[0_6px_16px_rgba(62,25,56,0.15)] items-center justify-center text-accent-dark hover:bg-accent-light transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default function ClassCatalogGrid({
  classes,
  initialCategory,
}: {
  classes: CatalogClass[];
  initialCategory?: string;
}) {
  const filterCategory =
    initialCategory && categories.some((c) => c.slug === initialCategory)
      ? categories.find((c) => c.slug === initialCategory)
      : undefined;

  // Modo "ver todas": una disciplina puntual, con el video más reciente
  // destacado arriba y el resto (de más nuevo a más viejo) en grilla debajo.
  // El catálogo está cargado en orden cronológico ascendente (semana 1 →
  // semana 4), así que invertimos para que lo último que subió Flor
  // aparezca primero (a pedido de Jonathan).
  if (filterCategory) {
    const filtered = classes.filter((c) => c.category === filterCategory.slug);
    const ordered = [...filtered].reverse();
    const [latest, ...older] = ordered;
    const FilterIcon = getIcon(filterCategory.icon);
    return (
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-extrabold flex items-center gap-2">
            <FilterIcon className="w-5 h-5 text-accent" strokeWidth={2} />
            {filterCategory.title}
          </h2>
          <Link
            href="/clases"
            className="text-accent font-semibold text-[13px] hover:text-accent-mid transition-colors duration-300"
          >
            ← Ver todas las disciplinas
          </Link>
        </div>

        {latest && (
          <div className="mb-10">
            <FeaturedClassCard clase={latest} category={filterCategory} />
          </div>
        )}

        {older.length > 0 && (
          <>
            <h3 className="text-sm font-bold text-muted uppercase tracking-[0.8px] mb-4">
              Clases anteriores
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {older.map((clase) => (
                <ClassCard key={clase.slug} clase={clase} category={filterCategory} />
              ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-muted text-sm py-10">
            Todavía no hay clases publicadas en esta disciplina.
          </p>
        )}
      </div>
    );
  }

  // Modo biblioteca: una fila horizontal por disciplina, tipo Netflix.
  return (
    <div>
      {categories.map((category) => (
        <CategoryRow
          key={category.slug}
          category={category}
          classes={classes.filter((c) => c.category === category.slug)}
        />
      ))}
    </div>
  );
}
