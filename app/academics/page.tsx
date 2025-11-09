import academics from "../../data/academics";

export default function AcademicsPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">Đào tạo & Chương trình học</h1>

      <p className="text-sm text-gray-700 mb-4">{academics.summary}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Các khoa / bộ môn</h2>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          {academics.departments.map((d) => (
            <li key={d.id}>{d.name}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Chương trình</h2>
        <div className="mt-4 space-y-4">
          {academics.programs.map((p: any) => (
            <div key={p.id} className="p-4 border rounded-md bg-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-gray-600">{p.level} • {p.duration}</div>
                </div>
                <div className="text-sm text-gray-700">{p.description}</div>
              </div>

              <div className="mt-3">
                <strong className="text-sm">Môn học chính:</strong>
                <ul className="list-disc pl-5 text-sm text-gray-700 mt-2">
                  {p.curriculum.map((c: string, i: number) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Đội ngũ giáo viên</h2>
        <p className="text-sm text-gray-700 mt-2">{academics.teachersIntro}</p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {academics.teachers.map((t: any) => (
            <article key={t.id} className="p-4 border rounded-md bg-white">
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-gray-600">{t.role}</div>
              <p className="text-sm text-gray-700 mt-2">{t.bio}</p>
              <div className="text-sm text-blue-600 mt-2">Email: <a href={`mailto:${t.email}`}>{t.email}</a></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Nghiên cứu & Dự án</h2>
        <div className="mt-3 space-y-3">
          {academics.projects.map((pr: any) => (
            <div key={pr.id} className="p-3 border rounded-md bg-white">
              <div className="font-semibold">{pr.title}</div>
              <div className="text-sm text-gray-600">{pr.summary}</div>
              <div className="text-xs text-gray-500 mt-2">Người phụ trách: {pr.leads.join(', ')}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Lịch học & Sự kiện</h2>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          {academics.calendar.map((c: any) => (
            <li key={c.id} className="mb-1">{c.date} — {c.title}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Tài nguyên & Liên kết</h2>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          {academics.resources.map((r: any) => (
            <li key={r.id}><a href={r.href} className="text-blue-600 underline">{r.label}</a></li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Liên hệ Phòng Đào tạo</h2>
        <div className="mt-2 text-sm text-gray-700">
          <div>{academics.contact.name}</div>
          <div>Email: <a className="text-blue-600" href={`mailto:${academics.contact.email}`}>{academics.contact.email}</a></div>
          <div>Điện thoại: {academics.contact.phone}</div>
        </div>
      </section>
    </div>
  );
}
