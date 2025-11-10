export default function LibraryPage() {
  return (
    <main id="content" className="container mx-auto p-6 space-y-8">
      <section className="border rounded-lg p-6 bg-gray-100">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h1 className="text-2xl font-semibold">Thư viện điện tử</h1>
            <p className="text-sm text-muted-foreground mt-1">Kho tài nguyên: sách, bài giảng, đề thi và tài liệu tham khảo cho học sinh và giáo viên.</p>
          </div>
          <div className="w-full md:w-1/3">
            <label htmlFor="lib-search" className="sr-only">Tìm kiếm tài liệu</label>
            <div className="flex gap-2">
              <input id="lib-search" className="flex-1 border rounded px-3 py-2" placeholder="Tìm theo từ khóa, môn học, tác giả..." />
              <button className="px-4 py-2 bg-blue-600 text-white rounded">Tìm</button>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <aside className="space-y-4">
          <div className="border rounded-lg p-4 bg-white">
            <h4 className="font-medium">Danh mục</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="p-2 border rounded">Toán</li>
              <li className="p-2 border rounded">Vật lý</li>
              <li className="p-2 border rounded">Hóa học</li>
              <li className="p-2 border rounded">Ngữ văn</li>
              <li className="p-2 border rounded">Ngoại ngữ</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4 bg-white">
            <h4 className="font-medium">Bộ lọc</h4>
            <div className="mt-2 text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" /> Miễn phí</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> Có file đính kèm</label>
              <label className="flex items-center gap-2"><input type="checkbox" /> PDF</label>
            </div>
          </div>
        </aside>

        <section className="lg:col-span-3 space-y-6">
          <div className="border rounded-lg p-4 bg-white">
            <h2 className="text-lg font-medium">Tài nguyên nổi bật</h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="p-3 border rounded">
                <div className="h-28 bg-gray-200 rounded mb-2" />
                <div className="font-medium">Bài giảng: Đại số - Lớp 10</div>
                <div className="text-sm text-muted-foreground">PDF • Giáo viên: Nguyễn Văn A</div>
              </div>
              <div className="p-3 border rounded">
                <div className="h-28 bg-gray-200 rounded mb-2" />
                <div className="font-medium">Ngữ văn: Tổng hợp tác phẩm</div>
                <div className="text-sm text-muted-foreground">PDF • Nhiều tài liệu</div>
              </div>
              <div className="p-3 border rounded">
                <div className="h-28 bg-gray-200 rounded mb-2" />
                <div className="font-medium">Đề thi giữa kỳ 2025</div>
                <div className="text-sm text-muted-foreground">PDF • Có đáp án</div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-white">
            <h3 className="text-lg font-medium">Tải lên / Đề xuất tài liệu</h3>
            <p className="text-sm text-muted-foreground mt-2">Giáo viên có thể gửi tài liệu cho thư viện để xét duyệt và xuất bản.</p>
            <div className="mt-3 flex gap-2">
              <button className="px-4 py-2 bg-green-600 text-white rounded">Tải lên tài liệu</button>
              <button className="px-4 py-2 border rounded">Gửi đề xuất</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
