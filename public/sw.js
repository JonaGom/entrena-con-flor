// Service worker mínimo para que "Entrená con Flor" sea instalable como app
// y siga funcionando (páginas ya visitadas) con conexión inestable.
//
// Estrategia:
// - Navegaciones (HTML): red primero, con fallback a caché si no hay conexión.
// - Resto de archivos estáticos (CSS/JS/imágenes del propio sitio): cache-first,
//   refrescando la caché en segundo plano (stale-while-revalidate).
//
// Subimos CACHE_VERSION cada vez que se necesite forzar la limpieza de la
// caché vieja en los dispositivos de los usuarios.
const CACHE_VERSION = "efc-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Solo GET, y solo mismo origen (no interceptamos APIs externas, fuentes, etc.).
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const response = await fetch(request);
          const cache = await caches.open(CACHE_VERSION);
          cache.put(request, response.clone());
          return response;
        } catch {
          const cached = await caches.match(request);
          return cached || caches.match("/");
        }
      })()
    );
    return;
  }

  event.respondWith(
    (async () => {
      const cached = await caches.match(request);
      const networkFetch = fetch(request)
        .then((response) => {
          if (response.ok) {
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, response.clone()));
          }
          return response;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })()
  );
});
