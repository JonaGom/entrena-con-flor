import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryDetailBlock from "@/components/CategoryDetailBlock";
import { categories, categoryDetails } from "@/data/content";

export const metadata: Metadata = {
  title: "Servicios — Pilates Mat y GAP",
  description:
    "Conocé las dos disciplinas: qué son, para quién son y un ejemplo de clase de cada una.",
};

export default function ServiciosPage() {
  return (
    <>
      <Header />
      <main>
        <section className="px-6 pt-16 pb-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-accent font-bold text-[13px] tracking-[1.2px] uppercase mb-2.5">
              Nuestras disciplinas
            </div>
            <h1 className="text-[34px] font-extrabold mb-3">
              Dos formas de entrenar, un solo lugar
            </h1>
            <p className="text-muted text-base">
              Elegí la disciplina que más te guste — cada una se contrata por separado.
            </p>
          </div>
        </section>

        <section className="px-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => {
            const detail = categoryDetails.find((d) => d.slug === cat.slug)!;
            return (
              <CategoryDetailBlock
                key={cat.slug}
                category={cat}
                detail={detail}
                reversed={i % 2 === 1}
              />
            );
          })}
        </section>
      </main>
      <Footer />
    </>
  );
}
