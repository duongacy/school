import { API_FULL_URL } from "@/lib/consts";
import { bindParams } from "@/lib/utils";
import { StrapiCollectionResponse, StrapiSingleResponse } from "../strapi-common-type";

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
      bindParams(`${API_FULL_URL}/api/thong-baos`, { ...params })
    );
    const result = await response.json();
    return result as StrapiCollectionResponse<NoticeDto>;
  } catch (error) {
    console.error("fetchAllNotices error:", error);
    return undefined;
  }
}

export async function fetchNoticeByDocumentId(documentId: string) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/thong-baos/${documentId}`, {})
    );
    const result = await response.json();
    return result as StrapiSingleResponse<NoticeDto>;
  } catch (error) {
    console.error("fetchNoticeByDocumentId error:", error);
    return undefined;
  }
}
