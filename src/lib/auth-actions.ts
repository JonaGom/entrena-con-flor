"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";

export type AuthActionState = {
  error: string | null;
  success: string | null;
};

function traducirError(message: string): string {
  const m = message.toLowerCase();
  if (m.includes("already registered") || m.includes("already exists") || m.includes("user already")) {
    return "Ya existe una cuenta con ese email — probá iniciar sesión.";
  }
  if (m.includes("invalid login credentials")) {
    return "Email o contraseña incorrectos.";
  }
  if (m.includes("email not confirmed")) {
    return "Todavía no confirmaste tu email — revisá tu casilla de entrada (y spam).";
  }
  if (m.includes("password should be at least")) {
    return "La contraseña tiene que tener al menos 6 caracteres.";
  }
  if (m.includes("unable to validate email") || m.includes("invalid email")) {
    return "Ese email no parece válido.";
  }
  if (m.includes("rate limit")) {
    return "Demasiados intentos — esperá un minuto y probá de nuevo.";
  }
  return "Ocurrió un error. Probá de nuevo en un momento.";
}

function safeNextPath(next: FormDataEntryValue | null): string {
  const value = typeof next === "string" ? next : "";
  if (value.startsWith("/") && !value.startsWith("//")) return value;
  return "/mi-cuenta";
}

export async function signUp(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const fullName = String(formData.get("fullName") || "").trim();

  if (!email || !password) {
    return { error: "Completá tu email y una contraseña.", success: null };
  }
  if (password.length < 6) {
    return { error: "La contraseña tiene que tener al menos 6 caracteres.", success: null };
  }

  // Origin de la request (funciona tanto en localhost como en producción)
  // para armar el link al que apunta el mail de confirmación.
  const origin = (await headers()).get("origin") ?? "https://entrena-con-flor.netlify.app";

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName || null },
      emailRedirectTo: `${origin}/auth/confirm?next=${encodeURIComponent("/mi-cuenta?bienvenida=1")}`,
    },
  });

  if (error) {
    return { error: traducirError(error.message), success: null };
  }

  // Si el proyecto de Supabase tiene confirmación de email activada (el
  // default), todavía no hay sesión hasta que confirmen desde el mail.
  if (!data.session) {
    return {
      error: null,
      success: `Te enviamos un email de confirmación a ${email}. Abrí el link para activar tu cuenta y después iniciá sesión.`,
    };
  }

  redirect("/mi-cuenta?bienvenida=1");
}

export async function signIn(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const next = safeNextPath(formData.get("next"));

  if (!email || !password) {
    return { error: "Completá tu email y tu contraseña.", success: null };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: traducirError(error.message), success: null };
  }

  redirect(next);
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
