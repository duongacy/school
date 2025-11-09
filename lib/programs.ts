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
    slug: 'chuyen-de-cntt',
    title: 'Chuyên đề Công nghệ thông tin',
     short: 'Chuyên đề ngắn hạn giúp học sinh lớn làm quen với tư duy máy tính và kỹ năng số cơ bản.',
     overview:
       'Chuyên đề CNTT dành cho học sinh THCS/THPT trang bị kiến thức cơ bản về lập trình, kỹ năng sử dụng máy tính an toàn và tư duy số.'
  },
  {
    slug: 'ky-nang-song',
    title: 'Chuyên đề Kỹ năng sống',
    short: 'Các khóa kỹ năng sống: giao tiếp, làm việc nhóm và an toàn.',
    overview:
      'Chuyên đề kỹ năng sống giúp học sinh phát triển kỹ năng mềm, tư duy phản biện và kỹ năng tự phục vụ.'
  },
  {
    slug: 'khoa-hoc-tu-nhien',
    title: 'Chuyên đề Khoa học tự nhiên',
    short: 'Hoạt động khám phá khoa học, thực hành thí nghiệm đơn giản cho học sinh.',
    overview:
      'Chuyên đề giúp học sinh trải nghiệm thực hành khoa học, phát triển tư duy khám phá và kỹ năng thí nghiệm cơ bản.'
  }
];

export function getPrograms() {
  return programs;
}

export function getProgramBySlug(slug: string) {
  return programs.find((p) => p.slug === slug);
}
