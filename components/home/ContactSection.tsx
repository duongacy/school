export default function ContactSection() {
  return (
    <section className="bg-white rounded-md p-6 shadow-sm">
      <h3 className="text-2xl font-semibold mb-3">Liên hệ</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-700">Địa chỉ: 123 Đường Giáo Dục, Quận Học Tập, Thành phố</p>
          <p className="text-sm text-gray-700">Điện thoại: (0123) 456-789</p>
          <p className="text-sm text-gray-700">Email: lienhe@truong.edu.vn</p>
        </div>

        <div>
          <p className="text-sm text-gray-700 mb-2">Bản đồ:</p>
          <div className="w-full h-40 bg-gray-100 rounded flex items-center justify-center text-sm text-gray-500">
            Bản đồ sẽ hiển thị ở đây (Google Maps iframe hoặc đường dẫn)
          </div>
        </div>
      </div>
    </section>
  );
}
