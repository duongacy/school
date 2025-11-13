import { API_BASE_URL } from "@/lib/consts";
import {
  StrapiCollectionResponse,
  StrapiImage,
  StrapiSingleResponse,
} from "../strapi-common-type";
import { bindParams } from "@/lib/utils";

export type EventDto = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  tieu_de: string;
  mo_ta: string;
  noi_dung: string;
  ngay: string;
  hinh_anh?: StrapiImage;
};

export async function fetchAllEvents(params?: Record<string, string | number>) {
  try {
    const response = await fetch(
      bindParams(`${API_BASE_URL}/api/events`, {
        ...params,
        populate: "hinh_anh",
      })
    );
    const result = await response.json();
    return result as StrapiCollectionResponse<EventDto>;
  } catch (error) {
    console.error("fetchAllEvents error:", error);
    return undefined;
  }
}

export async function fetchEventByDocumentId(documentId: string) {
  try {
    const response = await fetch(
      bindParams(`${API_BASE_URL}/api/events/${documentId}`, {
        populate: "hinh_anh",
      })
    );
    const result = await response.json();
    return result as StrapiSingleResponse<EventDto>;
  } catch (error) {
    console.error("fetchEventById error:", error);
    return undefined;
  }
}
