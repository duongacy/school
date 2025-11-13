import { API_BASE_URL } from "./consts";

export const normalizeImageUrl = (url: string) => {
  return `${API_BASE_URL}${url}`;
};
