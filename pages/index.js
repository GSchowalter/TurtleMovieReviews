import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Gallery from "../components/gallery";

const SLIDE_COUNT = 5;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    // <Layout home>
    //   <Head>
    //     <title>{siteTitle}</title>
    //   </Head>
    //   <section className={utilStyles.headingMd}>
    //     <p>
    //       &emsp;&emsp; Saving your time in our fast paced world. Let us navigate
    //       the ocean of content out there today so you can save time watching TV
    //       and Movies that are worth watching. We take our time so you don't have
    //       to!
    //     </p>
    //   </section>
    //   <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
    //     <h2 className={utilStyles.headingLg}>Reviews</h2>
    //     <ul className={utilStyles.list}>
    //       {allPostsData.map(({ id, review_date, title }) => (
    //         <li className={utilStyles.listItem} key={title + review_date}>
    //           <Link href={`/posts/${title.replace(/\s/g, "")}`}>
    //             <a>{title}</a>
    //           </Link>
    //           <br />
    //           <small>{review_date}</small>
    //         </li>
    //       ))}
    //     </ul>
    //   </section>
    // </Layout>
    <Gallery slides={slides} />
  );
}
