import { API_FULL_URL } from "@/lib/consts";
import { bindParams } from "@/lib/utils";
import {
  StrapiCollectionResponse,
  StrapiImage,
  StrapiSingleResponse,
} from "../strapi-common-type";

export type WriterDto = {
  documentId: string;
  name: string;
  image: string;
  information: StrapiImage;
};
export async function fetchAllWriters(
  params?: Record<string, string | number>
) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/writers`, {
        ...params,
      })
    );
    const result = await response.json();
    return result as StrapiCollectionResponse<WriterDto>;
  } catch (error) {
    console.error("fetchAllWriters error:", error);
    return undefined;
  }
}

export async function fetchWriterByDocumentId(documentId: string) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/writers/${documentId}`, {
        populate: "image",
      })
    );
    const result = await response.json();
    return result as StrapiSingleResponse<WriterDto>;
  } catch (error) {
    console.error("fetchWriterByDocumentId error:", error);
    return undefined;
  }
}
