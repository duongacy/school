import { useQuery } from "@tanstack/react-query";
import { fetchAllEvents } from "./fetch";

export const useAllEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: fetchAllEvents,
  });
};
