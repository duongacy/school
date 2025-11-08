export default function ProfileSettingsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-3">Cài đặt tài khoản</h1>
      <p className="text-gray-700 mb-4">Tùy chọn bảo mật, đổi mật khẩu, và thông tin liên hệ.</p>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>Đổi mật khẩu</li>
        <li>Quản lý email</li>
        <li>Thiết lập xác thực 2 yếu tố (TBD)</li>
      </ul>
    </div>
  );
}
