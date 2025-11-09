import type { Post } from "../../data/mockNews";
import Image from "next/image";

type Props = {
  post: Post;
};

export default function BlogHero({ post }: Props) {
  return (
    <section className="w-full bg-white rounded-md shadow-sm overflow-hidden">
      <div className="relative">
        {post.image ? (
          <div className="w-full h-64 relative">
            <Image src={post.image} alt={post.title} fill className="object-cover" unoptimized />
          </div>
        ) : (
          <div className="w-full h-64 bg-gray-100" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute left-4 bottom-4 right-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{post.title}</h2>
          <p className="text-sm text-white/90 mt-2 max-w-2xl">{post.excerpt}</p>
          <div className="mt-3">
            <span className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded-md">
              Xem chi tiết
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
