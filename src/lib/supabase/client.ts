import { createBrowserClient } from "@supabase/ssr";

// Cliente de Supabase para usar en Client Components (formularios, botón de
// salir, chequeo de sesión en el Header, etc.).
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
