import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PackageCard from "@/components/PackageCard";
import { catalogClasses, categories, getMembershipCards } from "@/data/content";

export async function generateStaticParams() {
  return catalogClasses.map((c) => ({ clase: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ clase: string }>;
}): Promise<Metadata> {
  const { clase } = await params;
  const item = catalogClasses.find((c) => c.slug === clase);
  if (!item) return {};
  return {
    title: `${item.weekLabel} · ${item.dayLabel} — ${item.title}`,
    description: item.description,
  };
}

export default async function ClaseDetallePage({
  params,
}: {
  params: Promise<{ clase: string }>;
}) {
  const { clase } = await params;
  const index = catalogClasses.findIndex((c) => c.slug === clase);
  if (index === -1) notFound();
  const item = catalogClasses[index];
  const category = categories.find((c) => c.slug === item.category);
  const prevClass = index > 0 ? catalogClasses[index - 1] : null;
  const nextClass = index < catalogClasses.length - 1 ? catalogClasses[index + 1] : null;
  const membershipCards = getMembershipCards(item.category);

  return (
    <>
      <Header />
      <main className="bg-accent-light/40">
        <section className="px-6 pt-8 pb-16">
          <div className="max-w-5xl mx-auto">
            <Link href="/clases" className="text-sm font-semibold text-accent hover:underline">
              ← Volver al catálogo
            </Link>

            <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
              <div>
                {/* Miniatura bloqueada: placeholder sólido de marca + candado, sin
                    imagen real todavía (la clase se desbloquea con una membresía). */}
                <div className="relative aspect-video rounded-2xl bg-[radial-gradient(120%_140%_at_15%_0%,var(--brand-accent-mid)_0%,var(--brand-accent-dark)_60%,#2a1027_100%)] flex flex-col items-center justify-center gap-3 text-white border border-white/10 overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(1px_1px_at_20px_20px,white_1px,transparent_0)] [background-size:34px_34px]" />
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/12 border border-white/25 backdrop-blur-md text-2xl">
                    🔒
                  </span>
                  <div className="text-sm font-semibold text-white/85">Contenido bloqueado</div>
                  <div className="text-xs text-white/60 px-6 text-center">
                    Elegí una membresía para desbloquear esta clase y todo el catálogo
                  </div>
                </div>

                <div className="mt-7 bg-white rounded-2xl p-7 border border-accent-light shadow-[0_10px_30px_rgba(62,25,56,0.06)]">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[12px] font-bold text-accent uppercase tracking-[1px]">
                      {item.weekLabel} · {item.dayLabel}
                    </span>
                    <span className="text-[12px] font-semibold text-muted">
                      · {category?.icon} {category?.title}
                    </span>
                  </div>
                  <h1 className="text-2xl font-extrabold mb-3">{item.title}</h1>
                  <p className="text-[15px] text-text mb-5">{item.description}</p>

                  <div className="flex flex-wrap gap-6 mb-6 text-sm">
                    <div>
                      <div className="text-muted text-xs mb-0.5">Duración</div>
                      <div className="font-semibold">{item.duration}</div>
                    </div>
                    <div>
                      <div className="text-muted text-xs mb-0.5">Necesitás</div>
                      <div className="font-semibold">{item.materials}</div>
                    </div>
                  </div>

                  <div className="bg-accent-light rounded-xl p-4 text-[13px] text-accent-dark flex gap-2.5">
                    <span>💡</span>
                    <div>
                      <b>Tip de Flor:</b> {item.difficultyTip}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  {prevClass ? (
                    <Link
                      href={`/clases/${prevClass.slug}`}
                      className="text-sm font-semibold text-accent-dark hover:underline"
                    >
                      ← {prevClass.weekLabel} · {prevClass.dayLabel}
                    </Link>
                  ) : (
                    <span />
                  )}
                  {nextClass && (
                    <Link
                      href={`/clases/${nextClass.slug}`}
                      className="text-sm font-semibold text-accent-dark hover:underline"
                    >
                      {nextClass.weekLabel} · {nextClass.dayLabel} →
                    </Link>
                  )}
                </div>
              </div>

              <div className="lg:sticky lg:top-24">
                <div className="bg-white rounded-2xl p-6 border border-accent-light shadow-[0_10px_30px_rgba(62,25,56,0.06)]">
                  <h2 className="text-lg font-extrabold mb-1.5">Elegí tu membresía</h2>
                  <p className="text-muted text-sm mb-6">
                    Para ver esta clase y el resto del catálogo, elegí una de estas opciones.
                  </p>
                  <div className="flex flex-col gap-4">
                    {membershipCards.map((pkg) => (
                      <PackageCard
                        key={pkg.slug}
                        pkg={pkg}
                        ctaHref={`/membresia/${item.category}/${pkg.slug}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
