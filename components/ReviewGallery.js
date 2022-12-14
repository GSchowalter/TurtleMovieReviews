import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ReviewGallery.module.css";
import Card from "./Card/Card.js";

const ReviewGallery = (allPostsData) => {
  return (
    <div>
      <div className={styles.browse_container}>
        <div className={styles.wrapper}>
          <Link href="#gallery">
            <Image
              src="/images/branding/BrowseButton.svg"
              width="150px"
              height="100px"
            />
          </Link>
        </div>
      </div>
      <div id="gallery">
        <div className={styles.cards}>
          {allPostsData.cards.map(({ title, image_url, route }) => (
            <Card title={title} image_url={image_url} route={route} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewGallery;
