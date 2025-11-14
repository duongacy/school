import { useQuery } from "@tanstack/react-query";
import { fetchAllNotices, fetchNoticeByDocumentId } from "./fetch";

export const useAllNotices = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["notices", JSON.stringify(params)],
    queryFn: () => fetchAllNotices(params),
    placeholderData: (prev) => prev,
  });
};

export const useNoticeByDocumentId = (documentId?: string) => {
  return useQuery({
    enabled: !!documentId,
    queryKey: ["notice", documentId],
    queryFn: () => {
      if (!documentId) return undefined;
      return fetchNoticeByDocumentId(documentId);
    },
    placeholderData: (prev) => prev,
  });
};
