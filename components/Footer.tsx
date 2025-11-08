"use client";
import Link from "next/link";

const FOOTER_LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/admissions", label: "Tuyển sinh" },
  { href: "/library", label: "Thư viện" },
];

export default function Footer() {
  return (
    <footer role="contentinfo" className="border-t bg-white/80 dark:bg-black/60">
      <div className="max-w-6xl mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-4">
          {FOOTER_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-gray-700 dark:text-gray-200 hover:underline">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="text-sm text-gray-700 dark:text-gray-200">© {new Date().getFullYear()} School. All rights reserved.</div>
      </div>
    </footer>
  );
}
