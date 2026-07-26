import { signOut } from "@/lib/auth-actions";

export default function LogoutButton({ className }: { className?: string }) {
  return (
    <form action={signOut}>
      <button
        type="submit"
        className={
          className ??
          "rounded-full border-[1.5px] border-accent-dark text-accent-dark px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-accent-dark hover:text-white"
        }
      >
        Cerrar sesión
      </button>
    </form>
  );
}
