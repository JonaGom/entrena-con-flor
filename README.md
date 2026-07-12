# App de entrenamiento — sitio web (Flor)

Proyecto de la página web para vender los paquetes de entrenamiento (pilates mat, ritmos,
funcional y GAP). Armado con [Next.js](https://nextjs.org) 16, TypeScript y Tailwind CSS v4.

## Cómo correrlo en tu compu

Necesitás tener instalado [Node.js](https://nodejs.org/) (versión 20 o más nueva).

```bash
npm install     # instala las dependencias (una sola vez, o cuando cambien)
npm run dev     # levanta el servidor de desarrollo
```

Después abrí [http://localhost:3000](http://localhost:3000) en el navegador.

Para generar la versión de producción:

```bash
npm run build
npm start
```

## Estructura del proyecto

```
src/
  app/
    layout.tsx      → metadata del sitio (título, descripción) y estructura general
    page.tsx         → arma la home juntando todas las secciones
    globals.css      → colores de marca (placeholder) y estilos globales
  components/
    Header.tsx       → barra de navegación
    Hero.tsx         → sección principal ("Pilates, ritmos, funcional y GAP...")
    Categories.tsx   → las 4 disciplinas
    Packages.tsx     → los 3 paquetes (Principiante / Intermedio / Avanzado)
    Testimonials.tsx → testimonios de alumnas
    About.tsx        → sección "Sobre Flor"
    CtaBanner.tsx     → banner final de invitación a comprar
    Footer.tsx       → pie de página
    NoteBanner.tsx   → cartel superior que avisa que el contenido es de ejemplo
  data/
    content.ts       → ACÁ se edita el texto real: nombre de marca, categorías,
                       precios de los paquetes y testimonios, sin tocar el diseño
```

## Estado actual

Esta es la **home (página de inicio)** con contenido de ejemplo (placeholder):
nombre de marca, precios, fotos y testimonios son todos provisorios. El resto de las
pantallas del mapa del sitio (Paquetes y precios, Detalle de paquete, Sobre Flor, FAQ,
Login/Checkout, área privada) todavía no están construidas.

## Colores de marca (placeholder)

Definidos en `src/app/globals.css`. Se reemplazan fácilmente ahí una vez que elijan
la identidad visual definitiva:

- `--brand-accent`: `#6b2c5f` (vino/violeta)
- `--brand-gold`: `#e8a33d` (dorado, para botones de acción)

## Próximos pasos técnicos

- Reemplazar el contenido de `src/data/content.ts` por el definitivo.
- Sumar las fotos/video reales de Flor (reemplazando los emojis usados como placeholder).
- Construir el resto de las pantallas del mapa del sitio.
- Integrar Mercado Pago para el checkout y un backend (Firebase/Supabase) para
  login y catálogo de clases, según lo definido en el plan de producto.
