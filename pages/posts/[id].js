import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import Review_Info from "../../components/Review_Info/Review_Info";
import utilStyles from "../../styles/utils.module.css";
import styles from "../../styles/[id].module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className={styles.article}>
        <div className={styles.media_information}>
          {" "}
          <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
          <h3 className={utilStyles.headingMd}>{postData.release_year}</h3>
          <h3 className={utilStyles.headingMd}>
            Directed by {postData.director}
          </h3>
          <h3 className={utilStyles.headingMd}>Starring {postData.starring}</h3>
        </div>
        <div className={styles.cinema_image}>
          <img src={postData.image_url} />
        </div>
        <h2 className={utilStyles.headingXl}>
          Score: {postData.review_rating}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: postData.html_review }} />
        <div className={styles.review_info}>
          <Review_Info
            reviewer={postData.reviewer}
            review_date={postData.review_date}
          ></Review_Info>
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log("id passed to getPostData function");
  console.log(params);
  return {
    props: {
      postData,
    },
  };
}
