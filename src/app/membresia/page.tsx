import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import { categories } from "@/data/content";
import { getIcon } from "@/lib/icon-map";

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
          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat) => {
              const CategoryIcon = getIcon(cat.icon);
              return (
                <Link
                  key={cat.slug}
                  href={`/membresia/${cat.slug}`}
                  className="bg-white border border-accent-light rounded-2xl p-7 shadow-[0_10px_30px_rgba(62,25,56,0.06)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.12)] transition-all block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-[52px] h-[52px] rounded-2xl bg-accent-light flex items-center justify-center text-accent">
                      <CategoryIcon className="w-6 h-6" strokeWidth={2} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
                  <p className="text-muted text-sm mb-3.5">{cat.description}</p>
                  <span className="text-accent font-semibold text-sm">Ver membresías y precios →</span>
                </Link>
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
