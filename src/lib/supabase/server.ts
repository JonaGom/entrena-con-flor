import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

// Cliente de Supabase para usar en Server Components, Server Actions y Route
// Handlers. Lee/escribe la sesión a través de las cookies de la request.
export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Se puede ignorar si se llama desde un Server Component: el
            // proxy (src/proxy.ts) ya se encarga de refrescar la sesión en
            // cada request.
          }
        },
      },
    }
  );
}
