// Contenido de ejemplo (placeholder) de la home.
// Idea: centralizar acá los textos, precios y datos para poder editarlos
// sin tener que tocar el markup/diseño de los componentes.

export const brand = {
  name: "Entrená con Flor", // placeholder — reemplazar por el nombre de marca definitivo
};

// Datos de contacto — placeholder. Reemplazar por los reales de Flor:
// - whatsappNumber: con código de país, sin "+" ni espacios (ej: 5491122223333).
// - instagramHandle/instagramUrl: usuario real de Instagram.
// - email: casilla real de contacto.
export const contact = {
  whatsappNumber: "5491100000000",
  whatsappMessage: "¡Hola Flor! Quiero saber más sobre las clases",
  instagramHandle: "@entrenaconflor",
  instagramUrl: "https://instagram.com/entrenaconflor",
  email: "hola@entrenaconflor.com",
};

export const heroStats: { value: string; label: string; icon?: "star" }[] = [
  { value: "+500", label: "alumnas entrenando" },
  { value: "120+", label: "clases en catálogo" },
  { value: "4.9", label: "valoración promedio", icon: "star" },
];

// Copy del Hero (actualizado julio 2026): apunta más a la transformación y
// la emoción que a listar las disciplinas en el título — las disciplinas
// quedan en el subtítulo. Pensado para conversión, no para describir.
export const heroCopy = {
  title: "Transformá tu cuerpo sin horarios y sin gimnasio.",
  subtitle: "Pilates y GAP para entrenar a tu ritmo, desde cualquier lugar.",
  highlight: "Nuevas rutinas todas las semanas.",
  primaryCta: "Empezar ahora",
  secondaryCta: "Mirá una clase gratis",
  quote:
    "Quiero que entrenar deje de ser una obligación y se convierta en el mejor momento de tu día.",
  quoteAuthor: "Flor",
};

export type PlatformBenefit = {
  icon: string;
  title: string;
  text: string;
};

// Sección de 3 beneficios debajo del Hero, antes de las membresías: resume el
// valor de la plataforma en pocos segundos (idea de Jonathan, julio 2026).
export const platformBenefits: PlatformBenefit[] = [
  {
    icon: "video",
    title: "Clases disponibles 24/7",
    text: "Entrená cuando te quede cómodo, sin depender del horario de una clase.",
  },
  {
    icon: "trending-up",
    title: "Rutinas nuevas cada semana",
    text: "El catálogo se actualiza todo el tiempo, así siempre sumás variedad.",
  },
  {
    icon: "home",
    title: "Entrená desde donde quieras",
    text: "En tu casa, en un patio o de viaje — solo hace falta una colchoneta.",
  },
];

// Sección "Por qué entrenar" (home, entre Servicios y Membresía). Busca
// cercanía en vez de un texto tipo enciclopedia de beneficios del ejercicio:
// un mensaje corto en primera persona de Flor + beneficios contados en
// lenguaje cotidiano, no clínico.
export const whyTrainMessage = {
  quote:
    "Sé lo que es llegar del trabajo sin ganas de nada. A mí también me pasa. Pero también sé lo que se siente terminar una clase y notar la cabeza más liviana, el cuerpo más despierto, ganas de más. No hace falta tener el mejor estado físico ni el día perfecto — hace falta animarte a empezar. Lo demás lo vamos construyendo juntas, semana a semana.",
  author: "Flor",
};

export type TrainingBenefit = {
  icon: string;
  title: string;
  text: string;
};

export const trainingBenefits: TrainingBenefit[] = [
  {
    icon: "brain",
    title: "La mente se despeja",
    text: "Ese ratito sin notificaciones ni pendientes, donde solo importa tu respiración y el próximo movimiento.",
  },
  {
    icon: "zap",
    title: "Más energía en el día a día",
    text: "No entrenás para \"gastar calorías\": entrenás para llegar mejor al resto del día.",
  },
  {
    icon: "dumbbell",
    title: "Te sentís más fuerte",
    text: "Y no hablamos solo del cuerpo — la constancia se nota en todo lo demás que hacés.",
  },
  {
    icon: "users",
    title: "No estás sola",
    text: "Aunque entrenes desde tu casa, hay una comunidad de alumnas recorriendo el mismo camino.",
  },
];

