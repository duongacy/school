import { useQuery } from "@tanstack/react-query";
import { fetchAllBooks, fetchBookByDocumentId } from "./fetch";

export const useAllBooks = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["books", JSON.stringify(params)],
    queryFn: () => fetchAllBooks(params),
    placeholderData: (prev) => prev,
  });
};

export const useBookByDocumentId = (documentId?: string) => {
  return useQuery({
    enabled: !!documentId,
    queryKey: ["book", documentId],
    queryFn: () => {
      if (!documentId) return undefined;
      return fetchBookByDocumentId(documentId);
    },
    placeholderData: (prev) => prev,
  });
};
