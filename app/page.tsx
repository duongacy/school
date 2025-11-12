"use client";
import { useAllEvents } from "@/api/event/hooks";
import { Button } from "@/components/ui/button";
import announcements from "@/data/announcements.json";
import documents from "@/data/documents.json";
import students from "@/data/students.json";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const normalizeImageUrl = (url: string) => {
  return `http://127.0.0.1:1337${url}`;
};

export default function HomePage() {
  const allEventsQuery = useAllEvents();
  return (
    <div className="">
      <section className="bg-gray-100 border p-4">
        <div className="container mx-auto">
          <div className="h-80 relative">
            <Image
              src="/home/h1.png"
              alt="Description"
              fill
              style={{ objectFit: "cover" }}
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
              {allEventsQuery.data?.data.map((event) => {
                return (
                  <NewsItem
                    key={event.documentId}
                    date={event.ngay}
                    title={event.tieu_de}
                    description={event.mo_ta}
                    imageSrc={normalizeImageUrl(event.hinh_anh?.url ?? "")}
                  />
                );
              })}
            </div>
          </HomeBlock>

          {/* Featured / Highlights */}
          <HomeBlock title="Học sinh nổi bật">
            <div className="grid grid-cols-2 gap-3">
              {students.map((student) => (
                <StudentCard
                  key={student.id}
                  name={student.name}
                  school={student.school}
                  grade={student.grade}
                  achievement={student.achievement}
                  avatarSrc={normalizeImageUrl(student.image ?? "")}
                />
              ))}
            </div>
          </HomeBlock>
        </div>

        <aside className="space-y-3">
          <HomeBlock title="Thông báo nhanh">
            <ul className="space-y-3">
              {announcements.map(
                (announcement: { id: string; text: string; date?: string }) => (
                  <li key={announcement.id} className="p-2 bg-gray-50">
                    {announcement.text}
                  </li>
                )
              )}
            </ul>
          </HomeBlock>

          <HomeBlock title="Văn bản mới">
            <ul className="space-y-3">
              {documents.map(
                (doc: { id: string; title: string; date?: string }) => (
                  <li key={doc.id} className="p-2 bg-gray-50">
                    {doc.title}
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

const NewsItem = ({
  className,
  date,
  description,
  title,
  imageSrc,
}: {
  className?: string;
  date: string;
  title: string;
  description: string;
  imageSrc: string;
}) => {
  return (
    <article className={cn("p-3 border bg-gray-50", className)}>
      <div className="bg-gray-200 aspect-2/1 relative">
        <Image
          src={imageSrc}
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="text-sm text-slate-500 mt-3">{date}</div>
      <div className="mt-1 font-medium">{title}</div>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </article>
  );
};

const StudentCard = ({
  className,
  name,
  grade,
  achievement,
  school,
  avatarSrc,
}: {
  className?: string;
  name: string;
  grade: string;
  achievement: string;
  school: string;
  avatarSrc: string;
}) => {
  return (
    <div className={cn("p-3 border bg-gray-50", className)}>
      <div className=" grid grid-cols-[auto_1fr] gap-3">
        <div className="mb-2 rounded-full w-16 h-16 bg-gray-200 overflow-hidden relative">
          <Image
            src={avatarSrc}
            alt={name}
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
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
