import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

const Card = (props) => {
  const _route = "/posts/" + `${props.route}`;
  return (
    <div className={styles.card}>
      <Link href={_route}>
        <Image
          src={props.image_url}
          layout="responsive"
          height="900px"
          width="1600px"
        />
      </Link>
      <span className={styles.text_overlay}>{props.title}</span>
    </div>
  );
};

export default Card;
