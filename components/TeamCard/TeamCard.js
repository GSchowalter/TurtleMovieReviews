import React from "react";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import styles from "./TeamCard.module.css";

const TeamCard = ({ name, title, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img_wrapper}>
        <Image
          className={`${utilStyles.borderCircle} ${styles.image}`}
          src={"/images/" + name.toLowerCase() + ".jpg"}
          height="50"
          width="50"
          layout="responsive"
        />{" "}
      </div>
      <h1 className={styles.name}>{name}</h1>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TeamCard;
