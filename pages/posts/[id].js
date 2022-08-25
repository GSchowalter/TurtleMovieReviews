import Layout from "../../components/layout";
import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Date from "../../components/date";
import utilStyles from "../../styles/utils.module.css";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <div className={utilStyles.cinema_image}>
          <img src={postData.image_url} />
        </div>

        <h1 className={utilStyles.heading2Xl}>{postData.title}</h1>
        <h3 className={utilStyles.headingMd}>{postData.release_year}</h3>
        <h3 className={utilStyles.headingMd}>
          Directed by {postData.director}
        </h3>
        <h3 className={utilStyles.headingMd}>Starring {postData.starring}</h3>
        <h2 className={utilStyles.headingXl}>
          Score: {postData.review_rating}
        </h2>
        <div className={utilStyles.lightText}>
          {postData.reviewer} <br></br>
          <Date dateString={postData.review_date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
