"use client";
import NewsFeed from "../../components/blog/NewsFeed";
import posts from "../../data/mockNews";
import { useState } from "react";
import { cn } from "@/lib/cn";

export default function NewsPage() {
  const [tag, setTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(posts.flatMap((p) => p.tags || [])));
  const filtered = tag
    ? posts.filter((p) => (p.tags || []).includes(tag))
    : posts;

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Tin tức & Sự kiện</h1>

      <div className="mb-4 flex gap-2 flex-wrap">
        <button onClick={() => setTag(null)} className={cn("px-3 py-1 rounded", tag === null ? "bg-blue-600 text-white" : "bg-gray-100") }>
          Tất cả
        </button>
        {allTags.map((t) => (
          <button key={t} onClick={() => setTag(t)} className={cn("px-3 py-1 rounded", tag === t ? "bg-blue-600 text-white" : "bg-gray-100") }>
            {t}
          </button>
        ))}
      </div>

      <NewsFeed posts={filtered} />
    </div>
  );
}
