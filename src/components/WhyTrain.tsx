import { whyTrainMessage, trainingBenefits } from "@/data/content";
import Reveal from "./Reveal";

export default function WhyTrain() {
  return (
    <section id="por-que-entrenar" className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div className="bg-accent-light rounded-[24px] p-8 md:p-10 relative overflow-hidden transition-all duration-300 hover:shadow-[0_16px_34px_rgba(62,25,56,0.1)]">
          <div className="text-accent/25 text-[90px] leading-none font-serif absolute -top-2 left-6 select-none">
            &ldquo;
          </div>
          <div className="relative">
            <div className="text-accent font-bold text-[12px] tracking-[1.2px] uppercase mb-4">
              Por qué entrenar
            </div>
            <p className="text-[19px] leading-[1.5] text-accent-dark font-medium mb-5">
              {whyTrainMessage.quote}
            </p>
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold">
                F
              </span>
              <span className="text-sm font-semibold text-accent-dark">
                — {whyTrainMessage.author}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {trainingBenefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 80}>
              <div className="p-1">
                <div className="text-2xl mb-2.5">{b.icon}</div>
                <h3 className="text-[15px] font-semibold mb-1.5">{b.title}</h3>
                <p className="text-[13.5px] text-muted leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
