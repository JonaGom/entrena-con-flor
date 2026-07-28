import Image from "next/image";
import { Award, GraduationCap, MapPin } from "lucide-react";

export default function About() {
  return (
    <section id="sobre-flor" className="bg-accent-dark text-white px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
        <div
          className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/15"
          style={{ aspectRatio: "3 / 4" }}
        >
          <Image
            src="/images/flor-sobre-mi.jpg"
            alt="Flor, profesora de educación física"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover object-top"
          />
        </div>
        <div>
          <div className="text-gold font-bold text-[13px] tracking-[1.2px] uppercase mb-2.5">
            Sobre la instructora
          </div>
          <h2 className="text-[28px] font-extrabold mb-3.5">
            Flor, profesora de educación física
          </h2>
          <p className="text-white/80 text-[15.5px] mb-3.5">
            Espacio para la bio real de Flor: años de experiencia, formación y certificaciones en
            pilates mat, ritmos, funcional y spinning, y su enfoque de trabajo con las alumnas.
          </p>
          <div className="flex gap-2.5 flex-wrap mt-[18px]">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/25 px-3.5 py-1.5 rounded-full text-[13px]">
              <GraduationCap className="w-3.5 h-3.5" strokeWidth={2} />
              Prof. de Educación Física
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/25 px-3.5 py-1.5 rounded-full text-[13px]">
              <Award className="w-3.5 h-3.5" strokeWidth={2} />
              Instructora certificada
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/25 px-3.5 py-1.5 rounded-full text-[13px]">
              <MapPin className="w-3.5 h-3.5" strokeWidth={2} />
              Argentina
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
