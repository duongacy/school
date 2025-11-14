import { useQuery } from "@tanstack/react-query";
import { getAllStudents, getStudentByDocumentId } from "./fetch";

export const useAllStudents = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["students", JSON.stringify(params)],
    queryFn: () => getAllStudents(params),
    placeholderData: (prev) => prev,
  });
};
export const useStudentByDocumentId = (documentId?: string) => {
  return useQuery({
    enabled: !!documentId,
    queryKey: ["student", documentId],
    queryFn: () => {
      if (!documentId) return undefined;
      return getStudentByDocumentId(documentId);
    },
    placeholderData: (prev) => prev,
  });
};
