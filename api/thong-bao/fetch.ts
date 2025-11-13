import { API_BASE_URL } from "@/lib/consts";
import { bindParams } from "@/lib/utils";
import { StrapiCollectionResponse } from "../strapi-common-type";

export type NoticeDto = {
  id: string;
  documentId: string;
  tieu_de: string;
  noi_dung: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export async function fetchAllNotices(
  params?: Record<string, string | number>
) {
  try {
    const response = await fetch(
      bindParams(`${API_BASE_URL}/api/thong-baos`, { ...params })
    );
    const result = await response.json();
    return result as StrapiCollectionResponse<NoticeDto>;
  } catch (error) {
    console.error("fetchAllNotices error:", error);
    return undefined;
  }
}
