import { useQuery } from "@tanstack/react-query";
import { fetchAllVanBans, fetchVanBanByDocumentId } from "./fetch";

export const useAllVanBans = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["van-bans", JSON.stringify(params)],
    queryFn: () => fetchAllVanBans(params),
    placeholderData: (prev) => prev,
  });
};

export const useVanBanByDocumentId = (documentId?: string) => {
  return useQuery({
    enabled: !!documentId,
    queryKey: ["van-ban", documentId],
    queryFn: () => {
      if (!documentId) return undefined;
      return fetchVanBanByDocumentId(documentId);
    },
    placeholderData: (prev) => prev,
  });
};
