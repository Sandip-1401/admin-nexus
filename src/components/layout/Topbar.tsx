import Link from "next/link";

export default function Topbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b bg-white px-6">
      <span className="font-semibold text-gray-900">Admin Panel</span>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Aarav Shah</span>
        <Link href="/login" className="text-sm text-blue-600 hover:underline">
          Logout
        </Link>
      </div>
    </header>
  );
}