import { useQuery } from "@tanstack/react-query";
import { fetchAllWriters, fetchWriterByDocumentId } from "./fetch";

export const useAllWriters = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["writers", JSON.stringify(params)],
    queryFn: () => fetchAllWriters(params),
    placeholderData: (prev) => prev,
  });
};

export const useWriterByDocumentId = (documentId?: string) => {
  return useQuery({
    enabled: !!documentId,
    queryKey: ["writers", documentId],
    queryFn: () => {
      if (!documentId) return undefined;
      return fetchWriterByDocumentId(documentId);
    },
    placeholderData: (prev) => prev,
  });
};
