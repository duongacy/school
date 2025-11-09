export type LibraryDoc = {
  id: string;
  title: string;
  author?: string;
  year?: number;
  summary?: string;
  path?: string; // relative public path to download (e.g. /library/docs/doc.pdf)
  thumb?: string; // optional thumbnail path under /public
};

const docs: LibraryDoc[] = [
  {
    id: "doc-001",
    title: "Sổ tay học sinh 2025",
    author: "Phòng Công tác Học sinh",
    year: 2025,
    summary: "Hướng dẫn quyền lợi, nghĩa vụ, quy định và biểu mẫu dành cho học sinh và phụ huynh.",
    path: "/library/docs/sotay-sv-2025.pdf",
    thumb: "/library/thumbs/doc-001.svg",
  },
  {
    id: "doc-002",
    title: "Giáo trình Nhập môn lập trình",
    author: "Nguyễn Văn A",
    year: 2021,
     summary: "Tài liệu cơ bản về lập trình, phù hợp cho học sinh THCS trở lên và người mới bắt đầu học lập trình.",
    path: "/library/docs/nhap-mon-lap-trinh.pdf",
    thumb: "/library/thumbs/doc-002.svg",
  },
  {
    id: "doc-003",
  title: "Bộ câu hỏi ôn tập - Toán",
  author: "Tổ Toán - Tin",
  year: 2023,
  summary: "Tập hợp câu hỏi ôn tập cho học sinh (một số nội dung dành cho THPT).",
    path: "/library/docs/ongt-toan-roi-rac.pdf",
    thumb: "/library/thumbs/doc-003.svg",
  },
];

export default docs;