export type Category = {
  slug: string;
  icon: string;
  title: string;
  description: string;
  // Imagen de ejemplo para miniaturas (tarjetas de disciplina, catálogo de
  // clases, etc.) — generada como placeholder de marca (julio 2026) mientras
  // no haya fotos/video reales de las clases. Reemplazar cuando haya
  // material real de Flor.
  thumbnail: string;
  // true = todavía no se puede comprar; se muestra como "Próximamente" para
  // mostrar la visión completa del proyecto sin abrir la venta todavía.
  comingSoon?: boolean;
};

// IMPORTANTE (actualizado julio 2026): el sitio arranca solo con Pilates Mat
// y GAP. Ritmos y Funcional se sacaron de la web por decisión de Flor y
// Jonathan — si más adelante se suman, hay que volver a agregarlas acá.
export const categories: Category[] = [
  {
    slug: "pilates-mat",
    icon: "activity",
    title: "Pilates Mat",
    description: "Control, postura y fuerza profunda con ejercicios en colchoneta.",
    thumbnail: "/images/thumbnails/pilates-mat.jpg",
  },
  {
    slug: "gap",
    icon: "flame",
    title: "GAP",
    description: "Rutinas enfocadas en glúteos, abdomen y piernas.",
    thumbnail: "/images/thumbnails/gap.jpg",
  },
];

export type CategoryDetail = {
  slug: string;
  whatItIs: string;
  whoItsFor: string;
  sampleClass: string;
};

// Contenido extendido para la página "Servicios" (/servicios).
// Se combina con `categories` (mismo slug) para el ícono, título y bajada corta.
export const categoryDetails: CategoryDetail[] = [
  {
    slug: "pilates-mat",
    whatItIs:
      "Ejercicios de control corporal, respiración y fuerza profunda, usando el propio peso del cuerpo sobre una colchoneta.",
    whoItsFor:
      "Ideal si buscás mejorar la postura, tonificar sin impacto en las articulaciones, o te estás recuperando de una lesión.",
    sampleClass:
      "Pilates Mat · 35 min — activación de core y secuencia de control abdominal. Flor muestra la versión base y una variante más desafiante de cada ejercicio, así te sirve estés en el nivel que estés.",
  },
  {
    slug: "gap",
    whatItIs:
      "Rutinas específicas para glúteos, abdomen y piernas, combinando fuerza y resistencia localizada.",
    whoItsFor:
      "Para quienes quieren enfocar el entrenamiento en tonificar y fortalecer esas zonas puntuales.",
    sampleClass:
      "GAP · 25 min — cuatro bloques de glúteo, abdomen y pierna, con variantes para sumar dificultad.",
  },
];

export type Package = {
  slug: string;
  name: string;
  priceLabel: string; // placeholder hasta definir precio final en ARS
  featured?: boolean;
  features: string[];
};

// IMPORTANTE (actualizado julio 2026): Flor y Jonathan simplificaron el
// modelo. Ya NO hay niveles Principiante/Intermedio/Avanzado — se sacaron
// porque grabar 3 versiones de cada disciplina era demasiado tiempo de
// producción. En cambio, Flor graba un solo catálogo por disciplina y, en el
// mismo video, muestra variantes para hacerlo más simple o más desafiante
// (sumar peso, cambiar la postura, etc.).
//
// ACTUALIZADO de nuevo (julio 2026): se suma una membresía "Full Access" que
// da acceso a las dos disciplinas juntas (Pilates Mat + GAP), pensada para el
// nuevo catálogo público (/clases) pero aplicada en todo el sitio. Además, a
// pedido de Jonathan, se dejó de hablar de "paquetes"/"planes" en todo el
// sitio — el modelo es de MEMBRESÍAS (no son compras únicas ni suscripciones
// de renovación automática). Son 3 membresías, ya NO 2 por disciplina:
//   1) 1 mes, una sola disciplina (Pilates Mat o GAP, a elección)
//   2) 1 mes, Full Access (las dos disciplinas)
//   3) 3 meses, Full Access (las dos disciplinas)
// Ya no existe la opción de "3 meses de una sola disciplina": quien quiere 3
// meses de acceso lo hace a través de la membresía Full Access.
export type MembershipScope = "single" | "full";

