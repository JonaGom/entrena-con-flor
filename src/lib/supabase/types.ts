// Forma de una fila de la tabla `profiles` en Supabase (ver el SQL que se
// corre una sola vez en el proyecto de Supabase). Se define a mano acá en
// vez de generarla, para no depender de la CLI de Supabase.
export type Profile = {
  id: string;
  full_name: string | null;
  email: string | null;
  membership_scope: "none" | "single" | "full";
  membership_category: "pilates-mat" | "gap" | null;
  membership_expires_at: string | null;
  created_at: string;
};
