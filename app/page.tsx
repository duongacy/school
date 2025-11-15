"use client";
import { EventDto } from "@/api/event/fetch";
import { useAllEvents, useEventByDocumentId } from "@/api/event/hooks";
import { OutstandingStudentDto } from "@/api/outstanding-student/fetch";
import {
  useAllStudents,
  useStudentByDocumentId,
} from "@/api/outstanding-student/hooks";
import { useAllAnnouncements, useAnnouncementByDocumentId } from "@/api/announcement/hooks";
import {
  useAllLegalDocuments,
  useLegalDocumentByDocumentId,
} from "@/api/legal-document/hooks";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import HTMLParser from "@/components/ui/html-parser";
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

  const [announcementsPageSize, setAnnouncementsPageSize] = useState(2);
  const announcementsQuery = useAllAnnouncements({
    "pagination[page]": 1,
    "pagination[pageSize]": announcementsPageSize,
  });

  const [legalDocumentsPageSize, setLegalDocumentsPageSize] = useState(2);
  const legalDocumentsQuery = useAllLegalDocuments({
    "pagination[page]": 1,
    "pagination[pageSize]": legalDocumentsPageSize,
  });

  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(
    undefined
  );
  const [selectedAnnouncementId, setSelectedAnnouncementId] = useState<string | undefined>(
    undefined
  );
  const [selectedLegalDocumentId, setSelectedLegalDocumentId] = useState<string | undefined>(
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
      <AnnouncementDialog
        documentId={selectedAnnouncementId}
        onCancel={() => setSelectedAnnouncementId(undefined)}
      />
      <LegalDocumentDialog
        documentId={selectedLegalDocumentId}
        onCancel={() => setSelectedLegalDocumentId(undefined)}
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
                <OutstandingStudentCard
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
              {announcementsQuery.data?.data.map((announcement) => (
                <li
                  key={announcement.documentId}
                  className="p-2 bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedAnnouncementId(announcement.documentId)}
                >
                  {announcement.title}
                </li>
              ))}
            </ul>
            {announcementsPageSize <
              (announcementsQuery.data?.meta.pagination.total || 0) && (
              <Button
                className="mt-4 block w-fit mx-auto"
                variant="outline"
                onClick={() => setAnnouncementsPageSize((prev) => prev + 1)}
              >
                Xem thêm
              </Button>
            )}
          </HomeBlock>

          <HomeBlock title="Văn bản mới">
            <ul className="space-y-3">
              {legalDocumentsQuery.data?.data.map((doc) => (
                <li
                  key={doc.documentId}
                  className="p-2 bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedLegalDocumentId(doc.documentId)}
                >
                  {doc.title}
                </li>
              ))}
            </ul>
            {legalDocumentsPageSize <
              (legalDocumentsQuery.data?.meta.pagination.total || 0) && (
              <Button
                className="mt-4 block w-fit mx-auto"
                variant="outline"
                onClick={() => setLegalDocumentsPageSize((prev) => prev + 1)}
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
          src={normalizeImageUrl(event?.image?.url ?? "")}
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="text-sm text-slate-500 mt-3">{event?.date}</div>
      <div className="mt-1 font-medium">{event?.title}</div>
      <p className="text-sm text-muted-foreground mt-1">{event?.description}</p>
    </article>
  );
};

const OutstandingStudentCard = ({
  className,
  student,
  onSelect,
}: {
  className?: string;
  student: OutstandingStudentDto;
  onSelect?: () => void;
}) => {
  return (
    <div className={cn("p-3 border bg-gray-50", className)} onClick={onSelect}>
      <div className=" grid grid-cols-[auto_1fr] gap-3">
        <div className="mb-2 rounded-full w-16 h-16 bg-gray-200 overflow-hidden relative">
          <Image
            src={
              student.image
                ? normalizeImageUrl(student.image.url)
                : "/default-avatar.png"
            }
            alt={student.name}
            fill
            style={{ objectFit: "cover" }}
            unoptimized
          />
        </div>
        <div>
          <div className="font-medium">{student.name}</div>
          <div className="text-sm text-slate-500 col-span-2">
            Lớp: {student.class}
          </div>
          <div className="text-sm text-slate-500 col-span-2">
            Trường: {student.school}
          </div>
        </div>
      </div>

      <div className="text-sm text-center mt-1 font-bold col-span-2">
        {student.achievement}
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
          {eventQuery.data?.data.title}
        </DialogTitle>
        <div className="text-3xl font-semibold">
          {eventQuery.data?.data.title}
        </div>
        <div className="basis-0 grow overflow-auto">
          <HTMLParser content={eventQuery.data?.data.content ?? ""} />
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

const AnnouncementDialog = ({
  documentId,
  onCancel,
}: {
  documentId?: string;
  onCancel?: () => void;
}) => {
  const announcementQuery = useAnnouncementByDocumentId(documentId);
  return (
    <Dialog open={!!documentId} onOpenChange={onCancel}>
      <DialogContent className="w-[96%] h-[96%] sm:max-w-[90%] sm:h-[90%] flex flex-col">
        <DialogTitle className="hidden">
          {announcementQuery.data?.data.title}
        </DialogTitle>
        <div className="text-3xl font-semibold">
          {announcementQuery.data?.data.title}
        </div>
        <div className="basis-0 grow overflow-auto">
          <HTMLParser content={announcementQuery.data?.data.content ?? ""} />
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

const LegalDocumentDialog = ({
  documentId,
  onCancel,
}: {
  documentId?: string;
  onCancel?: () => void;
}) => {
  const legalDocumentQuery = useLegalDocumentByDocumentId(documentId);

  return (
    <Dialog open={!!documentId} onOpenChange={onCancel}>
      <DialogContent className="w-[96%] h-[96%] sm:max-w-[90%] sm:h-[90%] flex flex-col">
        <DialogTitle className="hidden">
          {legalDocumentQuery.data?.data.title}
        </DialogTitle>
        <div className="text-3xl font-semibold">
          {legalDocumentQuery.data?.data.title}
        </div>
        <div className="basis-0 grow overflow-auto">
          <HTMLParser content={legalDocumentQuery.data?.data.content ?? ""} />
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
          {studentQuery.data?.data.name}
        </DialogTitle>
        <div className="text-3xl font-semibold">
          {studentQuery.data?.data.name}
        </div>
        <div className="basis-0 grow overflow-auto">
          {studentQuery.data?.data.image && (
            <div className=" h-[450px] relative mb-4 bg-gray-400">
              <Image
                src={normalizeImageUrl(studentQuery.data?.data.image.url ?? "")}
                alt={studentQuery.data?.data.name || ""}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          )}
          {studentQuery.data?.data.achievement}
          <HTMLParser content={studentQuery.data?.data.content ?? ""} />
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
