import {
  Activity,
  Brain,
  Dumbbell,
  Flame,
  Home,
  TrendingUp,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Mapa de íconos usados en contenido data-driven (Benefits, WhyTrain,
// Categories) — así content.ts guarda un nombre de ícono en vez de un
// emoji, y acá se resuelve al componente SVG de lucide-react.
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
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Activity;
}
