import Link from "next/link";
import { brand } from "@/data/content";
import LogoutButton from "./LogoutButton";

// Header del área privada (/catalogo, /mi-cuenta): a diferencia del Header
// público, no muestra "Ingresar"/"Comprar" sino el nombre de la persona
// logueada y un botón para cerrar sesión.
export default function AppHeader({ userLabel }: { userLabel: string }) {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-accent-dark">
          <span className="w-[34px] h-[34px] rounded-[10px] bg-gradient-to-br from-accent to-accent-mid text-white flex items-center justify-center text-base font-extrabold">
            F
          </span>
          {brand.name}
        </Link>

        <div className="flex items-center gap-5">
          <Link
            href="/mi-cuenta"
            className="hidden sm:inline text-sm text-muted hover:text-accent transition-colors"
          >
            Hola, <b className="text-text">{userLabel}</b>
          </Link>
          <LogoutButton className="rounded-full border-[1.5px] border-accent-dark text-accent-dark px-5 py-2.5 text-sm font-semibold hover:-translate-y-px transition-transform hover:bg-accent-dark hover:text-white" />
        </div>
      </div>
    </header>
  );
}
