import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto de forma explícita para Turbopack. Sin esto,
  // Next.js intenta adivinarla buscando lockfiles hacia arriba en el árbol
  // de carpetas y, si encuentra más de uno (por ejemplo por OneDrive u otra
  // carpeta de un nivel superior), tira el warning "Detected additional
  // lockfiles" y puede llegar a inferir mal la raíz.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
