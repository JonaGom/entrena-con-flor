import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contacto from "@/components/Contacto";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escribinos por WhatsApp, Instagram o email — te contestamos a la brevedad.",
};

// Página propia (antes era una sección con id="contacto" dentro del
// inicio) — se sacó de la home en el rediseño, así que el link "Contacto"
// del menú apunta acá en vez de a un ancla que ya no existe.
export default function ContactoPage() {
  return (
    <>
      <Header />
      <main>
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
