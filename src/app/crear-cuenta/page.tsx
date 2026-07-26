import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignUpForm from "@/components/SignUpForm";

export const metadata: Metadata = {
  title: "Crear cuenta",
  description: "Creá tu cuenta de Entrená con Flor para acceder a tus clases.",
};

export default function CrearCuentaPage() {
  return (
    <>
      <Header />
      <main className="bg-accent-light/40 min-h-[calc(100vh-140px)] flex items-center px-6 py-16">
        <div className="max-w-md mx-auto w-full bg-white rounded-2xl border border-accent-light shadow-[0_10px_30px_rgba(62,25,56,0.06)] p-8">
          <div className="text-accent font-bold text-[13px] tracking-[1.2px] uppercase mb-2 text-center">
            Empecemos
          </div>
          <h1 className="text-2xl font-extrabold mb-2 text-center">Creá tu cuenta</h1>
          <p className="text-muted text-sm text-center mb-6">
            Con tu cuenta creada, escribile a Flor para activar tu membresía mientras conectamos
            el pago online.
          </p>
          <SignUpForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
