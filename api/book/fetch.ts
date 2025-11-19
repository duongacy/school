import { API_FULL_URL } from "@/lib/consts";
import {
  StrapiCollectionResponse,
  StrapiImage,
  StrapiSingleResponse,
} from "../strapi-common-type";
import { bindParams } from "@/lib/utils";
import { GradeDto } from "../grade/fetch";
import { WriterDto } from "../writer/fetch";
import { SubjectDto } from "../subject/fetch";
import { BookTypeDto } from "../book-type/fetch";

export type BookDto = {
  documentId: string;
  name: string;
  grade: GradeDto;
  subject: SubjectDto;
  writers: WriterDto[];
  image: StrapiImage;
  file: {
    url: string;
    name: string;
  }[];
  book_types: BookTypeDto[];
};

export async function fetchAllBooks(params?: Record<string, string | number>) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/books`, {
        ...params,
        sort: "name",
        "populate[0]": "image",
        "populate[1]": "grade",
        "populate[2]": "subject",
        "populate[3]": "writers",
        "populate[4]": "file",
        "populate[5]": "book_types",
      })
    );
    const result = await response.json();
    return result as StrapiCollectionResponse<BookDto>;
  } catch (error) {
    console.error("fetchAllBooks error:", error);
    return undefined;
  }
}

export async function fetchBookByDocumentId(documentId: string) {
  try {
    const response = await fetch(
      bindParams(`${API_FULL_URL}/api/books/${documentId}`, {
        populate: "image",
      })
    );
    const result = await response.json();
    return result as StrapiSingleResponse<BookDto>;
  } catch (error) {
    console.error("fetchBookById error:", error);
    return undefined;
  }
}
