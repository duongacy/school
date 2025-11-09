import type { Post } from "../../data/mockNews";
import Image from "next/image";

type Props = {
  posts: Post[];
};

export default function NewsFeed({ posts }: Props) {
  const sorted = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <section>
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold mb-4">Tin tức & Sự kiện</h3>
        <div className="text-sm text-gray-600">Tổng: {posts.length} bài</div>
      </div>

      <div className="space-y-4">
        {sorted.map((p) => (
          <article key={p.id} className="p-4 border rounded-md bg-white">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-semibold">{p.title}</h4>
                  <div className="flex gap-2">
                    {p.tags?.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">{t}</span>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-1">{p.excerpt}</p>
                <div className="text-xs text-gray-500 mt-2">
                  {p.author} • {new Date(p.date).toLocaleDateString("vi-VN")}
                </div>
              </div>

              {p.image ? (
                <div className="relative w-28 h-20">
                  <Image src={p.image} alt={p.title} className="rounded object-cover" fill unoptimized />
                </div>
              ) : (
                <div className="relative w-28 h-20">
                  <Image src="/images/placeholder.svg" alt="placeholder" fill className="rounded object-cover" />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 text-center">
        <button className="px-4 py-2 bg-gray-100 border rounded-md">Xem thêm</button>
      </div>
    </section>
  );
}
