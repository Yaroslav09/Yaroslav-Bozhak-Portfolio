export function imageUrl(path) { 
    const imageUrl = new URL(`./assets/${path}`, import.meta.url).href;
      return imageUrl;
}