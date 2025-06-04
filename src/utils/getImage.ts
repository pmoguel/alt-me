import { getImage as getAstroImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

export async function getImage(image: ImageMetadata) {
  return await getAstroImage({ src: image, width: 800, height: 800 });
} 