import { useQuery } from "@tanstack/react-query";
import { fetchAllEvents, fetchEventByDocumentId } from "./fetch";

export const useAllEvents = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["events", JSON.stringify(params)],
    queryFn: () => fetchAllEvents(params),
    placeholderData: (prev) => prev,
  });
};

export const useEventByDocumentId = (documentId?: string) => {
  return useQuery({
    enabled: !!documentId,
    queryKey: ["event", documentId],
    queryFn: () => {
      if (!documentId) return undefined;
      return fetchEventByDocumentId(documentId);
    },
    placeholderData: (prev) => prev,
  });
};
