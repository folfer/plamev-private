import Head from "next/head";
import { Application } from "../components/application";
import { Contraction } from "../components/Contraction";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Information } from "../components/Information";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.firstGlobalContainer}>
      <Head>
        <title>Plamev</title>
        <meta name="description" content="plamev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.Body}>
        <Contraction />
        <Information />
        <Application />
      </div>

      <Footer />
    </div>
  );
}
