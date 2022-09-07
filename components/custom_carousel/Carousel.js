import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import howl from "/public/images/carousel_media/howl.jpg";
import Image from "next/image";
import styles from "./carousel.module.css";
import Autoplay from "embla-carousel-autoplay";

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <Image
            src={howl}
            width="1600px"
            height="900px"
            layout="responsive"
          ></Image>
          1
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={howl}
            width="1600px"
            height="900px"
            layout="responsive"
          ></Image>
          2
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={howl}
            width="1600px"
            height="900px"
            layout="responsive"
          ></Image>
          3
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={howl}
            width="1600px"
            height="900px"
            layout="responsive"
          ></Image>
          4
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={howl}
            width="1600px"
            height="900px"
            layout="responsive"
          ></Image>
          5
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={howl}
            width="1600px"
            height="900px"
            layout="responsive"
          ></Image>
          6
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={howl}
            width="1600px"
            height="900px"
            layout="responsive"
          ></Image>
          7
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={howl}
            width="1600px"
            height="900px"
            layout="responsive"
          ></Image>
          8
        </div>
        <div className={styles.embla__slide}>
          <Image
            src={howl}
            width="1600px"
            height="900px"
            layout="responsive"
          ></Image>
          9
        </div>
      </div>
    </div>
  );
};

export default Carousel;
