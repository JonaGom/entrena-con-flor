import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Sobre Flor",
  description: "Conocé a Flor, profesora de educación física e instructora de Pilates Mat y GAP.",
};

// Página propia (antes era una sección con id="sobre-flor" dentro del
// inicio) — se sacó de la home en el rediseño, así que el link "Sobre
// Flor" del menú apunta acá en vez de a un ancla que ya no existe.
export default function SobreFlorPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
