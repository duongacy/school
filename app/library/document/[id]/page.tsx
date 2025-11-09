import docs from "../../../../data/library";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function DocumentPage({ params }: Props) {
  const doc = docs.find((d) => d.id === params.id);
  if (!doc) return notFound();

  return (
    <main className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-2">{doc.title}</h1>
        <div className="text-sm text-gray-500 mb-4">{doc.author} {doc.year ? `· ${doc.year}` : ''}</div>
        {doc.summary && <p className="text-gray-700 mb-4">{doc.summary}</p>}

        {doc.path ? (
          <div className="mt-4">
            <a className="inline-block px-4 py-2 bg-blue-600 text-white rounded" href={doc.path}>Tải xuống / Xem PDF</a>
          </div>
        ) : (
          <div className="text-sm text-gray-500">Tài liệu chưa có file đính kèm.</div>
        )}
      </div>
    </main>
  );
}
