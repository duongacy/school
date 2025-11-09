export type Slide = {
  id: string;
  title: string;
  caption?: string;
  image: string;
};

export const slides: Slide[] = [
  {
    id: "s1",
    title: "Cơ sở vật chất hiện đại",
    caption: "Phòng học, phòng thí nghiệm và khu thể thao được nâng cấp.",
    image:
      "https://images.unsplash.com/photo-1560264280-6cb2f2d4d6b1?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=abcd",
  },
  {
    id: "s2",
    title: "Hoạt động ngoại khóa sôi nổi",
    caption: "Các câu lạc bộ và hoạt động trải nghiệm cho học sinh.",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=ef12",
  },
  {
    id: "s3",
    title: "Mùa tuyển sinh mở đơn",
    caption: "Đăng ký ngay để nhận tuyển sinh ưu đãi và học bổng.",
    image:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=9f34",
  },
];

export const emergencyNotice = {
  active: true,
  title: "Thông báo khẩn: thay đổi lịch học",
  message:
    "Do thời tiết xấu, lịch học ngày mai sẽ được điều chỉnh — vui lòng kiểm tra email hoặc thông báo trên cổng thông tin để biết chi tiết.",
};

export const intro = {
  title: "Giới thiệu về trường",
  mission:
    "Sứ mệnh của chúng tôi là nuôi dưỡng trí tuệ, phẩm chất và kỹ năng cho học sinh để trở thành công dân tự tin, có trách nhiệm và sáng tạo.",
  values:
    "Tôn trọng, Trung thực, Tư duy phản biện và Hợp tác — là nền tảng trong mọi hoạt động giáo dục của nhà trường.",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
};

export const modules = [
  {
    id: "m-admissions",
    title: "Tuyển sinh & Khóa học",
    description:
      "Thông tin tuyển sinh, hướng dẫn nộp hồ sơ, chương trình đào tạo và học phí.",
    href: "/admissions",
  },
  {
    id: "m-gallery",
    title: "Thư viện ảnh/video",
    description: "Bộ sưu tập hình ảnh cơ sở vật chất, hoạt động ngoại khóa và sự kiện.",
    href: "/gallery",
  },
  {
    id: "m-quicklinks",
    title: "Liên kết nhanh",
    description: "Trang dành cho Phụ huynh, Học sinh và Giáo viên — tài nguyên & liên hệ.",
    href: "/links",
  },
];

export default { slides, emergencyNotice, intro, modules };