export type MembershipPlan = {
  slug: string;
  scope: MembershipScope;
  durationLabel: string;
  priceLabel: string;
  savingsLabel?: string;
  featured?: boolean;
};

export const membershipPlans: MembershipPlan[] = [
  {
    slug: "1-mes-una-disciplina",
    scope: "single",
    durationLabel: "1 mes de acceso",
    priceLabel: "$X.XXX",
  },
  {
    slug: "1-mes-full-access",
    scope: "full",
    durationLabel: "1 mes de acceso",
    priceLabel: "$X.XXX",
  },
  {
    slug: "3-meses-full-access",
    scope: "full",
    durationLabel: "3 meses de acceso",
    priceLabel: "$X.XXX",
    savingsLabel: "Ahorrás vs. pagar mes a mes",
    featured: true,
  },
];

// Arma las 3 tarjetas de membresía para una disciplina puntual — se usa en
// /membresia/[categoria] y en el paywall de /clases/[clase]. Si no se pasa
// categorySlug, la membresía de una sola disciplina queda genérica ("la
// disciplina que elijas").
export function getMembershipCards(categorySlug?: string): Package[] {
  const category = categories.find((c) => c.slug === categorySlug);

  return membershipPlans.map((plan) => {
    const isSingle = plan.scope === "single";
    const name = isSingle
      ? `Solo ${category ? category.title : "1 disciplina"}`
      : "Full Access";
    const accessLabel = isSingle
      ? `Acceso ilimitado a todo el catálogo de ${category ? category.title : "la disciplina que elijas"}`
      : "Acceso ilimitado a Pilates Mat + GAP — todo el catálogo, las dos disciplinas";

    return {
      slug: plan.slug,
      name: `${name} · ${plan.durationLabel.replace(" de acceso", "")}`,
      priceLabel: plan.priceLabel,
      featured: plan.featured,
      features: [
        plan.durationLabel,
        accessLabel,
        "Cada clase incluye variantes para hacerla más simple o más desafiante",
        plan.savingsLabel ?? "Podés cancelar cuando quieras",
      ],
    };
  });
}

// Compara las 3 membresías, para la página /membresia/[categoria].
export type MembershipAxis = {
  axis: string;
  single: string;
  full1: string;
  full3: string;
};

export const membershipAxes: MembershipAxis[] = [
  {
    axis: "Duración del acceso",
    single: "1 mes",
    full1: "1 mes",
    full3: "3 meses",
  },
  {
    axis: "Disciplinas incluidas",
    single: "La disciplina que elijas",
    full1: "Pilates Mat + GAP",
    full3: "Pilates Mat + GAP",
  },
  {
    axis: "Variantes de dificultad",
    single: "Incluidas en cada clase",
    full1: "Incluidas en cada clase",
    full3: "Incluidas en cada clase",
  },
  {
    axis: "Precio",
    single: "$X.XXX",
    full1: "$X.XXX",
    full3: "$X.XXX (ahorrás vs. pagar mes a mes)",
  },
];

