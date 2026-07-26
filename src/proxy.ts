import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/session";

// Nota: en esta versión de Next.js el archivo "middleware.ts" se llama
// "proxy.ts" (ver node_modules/next/dist/docs/.../file-conventions/proxy.md).
// Acá refrescamos la sesión de Supabase en cada request y bloqueamos el
// acceso a las rutas privadas si no hay sesión.

const PROTECTED_PREFIXES = ["/catalogo", "/mi-cuenta"];

function isProtectedPath(pathname: string) {
  return PROTECTED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
}

export async function proxy(request: NextRequest) {
  const { supabaseResponse, user } = await updateSession(request);

  if (isProtectedPath(request.nextUrl.pathname) && !user) {
    const url = request.nextUrl.clone();
    url.pathname = "/ingresar";
    url.search = "";
    url.searchParams.set("next", request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    // Corre en todas las rutas menos assets estáticos, para poder refrescar
    // la sesión en cualquier página (así el Header sabe si hay login o no).
    "/((?!_next/static|_next/image|favicon.ico|sw.js|manifest.webmanifest|icons/|logo/|images/).*)",
  ],
};
