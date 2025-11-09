export type Post = {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // ISO
  author: string;
  image?: string;
  tags?: string[];
};

export const featuredPost: Post = {
  id: "p-001",
  title: "Khởi động năm học mới: Hành trình khám phá tri thức",
  excerpt:
    "Trường chúng ta chính thức bắt đầu năm học mới với nhiều hoạt động thú vị dành cho học sinh và giáo viên.",
  content:
    "Năm học này đánh dấu một bước ngoặt với chương trình học được cập nhật, nhiều hoạt động trải nghiệm thực tế và cơ sở vật chất được nâng cấp. Hãy cùng nhau xây dựng môi trường học tập thân thiện và sáng tạo.",
  date: "2025-09-01",
  author: "Ban Giám Hiệu",
  image:
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=4e1b9f1f9f3f2b2b8c2f7f2b9a3a1c5d",
  tags: ["năm-học", "khai-giảng", "sự-kiện"],
};

export const highlights = [
  {
    id: "h-1",
    title: "Học sinh giành giải cuộc thi Khoa học",
    summary: "Đội tuyển nhà trường đạt giải Nhất trong cuộc thi khoa học địa phương.",
  },
  {
    id: "h-2",
    title: "Khánh thành thư viện số",
    summary: "Thư viện mới được trang bị sách điện tử và không gian học tập hiện đại.",
  },
  {
    id: "h-3",
    title: "Lịch thi thử đầu vào",
    summary: "Lịch thi thử cho học sinh khối 12 được công bố, đăng ký tại văn phòng trường.",
  },
];

export const posts: Post[] = [
  featuredPost,
  {
    id: "p-002",
    title: "Buổi hội thảo hướng nghiệp cho học sinh",
    excerpt: "Hội thảo giúp học sinh định hướng nghề nghiệp và kỹ năng xin việc.",
    content: "Buổi hội thảo mời các chuyên gia, doanh nghiệp tới chia sẻ về ngành nghề và cơ hội thực tập.",
    date: "2025-10-15",
    author: "Phòng Tuyển Sinh",
    tags: ["hướng-nghiệp", "hội-thảo"],
  },
  {
    id: "p-003",
    title: "Kết quả cuộc thi Toán học cấp huyện",
    excerpt: "Nhiều em học sinh đạt thành tích cao trong kỳ thi Toán học cấp huyện.",
    content: "Thầy cô tự hào về các em và chúc các em tiếp tục phát huy tinh thần hiếu học.",
    date: "2025-10-01",
    author: "Tổ Toán",
    tags: ["thành-tích", "toán"],
  },
  {
    id: "p-004",
    title: "Lễ hội Văn hóa - Thể thao hàng năm",
    excerpt: "Sự kiện đa dạng với các tiết mục văn nghệ, thi đấu thể thao và gian hàng học tập.",
    content:
      "Lễ hội năm nay quy tụ nhiều hoạt động hấp dẫn: cuộc thi vẽ, thi nhảy, giải bóng đá mini giữa các lớp và góc trải nghiệm khoa học.",
    date: "2025-10-20",
    author: "Ban Tổ chức",
    image:
      "https://images.unsplash.com/photo-1520975915770-2f4b3d6ef8c7?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0f2a",
    tags: ["sự-kiện", "văn-hóa", "thể-thao"],
  },
  {
    id: "p-005",
    title: "Thông báo học bổng năm học 2026",
    excerpt: "Nhà trường công bố danh sách học bổng và điều kiện xét tuyển học bổng năm 2026.",
    content:
      "Các thí sinh được xét dựa trên thành tích học tập và hoạt động ngoại khóa. Hồ sơ nộp về phòng Tài chính - Học bổng trước ngày 31/12/2025.",
    date: "2025-11-01",
    author: "Phòng Tài chính",
    tags: ["học-bổng", "thông-báo"],
  },
  {
    id: "p-006",
    title: "Ngày hội Khoa học Trẻ: Triển lãm dự án học sinh",
    excerpt: "Học sinh trình bày các dự án khoa học thực tế, mở cửa cho phụ huynh và khách mời.",
    content:
  "Triển lãm giới thiệu các dự án khoa học và sáng tạo do học sinh thực hiện dưới sự hướng dẫn của giáo viên; nhiều dự án đạt giải sẽ được hỗ trợ triển khai thực tế.",
    date: "2025-11-10",
    author: "Phòng Đào tạo",
    image:
      "https://images.unsplash.com/photo-1535905748047-14a9b9d6c8d9?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b1a",
  tags: ["triển-lãm", "khoa-học", "sự-kiện"],
  },
  {
    id: "p-007",
    title: "Khai giảng lớp Tiếng Anh tăng cường",
    excerpt: "Mở lớp Tiếng Anh tăng cường cho khối THCS với giáo viên bản ngữ và chương trình tương tác.",
    content:
      "Lớp học thiết kế theo phương pháp giao tiếp, số lượng học sinh giới hạn để đảm bảo chất lượng. Đăng ký tại phòng Ngoại ngữ.",
    date: "2025-09-15",
    author: "Tổ Ngoại ngữ",
    tags: ["tuyển-sinh", "ngoại-ngữ"],
  },
  {
    id: "p-008",
    title: "Thông báo lịch thi giữa kỳ",
    excerpt: "Lịch thi giữa kỳ của các khối đã được cập nhật trên cổng thông tin học tập.",
    content:
      "Phụ huynh và học sinh vui lòng kiểm tra lịch riêng của lớp và chuẩn bị đầy đủ cho các đợt kiểm tra. Thời gian thi kéo dài từ 20/11 đến 05/12/2025.",
    date: "2025-11-18",
    author: "Phòng Giáo vụ",
    tags: ["thi-cử", "thông-báo"],
  },
];

export default posts;
