import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ReviewGallery.module.css";
import Card from "./Card.js";

const ReviewGallery = (allPostsData) => {
  console.log(allPostsData);
  return (
    <div>
      <Link href="#gallery">
        <Image src="/BrowseButton.svg" width="100px" height="100px" />
      </Link>
      <div id="gallery">
        <div className={styles.cards}>
          {allPostsData.cards.map(({ title, image_url }) => (
            <Card title={title} image_url={image_url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewGallery;
