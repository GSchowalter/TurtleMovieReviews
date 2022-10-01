import Layout from "../components/layout";
import Image from "next/image";

export const meettheteam = () => {
  return (
    <Layout>
      <Image
        src="/images/about_us/header.svg"
        width="1600"
        height="900"
        layout="responsive"
      ></Image>
    </Layout>
  );
};

export default meettheteam;
