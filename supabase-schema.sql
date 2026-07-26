-- Entrená con Flor — esquema de usuarios registrados
--
-- Corré esto UNA SOLA VEZ en tu proyecto de Supabase: Dashboard → SQL Editor
-- → "New query" → pegar todo esto → Run.
--
-- Qué hace:
--   1. Crea la tabla `profiles`, con 1 fila por usuario registrado, donde
--      vive el estado de su membresía (mientras no haya pagos automáticos,
--      esto lo carga Flor a mano acá mismo, en Table Editor → profiles).
--   2. Activa Row Level Security (RLS) para que cada usuario solo pueda ver
--      su propia fila, nunca las de otra persona.
--   3. Crea un trigger que arma automáticamente la fila de `profiles` cada
--      vez que alguien se registra (no hay que hacer nada manual para eso).

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text,
  email text,
  -- 'none' = sin membresía. 'single' = una sola disciplina (ver membership_category).
  -- 'full' = Full Access (las dos disciplinas).
  membership_scope text not null default 'none'
    check (membership_scope in ('none', 'single', 'full')),
  -- Solo se usa cuando membership_scope = 'single'. Tiene que ser el mismo
  -- slug que en src/data/content.ts: 'pilates-mat' o 'gap'.
  membership_category text
    check (membership_category in ('pilates-mat', 'gap')),
  -- La membresía se considera activa solo si esta fecha es futura. Para
  -- activarle la membresía a alguien: cargale membership_scope + esta fecha
  -- (por ejemplo, hoy + 1 mes o + 3 meses).
  membership_expires_at timestamptz,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

drop policy if exists "select_own_profile" on public.profiles;
create policy "select_own_profile"
  on public.profiles for select
  using (auth.uid() = id);

-- A propósito NO hay política de "update" para usuarios comunes: así nadie
-- puede otorgarse una membresía a sí mismo editando datos desde el
-- navegador. Los cambios de membresía se hacen desde el Table Editor de
-- Supabase (con tu usuario de owner, que no pasa por RLS).

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, new.raw_user_meta_data ->> 'full_name', new.email);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
