export type Announcement = {
  id: string;
  title: string;
  date: string; // ISO
  content: string;
};

export type EventItem = {
  id: string;
  title: string;
  date: string; // ISO
  location?: string;
  description?: string;
};

export type Club = {
  id: string;
  name: string;
  description: string;
  meetingTime?: string;
  contact?: { name: string; email?: string };
};

const studentLife = {
  announcements: <Announcement[]>[
    {
      id: "a1",
      title: "Khai giảng năm học",
      date: "2025-09-01",
      content:
        "Lễ khai giảng sẽ diễn ra vào ngày 1/9 tại hội trường lớn. Học sinh và phụ huynh được mời tham dự để gặp gỡ giáo viên và ban giám hiệu.",
    },
    {
      id: "a2",
      title: "Mở đăng ký hoạt động ngoại khóa",
      date: "2025-08-20",
      content:
        "Các hoạt động ngoại khóa và câu lạc bộ mở đăng ký từ 20/8 đến 30/8. Phụ huynh vui lòng kiểm tra thông báo của nhà trường để đăng ký cho học sinh.",
    },
  ],

  upcomingEvents: <EventItem[]>[
    {
      id: "e1",
      title: "Ngày hội hướng nghiệp cho học sinh",
      date: "2025-11-15",
      location: "Sân trường",
      description:
        "Hoạt động giới thiệu nghề nghiệp, các lựa chọn học tập và trải nghiệm nghề cho học sinh khối THPT cùng phụ huynh.",
    },
    {
      id: "e2",
      title: "Hội diễn văn nghệ chào mừng",
      date: "2025-12-05",
      location: "Nhà văn hóa",
      description: "Đêm văn nghệ do các lớp và câu lạc bộ học sinh biểu diễn.",
    },
  ],

  clubs: <Club[]>[
    {
      id: "c1",
      name: "Câu lạc bộ Tin học",
      description:
  "Hoạt động khám phá khoa học và STEM nhẹ nhàng phù hợp cho mọi cấp; các lớp lập trình cơ bản được thiết kế dành cho học sinh THCS/THPT.",
      meetingTime: "Thứ 4 16:00 - 17:30",
      contact: { name: "Lê Minh", email: "le.minh@truong.edu.vn" },
    },
    {
      id: "c2",
      name: "Đội bóng đá học sinh",
      description: "Huấn luyện và thi đấu giao hữu giữa các lớp và trường học địa phương.",
      meetingTime: "Chiều thứ 3, thứ 6",
      contact: { name: "Trần Anh", email: "tran.anh@truong.edu.vn" },
    },
    {
      id: "c3",
      name: "Câu lạc bộ Nghệ thuật",
      description:
        "Âm nhạc, mỹ thuật và sân khấu do học sinh tham gia và tổ chức các tiết mục văn nghệ.",
      meetingTime: "Cuối tuần 09:00 - 12:00",
      contact: { name: "Nguyễn Hoa" },
    },
  ],

  // For K-12 schools, boarding/dormitory is optional — remove dorm info by default.

  healthServices: {
    clinicHours: "T2-T6 08:00 - 16:00",
    doctorOnCall: true,
    contact: { phone: "+84-24-8765-4321", email: "yte@truong.edu.vn" },
  },

  counseling: {
    academic: { name: "Phòng Công tác Học vụ", email: "hocvu@truong.edu.vn" },
    career: { name: "Tư vấn hướng nghiệp cho học sinh", email: "huongnghiep@truong.edu.vn" },
    mentalHealth: { name: "Tư vấn tâm lý", phone: "+84-98-765-4321" },
  },

  resources: [
    { title: "Cẩm nang học sinh", href: "/forms/student-handbook.pdf" },
    { title: "Hướng dẫn tra cứu điểm", href: "/guides/tra-cuu-diem.html" },
    { title: "Thư viện trực tuyến", href: "/library" },
  ],

  faqs: [
    {
      q: "Làm thế nào để xin phép nghỉ học?",
      a: "Phụ huynh thông báo cho nhà trường và gửi đơn xin phép theo mẫu (trực tiếp hoặc qua email) cho giáo viên chủ nhiệm.",
    },
    {
      q: "Có hỗ trợ nội trú không?",
      a: "Nếu trường có khu nội trú, vui lòng liên hệ phòng Hành chính để biết chi tiết. Nhiều trường tiểu học/THCS không có nội trú.",
    },
  ],

  documents: [
    { name: "Mẫu đơn xin nghỉ.pdf", path: "/forms/leave-request.pdf" },
    { name: "Quy định nội trú (nếu có).pdf", path: "/forms/dorm-rules.pdf" },
  ],

  contactOffice: {
    name: "Phòng Công tác Học sinh",
    email: "cthocsinh@truong.edu.vn",
    phone: "+84-24-9988-7766",
    officeHours: "T2-T6 08:00 - 17:00",
  },
};

export default studentLife;
