export default function ContactPage() {
  const contact = {
    address: "123 Đường Giáo Dục, Quận Học Tập, Thành phố",
    phone: "(0123) 456-789",
    email: "lienhe@truong.edu.vn",
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Liên hệ</h1>

      <section className="mb-6">
        <p className="text-sm text-gray-700">Địa chỉ: {contact.address}</p>
        <p className="text-sm text-gray-700">Điện thoại: {contact.phone}</p>
        <p className="text-sm text-gray-700">Email: {contact.email}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Thông báo & Liên hệ nhanh</h2>
        <p className="text-sm text-gray-700">Vui lòng sử dụng biểu mẫu liên hệ trên cổng thông tin để gửi yêu cầu.</p>
      </section>
    </div>
  );
}
