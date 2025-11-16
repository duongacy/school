import { API_FULL_URL } from "@/lib/consts";
import { bindParams } from "@/lib/utils";
import {
  StrapiCollectionResponse,
  StrapiSingleResponse,
} from "../strapi-common-type";

export type SubjectDto = {
  documentId: string;
  name: string;
};

export async function fetchAllSubjects(
  params?: Record<string, string | number>
) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/subjects`, {
        ...params,
      })
    );
    const result = await response.json();
    return result as StrapiCollectionResponse<SubjectDto>;
  } catch (error) {
    console.error("fetchAllSubjects error:", error);
    return undefined;
  }
}

export async function fetchSubjectByDocumentId(documentId: string) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/subjects/${documentId}`, {})
    );
    const result = await response.json();
    return result as StrapiSingleResponse<SubjectDto>;
  } catch (error) {
    console.error("fetchSubjectById error:", error);
    return undefined;
  }
}
