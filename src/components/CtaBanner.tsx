export default function CtaBanner() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto text-center text-white rounded-3xl px-6 py-14 bg-gradient-to-br from-accent to-accent-mid">
        <h2 className="text-[28px] font-extrabold mb-3">
          ¿Lista para empezar a entrenar desde casa?
        </h2>
        <p className="text-white/85 mb-[26px]">Probá una clase gratis antes de elegir tu paquete.</p>
        <button className="rounded-full bg-gold text-[#3a2400] px-7 py-3.5 text-base font-semibold shadow-[0_6px_16px_rgba(232,163,61,0.35)]">
          Ver paquetes y precios
        </button>
      </div>
    </section>
  );
}
