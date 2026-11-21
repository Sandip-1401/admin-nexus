"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/config/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-60 bg-gray-900 p-4 text-white">
      <h2 className="mb-6 text-xl font-bold">Nexus Admin</h2>
      <nav className="flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded px-3 py-2 ${
                isActive ? "bg-blue-600 font-semibold" : "hover:bg-gray-800"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}