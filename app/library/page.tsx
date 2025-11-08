"use client";
import Link from "next/link";

type Book = {
  title: string;
  author: string;
  slug: string;
  year?: number;
};

const SAMPLE_BOOKS: Book[] = [
  { title: "Nhập môn lập trình", author: "Nguyễn Văn A", slug: "nhap-mon-lap-trinh", year: 2021 },
  { title: "Cấu trúc dữ liệu", author: "Trần Thị B", slug: "cau-truc-du-lieu", year: 2020 },
  { title: "Cơ sở dữ liệu", author: "Lê Văn C", slug: "co-so-du-lieu", year: 2019 },
  { title: "Mạng máy tính", author: "Phạm D", slug: "mang-may-tinh", year: 2022 },
];

export default function LibraryPage() {
  return (
    <main className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Thư viện</h1>
          <p className="text-gray-600 dark:text-gray-400">Bộ sưu tập tài liệu và sách tham khảo cho sinh viên. Dưới đây là một số đầu sách tiêu biểu. Nhấn vào mỗi mục để xem chi tiết (nếu có).</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {SAMPLE_BOOKS.map((b) => (
              <Link key={b.slug} href={`/library/${b.slug}`} className="block rounded-md p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:-translate-y-1 transition-transform">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">B</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">{b.title}</div>
                      <div className="ml-auto text-sm text-gray-500 dark:text-gray-300">{b.year}</div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{b.author}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">Muốn thêm sách? Gửi đề xuất tới thư viện hoặc quản trị viên hệ thống.</p>
            <Link href="/admissions" className="inline-block mt-3 px-3 py-1.5 border border-blue-600 text-blue-600 rounded hover:bg-blue-50">Xem Tin tuyển sinh</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
