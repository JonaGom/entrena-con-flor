import { packages } from "@/data/content";
import SectionHead from "./SectionHead";

export default function Packages() {
  return (
    <section id="paquetes" className="bg-accent-light px-6 py-20">
      <SectionHead
        kicker="Paquetes"
        title="Elegí tu nivel"
        description="Todos incluyen acceso a las cuatro disciplinas — la diferencia está en la cantidad de clases, la dificultad y el acompañamiento."
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[22px]">
        {packages.map((pkg) => (
          <div
            key={pkg.slug}
            className={
              "relative bg-white rounded-[20px] p-8 border " +
              (pkg.featured
                ? "border-2 border-accent shadow-[0_18px_40px_rgba(107,44,95,0.18)] lg:scale-[1.03]"
                : "border-[#eadbe3]")
            }
          >
            {pkg.featured && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-[#3a2400] text-xs font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap">
                Más elegido
              </div>
            )}
            <h3 className="mt-1.5 text-xl font-semibold">{pkg.name}</h3>
            <div className="text-[32px] font-extrabold text-accent-dark mt-2.5">
              {pkg.priceLabel}
            </div>
            <div className="text-xs text-muted mb-4.5">Precio de ejemplo a definir</div>
            <ul className="mb-6">
              {pkg.features.map((feature, i) => (
                <li
                  key={feature}
                  className={
                    "py-1.5 text-sm flex gap-2 " + (i !== 0 ? "border-t border-[#f1e8ee]" : "")
                  }
                >
                  <span className="text-accent font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={
                "w-full text-center rounded-full px-5 py-2.5 text-sm font-semibold border " +
                (pkg.featured
                  ? "bg-accent text-white border-accent"
                  : "border-accent text-accent")
              }
            >
              Elegir plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
