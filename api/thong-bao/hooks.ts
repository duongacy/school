import { useQuery } from "@tanstack/react-query";
import { fetchAllNotices } from "./fetch";

export const useAllNotices = () => {
  return useQuery({
    queryKey: ["notices"],
    queryFn: fetchAllNotices,
  });
};
