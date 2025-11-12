import { useQuery } from "@tanstack/react-query";
import { getAllEvents } from "./fetch";

export const useAllEvents = () => {
  return useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      return getAllEvents();
    },
  });
};
