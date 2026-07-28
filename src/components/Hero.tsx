import Image from "next/image";
import Link from "next/link";
import { Play, Star } from "lucide-react";
import { heroCopy, heroStats } from "@/data/content";

export default function Hero() {
  return (
    <section className="hero-vignette relative overflow-hidden text-white px-6 pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Fondo: foto de Flor a pantalla completa, con overlay oscuro en degradé
          para que el texto siga siendo legible encima. */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/flor-hero.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3e1938]/45 via-[#3e1938]/70 to-[#3e1938]/85" />
      </div>

      {/* Manchas decorativas, con un movimiento ambiental muy sutil */}
      <div className="pointer-events-none absolute -right-[120px] -top-[120px] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(232,163,61,0.32),transparent_70%)] blur-2xl animate-float-a" />
      <div className="pointer-events-none absolute -left-[100px] -bottom-[140px] w-[360px] h-[360px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10),transparent_70%)] blur-2xl animate-float-b" />
      <div className="pointer-events-none absolute left-1/3 top-1/4 w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_70%)] blur-3xl" />
      {/* Forma orgánica muy sutil, apenas insinuada */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(1px_1px_at_20px_20px,white_1px,transparent_0)] [background-size:34px_34px]" />

      {/* Líneas orgánicas casi invisibles, para dar movimiento sin llamar la atención */}
      <div className="hero-line hero-line-a" />
      <div className="hero-line hero-line-b" />
      <div className="hero-line hero-line-c" />

      {/* Partículas desenfocadas, muy dispersas y tenues */}
      <span className="hero-particle" style={{ top: "16%", left: "56%", width: 6, height: 6, opacity: 0.12 }} />
      <span className="hero-particle" style={{ top: "66%", left: "39%", width: 8, height: 8, opacity: 0.08 }} />
      <span className="hero-particle" style={{ top: "28%", left: "7%", width: 5, height: 5, opacity: 0.1 }} />
      <span className="hero-particle" style={{ top: "80%", left: "64%", width: 7, height: 7, opacity: 0.09 }} />
      <span className="hero-particle" style={{ top: "10%", left: "33%", width: 4, height: 4, opacity: 0.1 }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="hero-text-glow max-w-2xl">
          <h1 className="animate-hero-title text-4xl md:text-[46px] leading-[1.14] font-extrabold tracking-tight mb-5">
            {heroCopy.title}
          </h1>
          <p className="animate-hero-subtitle text-lg md:text-xl text-white/80 max-w-lg mb-4 font-light">
            {heroCopy.subtitle}
          </p>
          <div className="animate-hero-highlight inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[13px] font-semibold text-gold mb-8">
            {heroCopy.highlight}
          </div>

          <div className="animate-hero-buttons flex gap-3.5 flex-wrap mb-7">
            <Link
              href="/membresia"
              className="rounded-full bg-gold text-[#3a2400] px-8 py-4 text-base font-semibold shadow-[0_10px_26px_rgba(232,163,61,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(232,163,61,0.45)] hover:bg-[#f0b04f]"
            >
              {heroCopy.primaryCta}
            </Link>
            <Link
              href="/clases"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/50 text-white px-8 py-4 text-base font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/80"
            >
              <Play className="w-4 h-4" fill="currentColor" strokeWidth={0} />
              {heroCopy.secondaryCta}
            </Link>
          </div>

          <div className="animate-hero-quote max-w-md rounded-2xl border border-white/12 bg-white/[0.06] backdrop-blur-md px-5 py-4 mb-9">
            <p className="text-[14.5px] italic leading-relaxed text-white/85">
              &ldquo;{heroCopy.quote}&rdquo;
            </p>
            <span className="mt-2 block text-xs font-semibold text-gold tracking-wide">
              — {heroCopy.quoteAuthor}
            </span>
          </div>

          <div className="animate-hero-stats flex gap-8 flex-wrap">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <b className="flex items-center gap-1 text-xl text-white">
                  {stat.value}
                  {stat.icon === "star" && (
                    <Star className="w-4 h-4 text-gold" fill="currentColor" strokeWidth={0} />
                  )}
                </b>
                <span className="text-[13px] text-white/70">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
