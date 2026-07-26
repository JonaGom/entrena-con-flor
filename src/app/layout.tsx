import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

// Nota: se usa la pila de fuentes del sistema (sin next/font/google) para no
// depender de una conexión a Google Fonts en build time. Cuando definan la
// identidad de marca, se puede sumar una tipografía propia acá.

export const metadata: Metadata = {
  title: "Entrená con Flor — Pilates Mat y GAP desde casa",
  description:
    "Membresías de clases grabadas de pilates mat y GAP para entrenar desde casa.",
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Entrená con Flor",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#3e1938",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
