import homeStudentData from "../../data/studentLife";
import Link from "next/link";

export default function StudentLife() {
  const d = homeStudentData;

  return (
    <section className="bg-white rounded-md p-6 shadow-sm">
      <h3 className="text-2xl font-semibold mb-3">Học sinh & Phụ huynh</h3>

      <div className="mb-4 text-sm text-gray-700">
        <p className="mb-2">Hỗ trợ học vụ và đời sống học sinh — thông tin, dịch vụ và hoạt động dành cho học sinh và phụ huynh được cập nhật bên dưới.</p>
        <div className="grid grid-cols-1 gap-3">
          {d.announcements.slice(0, 2).map((a) => (
            <div key={a.id} className="p-3 bg-gray-50 rounded border">
              <div className="flex justify-between items-start">
                <strong className="text-sm">{a.title}</strong>
                <span className="text-xs text-gray-500">{new Date(a.date).toLocaleDateString('vi-VN')}</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">{a.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold">Sự kiện sắp tới</h4>
        <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
          {d.upcomingEvents.map((e) => (
            <li key={e.id} className="mb-2">
              <div className="flex justify-between">
                <div>
                  <strong>{e.title}</strong>
                  <div className="text-xs text-gray-500">{new Date(e.date).toLocaleDateString('vi-VN')} — {e.location}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Link href={`/events/${e.id}`} className="text-sm text-blue-600">Xem chi tiết</Link>
                  <Link href={`/events`} className="text-sm text-gray-500">Xem tất cả</Link>
                </div>
              </div>
              {e.description && <div className="text-sm text-gray-600 mt-1">{e.description}</div>}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold">Câu lạc bộ & hoạt động</h4>
        <div className="grid grid-cols-1 gap-2 mt-2">
          {d.clubs.map((c) => (
            <div key={c.id} className="p-2 border rounded bg-white">
              <div className="flex justify-between items-center">
                <div>
                  <Link href={`/clubs/${c.id}`} className="text-lg font-medium text-gray-800">{c.name}</Link>
                  <div className="text-xs text-gray-500">{c.meetingTime}</div>
                </div>
                <div className="flex items-center gap-3">
                  {c.contact?.email && <a className="text-sm text-blue-600" href={`mailto:${c.contact.email}`}>Liên hệ</a>}
                  <Link href={`/clubs/${c.id}`} className="text-sm text-gray-500">Chi tiết</Link>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{c.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold">Y tế & An toàn</h4>
        <div className="text-sm text-gray-600 mt-2">
          <div><strong>Giờ làm việc Phòng y tế:</strong> {d.healthServices.clinicHours}</div>
          <div className="mt-1"><strong>Liên hệ y tế:</strong> {d.healthServices.contact.phone} — {d.healthServices.contact.email}</div>
          <div className="mt-2 text-xs text-gray-500">Lưu ý: Nếu trường có khu nội trú, các quy định nội trú sẽ được công bố riêng.</div>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold">Tài nguyên & Biểu mẫu</h4>
        <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
          {d.resources.map((r) => (
            <li key={r.title}><Link href={r.href} className="text-blue-600">{r.title}</Link></li>
          ))}
          {d.documents.map((doc) => (
            <li key={doc.name}><a className="text-blue-600" href={doc.path}>{doc.name}</a></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold">Câu hỏi thường gặp</h4>
        <div className="mt-2 space-y-2 text-sm text-gray-600">
          {d.faqs.map((f, i) => (
            <div key={i}>
              <div className="font-medium">{f.q}</div>
              <div className="text-sm">{f.a}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 border-t pt-4 text-sm text-gray-700">
        <div className="font-semibold">Liên hệ phòng</div>
        <div>{d.contactOffice.name} — {d.contactOffice.email} — {d.contactOffice.phone}</div>
        <div className="text-xs text-gray-500 mt-1">Giờ làm việc: {d.contactOffice.officeHours}</div>
      </div>
    </section>
  );
}
