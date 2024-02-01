import { ImageObject } from 'src/types';
export function setImageObject(images?: string[] | ImageObject) {
  if (Array.isArray(images)) return images;

  if (images) {
    return { '@type': 'ImageObject', ...images };
  }
  return undefined;
}
