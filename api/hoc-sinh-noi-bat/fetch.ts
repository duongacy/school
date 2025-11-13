import { API_BASE_URL } from "@/lib/consts";
import {
  StrapiCollectionResponse,
  StrapiImage,
  StrapiSingleResponse,
} from "../strapi-common-type";
import { bindParams } from "@/lib/utils";

export type StudentDto = {
  id: string;
  documentId: string;
  ten: string;
  truong: string;
  lop: string;
  thanh_tich: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hinh_anh?: StrapiImage;
};

export async function getAllStudents(params?: Record<string, string | number>) {
  try {
    const response = await fetch(
      bindParams(`${API_BASE_URL}/api/hoc-sinh-noi-bats`, {
        ...params,
        populate: "hinh_anh",
      })
    );
    const result = await response.json();
    return result as StrapiCollectionResponse<StudentDto>;
  } catch (error) {
    console.error(error);
  }
}

export async function getStudentByDocumentId(documentId: string) {
  try {
    const response = await fetch(
      bindParams(`${API_BASE_URL}/api/hoc-sinh-noi-bats/${documentId}`, {
        populate: "hinh_anh",
      })
    );
    const result = await response.json();
    return result as StrapiSingleResponse<StudentDto>;
  } catch (error) {
    console.error(error);
  }
}
