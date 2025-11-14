import { API_FULL_URL } from "@/lib/consts";
import {
  StrapiCollectionResponse,
  StrapiImage,
  StrapiSingleResponse,
} from "../strapi-common-type";
import { bindParams } from "@/lib/utils";

export type OutstandingStudentDto = {
  documentId: string;
  name: string;
  school: string;
  class: string;
  achievement: string;
  image?: StrapiImage;
  content?: string;
};

export async function getAllStudents(params?: Record<string, string | number>) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/outstanding-students`, {
        ...params,
        populate: "image",
      })
    );
    const result = await response.json();
    return result as StrapiCollectionResponse<OutstandingStudentDto>;
  } catch (error) {
    console.error(error);
  }
}

export async function getStudentByDocumentId(documentId: string) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/outstanding-students/${documentId}`, {
        populate: "image",
      })
    );
    const result = await response.json();
    return result as StrapiSingleResponse<OutstandingStudentDto>;
  } catch (error) {
    console.error(error);
  }
}
