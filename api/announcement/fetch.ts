import { API_FULL_URL } from "@/lib/consts";
import { bindParams } from "@/lib/utils";
import {
  StrapiCollectionResponse,
  StrapiSingleResponse,
} from "../strapi-common-type";

export type AnnouncementDto = {
  documentId: string;
  title: string;
  description: string;
  content: string;
};

export async function fetchAllNotices(
  params?: Record<string, string | number>
) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/announcements`, { ...params })
    );
    const result = await response.json();
    return result as StrapiCollectionResponse<AnnouncementDto>;
  } catch (error) {
    console.error("fetchAllNotices error:", error);
    return undefined;
  }
}

export async function fetchNoticeByDocumentId(documentId: string) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/announcements/${documentId}`, {})
    );
    const result = await response.json();
    return result as StrapiSingleResponse<AnnouncementDto>;
  } catch (error) {
    console.error("fetchNoticeByDocumentId error:", error);
    return undefined;
  }
}
