import Link from "next/link";
import { Package } from "@/data/content";

export default function PackageCard({ pkg, ctaHref }: { pkg: Package; ctaHref: string }) {
  return (
    <div
      className={
        "relative bg-white rounded-[20px] p-8 border transition-all duration-300 hover:-translate-y-1 " +
        (pkg.featured
          ? "border-2 border-accent shadow-[0_18px_40px_rgba(107,44,95,0.18)] lg:scale-[1.03] hover:shadow-[0_24px_48px_rgba(107,44,95,0.24)]"
          : "border-[#eadbe3] hover:border-accent/40 hover:shadow-[0_16px_34px_rgba(62,25,56,0.1)]")
      }
    >
      {pkg.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-[#3a2400] text-xs font-bold px-3.5 py-1.5 rounded-full whitespace-nowrap">
          Más elegido
        </div>
      )}
      <h3 className="mt-1.5 text-xl font-semibold">{pkg.name}</h3>
      <div className="text-[32px] font-extrabold text-accent-dark mt-2.5">{pkg.priceLabel}</div>
      <div className="text-xs text-muted mb-4.5">Precio de ejemplo a definir</div>
      <ul className="mb-6">
        {pkg.features.map((feature, i) => (
          <li
            key={feature}
            className={"py-1.5 text-sm flex gap-2 " + (i !== 0 ? "border-t border-[#f1e8ee]" : "")}
          >
            <span className="text-accent font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className={
          "block w-full text-center rounded-full px-5 py-2.5 text-sm font-semibold border transition-all duration-300 hover:-translate-y-0.5 " +
          (pkg.featured
            ? "bg-accent text-white border-accent hover:bg-accent-mid"
            : "border-accent text-accent hover:bg-accent hover:text-white")
        }
      >
        Elegir membresía
      </Link>
    </div>
  );
}
