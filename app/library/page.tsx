"use client";
import { useAllBookTypes } from "@/api/book-type/hooks";
import { useAllBooks } from "@/api/book/hooks";
import { useAllGrades } from "@/api/grade/hooks";
import { useAllSubjects } from "@/api/subject/hooks";
import { useAllWriters } from "@/api/writer/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import { debounce, normalizeImageUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useId } from "react";

export default function LibraryPage() {
  const [pageSize, setPageSize] = React.useState(1);
  const allWritersQuery = useAllWriters();
  const allSubjectsQuery = useAllSubjects();
  const allGradesQuery = useAllGrades();
  const allBookTypesQuery = useAllBookTypes();

  const [bookNameFilter, setBookNameFilter] = React.useState("");
  const [selectedSubject, setSelectedSubject] = React.useState<
    string | undefined
  >(undefined);
  const [selectedGrade, setSelectedGrade] = React.useState<string | undefined>(
    undefined
  );
  const [selectedWriters, setSelectedWriters] = React.useState<string[]>([]);
  const [selectedBookTypes, setSelectedBookTypes] = React.useState<string[]>(
    []
  );

  useEffect(() => {
    setSelectedBookTypes(
      allBookTypesQuery.data?.data.map((bt) => bt.documentId) || []
    );
  }, [allBookTypesQuery.data?.data]);

  useEffect(() => {
    setSelectedWriters(
      allWritersQuery.data?.data.map((writer) => writer.documentId) || []
    );
  }, [allWritersQuery.data?.data]);

  const allBooksQuery = useAllBooks({
    ...(!!selectedGrade
      ? { "filters[grade][documentId][$eq]": selectedGrade }
      : {}),
    ...(!!selectedSubject
      ? { "filters[subject][documentId][$eq]": selectedSubject }
      : {}),
    ...(selectedBookTypes.length > 0
      ? Object.fromEntries(
          selectedBookTypes.map((documentId, index) => [
            `filters[book_types][documentId][$in][${index}]`,
            documentId,
          ])
        )
      : { "filters[book_types][documentId][$in]": "" }),
    ...(selectedWriters.length > 0
      ? Object.fromEntries(
          selectedWriters.map((documentId, index) => [
            `filters[writers][documentId][$in][${index}]`,
            documentId,
          ])
        )
      : { "filters[writers][documentId][$in]": "" }),
    "filters[name][$contains]": bookNameFilter,
  });

  const latestBooksQuery = useAllBooks({
    sort: "createdAt:desc",
    "pagination[page]": 1,
    "pagination[pageSize]": pageSize,
  });

  const handleSearch = debounce((e) => {
    setBookNameFilter(e.target.value);
  }, 500);

  return (
    <div className="space-y-8 container mx-auto my-8">
      <section className="border p-6 bg-gray-100">
        <h1 className="text-4xl font-bold">Thư viện</h1>
        <p className="text-base text-muted-foreground mt-2">
          Kho tài nguyên: sách, bài giảng, đề thi và tài liệu tham khảo cho học
          sinh và giáo viên.
        </p>
      </section>

      <div className="grid grid-cols-4 gap-6">
        <div className=" bg-gray-100/50 p-4 flex flex-col gap-6">
          <Input
            className="rounded-none min-w-0"
            placeholder="Tìm theo tên sách"
            onChange={handleSearch}
            defaultValue={bookNameFilter}
          />
          <aside className="space-y-4">
            <div className="border p-4 bg-white">
              <RadioGroup
                listOptionsClassName="grid-cols-4 grid"
                label="Lớp"
                options={
                  allGradesQuery.data?.data?.map((grade) => ({
                    label: grade.name,
                    value: grade.documentId,
                  })) || []
                }
                value={selectedGrade}
                onChange={setSelectedGrade}
              />
            </div>
            <div className="border p-4 bg-white">
              <RadioGroup
                label="Môn học"
                options={
                  allSubjectsQuery.data?.data?.map((subject) => ({
                    label: subject.name,
                    value: subject.documentId,
                  })) || []
                }
                value={selectedSubject}
                onChange={setSelectedSubject}
              />
            </div>
            <div className="border p-4 bg-white">
              <CheckboxGroup
                label="Tác giả"
                options={
                  allWritersQuery.data?.data?.map((writer) => ({
                    label: writer.name,
                    value: writer.documentId,
                  })) || []
                }
                checked={selectedWriters}
                onChange={setSelectedWriters}
                inderterminate
              />
              {selectedWriters.length === 0 && (
                <p className="mt-2 italic text-red-500">
                  Vui lòng chọn ít nhất một tác giả để lọc
                </p>
              )}
            </div>
            <div className="border p-4 bg-white">
              <CheckboxGroup
                label="Loại sách"
                options={
                  allBookTypesQuery.data?.data?.map((bookType) => ({
                    label: bookType.name,
                    value: bookType.documentId,
                  })) || []
                }
                checked={selectedBookTypes}
                onChange={setSelectedBookTypes}
                inderterminate
              />
              {selectedBookTypes.length === 0 && (
                <p className="mt-2 italic text-red-500">
                  Vui lòng chọn ít nhất một loại sách để lọc
                </p>
              )}
            </div>
          </aside>
        </div>
        <section className="space-y-6 col-span-3 border p-4 bg-white">
          <h2 className="text-2xl font-semibold">Kết quả tìm kiếm</h2>
          <div className="mt-3 grid grid-cols-3 gap-3 items-stretch">
            {allBooksQuery.data?.data?.length === 0 && (
              <div className="text-center text-muted-foreground col-span-3">
                Không tìm thấy tài liệu phù hợp.
              </div>
            )}
            {allBooksQuery.data?.data?.map((book) => (
              <div className="p-3 border" key={book.documentId}>
                <div className="bg-gray-200 mb-2 relative aspect-3/4">
                  <Image
                    unoptimized
                    src={normalizeImageUrl(book.image.url)}
                    alt={book.image.alternativeText || ""}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className=" font-semibold">{book.name}</div>
                <a
                  href={normalizeImageUrl(book.file[0].url)}
                  download={book.file[0].name}
                >
                  Xem
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="border p-4 bg-white">
        <h2 className="text-2xl font-semibold">Tài liệu mới nhất</h2>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {latestBooksQuery.data?.data?.map((book) => (
            <div className="p-3 border" key={book.documentId}>
              <div className="bg-gray-200 mb-2 relative aspect-3/4">
                <Image
                  unoptimized
                  src={normalizeImageUrl(book.image.url)}
                  alt={book.image.alternativeText || ""}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="font-medium">{book.name}</div>
              <div className="text-sm text-muted-foreground">
                {book.writers.map((writer) => writer.name).join(" - ")}
              </div>
              <a
                href={normalizeImageUrl(book.file[0].url)}
                download={book.file[0].name}
              >
                Xem
              </a>
            </div>
          ))}
        </div>
        {(latestBooksQuery.data?.meta.pagination.total || 0) > pageSize && (
          <Button
            variant="outline"
            className="ml-auto flex mt-4"
            onClick={() => setPageSize((prev) => prev + 5)}
          >
            Xem thêm
          </Button>
        )}
      </div>
      <div className="p-4 border">
        <h3 className="text-2xl font-semibold">Tải lên / Đề xuất tài liệu</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Giáo viên có thể gửi tài liệu cho thư viện để xét duyệt và xuất bản.
        </p>
        <div className="mt-3 flex gap-2">
          <button className="px-4 py-2 bg-green-600 text-white">
            Tải lên tài liệu
          </button>
          <button className="px-4 py-2 border">Gửi đề xuất</button>
        </div>
      </div>
    </div>
  );
}

const CheckboxGroup = ({
  label,
  options = [],
  checked = [],
  onChange,
  inderterminate,
  className,
  inderterminateLabel,
  listOptionsClassName,
}: {
  label: string;
  options: { label: string; value: string }[];
  checked?: string[];
  onChange?: (values: string[]) => void;
  inderterminate?: boolean;
  className?: string;
  inderterminateLabel?: string;
  listOptionsClassName?: string;
}) => {
  const id = useId();
  return (
    <div className={cn(`${className}`)}>
      <div className="font-medium text-lg">{label}</div>
      <div className={cn("mt-2 p-2 grid gap-3", listOptionsClassName)}>
        {options.map((option) => (
          <label key={option.value} className="flex items-center gap-2">
            <input
              className="size-5 accent-blue-700"
              type="checkbox"
              id={id + "-" + option.value}
              checked={checked?.includes(option.value)}
              onChange={(e) => {
                const value = e.target.value;
                onChange?.(
                  value
                    ? [...checked, option.value]
                    : checked.filter((v) => v !== option.value)
                );
              }}
            />
            <p>{option.label}</p>
          </label>
        ))}
      </div>
      {inderterminate && (
        <label className="flex items-center gap-2 mt-3 p-2 bg-gray-100">
          <input
            className="size-5 accent-blue-700"
            type="checkbox"
            id={id + "-all"}
            onChange={(e) => {
              onChange?.(e.target.checked ? options.map((o) => o.value) : []);
            }}
            checked={checked?.length === options.length && options.length > 0}
          />
          <p className=" flex-1">{inderterminateLabel || "Tất cả"}</p>
        </label>
      )}
    </div>
  );
};

const RadioGroup = ({
  label,
  options = [],
  value,
  onChange,
  className,
  listOptionsClassName,
}: {
  label: string;
  options: { label: string; value: string }[];
  value?: string;
  onChange?: (value?: string) => void;
  className?: string;
  listOptionsClassName?: string;
}) => {
  return (
    <div className={cn(`${className}`)}>
      <div className="font-medium text-lg">{label}</div>
      <div className={cn("mt-2 grid gap-3", listOptionsClassName)}>
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="size-5 accent-blue-700"
            />
            <span className="select-none">{option.label}</span>
          </label>
        ))}
      </div>
      <Button
        className="mt-2 w-full"
        variant={"outline"}
        onClick={() => onChange?.(undefined)}
      >
        Bỏ chọn
      </Button>
    </div>
  );
};
