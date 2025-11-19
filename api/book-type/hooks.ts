import { useQuery } from "@tanstack/react-query";
import { fetchAllBookTypes, fetchBookTypeByDocumentId } from "./fetch";

export const useAllBookTypes = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["book-types", JSON.stringify(params)],
    queryFn: () => fetchAllBookTypes(params),
    placeholderData: (prev) => prev,
  });
};

export const useBookTypeByDocumentId = (documentId?: string) => {
  return useQuery({
    enabled: !!documentId,
    queryKey: ["book-types", documentId],
    queryFn: () => {
      if (!documentId) return undefined;
      return fetchBookTypeByDocumentId(documentId);
    },
    placeholderData: (prev) => prev,
  });
};
