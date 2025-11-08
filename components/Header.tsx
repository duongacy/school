"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ColorModeToggle from './ColorModeToggle';
import UserMenu from './UserMenu';

const NAV_ITEMS: { href: string; label: string }[] = [
  { href: '/', label: 'Trang chủ' },
  { href: '/about', label: 'Giới thiệu' },
  { href: '/admissions', label: 'Tuyển sinh' },
  { href: '/admissions/programs', label: 'Chương trình' },
  { href: '/admissions/fees', label: 'Học phí' },
  { href: '/admissions/contacts', label: 'Liên hệ' },
  { href: '/admissions/contacts/map', label: 'Bản đồ' },
  { href: '/profile', label: 'Hồ sơ' },
  { href: '/profile/settings', label: 'Cài đặt' },
];

export default function Header() {
  const pathname = usePathname() || '/';
  // Normalize path helper: remove trailing slash (except root) and ensure leading slash
  function normalizePath(p: string) {
    if (!p) return '/';
    // Remove query/hash if any (usePathname should already strip them)
    const noQs = p.split(/[?#]/)[0];
    if (noQs === '/') return '/';
    return noQs.replace(/\/+$|^\s+|\s+$/g, '').replace(/(^)?/, '/').replace(/\/\//g, '/').replace(/\/$/, '');
  }

  // Segment-aware active matcher: matches when the nav href segments equal the first N segments of pathname.
  function isActive(navHref: string, currentPath: string) {
    const a = normalizePath(navHref);
    const b = normalizePath(currentPath);
    if (a === '/') return b === '/';
    const aSeg = a.split('/').filter(Boolean);
    const bSeg = b.split('/').filter(Boolean);
    if (aSeg.length === 0) return false;
    // exact match
    if (a === b) return true;
    // parent match: all nav segments match the first N segments of current path
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
    <header className="w-full border-b bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center">
            <Link href="/" className="font-semibold text-lg mr-6">
              School
            </Link>
            <nav className="flex space-x-4">
              {NAV_ITEMS.map((item) => {
                const active = isActive(item.href, normalizedPath);
                const exact = normalizePath(item.href) === normalizedPath;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-2 py-1 rounded text-sm ${
                      exact
                        ? 'font-semibold text-blue-700 dark:text-blue-300'
                        : active
                        ? 'text-blue-600 dark:text-blue-300'
                        : 'text-gray-700 dark:text-gray-300'
                    } hover:underline`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center space-x-3">
            <ColorModeToggle />
            <UserMenu />
            <div className="text-sm text-gray-600 dark:text-gray-300">v0.1</div>
          </div>
        </div>
      </div>
    </header>
  );
}
