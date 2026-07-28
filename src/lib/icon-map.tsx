import {
  Activity,
  BarChart3,
  Brain,
  Dumbbell,
  Flame,
  Flower2,
  Heart,
  Home,
  PersonStanding,
  Target,
  TrendingUp,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Mapa de íconos usados en contenido data-driven (Benefits, WhyTrain,
// Categories, comparación de disciplinas) — así content.ts guarda un
// nombre de ícono en vez de un emoji, y acá se resuelve al componente SVG
// de lucide-react.
const iconMap: Record<string, LucideIcon> = {
  video: Video,
  "trending-up": TrendingUp,
  home: Home,
  brain: Brain,
  zap: Zap,
  dumbbell: Dumbbell,
  users: Users,
  activity: Activity,
  flame: Flame,
  flower: Flower2,
  "bar-chart": BarChart3,
  target: Target,
  person: PersonStanding,
  heart: Heart,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Activity;
}
