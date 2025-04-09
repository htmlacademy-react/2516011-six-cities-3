export function addIdToImages(images: string[]): { id: string; url: string }[] {
  return images.map((url) => ({
    id: crypto.randomUUID(),
    url,
  }));
}
