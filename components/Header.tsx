"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: "/", label: "Trang chủ" },
  { href: "/news", label: "Tin tức" },
  { href: "/library", label: "Thư viện" },
  { href: "/fund", label: "Quỹ" },
];

const PUBLIC_TOP_LEVEL = new Set([
  "",
  "news",
  "library",
  "fund",
  "shadcn-demo",
]);

export default function Header() {
  const pathname = usePathname() || "/";

  function normalizePath(p: string) {
    if (!p) return "/";
    const noQs = p.split(/[?#]/)[0];
    if (noQs === "/") return "/";
    return ("/" + noQs).replace(/\/\/+/g, "/").replace(/\/$/, "");
  }

  function isActive(navHref: string, currentPath: string) {
    if (navHref === `/${tenant}`) {
      if (currentPath !== navHref) return false;
    }

    const a = normalizePath(navHref);
    const b = normalizePath(currentPath);
    if (a === "/") return b === "/";
    const aSeg = a.split("/").filter(Boolean);
    const bSeg = b.split("/").filter(Boolean);
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
  const segments = normalizedPath.split("/").filter(Boolean);
  const first = segments[0];
  const isTenantPath =
    first &&
    !PUBLIC_TOP_LEVEL.has(first) &&
    first !== "_next" &&
    first !== "api";

  const tenant = isTenantPath ? first : null;
  return (
    <header className="border-b bg-white py-3">
      <div className="flex items-center container mx-auto px-2 justify-between">
        <Link href="/" className="inline-flex items-center gap-3 h-10">
          <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded">
            Trường
          </span>
        </Link>
        <nav className="flex" aria-label="Main navigation">
          {tenant
            ? [
                { href: `/${tenant}`, label: "Trang chủ" },
                { href: `/${tenant}/news`, label: "Tin tức" },
                { href: `/${tenant}/library`, label: "Thư viện" },
                { href: `/${tenant}/about`, label: "Giới thiệu" },
              ].map((item) => {
                const exact = normalizePath(item.href) === normalizedPath;
                const active = isActive(item.href, normalizedPath);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-1 rounded hover:bg-gray-100",
                      exact
                        ? "text-blue-600 font-semibold"
                        : active
                        ? "text-blue-600"
                        : "text-gray-700"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })
            : NAV_ITEMS.map((item) => {
                const exact = normalizePath(item.href) === normalizedPath;
                const active = isActive(item.href, normalizedPath);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-1 rounded hover:bg-gray-100",
                      exact
                        ? "text-blue-600 font-semibold"
                        : active
                        ? "text-blue-600"
                        : "text-gray-700"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
        </nav>
      </div>
    </header>
  );
}
