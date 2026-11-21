"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { analyticsTabs } from "@/config/navigation";

export default function AnalyticsTabs() {
  const pathname = usePathname();

  return (
    <div className="mb-6 flex gap-4 border-b border-gray-300">
      {analyticsTabs.map((tab) => (
        <Link
          key={tab.href}
          href={tab.href}
          className={`pb-2 ${
            pathname === tab.href
              ? "border-b-2 border-blue-600 font-semibold text-blue-600"
              : "text-gray-600 hover:text-gray-900"
          }`}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}