"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { brand } from "@/data/content";
import { createClient } from "@/lib/supabase/client";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/clases", label: "Clases" },
  { href: "/membresia", label: "Membresía" },
  // Sobre Flor y Contacto ahora son páginas propias (ya no secciones del
  // inicio) — se abren en una pestaña nueva a pedido de Jonathan.
  { href: "/sobre-flor", label: "Sobre Flor", newTab: true },
  { href: "/contacto", label: "Contacto", newTab: true },
];

// Alto del header sin scrollear — usado para el "espaciador" que reservan
// las páginas que no tienen el header flotando sobre un fondo oscuro (todas
// menos el inicio).
const HEADER_HEIGHT = "h-[73px]";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setLoggedIn(!!data.user));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => setLoggedIn(!!session?.user));
    return () => subscription.unsubscribe();
  }, []);

  // Si cambian de tamaño de pantalla (o rotan el celular) con el menú
  // abierto, lo cerramos para no dejarlo "pegado" en la vista de escritorio.
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // El header queda siempre fijo y visible — al scrollear un poco se achica
  // (menos alto, logo más chico) para ocupar menos lugar, pero nunca
  // desaparece ni se esconde del todo.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // En el inicio el header queda siempre "vidrio esmerilado" (fondo oscuro
  // semi-transparente + blur) en vez de sólido blanco, para apoyarse sobre
  // la foto del Hero y a la vez distinguirse claramente de cualquier
  // contenido que quede por debajo. Solo pasa a sólido blanco si se abre el
  // menú mobile (para que el panel desplegable se lea bien). En cualquier
  // otra página queda siempre sólido.
  const glass = isHome && !menuOpen;

  return (
    <>
      <header
        className={
          "fixed top-0 inset-x-0 z-50 border-b transition-[background-color,border-color,box-shadow,height] duration-300 " +
          (glass
            ? "bg-black/30 backdrop-blur-md border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "bg-white/95 backdrop-blur-lg border-black/5 shadow-[0_8px_24px_rgba(62,25,56,0.08)]") +
          " " +
          (scrolled ? "h-[56px]" : "h-[73px]")
        }
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-full">
          <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <Image
              src={glass ? "/logo/logo-horizontal-on-dark.svg" : "/logo/logo-horizontal-light.svg"}
              alt={brand.name}
              width={520}
              height={136}
              priority
              className={"w-auto transition-all duration-300 " + (scrolled ? "h-7" : "h-9")}
            />
          </Link>

          <nav
            className={
              "hidden md:flex gap-7 text-[15px] font-medium transition-colors duration-300 " +
              (glass ? "text-white/90" : "text-text")
            }
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
                className={
                  "transition-colors duration-300 " +
                  (glass ? "hover:text-white" : "hover:text-accent")
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2.5 items-center">
            {loggedIn ? (
              <Link
                href="/mi-cuenta"
                className={
                  "rounded-full bg-accent text-white font-semibold shadow-[0_6px_16px_rgba(107,44,95,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(107,44,95,0.38)] hover:bg-accent-mid " +
                  (scrolled ? "px-4 py-2 text-[13px]" : "px-5 py-2.5 text-sm")
                }
              >
                Mi cuenta
              </Link>
            ) : (
              <>
                <Link
                  href="/ingresar"
                  className={
                    "rounded-full border-[1.5px] font-semibold transition-all duration-300 hover:-translate-y-0.5 " +
                    (scrolled ? "px-4 py-2 text-[13px]" : "px-5 py-2.5 text-sm") +
                    " " +
                    (glass
                      ? "border-white/70 text-white hover:bg-white hover:text-accent-dark"
                      : "border-accent-dark text-accent-dark hover:bg-accent-dark hover:text-white")
                  }
                >
                  Ingresar
                </Link>
                <Link
                  href="/membresia"
                  className={
                    "rounded-full bg-accent text-white font-semibold shadow-[0_6px_16px_rgba(107,44,95,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(107,44,95,0.38)] hover:bg-accent-mid " +
                    (scrolled ? "px-4 py-2 text-[13px]" : "px-5 py-2.5 text-sm")
                  }
                >
                  Comprar
                </Link>
              </>
            )}
          </div>

          {/* Botón hamburguesa: solo en mobile/tablet chico. */}
          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className={
              "md:hidden relative w-10 h-10 flex items-center justify-center rounded-full transition-colors " +
              (glass ? "hover:bg-white/15" : "hover:bg-accent-light")
            }
          >
            <span
              className={
                "absolute block h-[2px] w-5 rounded-full transition-all duration-300 " +
                (glass ? "bg-white" : "bg-accent-dark") +
                " " +
                (menuOpen ? "rotate-45" : "-translate-y-[6px]")
              }
            />
            <span
              className={
                "absolute block h-[2px] w-5 rounded-full transition-all duration-300 " +
                (glass ? "bg-white" : "bg-accent-dark") +
                " " +
                (menuOpen ? "opacity-0" : "opacity-100")
              }
            />
            <span
              className={
                "absolute block h-[2px] w-5 rounded-full transition-all duration-300 " +
                (glass ? "bg-white" : "bg-accent-dark") +
                " " +
                (menuOpen ? "-rotate-45" : "translate-y-[6px]")
              }
            />
          </button>
        </div>

        {/* Panel de navegación mobile */}
        <div
          className={
            "md:hidden overflow-hidden transition-all duration-300 border-t " +
            (menuOpen ? "max-h-[420px] border-black/5" : "max-h-0 border-transparent")
          }
        >
          <nav className="flex flex-col px-6 py-4 gap-1 text-[15px] font-medium bg-white/95 text-text">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
                onClick={() => setMenuOpen(false)}
                className="py-3 border-b border-accent-light/70 last:border-b-0 hover:text-accent transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2.5 items-center pt-4">
              {loggedIn ? (
                <Link
                  href="/mi-cuenta"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center rounded-full bg-accent text-white px-5 py-2.5 text-sm font-semibold shadow-[0_6px_16px_rgba(107,44,95,0.28)] transition-all duration-300 hover:bg-accent-mid"
                >
                  Mi cuenta
                </Link>
              ) : (
                <>
                  <Link
                    href="/ingresar"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 text-center rounded-full border-[1.5px] border-accent-dark text-accent-dark px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-accent-dark hover:text-white"
                  >
                    Ingresar
                  </Link>
                  <Link
                    href="/membresia"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 text-center rounded-full bg-accent text-white px-5 py-2.5 text-sm font-semibold shadow-[0_6px_16px_rgba(107,44,95,0.28)] transition-all duration-300 hover:bg-accent-mid"
                  >
                    Comprar
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Espaciador: el header es "fixed" (salió del flujo normal), así que
          hay que reservarle su alto acá — excepto en el inicio, donde el
          propio padding superior del Hero ya deja lugar de sobra para que
          el header flote sobre la foto. */}
      {!isHome && <div className={HEADER_HEIGHT} aria-hidden />}
    </>
  );
}
