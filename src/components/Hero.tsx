import { heroStats } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(120%_140%_at_15%_0%,var(--brand-accent-mid)_0%,var(--brand-accent-dark)_55%,#2a1027_100%)] text-white px-6 pt-[88px] pb-[110px]">
      {/* Manchas decorativas */}
      <div className="pointer-events-none absolute -right-[120px] -top-[120px] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(232,163,61,0.35),transparent_70%)]" />
      <div className="pointer-events-none absolute -left-[100px] -bottom-[140px] w-[340px] h-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),transparent_70%)]" />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 px-3.5 py-1.5 rounded-full text-[13px] font-semibold mb-5">
            🏠 Entrená desde donde estés
          </div>
          <h1 className="text-4xl md:text-[44px] leading-[1.12] font-extrabold tracking-tight mb-[18px]">
            Pilates, ritmos, funcional y GAP{" "}
            <span className="text-gold">sin salir de casa</span>
          </h1>
          <p className="text-lg text-white/85 max-w-lg mb-[30px]">
            Paquetes de clases grabadas por nivel, pensados para que armes tu propia rutina
            semanal con la guía de Flor.
          </p>

          <div className="flex gap-3.5 flex-wrap mb-[34px]">
            <button className="rounded-full bg-gold text-[#3a2400] px-7 py-3.5 text-base font-semibold shadow-[0_6px_16px_rgba(232,163,61,0.35)] hover:-translate-y-px transition-transform">
              Ver paquetes
            </button>
            <button className="rounded-full border-[1.5px] border-white/50 text-white px-7 py-3.5 text-base font-semibold hover:-translate-y-px transition-transform">
              ▶ Clase de muestra gratis
            </button>
          </div>

          <div className="flex gap-8 flex-wrap">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <b className="block text-xl text-white">{stat.value}</b>
                <span className="text-[13px] text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-white/8 border border-white/18 rounded-3xl p-7 backdrop-blur-sm">
          <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-white/14 to-white/2 flex items-center justify-center text-8xl border border-dashed border-white/35">
            🧘‍♀️
          </div>
          <div className="mt-3.5 text-[13px] text-white/65 text-center">
            Espacio para foto o video real de Flor entrenando
          </div>
        </div>
      </div>
    </section>
  );
}
