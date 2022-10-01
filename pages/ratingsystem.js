import Layout from "../components/layout";
import Image from "next/image";
import styles from "../styles/ratingsystem.module.css";

export const ratingsystem = () => {
  return (
    <Layout>
      <div className={styles.rating_system_container}>
        <Image
          src="/images/rating_system/header.svg"
          width="1049"
          height="156"
          layout="responsive"
        ></Image>
        <p>
          Here at Turtle Reviews we have a unique rating system that captures
          the true gap in the quality of entertainment. Instead of using a
          linear scale (One to five stars or rating from one to ten) we assign
          each subject a Fibonacci number. Why? Well because quality does not
          scale linearly. The difference between a bad movie and an ok movie
          isn't really that much when you consider how fantastic and life
          changing movies can be. Because of this feel that classifying movies
          along the fibonacci sequence allows us to express our gratitude for
          movies more.
        </p>

        <Image
          src="/images/rating_system/Rating_System_Graph.svg"
          width="1600"
          height="900"
          layout="responsive"
        ></Image>
        <p>
          The only bad rating a movie can get it a one. Most movies and tv shows
          out there today fall into the one, two, or three categories. That
          being said we like to review stuff that is quality and therefore a lot
          of our reviews will be positive. If a movie gets a three or above you
          can take that as our stamp of aproval. If a movie gets over a three
          that is considered next level entertainment. I higher threshold where
          you wont only be entertained but somehow moved. Eights are movies that
          will change your view or affect you deeply. Thirteens are rare and
          only given out about once per year for those films that will move
          audiences in a profoundly deep and personal way.
        </p>
      </div>
    </Layout>
  );
};

export default ratingsystem;
