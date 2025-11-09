export const admissions = {
  heading: "Tuyển sinh & Khóa học",
  overview:
    "Cập nhật thông tin tuyển sinh theo từng cấp học, hướng dẫn nộp hồ sơ và các chính sách học bổng.",
  programs: [
    { id: "pr-1", name: "Tiểu học", description: "Chương trình cơ bản phát triển nền tảng." },
    { id: "pr-2", name: "Trung học cơ sở", description: "Tăng cường tư duy và kỹ năng." },
  { id: "pr-3", name: "Trung học phổ thông", description: "Chuẩn bị cho lộ trình học tập tiếp theo hoặc hướng nghiệp cho học sinh cuối cấp." },
  ],
  steps: [
    "Bước 1: Chuẩn bị hồ sơ (CMND, học bạ, giấy khai sinh).",
    "Bước 2: Nộp hồ sơ trực tuyến hoặc tại văn phòng tuyển sinh.",
    "Bước 3: Tham gia phỏng vấn/kiểm tra (nếu có).",
  ],
  tuition: "Học phí tham khảo: 1.500.000 VNĐ / tháng (tùy chương trình). Học bổng hỗ trợ theo thành tích.",
  deadlines: [
    { id: "d1", name: "Mùa tuyển sinh chính", date: "2025-12-31", note: "Hạn cuối nộp hồ sơ cho năm học 2026" },
    { id: "d2", name: "Đợt xét tuyển bổ sung", date: "2026-02-15", note: "Dành cho các hồ sơ nộp muộn" },
  ],
  intakeCycles: ["Tháng 9 (Năm học chính)", "Tháng 2 (Các khóa đặc biệt)", "Tuyển theo nhu cầu"],
  requiredDocuments: [
    "Bản photo CMND/CCCD của phụ huynh và học sinh",
    "Học bạ/phiếu điểm (bản sao có chứng thực)",
    "Giấy khai sinh (bản sao)",
    "Ảnh 3x4 (4 tấm)",
    "Đơn đăng ký theo mẫu của nhà trường",
  ],
  scholarships: [
    { id: "s1", name: "Học bổng Khuyến tài", details: "Hỗ trợ học phí cho học sinh có thành tích học tập xuất sắc (giảm 50%)." },
    { id: "s2", name: "Học bổng Hoàn cảnh", details: "Hỗ trợ chi phí cho học sinh có hoàn cảnh khó khăn (mức hỗ trợ linh hoạt)." },
  ],
  feeBreakdown: [
    { item: "Học phí cơ bản", amount: "1.200.000 VNĐ / tháng" },
    { item: "Phí cơ sở vật chất", amount: "200.000 VNĐ / tháng" },
    { item: "Phí đồng phục (một lần)", amount: "500.000 VNĐ" },
  ],
  contactPerson: { name: "Ms. Lan - Văn phòng Tuyển sinh", phone: "(0123) 999-888", email: "tuyensinh@truong.edu.vn" },
  applicationLinks: [
    { id: "f1", label: "Mẫu đơn đăng ký (PDF)", href: "/forms/application.pdf" },
    { id: "f2", label: "Nộp hồ sơ trực tuyến", href: "/apply" },
  ],
  faq: [
    { q: "Trẻ cần đạt yêu cầu tiếng Anh không?", a: "Không bắt buộc cho cấp Tiểu học; yêu cầu tăng dần ở các cấp trên tùy chương trình." },
    { q: "Có hỗ trợ xe đưa đón không?", a: "Nhà trường phối hợp với đơn vị đối tác để cung cấp dịch vụ đưa đón (phụ huynh tự đăng ký)." },
  ],
  events: [
    { id: "e1", title: "Ngày hội mở cửa (Open Day)", date: "2025-11-20", description: "Tham quan cơ sở, gặp gỡ giáo viên và đăng ký ưu tiên." },
    { id: "e2", title: "Hội thảo Hướng nghiệp cho phụ huynh", date: "2025-12-05", description: "Gặp gỡ chuyên gia hướng nghiệp và thông tin tuyển sinh." },
  ],
};

export default admissions;
