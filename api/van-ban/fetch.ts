import { API_BASE_URL } from "@/lib/consts";

export type VanBanDto = {
  id: string;
  documentId: string;
  tieu_de: string;
  noi_dung: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string | null;
};

/**
 * Fetch all "văn bản" records from the Strapi API.
 * Returns the raw DTO structure returned by Strapi.
 */
export async function fetchAllVanBans(): Promise<{ data: VanBanDto[] } | undefined> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/van-bans`);
    const json = await res.json();
    return json as { data: VanBanDto[] };
  } catch (err) {
    console.error('fetchAllVanBans error:', err);
    return undefined;
  }
}
