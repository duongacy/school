export const academics = {
  heading: "Đào tạo & Chương trình học",
  summary:
    "Trình bày khung chương trình theo cấp, danh sách tổ/bộ môn và các hoạt động dự án học tập, trải nghiệm dành cho học sinh.",
  departments: [
    { id: "d1", name: "Tổ Khoa học Tự nhiên" },
    { id: "d2", name: "Tổ Ngữ văn & Xã hội" },
    { id: "d3", name: "Tổ Ngoại ngữ" },
    { id: "d4", name: "Tổ Nghệ thuật & Thể chất" },
  ],
  programs: [
    {
      id: "a1",
      name: "Chương trình Tiêu chuẩn",
      level: "Tiểu học - THCS - THPT",
      duration: "Hàng năm theo từng cấp",
      description:
        "Chương trình theo khung chuẩn quốc gia, tập trung phát triển kiến thức nền tảng và kỹ năng học tập.",
      curriculum: [
        "Toán",
        "Ngữ văn",
        "Tiếng Anh",
        "Khoa học tự nhiên",
        "Lịch sử & Địa lý",
        "Tin học cơ bản",
      ],
    },
    {
      id: "a2",
      name: "Chương trình Nâng cao",
      level: "THCS - THPT",
      duration: "Học kỳ / Năm",
      description:
        "Tăng cường nội dung các môn Toán, Khoa học và Ngoại ngữ; có lớp tăng cường và chương trình ôn thi đội tuyển học sinh giỏi.",
      curriculum: ["Toán nâng cao", "Vật lý cơ bản", "Hóa học cơ bản", "Tiếng Anh nâng cao", "Tin học cơ bản"],
    },
    {
      id: "a3",
      name: "Chương trình Kỹ năng sống",
      level: "Toàn trường",
      duration: "Chu kỳ học kỹ năng theo năm",
      description:
        "Các hoạt động trải nghiệm, hướng nghiệp, kỹ năng mềm, an toàn và sức khỏe cho học sinh mọi cấp.",
      curriculum: ["Kỹ năng giao tiếp", "Lãnh đạo", "Lập dự án", "An toàn & Sức khỏe"],
    },
  ],
  teachersIntro:
    "Đội ngũ giáo viên có trình độ chuyên môn cao, nhiều kinh nghiệm giảng dạy và tham gia các chương trình đào tạo phát triển chuyên môn.",
  teachers: [
    {
      id: "t1",
      name: "Nguyễn Thị Minh",
      role: "GV. Toán - Trưởng tổ Toán",
      bio: "Hơn 12 năm kinh nghiệm giảng dạy Toán ở các cấp; hướng dẫn học sinh tham gia cuộc thi học sinh giỏi.",
      subjects: ["Toán"],
      email: "minh.nguyen@truong.edu.vn",
    },
    {
      id: "t2",
      name: "Lê Văn Trung",
      role: "GV. Vật lý",
  bio: "Tổ chức các hoạt động thí nghiệm và dự án khoa học khám phá phù hợp với các cấp học.",
  subjects: ["Vật lý", "Khoa học & Thí nghiệm"],
      email: "trung.le@truong.edu.vn",
    },
    {
      id: "t3",
      name: "Phạm Thị Hoa",
      role: "GV. Tiếng Anh",
      bio: "Phát triển năng lực giao tiếp và tiếng Anh ứng dụng cho học sinh.",
      subjects: ["Tiếng Anh"],
      email: "hoa.pham@truong.edu.vn",
    },
  ],
  projects: [
    {
      id: "prj1",
  title: "Dự án Năng lượng sạch - Khám phá Khoa học",
  summary: "Học sinh tìm hiểu và chế tạo mô hình năng lượng mặt trời qua các hoạt động khám phá, phù hợp cho nhiều lứa tuổi.",
      leads: ["Lê Văn Trung"],
    },
    {
      id: "prj2",
      title: "Câu lạc bộ Khoa học Trẻ",
      summary: "Hoạt động ngoại khóa giúp học sinh thực hành thí nghiệm và tham gia sáng tạo khoa học.",
      leads: ["Nguyễn Thị Minh"],
    },
  ],
  resources: [
    { id: "r1", label: "Sổ tay học sinh (PDF)", href: "/resources/student-handbook.pdf" },
    { id: "r2", label: "Tài liệu chương trình học (mẫu)", href: "/resources/curriculum.pdf" },
    { id: "r3", label: "Thư viện số", href: "/library" },
  ],
  calendar: [
    { id: "c1", title: "Khai giảng năm học", date: "2025-09-01" },
    { id: "c2", title: "Tuần triển lãm dự án STEAM", date: "2025-11-10" },
  ],
  contact: { name: "Phòng Đào tạo", email: "daotao@truong.edu.vn", phone: "(0123) 222-333" },
};

export default academics;