export type Testimonial = {
  initials: string;
  name: string;
  membershipName: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    initials: "MJ",
    name: "María José",
    membershipName: "Membresía Full Access · 3 meses",
    quote:
      "Me encanta no tener que elegir 'nivel' — en la misma clase Flor te muestra cómo hacerla más simple o más intensa, así que siempre me sirve, tenga el día que tenga.",
  },
  {
    initials: "CA",
    name: "Carla A.",
    membershipName: "Membresía GAP · 1 mes",
    quote:
      "Arranqué con la membresía de 1 mes para probar y ya me pasé al Full Access de 3 meses — se nota la diferencia en poco tiempo.",
  },
  {
    initials: "RS",
    name: "Rocío S.",
    membershipName: "Membresía Pilates Mat · 1 mes",
    quote:
      "Empecé sin saber nada de pilates y nunca me sentí perdida — Flor explica cada variante como si estuviera al lado tuyo.",
  },
];

// ---------------------------------------------------------------------------
// Vista previa del área privada (/catalogo): así se va a ver la experiencia
// de una alumna después de comprar una membresía. Todavía no hay login real
// ni backend conectado — esto es contenido de ejemplo para mostrar el
// potencial de la app, no una cuenta funcional.
// ---------------------------------------------------------------------------

export const demoStudent = {
  name: "Valentina",
  categorySlug: "pilates-mat",
  categoryTitle: "Pilates Mat",
  // Coincide con una membresía real del modelo actual: "Solo Pilates Mat · 1
  // mes" (ver membershipPlans más arriba).
  membershipName: "1 mes",
  streakWeeks: 3,
};

export type DemoClass = {
  slug: string;
  weekLabel: string;
  dayLabel: string;
  title: string;
  duration: string;
  materials: string;
  description: string;
  // Ejemplo del enfoque "un solo catálogo, variantes de dificultad en la
  // misma clase" que reemplazó a los niveles Principiante/Intermedio/Avanzado.
  difficultyTip: string;
  completed: boolean;
};

// Videos reales de prueba subidos por Flor al bucket público "class-videos"
// de Supabase Storage (julio 2026). Nombre de archivo: "<disciplina>-<slug
// de la clase>.mp4", ej. "pilates-semana1-dia-a.mp4". El área privada
// (/catalogo) es una sola lista genérica de clases (demoClasses, sin
// discriminar disciplina) que se les arma a partir de la disciplina de la
// membresía de cada alumna — por eso el video se resuelve combinando
// profile.membership_category + el slug de la clase (ver
// getClassVideoUrl más abajo), en vez de guardarse directo en DemoClass.
const AVAILABLE_CLASS_VIDEOS = new Set([
  "pilates-semana1-dia-a",
  "pilates-semana1-dia-b",
  "pilates-semana2-dia-a",
  "pilates-semana2-dia-b",
  "pilates-semana3-dia-a",
  "pilates-semana3-dia-b",
  "gap-semana1-dia-a",
  "gap-semana1-dia-b",
  "gap-semana2-dia-a",
]);

// "pilates-mat" -> "pilates" para matchear el prefijo usado en los nombres
// de archivo. Si la membresía es Full Access (sin categoría única), o no
// hay categoría cargada todavía, usamos "pilates" como default — mismo
// criterio que ya usa /catalogo para elegir la miniatura.
function categoryToVideoPrefix(categorySlug: string | null | undefined): string {
  if (categorySlug === "gap") return "gap";
  return "pilates";
}

function buildClassVideoUrl(key: string): string | null {
  if (!AVAILABLE_CLASS_VIDEOS.has(key)) return null;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl) return null;

  return `${supabaseUrl}/storage/v1/object/public/class-videos/${key}.mp4`;
}

function buildClassThumbnail(key: string): string | null {
  if (!AVAILABLE_CLASS_VIDEOS.has(key)) return null;
  return `/images/thumbnails/classes/${key}.jpg`;
}

// Devuelve la URL pública del video de Supabase Storage para esta clase +
// categoría, o null si todavía no hay un video real cargado (en ese caso
// la página muestra el cartel de "video próximamente").
export function getClassVideoUrl(
  classSlug: string,
  categorySlug: string | null | undefined
): string | null {
  const key = `${categoryToVideoPrefix(categorySlug)}-${classSlug}`;
  return buildClassVideoUrl(key);
}

