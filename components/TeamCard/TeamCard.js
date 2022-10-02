import React from "react";
import Image from "next/image";
import utilStyles from "../../styles/utils.module.css";
import styles from "./TeamCard.module.css";

const TeamCard = ({ name, last_name, title, description, reverse }) => {
  const rev = reverse ? styles.card_reverse : "";
  return (
    <div className={`${styles.card} ${rev}`}>
      <div className={styles.basic_info}>
        <div className={styles.img_wrapper}>
          <Image
            className={`${utilStyles.borderCircle} ${styles.image}`}
            src={"/images/meet_the_team/" + name.toLowerCase() + ".jpg"}
            height="50"
            width="50"
            layout="responsive"
          />{" "}
        </div>
        <h1 className={styles.name}>
          {name} {last_name}
        </h1>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TeamCard;
