export const API_PROTOCOL = process.env.NEXT_PUBLIC_API_PROTOCOL || "";
export const API_HOST = process.env.NEXT_PUBLIC_API_HOST || "";
export const API_PORT = process.env.NEXT_PUBLIC_API_PORT || "";
export const API_BASE_URL = `${API_PROTOCOL}://${API_HOST}`;
export const API_FULL_URL = `${API_PROTOCOL}://${API_HOST}:${API_PORT}`;

export const APP_PROTOCOL = process.env.NEXT_PUBLIC_APP_PROTOCOL || "";
export const APP_PORT = process.env.NEXT_PUBLIC_APP_PORT || "";
export const APP_HOST = process.env.NEXT_PUBLIC_APP_HOST || "";
export const APP_BASE_URL = `${APP_PROTOCOL}://${APP_HOST}`;
export const APP_FULL_URL = `${APP_PROTOCOL}://${APP_HOST}:${APP_PORT}`;
