import React from "react";
import Image from "next/image";

const Card = (props) => {
  console.log("props passed down to the card");
  console.log(props);
  return (
    <div>
      {props.title}
      <Image src={props.image_url} width="100px" height="100px" />
    </div>
  );
};

export default Card;
