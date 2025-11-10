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
  <footer role="contentinfo" className="border-t bg-white/80">
      <div className="max-w-6xl mx-auto py-8 px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <div className="font-semibold">Trường THPT Phan Bội Châu</div>
          <div className="text-sm text-gray-700 mt-2">
            Địa chỉ: Số 123, Đường Ví Dụ, Phường Minh Họa, Thành phố
          </div>
          <div className="text-sm text-gray-700">Email: info@phanboichau.edu.vn</div>
          <div className="text-sm text-gray-700">Hotline: (024) 0123 4567</div>
        </div>

        <div className="flex items-start justify-center">
          <div className="flex flex-col items-start">
            {FOOTER_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-gray-700 hover:underline">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-sm text-gray-700 text-right">
          <div>© {new Date().getFullYear()} Trường THPT Phan Bội Châu.</div>
          <div className="mt-1">Bản quyền thuộc về nhà trường. Mọi quyền được bảo lưu.</div>
        </div>
      </div>
    </footer>
  );
}
