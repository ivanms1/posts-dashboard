import Head from "next/head";

import styles from "./index.module.scss";

export default function Home() {
  return (
    <div className={styles.Container}>
      <Head>
        <title>Picky Dashboard</title>
        <meta name="Picky" content="Picky Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
