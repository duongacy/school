"use client";
import { useAllBooks } from "@/api/book/hooks";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/cn";
import { normalizeImageUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useId } from "react";

export default function LibraryPage() {
  const allBooksQuery = useAllBooks();
  const [selectedSubjects, setSelectedSubjects] = React.useState<string[]>([]);
  const [selectedGrades, setSelectedGrades] = React.useState<string[]>([]);
  const [selectedWriters, setSelectedWriters] = React.useState<string[]>([]);
  const bookNameFilterRef = React.useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    // const bookName = bookNameFilterRef.current?.value || "";
  };
  return (
    <div className="space-y-8 container mx-auto my-8">
      <section className="border p-6 bg-gray-100">
        <h1 className="text-4xl font-bold">Thư viện</h1>
        <p className="text-base text-muted-foreground mt-2">
          Kho tài nguyên: sách, bài giảng, đề thi và tài liệu tham khảo cho học
          sinh và giáo viên.
        </p>
      </section>

      <div className="border p-4 bg-white">
        <h2 className="text-2xl font-semibold">Tài nguyên mới nhất</h2>
        <div className="mt-3 grid grid-cols-3 gap-3">
          {allBooksQuery.data?.data.map((book) => (
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
        <Button variant="outline" className="ml-auto flex mt-4">
          Xem thêm
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <div className=" bg-gray-100/50 p-4">
          <div className="flex gap-2">
            <Input
              className="rounded-none min-w-0"
              placeholder="Tìm theo tên sách"
              defaultValue=""
              ref={(el) => {
                bookNameFilterRef.current = el;
              }}
            />
            <Button className="rounded-none" onClick={handleSearch}>
              Tìm
            </Button>
          </div>
          <aside className="space-y-4 mt-2">
            <CheckboxGroup
              className="border p-4 bg-white"
              listOptionsClassName="grid-cols-4 grid"
              label="Lớp"
              options={[
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4", value: "4" },
                { label: "5", value: "5" },
                { label: "6", value: "6" },
                { label: "7", value: "7" },
                { label: "8", value: "8" },
                { label: "9", value: "9" },
                { label: "10", value: "10" },
                { label: "11", value: "11" },
                { label: "12", value: "12" },
              ]}
              checked={selectedGrades}
              onChange={setSelectedGrades}
              inderterminate
            />

            <CheckboxGroup
              listOptionsClassName="grid-cols-2"
              className="border p-4 bg-white"
              label="Môn học"
              options={[
                { label: "Toán", value: "toan" },
                { label: "Lý", value: "ly" },
                { label: "Hóa", value: "hoa" },
                { label: "Văn", value: "van" },
                { label: "Sinh học", value: "sinh-hoc" },
                { label: "Tiếng Anh", value: "tieng-anh" },
              ]}
              checked={selectedSubjects}
              onChange={setSelectedSubjects}
              inderterminate
            />
            <CheckboxGroup
              className="border p-4 bg-white"
              label="Môn học"
              options={[
                { label: "Nguyễn Thiện Thuật", value: "nguyen-thien-thuat" },
                { label: "Nam Cao", value: "nam-cao" },
              ]}
              checked={selectedWriters}
              onChange={setSelectedWriters}
              inderterminate
            />
          </aside>
        </div>
        <section className="space-y-6 col-span-3 border p-4 bg-white">
          <h2 className="text-2xl font-semibold">Kết quả tìm kiếm</h2>
          <div className="mt-3 grid grid-cols-3 gap-3 items-stretch">
            <div className="p-3 border">
              <div className="h-28 bg-gray-200  mb-2" />
              <div className="font-medium">Bài giảng: Đại số - Lớp 10</div>
              <div className="text-sm text-muted-foreground">
                PDF • Giáo viên: Nguyễn Văn A
              </div>
            </div>
            <div className="p-3 border">
              <div className="h-28 bg-gray-200  mb-2" />
              <div className="font-medium">Ngữ văn: Tổng hợp tác phẩm</div>
              <div className="text-sm text-muted-foreground">
                PDF • Nhiều tài liệu
              </div>
            </div>
            <div className="p-3 border">
              <div className="h-28 bg-gray-200  mb-2" />
              <div className="font-medium">Đề thi giữa kỳ 2025</div>
              <div className="text-sm text-muted-foreground">
                PDF • Có đáp án
              </div>
            </div>
          </div>
        </section>
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
      <div className="font-medium">{label}</div>
      {inderterminate && (
        <div className="flex items-center gap-2 mt-3 p-2 bg-gray-100">
          <Checkbox
            id={id + "-all"}
            onCheckedChange={(value) => {
              onChange?.(value ? options.map((o) => o.value) : []);
            }}
            checked={checked?.length === options.length}
          />
          <Label htmlFor={id + "-all"}>{inderterminateLabel || "Tất cả"}</Label>
        </div>
      )}
      <div className={cn("mt-2 p-2 grid gap-3", listOptionsClassName)}>
        {options.map((option) => (
          <div key={option.value} className="flex items-center gap-2">
            <Checkbox
              id={id + "-" + option.value}
              checked={checked?.includes(option.value)}
              onCheckedChange={(value) => {
                onChange?.(
                  value
                    ? [...checked, option.value]
                    : checked.filter((v) => v !== option.value)
                );
              }}
            />
            <Label htmlFor={id + "-" + option.value}>{option.label}</Label>
          </div>
        ))}
      </div>
    </div>
  );
};
