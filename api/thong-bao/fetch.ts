import { API_BASE_URL } from "@/lib/consts";

export type NoticeDto = {
  id: string;
  documentId: string;
  tieu_de: string;
  noi_dung: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

export async function fetchAllNotices(): Promise<{ data: NoticeDto[] } | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/thong-baos`);
    const result = await response.json();
    return result as { data: NoticeDto[] };
  } catch (error) {
    console.error('fetchAllNotices error:', error);
    return undefined;
  }
}

