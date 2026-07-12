// Contenido de ejemplo (placeholder) de la home.
// Idea: centralizar acá los textos, precios y datos para poder editarlos
// sin tener que tocar el markup/diseño de los componentes.

export const brand = {
  name: "Entrená con Flor", // placeholder — reemplazar por el nombre de marca definitivo
};

export const heroStats = [
  { value: "+500", label: "alumnas entrenando" },
  { value: "120+", label: "clases en catálogo" },
  { value: "4.9★", label: "valoración promedio" },
];

export type Category = {
  slug: string;
  icon: string;
  title: string;
  description: string;
};

export const categories: Category[] = [
  {
    slug: "pilates-mat",
    icon: "🧘‍♀️",
    title: "Pilates Mat",
    description: "Control, postura y fuerza profunda con ejercicios en colchoneta.",
  },
  {
    slug: "ritmos",
    icon: "💃",
    title: "Ritmos",
    description: "Coreografías de baile y cardio para entrenar disfrutando la música.",
  },
  {
    slug: "funcional",
    icon: "🏋️‍♀️",
    title: "Funcional",
    description: "Movimientos completos de fuerza y resistencia, con o sin elementos.",
  },
  {
    slug: "gap",
    icon: "🔥",
    title: "GAP",
    description: "Rutinas enfocadas en glúteos, abdomen y piernas.",
  },
];

export type Package = {
  slug: string;
  name: string;
  priceLabel: string; // placeholder hasta definir precio final en ARS
  featured?: boolean;
  features: string[];
};

export const packages: Package[] = [
  {
    slug: "principiante",
    name: "Principiante",
    priceLabel: "$X.XXX / mes",
    features: [
      "8–12 clases nuevas por mes",
      "Progresiones básicas y bajo impacto",
      "Acceso a las 4 disciplinas",
      "Solo video on-demand",
    ],
  },
  {
    slug: "intermedio",
    name: "Intermedio",
    priceLabel: "$X.XXX / mes",
    featured: true,
    features: [
      "16–20 clases nuevas por mes",
      "Mayor intensidad y variedad",
      "Plan semanal sugerido",
      "Video + guía de progreso",
    ],
  },
  {
    slug: "avanzado",
    name: "Avanzado",
    priceLabel: "$X.XXX / mes",
    features: [
      "24+ clases y catálogo completo",
      "Máxima intensidad y complejidad",
      "Seguimiento personalizado",
      "Clases en vivo incluidas",
    ],
  },
];

export type Testimonial = {
  initials: string;
  name: string;
  packageName: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    initials: "MJ",
    name: "María José",
    packageName: "Paquete Intermedio",
    quote:
      "Empecé con el paquete principiante y en dos meses ya estaba en el intermedio. Las clases son cortas pero se sienten completas.",
  },
  {
    initials: "CA",
    name: "Carla A.",
    packageName: "Paquete Principiante",
    quote:
      "Lo de ritmos es lo que más disfruto, se pasa rápido la clase y no siento que estoy 'entrenando'.",
  },
  {
    initials: "RS",
    name: "Rocío S.",
    packageName: "Paquete Avanzado",
    quote:
      "El seguimiento personalizado del plan avanzado hizo la diferencia, se siente como tener una entrenadora personal.",
  },
];
