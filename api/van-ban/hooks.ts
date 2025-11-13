import { useQuery } from "@tanstack/react-query";
import { fetchAllVanBans } from "./fetch";

export const useAllVanBans = () => {
  return useQuery({
    queryKey: ["van-bans"],
    queryFn: async () => {
      return fetchAllVanBans();
    },
  });
};
