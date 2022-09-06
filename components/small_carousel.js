import React, { useState, useEffect, useCallback } from "react";
import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./smallcarousel.module.css";
import media1 from "/public/images/carousel_media/bodiesbodiesbodies.webp";
import media2 from "/public/images/carousel_media/lakemungo.jpg";
import media3 from "/public/images/carousel_media/onthecountofthree.webp";
import media4 from "/public/images/carousel_media/therehearsal.jpeg";
import media5 from "/public/images/carousel_media/undertheskin.jpg";
import media6 from "/public/images/carousel_media/theshining.jpg";

export const media = [media1, media2, media3, media4, media5, media6];
export const mediaByIndex = (index) => {
  return media[index % media.length];
};

const Smallcarousel = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={viewportRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <div className={styles.embla__slide} key={index}>
              <div className={styles.embla__slide__inner}>
                <img
                  className={styles.embla__slide__img}
                  src={mediaByIndex(index).src}
                  alt="A movie review"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};

export default Smallcarousel;
