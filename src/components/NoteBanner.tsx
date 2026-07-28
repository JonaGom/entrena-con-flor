export default function NoteBanner({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-[#2a2a2a] text-white text-center text-[13px] py-2 px-4">
      {children ?? (
        <>
          Mockup de ejemplo para revisar la <b className="text-gold">estructura</b> — nombre,
          colores, fotos y textos son placeholders a reemplazar
        </>
      )}
    </div>
  );
}
