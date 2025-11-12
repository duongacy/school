type StrapiImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
};

type StrapiImage = {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string | null;
  formats: {
    thumbnail: StrapiImageFormat;
    small: StrapiImageFormat;
    medium: StrapiImageFormat;
    large: StrapiImageFormat;
  };
};

type StrapiEvent = {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  locale: string;
  tieu_de: string;
  mo_ta: string;
  noi_dung: string;
  ngay: string;
  hinh_anh?: StrapiImage;
};

export async function getAllEvents() {
  try {
    const response = await fetch(
      "http://127.0.0.1:1337/api/events?populate=hinh_anh"
    );
    const result = await response.json();
    return result as { data: StrapiEvent[] };
  } catch (error) {
    console.error(error);
  }
}
