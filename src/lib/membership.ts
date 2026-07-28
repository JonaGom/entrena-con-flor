import { categories } from "@/data/content";
import type { Profile } from "@/lib/supabase/types";

// Hasta que el sistema de pagos esté conectado, la membresía de cada usuario
// la carga Flor a mano en la tabla `profiles` de Supabase (membership_scope +
// membership_expires_at). Esta función es el único lugar que decide si esa
// membresía está activa, para no repetir la lógica en cada página.
export function isMembershipActive(profile: Profile | null): boolean {
  if (!profile) return false;
  if (profile.membership_scope === "none") return false;
  if (!profile.membership_expires_at) return false;
  return new Date(profile.membership_expires_at).getTime() > Date.now();
}

// Devuelve true si la membresía activa de esta alumna le da acceso a la
// disciplina `categorySlug` puntual — Full Access accede a las dos, una
// membresía de una sola disciplina solo accede a la suya. Se usa en /clases
// (catálogo público) para desbloquear el video real cuando la persona ya
// está logueada y tiene la membresía correspondiente, en vez de mostrar
// siempre el paywall.
export function canAccessCategory(profile: Profile | null, categorySlug: string): boolean {
  if (!isMembershipActive(profile)) return false;
  if (profile!.membership_scope === "full") return true;
  return profile!.membership_category === categorySlug;
}

export function membershipLabel(profile: Profile | null): string {
  if (!profile || !isMembershipActive(profile)) return "Sin membresía activa";
  if (profile.membership_scope === "full") return "Full Access";
  const category = categories.find((c) => c.slug === profile.membership_category);
  return category ? category.title : "1 disciplina";
}
