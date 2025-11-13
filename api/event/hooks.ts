import { useQuery } from "@tanstack/react-query";
import { fetchAllEvents } from "./fetch";

export const useAllEvents = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["events", JSON.stringify(params)],
    queryFn: () => fetchAllEvents(params),
    placeholderData: (prev) => prev
  });
};
