export type EventItem = {
  id: string;
  date: string;
  title: string;
  description: string;
  image?: string;
};

const events: EventItem[] = [
  {
    id: "e-2025-11-01",
    date: "01 Tháng 11, 2025",
    title: "Lễ kỷ niệm thành lập trường và trao giải học sinh xuất sắc",
    description:
      "Lễ kỷ niệm với nhiều hoạt động văn nghệ, gặp mặt cựu học sinh và trao giải cho học sinh xuất sắc các năm học.",
    image: "/home/h2.png",
  },
  {
    id: "e-2025-10-28",
    date: "28 Tháng 10, 2025",
    title: "Hội thao học sinh khối 10-12",
    description:
      "Hội thao truyền thống khối 10-12 với nhiều nội dung thi đấu: điền kinh, bóng đá, bóng chuyền, cầu lông.",
    image: "/home/h3.png",
  },
  {
    id: "e-2025-09-15",
    date: "15 Tháng 9, 2025",
    title: "Hội thảo phụ huynh - nhà trường",
    description:
      "Buổi hội thảo chia sẻ kế hoạch năm học, phương pháp hỗ trợ học sinh học tập hiệu quả.",
    image: "/home/h4.png",
  },
];

export default events;
