import { useQuery } from "@tanstack/react-query";
import { getAllStudents } from "./fetch";

export const useAllStudents = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["students", JSON.stringify(params)],
    queryFn: () => getAllStudents(params),
    placeholderData: (prev) => prev
  });
};
