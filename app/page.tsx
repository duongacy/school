import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata = { title: "Trang chủ" };

export default function HomePage() {
  return (
    <div className="">
      <section className="bg-gray-100 border p-6">
        <div className=" h-80 bg-gray-800"></div>
        <div className="flex gap-3 justify-center mt-8">
          <Button className="rounded-none">Thông báo</Button>
          <Button variant="outline" className="rounded-none">
            Liên hệ
          </Button>
        </div>
      </section>
      <div className="grid grid-cols-[2fr_1fr] gap-6 container mx-auto my-8">
        <div className="space-y-6">
          <div className="border p-4">
            <h2 className="text-3xl font-semibold ">Tin tức & Sự kiện</h2>
            <div className="mt-3 space-y-3">
              <EventItem
                date="01 Tháng 11, 2025"
                title="Lễ kỷ niệm thành lập trường và trao giải học sinh xuất sắc"
                description="Tóm tắt ngắn gọn nội dung tin để người đọc có cái nhìn tổng quan."
              />

              <EventItem
                date="28 Tháng 10, 2025"
                title="Hội thao học sinh khối 10-12"
                description="Thông tin và kết quả nhanh của các bộ môn."
              />
            </div>
          </div>

          {/* Featured / Highlights */}
          <section className="border p-4">
            <h3 className="text-3xl font-semibold ">Học sinh nổi bật</h3>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <StudentItem
                name="Nguyễn Văn A"
                school="Trường THPT ABC"
                grade="10A1"
                achievement="Học sinh xuất sắc toàn diện"
              />
              <StudentItem
                name="Trần Thị B"
                school="Trường THPT XYZ"
                grade="11B2"
                achievement="Giải Nhất cuộc thi Toán học cấp tỉnh"
              />
              <StudentItem
                name="Lê Văn C"
                school="Trường THPT DEF"
                grade="12C3"
                achievement="Thành tích xuất sắc trong hoạt động ngoại khóa"
              />
              <StudentItem
                name="Phạm Thị D"
                school="Trường THPT GHI"
                grade="10D4"
                achievement="Học sinh có tiến bộ vượt bậc"
              />
            </div>
          </section>
        </div>

        <aside className="space-y-3">
          <div className="border p-3 bg-white">
            <h4 className="text-3xl font-semibold ">Thông báo nhanh</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="p-2 bg-gray-50">Lịch thi giữa kỳ - cập nhật</li>
              <li className="p-2 bg-gray-50">Nghỉ lễ: 20/11</li>
              <li className="p-2 bg-gray-50">
                Tuyển sinh lớp 10 năm học 2026-2027 bắt đầu từ 01/12/2025
              </li>
              <li className="p-2 bg-gray-50">
                Bổ nhiệm giáo viên mới cho năm học 2025-2026
              </li>
            </ul>
          </div>

          <div className="border p-3 bg-white">
            <h4 className="text-3xl font-semibold ">Văn bản mới</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="p-2 bg-gray-50">
                Quy chế chi tiêu nội bộ của Trường Đại học Sư phạm TP.HCM (QĐ
                4299 ngày 30/10/2025)
              </li>
              <li className="p-2 bg-gray-50">
                Quy chế Hoạt động của Hội đồng thi đua khen thưởng (QĐ 3336 ngày
                19/9/2025)
              </li>
              <li className="p-2 bg-gray-50">
                Quy chế tuyển sinh đại học, tuyển sinh cao đẳng ngành Giáo dục
                Mầm non
              </li>
              <li className="p-2 bg-gray-50">
                Nghị quyết 06/NQ-HĐT ngày 01/11/2024 sửa đổi một số điều của Quy
                chế Tổ chức
              </li>
            </ul>
          </div>
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
  image?: string;
}) => {
  return (
    <article className={cn("p-3 border bg-gray-50", className)}>
      {image ? (
        <img src={image} alt={title} className="mb-2 rounded" />
      ) : (
        <div className="h-40 bg-gray-200"></div>
      )}
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
  image?: string;
}) => {
  return (
    <div className={cn("p-3 border bg-gray-50", className)}>
      <div className=" grid grid-cols-[auto_1fr] gap-3">
        {image ? (
          <img
            src={image}
            alt={name}
            className="mb-2 rounded-full w-16 h-16 object-cover"
          />
        ) : (
          <div className="mb-2 rounded-full w-16 h-16 bg-gray-200"></div>
        )}
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
