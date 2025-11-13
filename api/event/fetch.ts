import { API_BASE_URL } from "@/lib/consts";
import { StrapiImage } from "../strapi-common-type";

export type EventDto = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  locale: string;
  tieu_de: string;
  mo_ta: string;
  noi_dung: string;
  ngay: string;
  hinh_anh?: StrapiImage;
};

export async function fetchAllEvents(): Promise<{ data: EventDto[] } | undefined> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/events?populate=hinh_anh`);
    const result = await response.json();
    return result as { data: EventDto[] };
  } catch (error) {
    console.error('fetchAllEvents error:', error);
    return undefined;
  }
}
