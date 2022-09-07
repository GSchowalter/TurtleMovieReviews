import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

const Card = (props) => {
  const _route = "/posts/" + `${props.route}`;
  return (
    <div className={styles.card}>
      <div className={styles.img_hover}>
        <Image
          src={props.image_url}
          layout="responsive"
          height="900px"
          width="1600px"
        />

        <Link href={_route}>
          <figcaption>{props.title}</figcaption>
        </Link>
      </div>
    </div>
  );
};

export default Card;
