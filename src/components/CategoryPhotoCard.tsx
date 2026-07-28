import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Category, CategoryPitch } from "@/data/content";
import { getIcon } from "@/lib/icon-map";

// Tarjeta grande de disciplina (foto real + beneficios) — nace en el inicio
// (sección "Nuestras disciplinas") y se reutiliza en /membresia para no
// duplicar el mismo diseño con otro href/CTA.
export default function CategoryPhotoCard({
  category,
  pitch,
  href,
  ctaLabel,
}: {
  category: Category;
  pitch: CategoryPitch;
  href: string;
  ctaLabel: string;
}) {
  const CategoryIcon = getIcon(category.icon);

  return (
    <Link
      href={href}
      className="group relative block aspect-[4/5] sm:aspect-[16/12] rounded-3xl overflow-hidden border border-white/10 shadow-[0_16px_40px_rgba(62,25,56,0.14)] transition-transform duration-300 hover:-translate-y-1"
    >
      <Image
        src={pitch.photo}
        alt={category.title}
        fill
        sizes="(max-width: 768px) 100vw, 560px"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/10" />

      <div className="relative z-10 h-full flex flex-col justify-between p-7 sm:p-8 text-white">
        <div className="w-11 h-11 rounded-xl bg-white/15 border border-white/30 backdrop-blur-md flex items-center justify-center">
          <CategoryIcon className="w-5 h-5" strokeWidth={2} />
        </div>

        <div>
          <h3 className="text-2xl sm:text-[28px] font-extrabold mb-1.5">{category.title}</h3>
          <div className="w-10 h-1 rounded-full bg-gold mb-3" />
          <p className="text-white/85 text-[14.5px] max-w-[85%] mb-4">{pitch.tagline}</p>
          <ul className="mb-6 space-y-1.5">
            {pitch.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-[13.5px] text-white/90">
                <Check className="w-4 h-4 text-gold shrink-0" strokeWidth={2.5} />
                {benefit}
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-2.5 text-sm font-semibold transition-colors duration-300 group-hover:bg-white group-hover:text-accent-dark">
            {ctaLabel}
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </span>
        </div>
      </div>
    </Link>
  );
}
