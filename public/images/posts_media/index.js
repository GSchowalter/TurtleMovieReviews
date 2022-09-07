import media1 from "./media-1.webp";
import media2 from "./media-2.jpg";
import media3 from "./media-3.webp";
import media4 from "./media-4.jpeg";
import media5 from "./media-5.jpg";
import media6 from "./media-6.jpg";

export const media = [media1, media2, media3, media4, media5, media6];
export const mediaByIndex = (index) => {
  return media[index % media.length];
};
