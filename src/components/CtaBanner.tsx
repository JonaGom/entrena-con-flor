import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto text-center text-white rounded-3xl px-6 py-14 bg-gradient-to-br from-accent to-accent-mid">
        <h2 className="text-[28px] font-extrabold mb-3">
          ¿Lista para empezar a entrenar desde casa?
        </h2>
        <p className="text-white/85 mb-[26px]">Probá una clase gratis antes de elegir tu membresía.</p>
        <Link
          href="/membresia"
          className="inline-block rounded-full bg-gold text-[#3a2400] px-7 py-3.5 text-base font-semibold shadow-[0_6px_16px_rgba(232,163,61,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(232,163,61,0.45)] hover:bg-[#f0b04f]"
        >
          Ver membresías y precios
        </Link>
      </div>
    </section>
  );
}
