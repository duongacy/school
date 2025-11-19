import { API_FULL_URL } from "@/lib/consts";
import { bindParams } from "@/lib/utils";
import {
  StrapiCollectionResponse,
  StrapiSingleResponse,
} from "../strapi-common-type";

export type GradeDto = {
  documentId: string;
  name: string;
};

export async function fetchAllGrades(params?: Record<string, string | number>) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/grades`, {
        sort: "name:asc",
        ...params,
      })
    );
    const result = await response.json();
    return result as StrapiCollectionResponse<GradeDto>;
  } catch (error) {
    console.error("fetchAllGrades error:", error);
    return undefined;
  }
}

export async function fetchGradeByDocumentId(documentId: string) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/grades/${documentId}`, {})
    );
    const result = await response.json();
    return result as StrapiSingleResponse<GradeDto>;
  } catch (error) {
    console.error("fetchGradeById error:", error);
    return undefined;
  }
}
