import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LibraryPage() {
  return (
    <div className="space-y-8 container mx-auto my-8">
      <section className="border p-6 bg-gray-100">
        <h1 className="text-4xl font-bold">Thư viện</h1>
        <p className="text-base text-muted-foreground mt-2">
          Kho tài nguyên: sách, bài giảng, đề thi và tài liệu tham khảo cho học
          sinh và giáo viên.
        </p>
      </section>

      <div className="border p-4 bg-white">
        <h2 className="text-2xl font-semibold">Tài nguyên nổi bật</h2>
        <div className="mt-3 grid grid-cols-3 gap-3">
          <div className="p-3 border">
            <div className="h-28 bg-gray-200  mb-2" />
            <div className="font-medium">Bài giảng: Đại số - Lớp 10</div>
            <div className="text-sm text-muted-foreground">
              PDF • Giáo viên: Nguyễn Văn A
            </div>
          </div>
          <div className="p-3 border">
            <div className="h-28 bg-gray-200  mb-2" />
            <div className="font-medium">Ngữ văn: Tổng hợp tác phẩm</div>
            <div className="text-sm text-muted-foreground">
              PDF • Nhiều tài liệu
            </div>
          </div>
          <div className="p-3 border">
            <div className="h-28 bg-gray-200  mb-2" />
            <div className="font-medium">Đề thi giữa kỳ 2025</div>
            <div className="text-sm text-muted-foreground">PDF • Có đáp án</div>
          </div>
        </div>
        <Button variant="outline" className="ml-auto flex mt-4">
          Xem thêm
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className=" bg-gray-100/50 p-4">
          <div className="flex gap-2">
            <Input
              className="rounded-none min-w-0"
              placeholder="Tìm theo từ khóa, môn học, tác giả..."
            />
            <Button className="rounded-none">Tìm</Button>
          </div>
          <aside className="space-y-4 mt-2">
            <div className="border p-4 bg-white">
              <h4 className="font-medium">Danh mục</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="p-2 border">Toán</li>
                <li className="p-2 border">Vật lý</li>
                <li className="p-2 border">Hóa học</li>
                <li className="p-2 border">Ngữ văn</li>
                <li className="p-2 border">Ngoại ngữ</li>
              </ul>
            </div>

            <div className="border p-4 bg-white">
              <h4 className="font-medium">Bộ lọc</h4>
              <div className="mt-2 text-sm">
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Miễn phí
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> Có file đính kèm
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" /> PDF
                </label>
              </div>
            </div>
          </aside>
        </div>
        <section className="space-y-6 col-span-3 border p-4 bg-white">
          <h2 className="text-2xl font-semibold">Kết quả tìm kiếm</h2>
          <div className="mt-3 grid grid-cols-3 gap-3 items-stretch">
            <div className="p-3 border">
              <div className="h-28 bg-gray-200  mb-2" />
              <div className="font-medium">Bài giảng: Đại số - Lớp 10</div>
              <div className="text-sm text-muted-foreground">
                PDF • Giáo viên: Nguyễn Văn A
              </div>
            </div>
            <div className="p-3 border">
              <div className="h-28 bg-gray-200  mb-2" />
              <div className="font-medium">Ngữ văn: Tổng hợp tác phẩm</div>
              <div className="text-sm text-muted-foreground">
                PDF • Nhiều tài liệu
              </div>
            </div>
            <div className="p-3 border">
              <div className="h-28 bg-gray-200  mb-2" />
              <div className="font-medium">Đề thi giữa kỳ 2025</div>
              <div className="text-sm text-muted-foreground">
                PDF • Có đáp án
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="p-4 border">
        <h3 className="text-2xl font-semibold">Tải lên / Đề xuất tài liệu</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Giáo viên có thể gửi tài liệu cho thư viện để xét duyệt và xuất bản.
        </p>
        <div className="mt-3 flex gap-2">
          <button className="px-4 py-2 bg-green-600 text-white">
            Tải lên tài liệu
          </button>
          <button className="px-4 py-2 border">Gửi đề xuất</button>
        </div>
      </div>
    </div>
  );
}
