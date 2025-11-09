import about from "../../data/about";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Giới thiệu</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Lịch sử</h2>
        <p className="text-sm text-gray-700 mt-2">{about.history}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Sứ mệnh</h2>
        <p className="text-sm text-gray-700 mt-2">{about.mission}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Cơ cấu tổ chức</h2>
        <p className="text-sm text-gray-700 mt-2">{about.organization}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Cơ sở vật chất</h2>
        <p className="text-sm text-gray-700 mt-2">{about.facilities}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Thành tích</h2>
        <p className="text-sm text-gray-700 mt-2">{about.achievements}</p>
      </section>

      {/* Leadership */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Lãnh đạo nhà trường</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {about.leadership.map((l: any, i: number) => (
            <div key={i} className="p-4 border rounded-md bg-white">
              <div className="font-semibold">{l.name}</div>
              <div className="text-sm text-gray-600">{l.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Staff */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Đội ngũ</h2>
        <p className="text-sm text-gray-700 mt-2">Giáo viên: {about.staff.totalTeachers} — Nhân viên hỗ trợ: {about.staff.supportStaff}</p>
        <div className="mt-3">
          <h3 className="font-semibold">Các bộ môn</h3>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            {about.staff.departments.map((d: any) => (
              <li key={d.id}>{d.name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Programs */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Chương trình đào tạo</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          {about.programsList.map((p: any) => (
            <div key={p.id} className="p-4 border rounded-md bg-white">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-600">{p.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Mốc thời gian</h2>
        <ol className="list-decimal pl-5 mt-2 text-sm text-gray-700">
          {about.timeline.map((t: any, idx: number) => (
            <li key={idx} className="mb-1">
              <strong>{t.year}:</strong> {t.event}
            </li>
          ))}
        </ol>
      </section>

      {/* Awards & Accreditations */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Giải thưởng & Chứng nhận</h2>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          {about.awards.map((a: any, i: number) => (
            <li key={i}>{a.year} — {a.title}</li>
          ))}
        </ul>
        <div className="mt-3">
          <h3 className="font-semibold">Chứng nhận</h3>
          <ul className="list-disc pl-5 text-sm text-gray-600 mt-2">
            {about.accreditations.map((c: any, i: number) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Campus images */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Cơ sở vật chất - Hình ảnh</h2>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          {about.campusImages.map((src: string, i: number) => (
            <div key={i} className="w-full h-40 relative rounded overflow-hidden">
              <Image src={src} alt={`Cơ sở ${i + 1}`} fill className="object-cover" unoptimized />
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold">Liên hệ</h2>
        <p className="text-sm text-gray-700 mt-2">Địa chỉ: {about.contact.address}</p>
        <p className="text-sm text-gray-700">Điện thoại: {about.contact.phone}</p>
        <p className="text-sm text-gray-700">Email: {about.contact.email}</p>
      </section>
    </div>
  );
}
