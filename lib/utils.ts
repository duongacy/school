import { API_FULL_URL } from "./consts";

export const normalizeImageUrl = (url: string) => {
  return `${API_FULL_URL}${url ?? ""}`;
};

// lightweight debounce utility to avoid pulling lodash for a single helper
export function debounce<T extends (...args: any[]) => void>(fn: T, wait = 300) {
  let timer: ReturnType<typeof setTimeout> | null = null;
  return function (...args: Parameters<T>) {
    if (timer) clearTimeout(timer as any);
    timer = setTimeout(() => fn(...args), wait);
  };
}

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
