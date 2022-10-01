import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../styles/meettheteam.module.css";
import Image from "next/image";
import TeamCard from "../components/TeamCard/TeamCard";
export default function meetttheteam() {
  return (
    <Layout>
      <div className={styles.header}>
        <h1>Meet the team</h1>
      </div>

      <div className={styles.card_container}>
        <TeamCard
          name="Grant"
          last_name="Schowalter"
          title="Reviewer and Web Designer"
          description="My name is Grant Schowalter and in my freetime I like to watch
        as many movies as possible. I studied cinema and computer science in college and I figured I would try my hand at
        engaging with and growing the entertainment community by making this
        site."
        />
        <TeamCard
          name="Patrick"
          last_name="Russo"
          title="Reviewer"
          reverse={true}
          description="Hi I’m Patrick. During the day, I am a digital marketer, but
        after hours I write movie reviews. I’ve always loved watching
        movies sharing great movie recommendations with others if the
        opportunity presents itself. I am also the proud father of a
        sweet two year tabby and also very much enjoy playing chess."
        />
        <TeamCard
          name="Andrew"
          last_name="Lee"
          title="Reviewer"
          description="Nulla sit reprehenderit enim aliqua ex ea.Laboris et sunt id Lorem laborum dolore veniam sit exercitation ex. Laboris consectetur ex ad amet aliquip occaecat aliquip dolor reprehenderit culpa cillum. Ex laboris voluptate dolor nostrud voluptate velit pariatur voluptate."
        />
      </div>
    </Layout>
  );
}
