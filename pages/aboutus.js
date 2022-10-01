import Layout from "../components/layout";
import Image from "next/image";
import { InstagramEmbed, TikTokEmbed } from "react-social-media-embed";
import styles from "../styles/aboutus.module.css";
import { useState } from "react";

export const aboutus = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      name,
      email,
      message,
    };

    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    });
  };

  return (
    <Layout>
      <div>
        <h1>About Us</h1>
      </div>
      <div className={styles.row}>
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
      <div className={styles.socials_container}>
        <h2>Socials</h2>
        <div className={styles.instagram_container}>
          <h3>Instagram</h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InstagramEmbed
              url="https://www.instagram.com/p/CiyIF7MvwGj/"
              width="100%"
            />
          </div>
        </div>
        <div className={styles.tiktok_container}>
          <h3>TikTok</h3>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TikTokEmbed
              url="https://www.tiktok.com/@turtle.reviews/video/7149627895449783598?is_copy_url=1&is_from_webapp=v1"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div className={`${styles.contact_us_form_container} ${styles.row}`}>
        <h2>Contact Us</h2>
        <form className={styles.contact_us_form}>
          <formgroup className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className={styles.inputField}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </formgroup>

          <formgroup className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className={styles.inputField}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </formgroup>

          <formgroup className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              className={styles.inputField}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </formgroup>

          <input
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          />
        </form>
      </div>
    </Layout>
  );
};

export default aboutus;
