import Layout from "../components/layout";
import Image from "next/image";

export const ratingsystem = () => {
  return (
    <Layout>
      <Image
        src="/images/rating_system/header.svg"
        width="1049"
        height="156"
        layout="responsive"
      ></Image>
      <Image
        src="/images/rating_system/Rating_System_Graph.svg"
        width="1600"
        height="900"
        layout="responsive"
      ></Image>
    </Layout>
  );
};

export default ratingsystem;
