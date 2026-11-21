"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { settingsNav } from "@/config/navigation";

export default function SettingsMenu() {
  const pathname = usePathname();

  return (
    <nav className="flex w-48 flex-col gap-1">
      {settingsNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`rounded px-3 py-2 ${
            pathname === item.href
              ? "bg-white font-semibold text-blue-600 shadow-sm"
              : "text-gray-600 hover:bg-gray-200"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}