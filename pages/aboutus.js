import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import aboutusStyles from "../styles/aboutus.module.css";
import Image from "next/image";

export default function aboutus({ allPostsData }) {
  return (
    <Layout>
      <section className={`${aboutusStyles.row}`}>
        <div className={aboutusStyles.column}>
          <div className={aboutusStyles.card}>
            <div className={aboutusStyles.image_wrap}>
              <Image
                className={`${utilStyles.borderCircle}`}
                src="/images/profile400x400.jpg"
                height={200}
                width={200}
                alt="Grant Schowalter"
              />
            </div>
            <div className={aboutusStyles.card_container}>
              <h2>Grant Schowalter</h2>
              <p className={aboutusStyles.title}>
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

        <div className={aboutusStyles.column}>
          <div className={aboutusStyles.card}>
            <div className={aboutusStyles.image_wrap}>
              <Image
                className={`${utilStyles.borderCircle}`}
                src="/images/patrick_profile.jpg"
                height={200}
                width={200}
                alt="Patrick Russo"
              />
            </div>
            <div className={aboutusStyles.card_container}>
              <h2>Patrick Russo</h2>
              <p className={aboutusStyles.title}>
                Marketing lead, Reviewer, and Founder
              </p>
              <p>
                My name is Patrick and I like to rap, a rat a tat tat, ta tat ta
                tat. I also like watching movies, as you can tell from my indie
                a24 shirt. #indiedreamcore
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
