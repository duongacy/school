import { API_FULL_URL } from "./consts";

export const normalizeImageUrl = (url: string) => {
  return `${API_FULL_URL}${url}`;
};

export function bindParams(
  url: string,
  params?: Record<string, string | number>
): string {
  const urlObj = new URL(url);
  Object.entries(params ?? {}).forEach(([key, value]) => {
    urlObj.searchParams.append(key, value.toString());
  });
  return urlObj.toString();
}
