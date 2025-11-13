import { API_BASE_URL } from "@/lib/consts";
import { bindParams } from "@/lib/utils";
import {
  StrapiCollectionResponse,
  StrapiSingleResponse,
} from "../strapi-common-type";

export type VanBanDto = {
  id: string;
  documentId: string;
  tieu_de: string;
  noi_dung: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export async function fetchAllVanBans(
  params?: Record<string, string | number>
) {
  try {
    const res = await fetch(bindParams(`${API_BASE_URL}/api/van-bans`, params));
    const json = await res.json();
    return json as StrapiCollectionResponse<VanBanDto>;
  } catch (err) {
    console.error("fetchAllVanBans error:", err);
    return undefined;
  }
}

export async function fetchVanBanByDocumentId(documentId: string) {
  try {
    const res = await fetch(
      bindParams(`${API_BASE_URL}/api/van-bans/${documentId}`, {})
    );
    const json = await res.json();
    return json as StrapiSingleResponse<VanBanDto>;
  } catch (err) {
    console.error("fetchVanBanByDocumentId error:", err);
    return undefined;
  }
}
