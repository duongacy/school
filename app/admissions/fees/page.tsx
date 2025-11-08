export default function FeesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-3">Học phí & Phí</h1>
      <p className="text-gray-700 mb-4">Bảng tham khảo học phí (mỗi kỳ):</p>
      <ul className="list-disc ml-6 space-y-2 text-gray-700">
        <li>Chương trình cử nhân: 20,000,000 VND / kỳ</li>
        <li>Chương trình thạc sĩ: 30,000,000 VND / kỳ</li>
        <li>Phí ghi danh: 500,000 VND (một lần)</li>
      </ul>
    </div>
  );
}
