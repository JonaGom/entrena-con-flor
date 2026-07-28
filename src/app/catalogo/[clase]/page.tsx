import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Lightbulb, Play } from "lucide-react";
import AppHeader from "@/components/AppHeader";
import Footer from "@/components/Footer";
import MarkCompleteButton from "@/components/MarkCompleteButton";
import { categories, demoClasses, getClassThumbnail, getClassVideoUrl } from "@/data/content";
import { createClient } from "@/lib/supabase/server";
import { isMembershipActive } from "@/lib/membership";
import type { Profile } from "@/lib/supabase/types";

export async function generateStaticParams() {
  return demoClasses.map((c) => ({ clase: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ clase: string }>;
}): Promise<Metadata> {
  const { clase } = await params;
  const item = demoClasses.find((c) => c.slug === clase);
  if (!item) return {};
  return {
    title: `${item.weekLabel} · ${item.dayLabel} — ${item.title}`,
    description: item.description,
  };
}

export default async function ClasePage({ params }: { params: Promise<{ clase: string }> }) {
  const { clase } = await params;
  const index = demoClasses.findIndex((c) => c.slug === clase);
  if (index === -1) notFound();
  const item = demoClasses[index];
  const prevClass = index > 0 ? demoClasses[index - 1] : null;
  const nextClass = index < demoClasses.length - 1 ? demoClasses[index + 1] : null;

  // Este chequeo es la única protección de esta ruta por ahora: src/proxy.ts
  // está deshabilitado temporalmente por incompatibilidad con el deploy de
  // Netlify (ver docs-internal/proxy.ts.disabled-por-incompatibilidad-netlify).
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect(`/ingresar?next=/catalogo/${clase}`);

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle<Profile>();
  if (!isMembershipActive(profile)) redirect("/catalogo");

  const userLabel = profile?.full_name || user.email || "";
  const categoryTitle =
    categories.find((c) => c.slug === profile?.membership_category)?.title ?? "tu clase";
  const videoUrl = getClassVideoUrl(item.slug, profile?.membership_category);
  const posterUrl = getClassThumbnail(item.slug, profile?.membership_category);

  return (
    <>
      <AppHeader userLabel={userLabel} />
      <main className="bg-accent-light/40 min-h-screen">
        <section className="px-6 pt-8 pb-16">
          <div className="max-w-4xl mx-auto">
            <Link href="/catalogo" className="text-sm font-semibold text-accent hover:underline">
              ← Volver al catálogo
            </Link>

            {videoUrl ? (
              <div className="mt-4 aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">
                <video
                  key={videoUrl}
                  controls
                  preload="metadata"
                  poster={posterUrl ?? undefined}
                  className="w-full h-full"
                  src={videoUrl}
                >
                  Tu navegador no puede reproducir este video.
                </video>
              </div>
            ) : (
              <div className="mt-4 aspect-video rounded-2xl bg-gradient-to-br from-accent-dark to-accent-mid flex flex-col items-center justify-center gap-3 text-white border border-white/10">
                <Play className="w-14 h-14" fill="currentColor" strokeWidth={0} />
                <div className="text-sm text-white/70">
                  Espacio para el video real de {categoryTitle} — {item.title}
                </div>
              </div>
            )}

            <div className="mt-7 bg-white rounded-2xl p-7 border border-accent-light shadow-[0_10px_30px_rgba(62,25,56,0.06)]">
              <div className="text-[12px] font-bold text-accent uppercase tracking-[1px] mb-2">
                {item.weekLabel} · {item.dayLabel} · {categoryTitle}
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

              <div className="mb-6 bg-accent-light rounded-xl p-4 text-[13px] text-accent-dark flex gap-2.5">
                <Lightbulb className="w-4 h-4 shrink-0 mt-0.5" strokeWidth={2} />
                <div>
                  <b>Tip de Flor:</b> {item.difficultyTip}
                </div>
              </div>

              <MarkCompleteButton initialCompleted={item.completed} />
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              {prevClass ? (
                <Link
                  href={`/catalogo/${prevClass.slug}`}
                  className="text-sm font-semibold text-accent-dark hover:underline"
                >
                  ← {prevClass.weekLabel} · {prevClass.dayLabel}
                </Link>
              ) : (
                <span />
              )}
              {nextClass && (
                <Link
                  href={`/catalogo/${nextClass.slug}`}
                  className="text-sm font-semibold text-accent-dark hover:underline"
                >
                  {nextClass.weekLabel} · {nextClass.dayLabel} →
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
