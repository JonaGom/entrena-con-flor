import { Star } from "lucide-react";
import { testimonials } from "@/data/content";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="px-6 py-20">
      <SectionHead kicker="Lo que dicen" title="Alumnas entrenando desde casa" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-[22px]">
        {testimonials.map((t, i) => (
          <Reveal key={t.initials} delay={i * 60}>
            <div className="bg-white border border-accent-light rounded-2xl p-[26px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(62,25,56,0.1)]">
              <div className="flex gap-0.5 text-gold mb-3">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="w-4 h-4" fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-[14.5px] mb-[18px]">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-2.5">
                <div className="w-[38px] h-[38px] rounded-full bg-accent-mid text-white flex items-center justify-center font-bold text-[13px]">
                  {t.initials}
                </div>
                <div>
                  <b className="block text-sm">{t.name}</b>
                  <span className="text-xs text-muted">{t.membershipName}</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
