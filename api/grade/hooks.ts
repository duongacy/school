import { useQuery } from "@tanstack/react-query";
import { fetchAllGrades, fetchGradeByDocumentId } from "./fetch";

export const useAllBooks = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["grades", JSON.stringify(params)],
    queryFn: () => fetchAllGrades(params),
    placeholderData: (prev) => prev,
  });
};

export const useGradeByDocumentId = (documentId?: string) => {
  return useQuery({
    enabled: !!documentId,
    queryKey: ["grades", documentId],
    queryFn: () => {
      if (!documentId) return undefined;
      return fetchGradeByDocumentId(documentId);
    },
    placeholderData: (prev) => prev,
  });
};
