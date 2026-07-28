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

// Alto fijo del header (no cambia con el scroll) — usado para el "espaciador"
// que reservan las páginas que no tienen el header flotando transparente
// sobre un fondo oscuro (todas menos el inicio).
const HEADER_HEIGHT = "h-[73px]";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setLoggedIn(!!data.user));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => setLoggedIn(!!session?.user));
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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

  // Transparente solo en el inicio, mientras estamos arriba del todo y con
  // el menú cerrado — se apoya sobre la foto del Hero. En cualquier otra
  // página (o apenas se scrollea/abre el menú) el header pasa a sólido.
  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={
          "fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 " +
          (transparent
            ? "bg-transparent border-transparent"
            : "bg-white/95 backdrop-blur-lg border-black/5 shadow-[0_8px_24px_rgba(62,25,56,0.08)]")
        }
      >
        <div className={`max-w-6xl mx-auto flex items-center justify-between px-6 ${HEADER_HEIGHT}`}>
          <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <Image
              src={transparent ? "/logo/logo-horizontal-on-dark.svg" : "/logo/logo-horizontal-light.svg"}
              alt={brand.name}
              width={520}
              height={136}
              priority
              className="w-auto h-9 transition-opacity duration-300"
            />
          </Link>

          <nav
            className={
              "hidden md:flex gap-7 text-[15px] font-medium transition-colors duration-300 " +
              (transparent ? "text-white/90" : "text-text")
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
                  (transparent ? "hover:text-white" : "hover:text-accent")
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
                className="rounded-full bg-accent text-white px-5 py-2.5 text-sm font-semibold shadow-[0_6px_16px_rgba(107,44,95,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(107,44,95,0.38)] hover:bg-accent-mid"
              >
                Mi cuenta
              </Link>
            ) : (
              <>
                <Link
                  href="/ingresar"
                  className={
                    "rounded-full border-[1.5px] px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 " +
                    (transparent
                      ? "border-white/70 text-white hover:bg-white hover:text-accent-dark"
                      : "border-accent-dark text-accent-dark hover:bg-accent-dark hover:text-white")
                  }
                >
                  Ingresar
                </Link>
                <Link
                  href="/membresia"
                  className="rounded-full bg-accent text-white px-5 py-2.5 text-sm font-semibold shadow-[0_6px_16px_rgba(107,44,95,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(107,44,95,0.38)] hover:bg-accent-mid"
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
              (transparent ? "hover:bg-white/15" : "hover:bg-accent-light")
            }
          >
            <span
              className={
                "absolute block h-[2px] w-5 rounded-full transition-all duration-300 " +
                (transparent ? "bg-white" : "bg-accent-dark") +
                " " +
                (menuOpen ? "rotate-45" : "-translate-y-[6px]")
              }
            />
            <span
              className={
                "absolute block h-[2px] w-5 rounded-full transition-all duration-300 " +
                (transparent ? "bg-white" : "bg-accent-dark") +
                " " +
                (menuOpen ? "opacity-0" : "opacity-100")
              }
            />
            <span
              className={
                "absolute block h-[2px] w-5 rounded-full transition-all duration-300 " +
                (transparent ? "bg-white" : "bg-accent-dark") +
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
          el header flote transparente sobre la foto. */}
      {!isHome && <div className={HEADER_HEIGHT} aria-hidden />}
    </>
  );
}
