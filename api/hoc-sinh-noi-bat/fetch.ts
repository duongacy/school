import { API_BASE_URL } from "@/lib/consts";
import { StrapiImage } from "../strapi-common-type";

type StrapiStudent = {
  id: string;
  documentId: string;
  ten: string;
  truong: string;
  lop: string;
  thanh_tich: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
  hinh_anh?: StrapiImage;
};

export async function getAllStudents() {
  try {
    const response = await fetch(
      `${API_BASE_URL}/api/hoc-sinh-noi-bats?populate=hinh_anh`
    );
    const result = await response.json();
    return result as { data: StrapiStudent[] };
  } catch (error) {
    console.error(error);
  }
}