// Igual que getClassVideoUrl/getClassThumbnail, pero para el catálogo
// público (/clases), donde CatalogClass.slug ya viene con el prefijo de
// disciplina incluido (ej. "pilates-semana1-dia-a"), así que coincide
// directo con la clave de AVAILABLE_CLASS_VIDEOS sin tener que combinarlo
// con la categoría.
export function getCatalogClassVideoUrl(slug: string): string | null {
  return buildClassVideoUrl(slug);
}

export function getCatalogClassThumbnail(slug: string): string | null {
  return buildClassThumbnail(slug);
}

// Miniaturas reales (julio 2026): un frame sacado de cada video de prueba
// con ffmpeg, guardado en public/images/thumbnails/classes/. Mismas claves
// que AVAILABLE_CLASS_VIDEOS porque se generaron a partir de los mismos 9
// videos — si el día de mañana un video no tiene miniatura propia (o
// viceversa), separar esto en dos Sets.
export function getClassThumbnail(
  classSlug: string,
  categorySlug: string | null | undefined
): string | null {
  const key = `${categoryToVideoPrefix(categorySlug)}-${classSlug}`;
  return buildClassThumbnail(key);
}

export const demoClasses: DemoClass[] = [
  {
    slug: "semana1-dia-a",
    weekLabel: "Semana 1",
    dayLabel: "Día A",
    title: "Activación y control de core",
    duration: "60 min",
    materials: "Colchoneta",
    description:
      "Arrancamos el mes activando la zona media: respiración, alineación y una secuencia de control abdominal pensada para sostener el resto del plan.",
    difficultyTip: "Para más intensidad: sostené cada posición 3 segundos más antes de cambiar.",
    completed: true,
  },
  {
    slug: "semana1-dia-b",
    weekLabel: "Semana 1",
    dayLabel: "Día B",
    title: "Piernas y estabilidad",
    duration: "60 min",
    materials: "Colchoneta",
    description: "Trabajo de piernas con foco en estabilidad de cadera y rodilla, cerrando con estiramiento.",
    difficultyTip: "Para más simple: apoyá las manos en el piso durante los ejercicios de equilibrio.",
    completed: true,
  },
  {
    slug: "semana2-dia-a",
    weekLabel: "Semana 2",
    dayLabel: "Día A",
    title: "Espalda y postura",
    duration: "60 min",
    materials: "Colchoneta",
    description: "Secuencia enfocada en fortalecer la espalda y mejorar la postura del día a día.",
    difficultyTip: "Para más intensidad: sumá una banda elástica en los ejercicios de remo.",
    completed: true,
  },
  {
    slug: "semana2-dia-b",
    weekLabel: "Semana 2",
    dayLabel: "Día B",
    title: "Brazos y core profundo",
    duration: "60 min",
    materials: "Colchoneta",
    description: "Trabajo de brazos combinado con activación profunda de core.",
    difficultyTip: "Para más intensidad: sumá mancuernas de 1 a 2 kg en el segundo bloque.",
    completed: false,
  },
  {
    slug: "semana3-dia-a",
    weekLabel: "Semana 3",
    dayLabel: "Día A",
    title: "Full body suave + respiración",
    duration: "60 min",
    materials: "Colchoneta",
    description: "Clase más suave para recuperar, con trabajo de respiración y movilidad general.",
    difficultyTip: "Para más simple: reducí el rango de movimiento en las flexiones de tronco.",
    completed: false,
  },
  {
    slug: "semana3-dia-b",
    weekLabel: "Semana 3",
    dayLabel: "Día B",
    title: "Piernas y glúteos",
    duration: "60 min",
    materials: "Colchoneta",
    description: "Trabajo de piernas y glúteos manteniendo el control postural de las clases anteriores.",
    difficultyTip: "Para más intensidad: sumá pulsos de 2 segundos al final de cada serie.",
    completed: false,
  },
  {
    slug: "semana4-dia-a",
    weekLabel: "Semana 4",
    dayLabel: "Día A",
    title: "Core intenso y equilibrio",
    duration: "60 min",
    materials: "Colchoneta",
    description: "La clase más exigente del mes: core intenso combinado con ejercicios de equilibrio.",
    difficultyTip: "Para más simple: hacé los ejercicios de equilibrio cerca de una pared de apoyo.",
    completed: false,
  },
  {
    slug: "semana4-dia-b",
    weekLabel: "Semana 4",
    dayLabel: "Día B",
    title: "Cierre de mes: full body de repaso",
    duration: "60 min",
    materials: "Colchoneta",
    description: "Repasamos lo trabajado durante el mes con una rutina completa de cuerpo entero.",
    difficultyTip: "Para más intensidad: encadená los dos últimos bloques sin pausa entre ellos.",
    completed: false,
  },
];

