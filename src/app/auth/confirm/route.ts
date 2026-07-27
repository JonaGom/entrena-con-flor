import { redirect } from "next/navigation";
import { type NextRequest } from "next/server";
import type { EmailOtpType } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";

// Ruta a la que apunta el link de confirmación del mail de "Crear cuenta"
// (y, si en el futuro se usa, el de "recuperar contraseña"). Hay que
// configurar el template de mail en Supabase Dashboard → Authentication →
// Emails → Confirm signup para que el botón linkee acá con
// ?token_hash={{ .TokenHash }}&type=signup en vez del link genérico de
// Supabase — así el usuario cae directo en el sitio en vez de en una
// pantalla intermedia de Supabase.
function safeNextPath(value: string | null): string {
  if (value && value.startsWith("/") && !value.startsWith("//")) return value;
  return "/mi-cuenta?bienvenida=1";
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = safeNextPath(searchParams.get("next"));

  if (tokenHash && type) {
    const supabase = await createClient();
    const { error } = await supabase.auth.verifyOtp({ type, token_hash: tokenHash });
    if (!error) {
      redirect(next);
    }
  }

  redirect("/ingresar?error=confirmacion");
}
