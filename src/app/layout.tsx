import type { Metadata } from "next";
import "./globals.css";

// Nota: se usa la pila de fuentes del sistema (sin next/font/google) para no
// depender de una conexión a Google Fonts en build time. Cuando definan la
// identidad de marca, se puede sumar una tipografía propia acá.

export const metadata: Metadata = {
  title: "Entrená con Flor — Pilates, ritmos, funcional y GAP desde casa",
  description:
    "Paquetes de clases grabadas de pilates mat, ritmos, funcional y GAP para entrenar desde casa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
