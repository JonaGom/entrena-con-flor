export default function SectionHead({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center max-w-xl mx-auto mb-12">
      <div className="text-accent font-bold text-[13px] tracking-[1.2px] uppercase mb-2.5">
        {kicker}
      </div>
      <h2 className="text-[32px] font-extrabold mb-3">{title}</h2>
      {description && <p className="text-muted text-base">{description}</p>}
    </div>
  );
}
