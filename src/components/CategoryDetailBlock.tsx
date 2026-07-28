import Link from "next/link";
import { Category, CategoryDetail } from "@/data/content";
import { getIcon } from "@/lib/icon-map";

export default function CategoryDetailBlock({
  category,
  detail,
  reversed,
}: {
  category: Category;
  detail: CategoryDetail;
  reversed?: boolean;
}) {
  const CategoryIcon = getIcon(category.icon);
  return (
    <div
      id={category.slug}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-14 border-b border-accent-light last:border-b-0 scroll-mt-24"
    >
      <div className={reversed ? "md:order-2" : ""}>
        <div className="w-16 h-16 rounded-2xl bg-accent-light flex items-center justify-center text-accent mb-5">
          <CategoryIcon className="w-7 h-7" strokeWidth={2} />
        </div>
        <h2 className="text-2xl font-extrabold mb-3">{category.title}</h2>
        <p className="text-[15px] text-text mb-4">{detail.whatItIs}</p>

        <div className="mb-4">
          <div className="text-accent font-bold text-[12px] tracking-[1px] uppercase mb-1.5">
            Para quién es
          </div>
          <p className="text-[14px] text-muted">{detail.whoItsFor}</p>
        </div>

        <Link
          href={`/membresia/${category.slug}`}
          className="inline-block rounded-full bg-accent text-white px-6 py-2.5 text-sm font-semibold mt-2 hover:-translate-y-px transition-transform"
        >
          {category.comingSoon ? "Próximamente →" : `Ver membresías de ${category.title} →`}
        </Link>
      </div>

      <div className={reversed ? "md:order-1" : ""}>
        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-accent-light to-white border border-accent-light flex flex-col items-center justify-center gap-3 p-8 text-center">
          <CategoryIcon className="w-14 h-14 text-accent" strokeWidth={1.5} />
          <div className="text-[13px] text-muted">
            Espacio para foto o video de una clase de {category.title}
          </div>
        </div>
        <div className="mt-4 bg-accent-light rounded-xl p-4 text-[13px] text-accent-dark">
          <b>Ejemplo de clase:</b> {detail.sampleClass}
        </div>
      </div>
    </div>
  );
}
