"use client";

import { useState } from "react";

// Botón interactivo de la vista previa del reproductor. No hay backend
// conectado todavía, así que el estado es solo visual (se reinicia al
// recargar la página) — sirve para mostrar cómo se va a sentir la
// interacción real una vez que el progreso se guarde de verdad.
export default function MarkCompleteButton({ initialCompleted }: { initialCompleted: boolean }) {
  const [completed, setCompleted] = useState(initialCompleted);

  if (completed) {
    return (
      <div className="flex items-center gap-3">
        <button
          onClick={() => setCompleted(false)}
          className="rounded-full bg-[#E4F3EA] text-[#3F8F5F] px-6 py-3 text-sm font-semibold flex items-center gap-2"
        >
          ✓ Clase completada
        </button>
        <span className="text-xs text-muted">¡Bien ahí! 🎉</span>
      </div>
    );
  }

  return (
    <button
      onClick={() => setCompleted(true)}
      className="rounded-full bg-accent text-white px-6 py-3 text-sm font-semibold hover:-translate-y-px transition-transform"
    >
      Marcar como completada
    </button>
  );
}
