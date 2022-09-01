import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const title = "Turtle Reviews";
export const siteTitle = "Turtle Reviews";

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="Turtle reviews. Reviewing all the movies."
        />
        <meta
          property="og:image"
          content="https://www.turtlereviews.com/logo-blue.svg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/header.svg"
              height={50}
              width={600}
              alt={title}
            />
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/logo-light.svg"
                  height={108}
                  width={108}
                  alt={title}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{title}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
