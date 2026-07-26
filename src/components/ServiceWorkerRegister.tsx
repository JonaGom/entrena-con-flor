"use client";

import { useEffect } from "react";

// Registra el service worker que habilita "Agregar a pantalla de inicio" /
// instalación como app, y que cachea páginas ya visitadas para que sigan
// abriendo con mala conexión. No renderiza nada.
export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        // Si falla el registro (por ejemplo en un navegador sin soporte),
        // el sitio sigue funcionando normalmente, solo sin modo app/offline.
      });
    });
  }, []);

  return null;
}
