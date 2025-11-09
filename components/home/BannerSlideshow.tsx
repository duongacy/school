"use client";
import { useEffect, useState } from "react";
import type { Slide } from "../../data/mockHome";
import { cn } from "@/lib/cn";
import Image from "next/image";

type Props = {
  slides: Slide[];
  intervalMs?: number;
};

export default function BannerSlideshow({ slides, intervalMs = 5000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), intervalMs);
    return () => clearInterval(t);
  }, [slides, intervalMs]);

  if (!slides || slides.length === 0) return null;

  const current = slides[index];

  return (
    <div className="relative w-full rounded-md overflow-hidden shadow-md">
      <div className="w-full h-72 md:h-96 relative">
  {/* eslint-disable-next-line @next/next/no-img-element */}
  <Image src={current.image} alt={current.title} fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute left-6 bottom-6 text-white max-w-xl">
          <h2 className="text-2xl md:text-3xl font-bold">{current.title}</h2>
          {current.caption ? <p className="mt-2 text-sm">{current.caption}</p> : null}
        </div>
      </div>

      <div className="absolute left-4 top-4">
        <div className="inline-flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Chuyển đến slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn("w-3 h-3 rounded-full", i === index ? "bg-white" : "bg-white/40")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
