import { useQuery } from "@tanstack/react-query";
import { getAllStudents } from "./fetch";

export const useAllStudents = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: getAllStudents,
  });
};
