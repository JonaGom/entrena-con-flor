import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import ClassCatalogGrid from "@/components/ClassCatalogGrid";
import { catalogClasses } from "@/data/content";

export const metadata: Metadata = {
  title: "Catálogo de clases — Pilates Mat y GAP",
  description:
    "Mirá el catálogo completo de clases de Pilates Mat y GAP, con fecha y nombre de cada una. Nuevas clases todos los lunes.",
};

export default async function ClasesPage({
  searchParams,
}: {
  searchParams: Promise<{ categoria?: string }>;
}) {
  const { categoria } = await searchParams;

  return (
    <>
      <Header />
      <main>
        <section className="px-6 pt-16 pb-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-accent font-bold text-[13px] tracking-[1.2px] uppercase mb-2.5">
              Catálogo de clases
            </div>
            <h1 className="text-[34px] font-extrabold mb-3">Todas las clases, en un solo lugar</h1>
            <p className="text-muted text-base">
              Pilates Mat y GAP, con la semana y el día de cada clase. Todos los lunes sumamos las
              clases nuevas — el catálogo va creciendo semana a semana.
            </p>
          </div>
        </section>

        <section className="px-6 py-14">
          <div className="max-w-6xl mx-auto">
            <ClassCatalogGrid classes={catalogClasses} initialCategory={categoria} />
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
