import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import PackageCard from "@/components/PackageCard";
import PlanAxesTable from "@/components/PlanAxesTable";
import { categories, getMembershipCards } from "@/data/content";

export async function generateStaticParams() {
  return categories.map((cat) => ({ categoria: cat.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const category = categories.find((c) => c.slug === categoria);
  if (!category) return {};
  if (category.comingSoon) {
    return {
      title: `${category.title} — Próximamente`,
      description: `${category.title} todavía no está disponible para comprar. Mientras tanto, conocé las membresías de Pilates Mat y GAP.`,
    };
  }
  return {
    title: `Membresías de ${category.title} — 1 mes o Full Access`,
    description: `Elegí solo ${category.title} por 1 mes, o sumá la otra disciplina con la membresía Full Access de 1 o 3 meses. Un solo catálogo por disciplina, con variantes de dificultad en cada clase.`,
  };
}

export default async function CategoriaMembresiaPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  const category = categories.find((c) => c.slug === categoria);
  if (!category) notFound();

  if (category.comingSoon) {
    const activeCategories = categories.filter((c) => !c.comingSoon);
    return (
      <>
        <Header />
        <main>
          <section className="px-6 pt-20 pb-24 text-center">
            <div className="max-w-xl mx-auto">
              <div className="text-5xl mb-5">{category.icon}</div>
              <div className="text-accent font-bold text-[13px] tracking-[1.2px] uppercase mb-2.5">
                Próximamente
              </div>
              <h1 className="text-[30px] font-extrabold mb-3">
                {category.title} todavía no está disponible
              </h1>
              <p className="text-muted text-base mb-8">
                Flor está enfocada en grabar primero el catálogo de Pilates Mat y GAP. En cuanto{" "}
                {category.title} esté listo, va a aparecer acá con su propia membresía.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                {activeCategories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/membresia/${c.slug}`}
                    className="rounded-full bg-accent text-white px-6 py-3 text-sm font-semibold hover:-translate-y-px transition-transform"
                  >
                    Ver membresías de {c.title} →
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <CtaBanner />
        </main>
        <Footer />
      </>
    );
  }

  const packages = getMembershipCards(category.slug);

  return (
    <>
      <Header />
      <main>
        <section className="px-6 pt-16 pb-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-accent font-bold text-[13px] tracking-[1.2px] uppercase mb-2.5">
              Membresía · {category.title}
            </div>
            <h1 className="text-[34px] font-extrabold mb-3">
              <span className="text-3xl align-middle mr-2">{category.icon}</span>
              Membresías de {category.title}
            </h1>
            <p className="text-muted text-base">
              Elegí solo {category.title} por 1 mes, o llevate las dos disciplinas juntas con la
              membresía Full Access (1 o 3 meses). Un solo catálogo por disciplina — en cada clase
              Flor te muestra variantes para hacerla más simple o más desafiante.
            </p>
          </div>
        </section>

        <section className="px-6 py-14">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-[22px]">
            {packages.map((pkg) => (
              <div key={pkg.slug} id={pkg.slug} className="scroll-mt-24">
                <PackageCard pkg={pkg} ctaHref={`/membresia/${category.slug}/${pkg.slug}`} />
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 py-16 bg-accent-light">
          <div className="max-w-5xl mx-auto text-center mb-10">
            <h2 className="text-2xl font-extrabold mb-2.5">¿En qué se diferencian las membresías?</h2>
            <p className="text-muted text-[15px]">
              Un vistazo rápido a las 3 membresías disponibles.
            </p>
          </div>
          <PlanAxesTable />
        </section>

        <section className="px-6 py-16 text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-extrabold mb-3">¿Y si soy principiante o ya tengo experiencia?</h2>
            <p className="text-muted text-[15px] mb-6">
              No hace falta elegir nivel: en cada clase de {category.title} Flor va mostrando
              variantes para hacerla más simple o más desafiante (sumar peso, cambiar la postura,
              etc.), así el mismo catálogo te sirve estés donde estés.
            </p>
          </div>
        </section>

        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
