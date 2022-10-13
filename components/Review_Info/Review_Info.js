import React from "react";
import Image from "next/image";
import styles from "./Review_Info.module.css";
import utilStyles from "../../styles/utils.module.css";

const Review_Info = (props) => {
  const first_name = props.reviewer.split(" ")[0].toLowerCase();
  return (
    <>
      <div className={styles.reviewer_container}>
        <div className={styles.a}></div>
        <div className={styles.profile_pic}>
          <Image
            className={utilStyles.borderCircle}
            src={`/images/meet_the_team/${first_name}.jpg`}
            width={150}
            height={150}
            display="responsive"
          ></Image>
        </div>
        <div className={styles.name}>
          <h2>{props.reviewer}</h2>
        </div>
        <div className={styles.date}>
          <h2>{props.review_date}</h2>
        </div>
        <div className={styles.b}></div>
      </div>
    </>
  );
};

export default Review_Info;
