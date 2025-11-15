import { API_FULL_URL } from "@/lib/consts";
import { bindParams } from "@/lib/utils";
import {
  StrapiCollectionResponse,
  StrapiSingleResponse,
} from "../strapi-common-type";

export type LegalDocumentDto = {
  documentId: string;
  title: string;
  description: string;
  content: string;
};

export async function fetchAllLegalDocuments(
  params?: Record<string, string | number>
) {
  try {
    const res = await fetch(
      bindParams(`${API_FULL_URL}/api/legal-documents`, params)
    );
    const json = await res.json();
    return json as StrapiCollectionResponse<LegalDocumentDto>;
  } catch (err) {
    console.error("fetchAllLegalDocuments error:", err);
    return undefined;
  }
}

export async function fetchLegalDocumentByDocumentId(documentId: string) {
  try {
    const res = await fetch(
      bindParams(`${API_FULL_URL}/api/legal-documents/${documentId}`, {})
    );
    const json = await res.json();
    return json as StrapiSingleResponse<LegalDocumentDto>;
  } catch (err) {
    console.error("fetchLegalDocumentByDocumentId error:", err);
    return undefined;
  }
}
