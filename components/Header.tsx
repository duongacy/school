"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/admissions", label: "Tuyển sinh" },
  { href: "/library", label: "Thư viện" },
];

export default function Header() {
  const pathname = usePathname() || "/";

  function normalizePath(p: string) {
    if (!p) return "/";
    const noQs = p.split(/[?#]/)[0];
    if (noQs === "/") return "/";
    return ("/" + noQs).replace(/\/\/+/g, "/").replace(/\/$/, "");
  }

  function isActive(navHref: string, currentPath: string) {
    const a = normalizePath(navHref);
    const b = normalizePath(currentPath);
    if (a === "/") return b === "/";
    const aSeg = a.split("/").filter(Boolean);
    const bSeg = b.split("/").filter(Boolean);
    if (aSeg.length === 0) return false;
    if (a === b) return true;
    if (bSeg.length >= aSeg.length) {
      for (let i = 0; i < aSeg.length; i++) {
        if (aSeg[i] !== bSeg[i]) return false;
      }
      return true;
    }
    return false;
  }

  const normalizedPath = normalizePath(pathname);

  return (
    <header className="border-b bg-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex  items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          School
        </Link>

        <nav className="flex">
          {NAV_ITEMS.map((item) => {
            const exact = normalizePath(item.href) === normalizedPath;
            const active = isActive(item.href, normalizedPath);
            const className = `${
              exact
                ? "text-blue-600 font-semibold"
                : active
                ? "text-blue-600"
                : "text-gray-700"
            } px-3 py-1 rounded hover:bg-gray-100`;
            return (
              <Link key={item.href} href={item.href} className={className}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
