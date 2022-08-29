import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function about({ allPostsData }) {
  return (
    <Layout>
      <section className={`${utilStyles.lightText}`}>
        <Image
          className={`${utilStyles.borderCircle}`}
          src="/images/profile400x400.jpg"
          height={200}
          width={200}
          alt="Grant Schowalter"
        />
        <p>
          My name is Grant Schowalter and I am a Technical IP Litigation
          Consultant (quite a mouthful I know) but in my freetime I like to
          watch as many movies as possible. I figured I would try my hand at
          turning my hobby into something real. I majored in Computer Science
          and minored in Film Studies where I learned how to make this website
          and also fill it with reviews.
        </p>
      </section>
    </Layout>
  );
}
