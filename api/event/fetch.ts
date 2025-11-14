import { API_FULL_URL } from "@/lib/consts";
import {
  StrapiCollectionResponse,
  StrapiImage,
  StrapiSingleResponse,
} from "../strapi-common-type";
import { bindParams } from "@/lib/utils";

export type EventDto = {
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  title: string;
  description: string;
  image: StrapiImage;
  content: string;
  date: string;
};

export async function fetchAllEvents(params?: Record<string, string | number>) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/events`, {
        ...params,
        populate: "image",
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
      bindParams(`${API_FULL_URL}/api/events/${documentId}`, {
        populate: "image",
      })
    );
    const result = await response.json();
    return result as StrapiSingleResponse<EventDto>;
  } catch (error) {
    console.error("fetchEventById error:", error);
    return undefined;
  }
}
