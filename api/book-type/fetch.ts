import { API_FULL_URL } from "@/lib/consts";
import { bindParams } from "@/lib/utils";
import {
  StrapiCollectionResponse,
  StrapiSingleResponse,
} from "../strapi-common-type";

export type BookTypeDto = {
  documentId: string;
  name: string;
};

export async function fetchAllBookTypes(
  params?: Record<string, string | number>
) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/book-types`, {
        ...params,
      })
    );
    const result = await response.json();
    return result as StrapiCollectionResponse<BookTypeDto>;
  } catch (error) {
    console.error("fetchAllBookTypes error:", error);
    return undefined;
  }
}

export async function fetchBookTypeByDocumentId(documentId: string) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/book-types/${documentId}`, {})
    );
    const result = await response.json();
    return result as StrapiSingleResponse<BookTypeDto>;
  } catch (error) {
    console.error("fetchBookTypeById error:", error);
    return undefined;
  }
}
