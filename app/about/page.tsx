export default function AboutPage() {
  return (
    <main id="content" className="container mx-auto p-6 space-y-8">
      <section className="border rounded-lg p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold">Giới thiệu</h1>
        <p className="text-sm text-muted-foreground mt-2">
          Trường THPT Phan Bội Châu — lịch sử, sứ mệnh và tầm nhìn. Trang này là bản tóm tắt
          để phụ huynh, học sinh và cộng đồng hiểu rõ hơn về nhà trường.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <section className="border rounded-lg p-4 bg-white">
            <h2 className="text-lg font-medium">Tổng quan & Lịch sử</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              (Tóm tắt lịch sử trường, năm thành lập, các mốc quan trọng, và sứ mệnh giáo dục.)
            </p>
          </section>

          <section className="border rounded-lg p-4 bg-white">
            <h2 className="text-lg font-medium">Cơ cấu tổ chức</h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="p-3 border rounded">Ban giám hiệu</div>
              <div className="p-3 border rounded">Các tổ bộ môn</div>
              <div className="p-3 border rounded">Danh sách giáo viên chủ nhiệm</div>
              <div className="p-3 border rounded">Bộ phận hành chính</div>
            </div>
          </section>

          <section className="border rounded-lg p-4 bg-white">
            <h2 className="text-lg font-medium">Chương trình đào tạo</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              (Mô tả các khối lớp, chuyên ban, hoạt động ngoại khoá, và các chương trình đặc biệt.)
            </p>
          </section>

          <section className="border rounded-lg p-4 bg-white">
            <h2 className="text-lg font-medium">Thành tích & Giải thưởng</h2>
            <ul className="mt-3 list-disc pl-5 text-sm">
              <li>Học sinh đạt giải quốc gia/địa phương</li>
              <li>Thành tích thi học sinh giỏi</li>
              <li>Giải thưởng công nhận chất lượng giáo dục</li>
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <div className="border rounded-lg p-4 bg-white">
            <h4 className="font-medium">Cơ sở vật chất</h4>
            <p className="text-sm mt-2">Phòng học, thư viện, phòng thí nghiệm, sân thể thao — hình ảnh minh họa.</p>
          </div>

          <div className="border rounded-lg p-4 bg-white">
            <h4 className="font-medium">Liên hệ</h4>
            <p className="text-sm mt-2">Địa chỉ, email, hotline liên hệ phòng tuyển sinh và hành chính.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
