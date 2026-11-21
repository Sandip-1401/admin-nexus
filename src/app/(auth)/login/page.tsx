import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center pt-10">
      <h1 className="text-2xl font-bold text-gray-300">Sign in</h1>
      <p className="mt-1 text-gray-600">Welcome back to Nexus Admin.</p>
      <Link
        href="/dashboard"
        className="mt-6 px-4 block rounded bg-blue-600 py-2 text-center font-semibold text-white hover:bg-blue-700"
      >
        Continue to dashboard
      </Link>
    </div>
  );
}