import { useQuery } from "@tanstack/react-query";
import { fetchAllSubjects, fetchSubjectByDocumentId } from "./fetch";

export const useAllSubjects = (params?: Record<string, string | number>) => {
  return useQuery({
    queryKey: ["subjects", JSON.stringify(params)],
    queryFn: () => fetchAllSubjects(params),
    placeholderData: (prev) => prev,
  });
};

export const useSubjectByDocumentId = (documentId?: string) => {
  return useQuery({
    enabled: !!documentId,
    queryKey: ["subjects", documentId],
    queryFn: () => {
      if (!documentId) return undefined;
      return fetchSubjectByDocumentId(documentId);
    },
    placeholderData: (prev) => prev,
  });
};
