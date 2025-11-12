import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import events from "@/data/events";
import students from "@/data/students.json";
import documents from "@/data/documents.json";
import announcements from "@/data/announcements.json";
import React from "react";

export const metadata = { title: "Trang chủ" };

export default function HomePage() {
  return (
    <div className="">
      <section className="bg-gray-100 border p-4">
        <div className="container mx-auto">
          <div className="h-80 relative">
            <Image
              src="/home/h1.png"
              objectFit="cover"
              alt="Description"
              fill
            />
          </div>
          <div className="flex gap-3 justify-center mt-4">
            <Button className="rounded-none">Thông báo</Button>
            <Button variant="outline" className="rounded-none">
              Liên hệ
            </Button>
          </div>
        </div>
      </section>
      <div className="grid grid-cols-[2fr_1fr] gap-6 container mx-auto my-8">
        <div className="space-y-6">
          <HomeBlock title="Tin tức & Sự kiện">
            <div className="space-y-3">
              {events.map((ev) => (
                <EventItem
                  key={ev.id}
                  date={ev.date}
                  title={ev.title}
                  description={ev.description}
                  image={ev.image ?? ""}
                />
              ))}
            </div>
          </HomeBlock>

          {/* Featured / Highlights */}
          <HomeBlock title="Học sinh nổi bật">
            <div className="grid grid-cols-2 gap-3">
              {students.map((s) => (
                <StudentItem
                  key={s.id}
                  name={s.name}
                  school={s.school}
                  grade={s.grade}
                  achievement={s.achievement}
                  image={s.image}
                />
              ))}
            </div>
          </HomeBlock>
        </div>

        <aside className="space-y-3">
          <HomeBlock title="Thông báo nhanh">
            <ul className="space-y-3">
              {announcements.map(
                (a: { id: string; text: string; date?: string }) => (
                  <li key={a.id} className="p-2 bg-gray-50">
                    {a.text}
                  </li>
                )
              )}
            </ul>
          </HomeBlock>

          <HomeBlock title="Văn bản mới">
            <ul className="space-y-3">
              {documents.map(
                (d: { id: string; title: string; date?: string }) => (
                  <li key={d.id} className="p-2 bg-gray-50">
                    {d.title}
                  </li>
                )
              )}
            </ul>
          </HomeBlock>
        </aside>
      </div>
    </div>
  );
}

const EventItem = ({
  className,
  date,
  description,
  title,
  image,
}: {
  className?: string;
  date: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <article className={cn("p-3 border bg-gray-50", className)}>
      <div className="bg-gray-200 aspect-2/1 relative">
        <Image src={image} alt="" objectFit="cover" fill />
      </div>
      <div className="text-sm text-slate-500 mt-3">{date}</div>
      <div className="mt-1 font-medium">{title}</div>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </article>
  );
};

const StudentItem = ({
  className,
  name,
  grade,
  achievement,
  school,
  image,
}: {
  className?: string;
  name: string;
  grade: string;
  achievement: string;
  school: string;
  image: string;
}) => {
  return (
    <div className={cn("p-3 border bg-gray-50", className)}>
      <div className=" grid grid-cols-[auto_1fr] gap-3">
        <div className="mb-2 rounded-full w-16 h-16 bg-gray-200 overflow-hidden relative">
          <Image src={image} alt={name} objectFit="cover" fill />
        </div>
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-slate-500 col-span-2">Lớp: {grade}</div>
          <div className="text-sm text-slate-500 col-span-2">
            Trường: {school}
          </div>
        </div>
      </div>

      <p className="text-sm text-center mt-1 font-bold col-span-2">
        {achievement}
      </p>
    </div>
  );
};

const HomeBlock = ({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("border p-4", className)}>
      <h2 className="text-3xl font-semibold">{title}</h2>
      <div className="text-sm mt-2">{children}</div>
    </div>
  );
};
