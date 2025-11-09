import posts from "../../data/mockNews";

export default function EventsPage() {
  const events = posts.filter((p) => (p.tags || []).includes("sự-kiện") || (p.tags || []).includes("su-kien") || (p.tags || []).includes("sự-kiện"));

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Sự kiện</h1>

      {events.length === 0 ? (
        <p className="text-sm text-gray-600">Chưa có sự kiện sắp tới.</p>
      ) : (
        <div className="space-y-4">
          {events
            .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            .map((e) => (
              <article key={e.id} className="p-4 border rounded-md bg-white">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{e.title}</h3>
                    <div className="text-sm text-gray-600">{new Date(e.date).toLocaleDateString("vi-VN")}</div>
                    <p className="text-sm text-gray-700 mt-2">{e.excerpt}</p>
                  </div>

                  {e.image ? (
                    <div className="w-32 h-20 relative">
                      {/* use next/image in component-level conversion - simple img as fallback */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={e.image} alt={e.title} className="w-full h-full object-cover rounded" />
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
        </div>
      )}
    </div>
  );
}
