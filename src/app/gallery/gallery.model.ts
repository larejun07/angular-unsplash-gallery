export interface Photo {
  id: string;
  description: string;
  alt_description: string;
  width: number;
  height: number;
  color: string;
  urls: PhotoSizes;
  likes: number;
}

export interface PhotoSizes {
  raw: string;
  full: string;
  regular: string;
  small: string;
 thumb: string;
}