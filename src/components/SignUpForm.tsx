"use client";

import { useActionState } from "react";
import Link from "next/link";
import { signUp, type AuthActionState } from "@/lib/auth-actions";

const INITIAL_STATE: AuthActionState = { error: null, success: null };

export default function SignUpForm() {
  const [state, formAction, pending] = useActionState(signUp, INITIAL_STATE);

  if (state?.success) {
    return (
      <div className="text-center">
        <div className="text-4xl mb-4">📬</div>
        <p className="text-[15px] text-text mb-6">{state.success}</p>
        <Link
          href="/ingresar"
          className="inline-block rounded-full bg-accent text-white px-6 py-3 text-sm font-semibold hover:-translate-y-px transition-transform"
        >
          Ir a iniciar sesión
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <label className="block">
        <span className="block text-sm font-semibold mb-1.5">Nombre</span>
        <input
          type="text"
          name="fullName"
          autoComplete="name"
          placeholder="Tu nombre"
          className="w-full rounded-xl border border-accent-light px-4 py-3 text-[15px] outline-none focus:border-accent transition-colors"
        />
      </label>

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
          minLength={6}
          autoComplete="new-password"
          placeholder="Mínimo 6 caracteres"
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
        {pending ? "Creando cuenta…" : "Crear cuenta"}
      </button>

      <p className="text-center text-sm text-muted">
        ¿Ya tenés cuenta?{" "}
        <Link href="/ingresar" className="text-accent font-semibold hover:text-accent-mid">
          Iniciá sesión
        </Link>
      </p>
    </form>
  );
}
