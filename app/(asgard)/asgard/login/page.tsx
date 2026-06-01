import { login } from "./actions";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <form
        action={login}
        className="flex w-[400px] flex-col gap-4 rounded-xl border p-6"
      >
        <h1 className="text-2xl font-bold">
          Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-3 rounded-lg"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="border p-3 rounded-lg"
          required
        />

        <button
          type="submit"
          className="bg-black text-white p-3 rounded-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
}