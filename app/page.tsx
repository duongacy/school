"use client";
import { EventDto } from "@/api/event/fetch";
import { useAllEvents, useEventByDocumentId } from "@/api/event/hooks";
import { StudentDto } from "@/api/hoc-sinh-noi-bat/fetch";
import {
  useAllStudents,
  useStudentByDocumentId,
} from "@/api/hoc-sinh-noi-bat/hooks";
import { useAllNotices, useNoticeByDocumentId } from "@/api/thong-bao/hooks";
import { useAllVanBans, useVanBanByDocumentId } from "@/api/van-ban/hooks";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/cn";
import { normalizeImageUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";

export default function HomePage() {
  const [eventsPageSize, setEventsPageSize] = useState(2);
  const eventsQuery = useAllEvents({
    "pagination[page]": 1,
    "pagination[pageSize]": eventsPageSize,
  });

  const [studentsPageSize, setStudentsPageSize] = useState(2);
  const studentsQuery = useAllStudents({
    "pagination[page]": 1,
    "pagination[pageSize]": studentsPageSize,
  });

  const [noticesPageSize, setNoticesPageSize] = useState(2);
  const noticesQuery = useAllNotices({
    "pagination[page]": 1,
    "pagination[pageSize]": noticesPageSize,
  });

  const [vanBansPageSize, setVanBansPageSize] = useState(2);
  const vanBansQuery = useAllVanBans({
    "pagination[page]": 1,
    "pagination[pageSize]": vanBansPageSize,
  });

  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(
    undefined
  );
  const [selectedNoticeId, setSelectedNoticeId] = useState<string | undefined>(
    undefined
  );
  const [selectedVanBanId, setSelectedVanBanId] = useState<string | undefined>(
    undefined
  );
  const [selectedStudentId, setSelectedStudentId] = useState<
    string | undefined
  >(undefined);

  return (
    <div className="">
      <EventDialog
        documentId={selectedEventId}
        onCancel={() => setSelectedEventId(undefined)}
      />
      <NoticeDialog
        documentId={selectedNoticeId}
        onCancel={() => setSelectedNoticeId(undefined)}
      />
      <VanBanDialog
        documentId={selectedVanBanId}
        onCancel={() => setSelectedVanBanId(undefined)}
      />
      <StudentDialog
        documentId={selectedStudentId}
        onCancel={() => setSelectedStudentId(undefined)}
      />

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
              {eventsQuery.data?.data.map((event: EventDto) => {
                return (
                  <EventItem
                    key={event.documentId}
                    event={event}
                    onSelect={() => setSelectedEventId(event.documentId)}
                  />
                );
              })}
            </div>
            {eventsPageSize <
              (eventsQuery.data?.meta.pagination.total || 0) && (
              <Button
                className="mt-4 block w-fit mx-auto"
                variant="outline"
                onClick={() => setEventsPageSize((prev) => prev + 1)}
              >
                Xem thêm
              </Button>
            )}
          </HomeBlock>

          {/* Featured / Highlights */}
          <HomeBlock title="Học sinh nổi bật">
            <div className="grid grid-cols-2 gap-3">
              {studentsQuery.data?.data.map((student: any) => (
                <StudentCard
                  key={student.documentId}
                  student={student}
                  onSelect={() => setSelectedStudentId(student.documentId)}
                />
              ))}
            </div>
            {studentsPageSize <
              (studentsQuery.data?.meta.pagination.total || 0) && (
              <Button
                className="mt-4 block w-fit mx-auto"
                variant="outline"
                onClick={() => setStudentsPageSize((prev) => prev + 1)}
              >
                Xem thêm
              </Button>
            )}
          </HomeBlock>
        </div>

        <aside className="space-y-3">
          <HomeBlock title="Thông báo nhanh">
            <ul className="space-y-3">
              {noticesQuery.data?.data.map((announcement: any) => (
                <li
                  key={announcement.id}
                  className="p-2 bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedNoticeId(announcement.documentId)}
                >
                  {announcement.tieu_de}
                </li>
              ))}
            </ul>
            {noticesPageSize <
              (noticesQuery.data?.meta.pagination.total || 0) && (
              <Button
                className="mt-4 block w-fit mx-auto"
                variant="outline"
                onClick={() => setNoticesPageSize((prev) => prev + 1)}
              >
                Xem thêm
              </Button>
            )}
          </HomeBlock>

          <HomeBlock title="Văn bản mới">
            <ul className="space-y-3">
              {vanBansQuery.data?.data.map((doc: any) => (
                <li
                  key={doc.documentId}
                  className="p-2 bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedVanBanId(doc.documentId)}
                >
                  {doc.tieu_de}
                </li>
              ))}
            </ul>
            {vanBansPageSize <
              (vanBansQuery.data?.meta.pagination.total || 0) && (
              <Button
                className="mt-4 block w-fit mx-auto"
                variant="outline"
                onClick={() => setVanBansPageSize((prev) => prev + 1)}
              >
                Xem thêm
              </Button>
            )}
          </HomeBlock>
        </aside>
      </div>
    </div>
  );
}

const EventItem = ({
  className,
  event,
  onSelect,
}: {
  className?: string;
  event?: EventDto;
  onSelect?: () => void;
}) => {
  return (
    <article
      className={cn("p-3 border bg-gray-50 cursor-pointer", className)}
      onClick={onSelect}
    >
      <div className="bg-gray-200 aspect-2/1 relative">
        <Image
          src={normalizeImageUrl(event?.hinh_anh?.url ?? "")}
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="text-sm text-slate-500 mt-3">{event?.ngay}</div>
      <div className="mt-1 font-medium">{event?.tieu_de}</div>
      <p className="text-sm text-muted-foreground mt-1">{event?.mo_ta}</p>
    </article>
  );
};

const StudentCard = ({
  className,
  student,
  onSelect,
}: {
  className?: string;
  student: StudentDto;
  onSelect?: () => void;
}) => {
  return (
    <div className={cn("p-3 border bg-gray-50", className)} onClick={onSelect}>
      <div className=" grid grid-cols-[auto_1fr] gap-3">
        <div className="mb-2 rounded-full w-16 h-16 bg-gray-200 overflow-hidden relative">
          <Image
            src={
              student.hinh_anh
                ? normalizeImageUrl(student.hinh_anh.url)
                : "/default-avatar.png"
            }
            alt={student.ten}
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>
        <div>
          <div className="font-medium">{student.ten}</div>
          <div className="text-sm text-slate-500 col-span-2">
            Lớp: {student.lop}
          </div>
          <div className="text-sm text-slate-500 col-span-2">
            Trường: {student.truong}
          </div>
        </div>
      </div>

      <div className="text-sm text-center mt-1 font-bold col-span-2">
        {student.thanh_tich}
      </div>
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

const EventDialog = ({
  documentId,
  onCancel,
}: {
  documentId?: string;
  onCancel?: () => void;
}) => {
  const eventQuery = useEventByDocumentId(documentId);
  return (
    <Dialog open={!!documentId} onOpenChange={onCancel}>
      <DialogContent className="w-[96%] h-[96%] sm:max-w-[90%] sm:h-[90%] flex flex-col">
        <DialogTitle className="hidden">
          {eventQuery.data?.data.tieu_de}
        </DialogTitle>
        <div className="text-3xl font-semibold">
          {eventQuery.data?.data.tieu_de}
        </div>
        <div className="basis-0 grow overflow-auto">
          {eventQuery.data?.data.hinh_anh && (
            <div className=" h-[450px] relative mb-4 bg-gray-400">
              <Image
                src={normalizeImageUrl(
                  eventQuery.data?.data.hinh_anh.url ?? ""
                )}
                alt={eventQuery.data?.data.tieu_de || ""}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          )}

          {eventQuery.data?.data.noi_dung}
        </div>
        <DialogFooter>
          <Button type="button" onClick={onCancel}>
            Đóng
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const NoticeDialog = ({
  documentId,
  onCancel,
}: {
  documentId?: string;
  onCancel?: () => void;
}) => {
  const noticeQuery = useNoticeByDocumentId(documentId);
  return (
    <Dialog open={!!documentId} onOpenChange={onCancel}>
      <DialogContent className="w-[96%] h-[96%] sm:max-w-[90%] sm:h-[90%] flex flex-col">
        <DialogTitle className="hidden">
          {noticeQuery.data?.data.tieu_de}
        </DialogTitle>
        <div className="text-3xl font-semibold">
          {noticeQuery.data?.data.tieu_de}
        </div>
        <div className="basis-0 grow overflow-auto">
          {noticeQuery.data?.data.noi_dung}
        </div>
        <DialogFooter>
          <Button type="button" onClick={onCancel}>
            Đóng
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const VanBanDialog = ({
  documentId,
  onCancel,
}: {
  documentId?: string;
  onCancel?: () => void;
}) => {
  const vanBanQuery = useVanBanByDocumentId(documentId);

  return (
    <Dialog open={!!documentId} onOpenChange={onCancel}>
      <DialogContent className="w-[96%] h-[96%] sm:max-w-[90%] sm:h-[90%] flex flex-col">
        <DialogTitle className="hidden">
          {vanBanQuery.data?.data.tieu_de}
        </DialogTitle>
        <div className="text-3xl font-semibold">
          {vanBanQuery.data?.data.tieu_de}
        </div>
        <div className="basis-0 grow overflow-auto">
          {vanBanQuery.data?.data.noi_dung}
        </div>
        <DialogFooter>
          <Button type="button" onClick={onCancel}>
            Đóng
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const StudentDialog = ({
  documentId,
  onCancel,
}: {
  documentId?: string;
  onCancel?: () => void;
}) => {
  const studentQuery = useStudentByDocumentId(documentId);

  return (
    <Dialog open={!!documentId} onOpenChange={onCancel}>
      <DialogContent className="w-[96%] h-[96%] sm:max-w-[90%] sm:h-[90%] flex flex-col">
        <DialogTitle className="hidden">
          {studentQuery.data?.data.ten}
        </DialogTitle>
        <div className="text-3xl font-semibold">
          {studentQuery.data?.data.ten}
        </div>
        <div className="basis-0 grow overflow-auto">
          {studentQuery.data?.data.hinh_anh && (
            <div className=" h-[450px] relative mb-4 bg-gray-400">
              <Image
                src={normalizeImageUrl(
                  studentQuery.data?.data.hinh_anh.url ?? ""
                )}
                alt={studentQuery.data?.data.ten || ""}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          )}
          {studentQuery.data?.data.thanh_tich}
        </div>
        <DialogFooter>
          <Button type="button" onClick={onCancel}>
            Đóng
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
