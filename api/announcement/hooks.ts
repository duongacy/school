import { useQuery } from "@tanstack/react-query";
import { fetchAllAnnouncements, fetchAnnouncementByDocumentId } from "./fetch";

export const useAllAnnouncements = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["announcements", JSON.stringify(params)],
    queryFn: () => fetchAllAnnouncements(params),
    placeholderData: (prev) => prev,
  });
};

export const useAnnouncementByDocumentId = (documentId?: string) => {
  return useQuery({
    enabled: !!documentId,
    queryKey: ["announcement", documentId],
    queryFn: () => {
      if (!documentId) return undefined;
      return fetchAnnouncementByDocumentId(documentId);
    },
    placeholderData: (prev) => prev,
  });
};
