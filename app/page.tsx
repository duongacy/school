"use client";
import NextLink from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-6xl grow mx-auto py-12 px-4">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Trang Chủ — Trường học
        </h1>

        <p className="text-lg text-gray-600">
          Đây là trang chủ mẫu. Thay nội dung bằng component thực tế (Hero,
          Highlights, NewsFeed).
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <NextLink href="/admissions" className="inline-block">
            <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Tuyển sinh
            </span>
          </NextLink>

          <NextLink href="/library" className="inline-block">
            <span className="inline-flex items-center px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
              Thư viện
            </span>
          </NextLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="border rounded-md p-6 text-left">
            <h3 className="text-lg font-semibold mb-2">Hero</h3>
            <p className="text-sm text-gray-600">
              Khu vực giới thiệu chính của trang chủ.
            </p>
          </div>

          <div className="border rounded-md p-6 text-left">
            <h3 className="text-lg font-semibold mb-2">Highlights</h3>
            <p className="text-sm text-gray-600">
              Các điểm nổi bật, thành tích và thông báo.
            </p>
          </div>

          <div className="border rounded-md p-6 text-left">
            <h3 className="text-lg font-semibold mb-2">NewsFeed</h3>
            <p className="text-sm text-gray-600">
              Danh sách tin tức, sự kiện và bài viết gần đây.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
