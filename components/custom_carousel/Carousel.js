import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import styles from "./carousel.module.css";
import Autoplay from "embla-carousel-autoplay";

const Carousel = ({ media }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {media.map(({ title, image_url, route }) => (
          <div className={styles.embla__slide}>
            <Link href={"/posts/" + `${route}`}>
              <Image
                src={image_url}
                width="1600px"
                height="900px"
                layout="responsive"
                className={styles.hover_image}
              />
            </Link>
            <figcaption>{title}</figcaption>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
