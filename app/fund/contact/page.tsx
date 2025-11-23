export default function ContactPage() {
  return (
    <main className="container mx-auto my-8 px-4">
      <section className="border p-6 bg-white rounded">
        <h1 className="text-3xl font-bold">Liên hệ Quỹ</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Nếu bạn có câu hỏi hoặc muốn quyên góp, vui lòng liên hệ với chúng
          tôi.
        </p>

        <div className="mt-4 grid gap-4 max-w-xl">
          <div>
            <strong>Địa chỉ:</strong>
            <div>123 Đường Giáo Dục, Quận Học Tốt, TP. Học</div>
          </div>
          <div>
            <strong>Hotline:</strong>
            <div>0123 456 789</div>
          </div>
          <div>
            <strong>Email:</strong>
            <div>contact@quy.edu.vn</div>
          </div>
        </div>
      </section>
    </main>
  );
}
