import { useQuery } from "@tanstack/react-query";
import { fetchAllVanBans } from "./fetch";

export const useAllVanBans = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["van-bans", JSON.stringify(params)],
    queryFn: () => fetchAllVanBans(params),
    placeholderData: (prev) => prev,
  });
};
