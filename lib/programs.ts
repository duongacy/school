export type Program = {
  slug: string;
  title: string;
  short: string;
  duration?: string;
  fees?: string;
  overview?: string;
};

export const programs: Program[] = [
  {
    slug: 'cong-nghe-thong-tin',
    title: 'Công nghệ thông tin',
    short: 'Chương trình đào tạo chuyên sâu về lập trình, hệ thống và mạng.',
    duration: '4 năm',
    fees: '20,000,000 VND / kỳ',
    overview:
      'Chương trình CNTT cung cấp kiến thức nền tảng về lập trình, cấu trúc dữ liệu, cơ sở dữ liệu và phát triển web/mobile.'
  },
  {
    slug: 'quan-tri-kinh-doanh',
    title: 'Quản trị kinh doanh',
    short: 'Đào tạo quản trị doanh nghiệp, marketing và tài chính cơ bản.',
    duration: '4 năm',
    fees: '20,000,000 VND / kỳ',
    overview:
      'Chương trình Quản trị kinh doanh trang bị kỹ năng quản lý, kinh tế, kế toán và marketing cho sinh viên.'
  },
  {
    slug: 'khoa-hoc-du-lieu',
    title: 'Khoa học dữ liệu',
    short: 'Tập trung vào thống kê, máy học và phân tích dữ liệu lớn.',
    duration: '4 năm',
    fees: '25,000,000 VND / kỳ',
    overview:
      'Khoa học dữ liệu kết hợp toán học, lập trình và domain knowledge để trích xuất giá trị từ dữ liệu.'
  }
];

export function getPrograms() {
  return programs;
}

export function getProgramBySlug(slug: string) {
  return programs.find((p) => p.slug === slug);
}
