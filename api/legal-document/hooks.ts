import { useQuery } from "@tanstack/react-query";
import {
  fetchAllLegalDocuments,
  fetchLegalDocumentByDocumentId,
} from "./fetch";

export const useAllLegalDocuments = (
  params?: Record<string, string | number>
) => {
  return useQuery({
    queryKey: ["legal-documents", JSON.stringify(params)],
    queryFn: () => fetchAllLegalDocuments(params),
    placeholderData: (prev) => prev,
  });
};

export const useLegalDocumentByDocumentId = (documentId?: string) => {
  return useQuery({
    enabled: !!documentId,
    queryKey: ["legal-document", documentId],
    queryFn: () => {
      if (!documentId) return undefined;
      return fetchLegalDocumentByDocumentId(documentId);
    },
    placeholderData: (prev) => prev,
  });
};
