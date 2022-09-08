import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/meettheteam.module.css";
import Image from "next/image";

export default function meetttheteam() {
  return (
    <Layout>
      <section className={`${styles.row}`}>
        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.image_wrap}>
              <Image
                className={`${utilStyles.borderCircle}`}
                src="/images/profile400x400.jpg"
                height={200}
                width={200}
                alt="Grant Schowalter"
              />
            </div>
            <div className={styles.card_container}>
              <h2>Grant Schowalter</h2>
              <p className={styles.title}>
                Web Designer, Reviewer, and Founder
              </p>
              <p>
                My name is Grant Schowalter and in my freetime I like to watch
                as many movies as possible. I figured I would try my hand at
                engaging and growing the entertainment community by making this
                site.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.column}>
          <div className={styles.card}>
            <div className={styles.image_wrap}>
              <Image
                className={`${utilStyles.borderCircle}`}
                src="/images/patrick_profile.jpg"
                height={200}
                width={200}
                alt="Patrick Russo"
              />
            </div>
            <div className={styles.card_container}>
              <h2>Patrick Russo</h2>
              <p className={styles.title}>
                Marketing lead, Reviewer, and Founder
              </p>
              <p>
                Hi I’m Patrick. During the day, I am a digital marketer, but
                after hours I write movie reviews. I’ve always loved watching
                movies sharing great movie recommendations with others if the
                opportunity presents itself. I am also the proud father of a
                sweet 2 year tabby and also very much enjoy playing chess.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
