import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Card.module.css";

const Card = (props) => {
  const _route = "/posts/" + `${props.route}`;
  return (
    <div>
      {props.title}
      <Link href={_route}>
        <Image src={props.image_url} width="100px" height="100px" />
      </Link>
    </div>
  );
};

export default Card;
