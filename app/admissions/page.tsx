import admissions from "../../data/admissions";

export default function AdmissionsPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{admissions.heading}</h1>

      <p className="text-sm text-gray-700 mb-4">{admissions.overview}</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Mốc thời hạn tuyển sinh</h2>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          {admissions.deadlines.map((d) => (
            <li key={d.id} className="mb-1">
              <strong>{d.name} ({d.date}):</strong> {d.note}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Chu kỳ tuyển sinh</h2>
        <div className="text-sm text-gray-700 mt-2">
          {admissions.intakeCycles.join(" • ")}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Chương trình</h2>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          {admissions.programs.map((p) => (
            <li key={p.id} className="mb-1">
              <strong>{p.name}:</strong> {p.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Hồ sơ cần chuẩn bị</h2>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          {admissions.requiredDocuments.map((doc, i) => (
            <li key={i}>{doc}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Học bổng</h2>
        <div className="mt-2 space-y-3 text-sm text-gray-700">
          {admissions.scholarships.map((s) => (
            <div key={s.id} className="p-3 border rounded-md bg-white">
              <div className="font-semibold">{s.name}</div>
              <div className="text-sm text-gray-600">{s.details}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Chi phí tham khảo</h2>
        <div className="mt-2 text-sm text-gray-700">
          {admissions.feeBreakdown.map((f, i) => (
            <div key={i} className="flex justify-between border-b py-2">
              <div>{f.item}</div>
              <div className="font-medium">{f.amount}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Nộp hồ sơ & Mẫu đơn</h2>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          {admissions.applicationLinks.map((a) => (
            <li key={a.id} className="mb-1">
              <a href={a.href} className="text-blue-600 underline">
                {a.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Sự kiện liên quan</h2>
        <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
          {admissions.events.map((e) => (
            <li key={e.id} className="mb-1">
              <strong>{e.title} ({e.date}):</strong> {e.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Câu hỏi thường gặp (FAQ)</h2>
        <div className="mt-2 space-y-3 text-sm text-gray-700">
          {admissions.faq.map((f, i) => (
            <div key={i}>
              <div className="font-semibold">{f.q}</div>
              <div className="text-gray-600">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold">Liên hệ tuyển sinh</h2>
        <div className="mt-2 text-sm text-gray-700">
          <div>{admissions.contactPerson.name}</div>
          <div>Điện thoại: {admissions.contactPerson.phone}</div>
          <div>Email: <a href={`mailto:${admissions.contactPerson.email}`} className="text-blue-600">{admissions.contactPerson.email}</a></div>
        </div>
      </section>
    </div>
  );
}
