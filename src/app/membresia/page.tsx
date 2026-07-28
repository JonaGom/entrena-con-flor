import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import CategoryPhotoCard from "@/components/CategoryPhotoCard";
import Reveal from "@/components/Reveal";
import { categories, categoryPitches } from "@/data/content";

export const metadata: Metadata = {
  title: "Membresía y precios — Elegí tu disciplina",
  description:
    "Elegí Pilates Mat o GAP por 1 mes, o sumá las dos con la membresía Full Access de 1 o 3 meses.",
};

export default function MembresiaPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-6 pt-16 pb-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-accent font-bold text-[13px] tracking-[1.2px] uppercase mb-2.5">
              Membresía
            </div>
            <h1 className="text-[34px] font-extrabold mb-3">Elegí tu disciplina</h1>
            <p className="text-muted text-base">
              Elegí Pilates Mat o GAP para ver sus membresías — dentro de cada una vas a encontrar
              la membresía de 1 mes solo de esa disciplina, y también la membresía Full Access (1
              o 3 meses) con acceso a las dos disciplinas juntas.
            </p>
          </div>
        </section>

        <section className="px-6 py-14">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((cat, i) => {
              const pitch = categoryPitches.find((p) => p.slug === cat.slug);
              if (!pitch) return null;
              return (
                <Reveal key={cat.slug} delay={i * 60}>
                  <CategoryPhotoCard
                    category={cat}
                    pitch={pitch}
                    href={`/membresia/${cat.slug}`}
                    ctaLabel="Ver membresías y precios"
                  />
                </Reveal>
              );
            })}
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
