import { useQuery } from "@tanstack/react-query";
import { fetchAllNotices } from "./fetch";

export const useAllNotices = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["notices", JSON.stringify(params)],
    queryFn: () => fetchAllNotices(params),
    placeholderData: (prev) => prev,
  });
};
