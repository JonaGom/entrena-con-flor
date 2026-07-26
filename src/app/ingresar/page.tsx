import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Iniciar sesión",
  description: "Ingresá a tu cuenta de Entrená con Flor.",
};

export default async function IngresarPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <>
      <Header />
      <main className="bg-accent-light/40 min-h-[calc(100vh-140px)] flex items-center px-6 py-16">
        <div className="max-w-md mx-auto w-full bg-white rounded-2xl border border-accent-light shadow-[0_10px_30px_rgba(62,25,56,0.06)] p-8">
          <div className="text-accent font-bold text-[13px] tracking-[1.2px] uppercase mb-2 text-center">
            Bienvenida de nuevo
          </div>
          <h1 className="text-2xl font-extrabold mb-6 text-center">Iniciar sesión</h1>
          <LoginForm next={next && next.startsWith("/") ? next : "/mi-cuenta"} />
        </div>
      </main>
      <Footer />
    </>
  );
}
