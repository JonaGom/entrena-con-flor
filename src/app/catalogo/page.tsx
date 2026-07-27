import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";
import { categories, demoClasses, getClassThumbnail } from "@/data/content";
import { createClient } from "@/lib/supabase/server";
import { isMembershipActive, membershipLabel } from "@/lib/membership";
import type { Profile } from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Mis clases",
  description: "Tu catálogo de clases de Pilates Mat y GAP.",
};

export default async function CatalogoPage() {
  const supabase = await createClient();

  // Este chequeo es la única protección de esta ruta por ahora: src/proxy.ts
  // está deshabilitado temporalmente por incompatibilidad con el deploy de
  // Netlify (ver docs-internal/proxy.ts.disabled-por-incompatibilidad-netlify).
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/ingresar?next=/catalogo");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle<Profile>();

  const userLabel = profile?.full_name || user.email || "";

  if (!isMembershipActive(profile)) {
    return (
      <>
        <AppHeader userLabel={userLabel} />
        <main className="bg-accent-light/40 min-h-screen flex items-center">
          <div className="max-w-lg mx-auto text-center px-6 py-24">
            <div className="text-5xl mb-5">🔒</div>
            <h1 className="text-2xl font-extrabold mb-3">Todavía no tenés una membresía activa</h1>
            <p className="text-muted text-[15px] mb-8">
              Tu cuenta está creada, pero para ver el catálogo hace falta una membresía activa.
              Elegí una y escribile a Flor para activarla mientras conectamos el pago online.
            </p>
            <Link
              href="/membresia"
              className="inline-block rounded-full bg-accent text-white px-7 py-3.5 text-base font-semibold shadow-[0_6px_16px_rgba(107,44,95,0.28)] hover:-translate-y-px transition-transform"
            >
              Ver membresías
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const studentCategory =
    categories.find((c) => c.slug === profile?.membership_category) ?? categories[0];
  const total = demoClasses.length;
  const completedCount = demoClasses.filter((c) => c.completed).length;
  const progressPct = Math.round((completedCount / total) * 100);
  const nextClass = demoClasses.find((c) => !c.completed) ?? demoClasses[0];

  return (
    <>
      <AppHeader userLabel={userLabel} />
      <main className="bg-accent-light/40 min-h-screen">
        <section className="px-6 pt-12 pb-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-accent font-bold text-[13px] tracking-[1.2px] uppercase mb-2">
              Tu membresía
            </div>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <h1 className="text-[30px] font-extrabold mb-1.5">
                  Hola {userLabel}, ¡vamos con otra semana! 👋
                </h1>
                <p className="text-muted text-[15px]">
                  Membresía de <b className="text-accent-dark">{membershipLabel(profile)}</b> —
                  acceso ilimitado a todo el catálogo.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-accent-light shadow-[0_10px_30px_rgba(62,25,56,0.06)] mb-10">
              <div className="flex items-center justify-between mb-2.5">
                <span className="text-sm font-semibold">Progreso del mes</span>
                <span className="text-sm text-muted">
                  {completedCount} de {total} clases
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-accent-light overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-gold"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-10">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-[20px] bg-gradient-to-br from-accent-dark to-accent-mid text-white p-8 flex flex-wrap items-center justify-between gap-6">
              <div>
                <div className="text-gold font-bold text-[12px] tracking-[1px] uppercase mb-1.5">
                  Continuar donde quedé
                </div>
                <h2 className="text-xl font-semibold mb-1.5">
                  {nextClass.weekLabel} · {nextClass.dayLabel} — {nextClass.title}
                </h2>
                <p className="text-sm text-white/75">
                  {nextClass.duration} · Necesitás: {nextClass.materials}
                </p>
              </div>
              <Link
                href={`/catalogo/${nextClass.slug}`}
                className="shrink-0 rounded-full bg-gold text-[#3a2400] px-7 py-3.5 text-base font-semibold shadow-[0_6px_16px_rgba(232,163,61,0.35)] hover:-translate-y-px transition-transform whitespace-nowrap"
              >
                ▶ Ver clase
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-extrabold mb-5">Todas las clases del mes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {demoClasses.map((clase) => {
                const classThumbnail = getClassThumbnail(clase.slug, profile?.membership_category);
                const thumbnail = classThumbnail ?? studentCategory?.thumbnail;
                return (
                <Link
                  key={clase.slug}
                  href={`/catalogo/${clase.slug}`}
                  className={
                    "block bg-white rounded-2xl p-5 border transition-all hover:-translate-y-1 " +
                    (clase.completed
                      ? "border-[#d7ecdf]"
                      : "border-accent-light hover:shadow-[0_16px_34px_rgba(62,25,56,0.12)]")
                  }
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden border border-accent-light mb-3.5">
                    {thumbnail ? (
                      <Image
                        src={thumbnail}
                        alt={studentCategory?.title ?? clase.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-accent-light to-white" />
                    )}
                    <div className="absolute inset-0 bg-black/15 flex items-center justify-center text-3xl">
                      {clase.completed ? "✅" : "▶️"}
                    </div>
                  </div>
                  <div className="text-[11px] font-bold text-accent uppercase tracking-[.5px] mb-1">
                    {clase.weekLabel} · {clase.dayLabel}
                  </div>
                  <h3 className="text-[15px] font-semibold mb-1.5 leading-snug">{clase.title}</h3>
                  <div className="text-xs text-muted">{clase.duration}</div>
                </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
