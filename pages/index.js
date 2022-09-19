import Head from "next/head";

import { Splash } from "../components/Splash";
import styles from "../styles/Home.module.css";

export default function Home({ page }) {
  console.log();
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>{page?.seo[0]?.fields?.title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content={page?.seo[0]?.fields?.description} />
        <meta property='og:title' content={page?.seo[0]?.fields?.title} />
        <meta
          property='og:site_name'
          content={page?.seo[0]?.fields?.sitename}
        />
        <meta property='og:url' content={page?.seo[0]?.fields?.url} />
        <meta
          property='og:description'
          content={page?.seo[0]?.fields?.description}
        />
        <meta
          property='og:image'
          content={page?.seo[0]?.fields?.ogImage?.fields?.url[0]?.url}
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='cannonical' href={page?.seo[0]?.fields?.url} />
      </Head>

      <main className={styles.main}>
        <Splash data={page?.sections} />
      </main>
    </div>
  );
}