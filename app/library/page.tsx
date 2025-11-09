import Link from "next/link";
import Image from "next/image";
import docs from "../../data/library";

export default function LibraryPage() {
  return (
    <main className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Thư viện</h1>
          <p className="text-gray-600">Bộ sưu tập tài liệu và sách tham khảo cho học sinh và phụ huynh. Dưới đây là một số tài liệu tiêu biểu phù hợp cho bậc Tiểu học, THCS và THPT.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4">
            {docs.map((d) => (
              <article key={d.id} className="rounded-md p-4 bg-white border flex flex-col">
                {d.thumb ? (
                  <div className="mb-3 w-full">
                    <Image src={d.thumb} alt={d.title} width={280} height={180} className="rounded" />
                  </div>
                ) : null}

                <h3 className="font-medium"><Link href={`/library/document/${d.id}`}>{d.title}</Link></h3>
                <div className="text-sm text-gray-500">{d.author} {d.year ? `· ${d.year}` : ''}</div>
                {d.summary && <p className="text-sm text-gray-700 mt-2">{d.summary}</p>}
                {d.path && (
                  <div className="mt-2">
                    <a className="text-sm text-blue-600" href={d.path}>Tải xuống</a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