// ---------------------------------------------------------------------------
// Catálogo público (/clases): a diferencia de `demoClasses` (que simula el
// área privada de UNA alumna con UNA membresía ya comprada), este dataset alimenta
// el catálogo público que cualquier visitante puede navegar antes de
// comprar — por eso incluye clases de las dos disciplinas (Pilates Mat y
// GAP) con su `category`, y no tiene `completed` (no hay sesión iniciada).
// Idea operativa (julio 2026): todos los lunes Flor sube las clases nuevas
// de la semana y quedan sumadas acá — por ahora se usan etiquetas
// Semana/Día en vez de fechas de calendario reales (son datos de ejemplo).
// ---------------------------------------------------------------------------

export type CatalogClass = {
  slug: string;
  category: string; // matchea con Category.slug
  // Enfoque corto de la clase (ej. "Core", "Piernas") — se muestra como
  // etiqueta sobre la miniatura, estilo "biblioteca de clases".
  tag: string;
  weekLabel: string;
  dayLabel: string;
  title: string;
  duration: string;
  materials: string;
  description: string;
  difficultyTip: string;
};

export const catalogClasses: CatalogClass[] = [
  {
    slug: "pilates-semana1-dia-a",
    category: "pilates-mat",
    tag: "Core",
    weekLabel: "Semana 1",
    dayLabel: "Día A",
    title: "Activación y control de core",
    duration: "60 min",
    materials: "Colchoneta",
    description:
      "Arrancamos el mes activando la zona media: respiración, alineación y una secuencia de control abdominal pensada para sostener el resto del plan.",
    difficultyTip: "Para más intensidad: sostené cada posición 3 segundos más antes de cambiar.",
  },
  {
    slug: "gap-semana1-dia-a",
    category: "gap",
    tag: "Glúteo y pierna",
    weekLabel: "Semana 1",
    dayLabel: "Día A",
    title: "Glúteo y pierna: activación total",
    duration: "40 min",
    materials: "Colchoneta",
    description:
      "Rutina de arranque enfocada en activar glúteo y pierna con trabajo de resistencia localizada, ideal para empezar a sentir la zona desde la primera clase.",
    difficultyTip: "Para más simple: reducí el rango de movimiento en las sentadillas.",
  },
  {
    slug: "pilates-semana1-dia-b",
    category: "pilates-mat",
    tag: "Piernas",
    weekLabel: "Semana 1",
    dayLabel: "Día B",
    title: "Piernas y estabilidad",
    duration: "60 min",
    materials: "Colchoneta",
    description:
      "Trabajo de piernas con foco en estabilidad de cadera y rodilla, cerrando con estiramiento.",
    difficultyTip: "Para más simple: apoyá las manos en el piso durante los ejercicios de equilibrio.",
  },
  {
    slug: "pilates-semana2-dia-a",
    category: "pilates-mat",
    tag: "Espalda",
    weekLabel: "Semana 2",
    dayLabel: "Día A",
    title: "Espalda y postura",
    duration: "60 min",
    materials: "Colchoneta",
    description: "Secuencia enfocada en fortalecer la espalda y mejorar la postura del día a día.",
    difficultyTip: "Para más intensidad: sumá una banda elástica en los ejercicios de remo.",
  },
  {
    slug: "gap-semana2-dia-a",
    category: "gap",
    tag: "Abdomen y glúteo",
    weekLabel: "Semana 2",
    dayLabel: "Día A",
    title: "Abdomen y glúteo: bloques combinados",
    duration: "40 min",
    materials: "Colchoneta",
    description:
      "Cuatro bloques que combinan abdomen y glúteo, alternando fuerza y resistencia para sentir la zona trabajada de verdad.",
    difficultyTip: "Para más intensidad: sumá pulsos de 2 segundos al final de cada serie.",
  },
  {
    slug: "pilates-semana2-dia-b",
    category: "pilates-mat",
    tag: "Brazos",
    weekLabel: "Semana 2",
    dayLabel: "Día B",
    title: "Brazos y core profundo",
    duration: "60 min",
    materials: "Colchoneta",
    description: "Trabajo de brazos combinado con activación profunda de core.",
    difficultyTip: "Para más intensidad: sumá mancuernas de 1 a 2 kg en el segundo bloque.",
  },
  {
    slug: "pilates-semana3-dia-a",
    category: "pilates-mat",
    tag: "Full Body",
    weekLabel: "Semana 3",
    dayLabel: "Día A",
    title: "Full body suave + respiración",
    duration: "60 min",
    materials: "Colchoneta",
    description: "Clase más suave para recuperar, con trabajo de respiración y movilidad general.",
    difficultyTip: "Para más simple: reducí el rango de movimiento en las flexiones de tronco.",
  },
  {
    slug: "gap-semana3-dia-a",
    category: "gap",
    tag: "Piernas",
    weekLabel: "Semana 3",
    dayLabel: "Día A",
    title: "Piernas: fuerza y resistencia",
    duration: "40 min",
    materials: "Colchoneta",
    description:
      "Bloque enfocado en piernas, alternando series de fuerza con series de resistencia para terminar sintiendo bien el trabajo.",
    difficultyTip: "Para más simple: hacé las sentadillas cerca de una silla de apoyo.",
  },
  {
    slug: "pilates-semana3-dia-b",
    category: "pilates-mat",
    tag: "Piernas y glúteos",
    weekLabel: "Semana 3",
    dayLabel: "Día B",
    title: "Piernas y glúteos",
    duration: "60 min",
    materials: "Colchoneta",
    description: "Trabajo de piernas y glúteos manteniendo el control postural de las clases anteriores.",
    difficultyTip: "Para más intensidad: sumá pulsos de 2 segundos al final de cada serie.",
  },
  {
    slug: "pilates-semana4-dia-a",
    category: "pilates-mat",
    tag: "Core",
    weekLabel: "Semana 4",
    dayLabel: "Día A",
    title: "Core intenso y equilibrio",
    duration: "60 min",
    materials: "Colchoneta",
    description: "La clase más exigente del mes: core intenso combinado con ejercicios de equilibrio.",
    difficultyTip: "Para más simple: hacé los ejercicios de equilibrio cerca de una pared de apoyo.",
  },
  {
    slug: "gap-semana4-dia-a",
    category: "gap",
    tag: "Full Body",
    weekLabel: "Semana 4",
    dayLabel: "Día A",
    title: "Full GAP: cierre de mes",
    duration: "45 min",
    materials: "Colchoneta",
    description:
      "Repasamos glúteo, abdomen y pierna en una sola clase de cierre, con las variantes más desafiantes del mes.",
    difficultyTip: "Para más intensidad: encadená los dos últimos bloques sin pausa entre ellos.",
  },
  {
    slug: "pilates-semana4-dia-b",
    category: "pilates-mat",
    tag: "Full Body",
    weekLabel: "Semana 4",
    dayLabel: "Día B",
    title: "Cierre de mes: full body de repaso",
    duration: "60 min",
    materials: "Colchoneta",
    description: "Repasamos lo trabajado durante el mes con una rutina completa de cuerpo entero.",
    difficultyTip: "Para más intensidad: encadená los dos últimos bloques sin pausa entre ellos.",
  },
];
