import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LogoutButton from "@/components/LogoutButton";
import { createClient } from "@/lib/supabase/server";
import { isMembershipActive, membershipLabel } from "@/lib/membership";
import type { Profile } from "@/lib/supabase/types";

export const metadata: Metadata = {
  title: "Mi cuenta",
  description: "Tu cuenta y el estado de tu membresía en Entrená con Flor.",
};

export default async function MiCuentaPage({
  searchParams,
}: {
  searchParams: Promise<{ bienvenida?: string }>;
}) {
  const { bienvenida } = await searchParams;
  const supabase = await createClient();

  // Este chequeo es la única protección de esta ruta por ahora: src/proxy.ts
  // está deshabilitado temporalmente por incompatibilidad con el deploy de
  // Netlify (ver docs-internal/proxy.ts.disabled-por-incompatibilidad-netlify).
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/ingresar?next=/mi-cuenta");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .maybeSingle<Profile>();

  const active = isMembershipActive(profile);

  return (
    <>
      <Header />
      <main className="bg-accent-light/40 min-h-[calc(100vh-140px)] px-6 py-16">
        <div className="max-w-2xl mx-auto">
          {bienvenida === "1" && (
            <div className="mb-6 rounded-xl bg-white border border-accent-light px-5 py-4 text-sm text-accent-dark">
              ¡Cuenta creada! Escribile a Flor para activar tu membresía mientras conectamos el
              pago online.
            </div>
          )}

          <div className="text-accent font-bold text-[13px] tracking-[1.2px] uppercase mb-2">
            Mi cuenta
          </div>
          <h1 className="text-[28px] font-extrabold mb-8">
            Hola{profile?.full_name ? `, ${profile.full_name}` : ""}
          </h1>

          <div className="bg-white rounded-2xl p-6 border border-accent-light shadow-[0_10px_30px_rgba(62,25,56,0.06)] mb-6">
            <div className="text-sm text-muted mb-1">Email</div>
            <div className="font-semibold mb-5">{user.email}</div>

            <div className="text-sm text-muted mb-1">Membresía</div>
            <div className="flex items-center gap-2.5 mb-1">
              <span
                className={
                  "w-2.5 h-2.5 rounded-full " + (active ? "bg-[#3fa363]" : "bg-[#c9412e]")
                }
              />
              <span className="font-semibold">{membershipLabel(profile)}</span>
            </div>
            {active && profile?.membership_expires_at && (
              <p className="text-sm text-muted">
                Vence el{" "}
                {new Date(profile.membership_expires_at).toLocaleDateString("es-AR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                .
              </p>
            )}
            {!active && (
              <p className="text-sm text-muted">
                Todavía no tenés una membresía activa cargada en tu cuenta.
              </p>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {active ? (
              <Link
                href="/catalogo"
                className="rounded-full bg-accent text-white px-6 py-3 text-sm font-semibold hover:-translate-y-px transition-transform"
              >
                Ir a mis clases
              </Link>
            ) : (
              <Link
                href="/membresia"
                className="rounded-full bg-accent text-white px-6 py-3 text-sm font-semibold hover:-translate-y-px transition-transform"
              >
                Ver membresías
              </Link>
            )}
            <LogoutButton />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
