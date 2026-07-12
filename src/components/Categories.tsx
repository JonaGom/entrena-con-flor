import { categories } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Categories() {
  return (
    <section id="servicios" className="px-6 py-20">
      <SectionHead
        kicker="Nuestras disciplinas"
        title="Cuatro formas de entrenar, un solo lugar"
        description="Elegí según tu objetivo del día, o combiná todas dentro de tu paquete."
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((cat) => (
          <div
            key={cat.slug}
            className="bg-white border border-accent-light rounded-2xl p-7 shadow-[0_10px_30px_rgba(62,25,56,0.06)] hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.12)] transition-all"
          >
            <div className="w-[52px] h-[52px] rounded-2xl bg-accent-light flex items-center justify-center text-2xl mb-4">
              {cat.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{cat.title}</h3>
            <p className="text-muted text-sm mb-3.5">{cat.description}</p>
            <a href="#" className="text-accent font-semibold text-sm">
              Ver clases →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
