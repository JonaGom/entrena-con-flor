import Link from "next/link";
import { ArrowRight, Check, Crown, PlayCircle, RotateCcw, Star } from "lucide-react";
import { closingCta } from "@/data/content";

const checklistIcons: Record<string, typeof Check> = {
  check: Check,
  refresh: RotateCcw,
  play: PlayCircle,
};

// Banner de cierre del inicio: combina el mensaje "empezá hoy" con la
// recomendación de Full Access (antes un banner aparte en Categories.tsx),
// fusionados a pedido de Jonathan para no repetir dos CTAs de cierre.
// Simplificado de nuevo (julio 2026): sin foto y con un solo CTA final
// ("Quiero Full Access"), para no competir con el CTA del Hero ni sumar
// demasiado contenido visual. Vive únicamente en la home.
export default function CtaBanner() {
  const { fullAccess } = closingCta;

  return (
    <section className="px-6 pt-4 pb-14 md:pb-16">
      <div className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c0e22] via-[#2c1330] to-[#3e1938] text-white">
        {/* Formas decorativas */}
        <div className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full bg-accent-mid/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 right-10 w-80 h-80 rounded-full bg-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 right-0 w-40 h-40 rounded-full border border-white/10" />

        <div className="relative z-10 text-center p-8 sm:p-12 md:p-14 pb-6 md:pb-8">
          <div className="text-gold font-bold text-[12px] uppercase tracking-[1.5px] mb-3">
            {closingCta.kicker}
          </div>
          <h2 className="text-[32px] sm:text-[38px] leading-[1.1] font-extrabold mb-2">
            {closingCta.titleStart}
            <span className="text-[#e6b8e0]">{closingCta.titleAccent}</span>
          </h2>
          <div className="w-14 h-1 rounded-full bg-gold mx-auto mb-5" />
          <p className="text-white/80 text-[15.5px] mb-8 max-w-md mx-auto">{closingCta.subtitle}</p>

          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            {closingCta.checklist.map((item) => {
              const Icon = checklistIcons[item.icon] ?? Check;
              return (
                <div key={item.text} className="flex items-center gap-2 text-[13.5px] text-white/85">
                  <span className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gold shrink-0">
                    <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                  </span>
                  {item.text}
                </div>
              );
            })}
          </div>
        </div>

        {/* Franja Full Access, para quien duda entre las dos disciplinas — único CTA del banner. */}
        <div className="relative z-10 px-8 sm:px-12 md:px-14 pb-8 sm:pb-12 md:pb-14">
          <div className="flex flex-wrap items-center justify-center gap-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm p-6 sm:p-7 text-center sm:text-left">
            <div className="flex-1 min-w-[220px]">
              <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/25 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-gold mb-2.5">
                <Star className="w-3 h-3" fill="currentColor" strokeWidth={0} />
                {fullAccess.badge}
              </div>
              <h3 className="text-xl md:text-[22px] font-extrabold mb-1">{fullAccess.heading}</h3>
              <p className="text-white/80 text-[14px] max-w-md">{fullAccess.text}</p>
            </div>

            <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-xl px-4 py-3">
              <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center text-gold shrink-0">
                <Crown className="w-4 h-4" strokeWidth={2} />
              </div>
              <div className="text-left">
                <div className="text-gold font-bold text-[10.5px] uppercase tracking-wide">
                  {fullAccess.chipLabel}
                </div>
                <div className="text-[13px] text-white/85">{fullAccess.chipText}</div>
              </div>
            </div>

            <Link
              href={fullAccess.ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-gold text-[#3a2400] px-6 py-3 text-sm font-semibold shadow-[0_10px_26px_rgba(232,163,61,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(232,163,61,0.45)] hover:bg-[#f0b04f] whitespace-nowrap"
            >
              {fullAccess.cta}
              <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
