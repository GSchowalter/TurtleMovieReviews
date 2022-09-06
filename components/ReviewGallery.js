import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./ReviewGallery.module.css";
import Card from "./Card/Card.js";

const ReviewGallery = (allPostsData) => {
  console.log(allPostsData);
  return (
    <div>
      <div className={styles.browse_container}>
        <Link href="#gallery">
          <Image src="/BrowseButton.svg" width="150px" height="100px" />
        </Link>
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
