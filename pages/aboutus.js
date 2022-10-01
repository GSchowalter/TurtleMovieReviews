import Layout from "../components/layout";
import Image from "next/image";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";
import styles from "../styles/aboutus.module.css";

export const aboutus = () => {
  return (
    <Layout>
      <div>
        <h1>About Us</h1>
      </div>
      <div>
        <h2>Our Mission</h2>
        <p>
          We are dedicated to providing practical and thoughtful movie reviews
          to our audience. We want our readers to trust that what they watch
          will be worth their time. Entertainment requires commitment and it is
          our thinking that you shouldn't have to waist your time with movies
          and shows that aren't worth watching. Use us as a guide to help you
          find the quality in the sea of mediocrity.
        </p>
      </div>
      <div>
        <h2>Socials</h2>
        <div className={styles.instagram_container}>
          <h3>Instagram</h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/CiyIF7MvwGj/"
              width={550}
            />
          </div>
        </div>
        <div className={styles.tiktok_container}>
          <h3>TikTok</h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TikTokEmbed
              url="https://www.tiktok.com/@turtle.reviews/video/7149627895449783598?is_copy_url=1&is_from_webapp=v1"
              width={550}
            />
          </div>
        </div>
      </div>
      <div>
        <h2>Contact Us</h2>
      </div>
    </Layout>
  );
};

export default aboutus;
