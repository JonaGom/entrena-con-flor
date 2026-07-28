import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/content";
import { getIcon } from "@/lib/icon-map";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Categories() {
  return (
    <section id="servicios" className="px-6 py-20">
      <SectionHead
        kicker="Nuestras disciplinas"
        title="Dos formas de entrenar, un solo lugar"
        description="Elegí la que más te guste — cada disciplina tiene su membresía de 1 mes, o llevate las dos con Full Access."
      />

      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
        {categories.map((cat, i) => {
          const Icon = getIcon(cat.icon);
          return (
          <Reveal key={cat.slug} delay={i * 90}>
            <div className="bg-white border border-accent-light rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(62,25,56,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.12)] hover:border-accent/30">
              <div className="relative aspect-[16/10]">
                <Image
                  src={cat.thumbnail}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 340px"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 w-11 h-11 rounded-xl bg-white/15 border border-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-[0_6px_16px_rgba(15,5,15,0.25)]">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
                <p className="text-muted text-sm mb-4">{cat.description}</p>
                <div className="flex items-center gap-4 pt-3 border-t border-accent-light">
                  <Link
                    href={`/clases?categoria=${cat.slug}`}
                    className="text-accent-dark/70 font-medium text-[13px] hover:text-accent transition-colors duration-300"
                  >
                    Ver clases →
                  </Link>
                  <Link
                    href={`/membresia/${cat.slug}`}
                    className="text-accent font-semibold text-[13px] hover:text-accent-mid transition-colors duration-300"
                  >
                    Ver membresías y precios →
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
          );
        })}
      </div>
    </section>
  );
}
