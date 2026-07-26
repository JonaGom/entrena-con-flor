"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signIn, type AuthActionState } from "@/lib/auth-actions";

const INITIAL_STATE: AuthActionState = { error: null, success: null };

export default function LoginForm({ next }: { next: string }) {
  const [state, formAction, pending] = useActionState(signIn, INITIAL_STATE);

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <input type="hidden" name="next" value={next} />

      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">Email</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="tu@email.com"
          className="w-full rounded-xl border border-accent-light px-4 py-3 text-[15px] outline-none focus:border-accent transition-colors"
        />
      </label>

      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">Contraseña</span>
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
          placeholder="••••••••"
          className="w-full rounded-xl border border-accent-light px-4 py-3 text-[15px] outline-none focus:border-accent transition-colors"
        />
      </label>

      {state?.error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded-full bg-accent text-white px-5 py-3 text-sm font-semibold shadow-[0_6px_16px_rgba(107,44,95,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-mid disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {pending ? "Ingresando…" : "Ingresar"}
      </button>

      <p className="text-center text-sm text-muted">
        ¿Todavía no tenés cuenta?{" "}
        <Link href="/crear-cuenta" className="text-accent font-semibold hover:text-accent-mid">
          Creála acá
        </Link>
      </p>
    </form>
  );
}
