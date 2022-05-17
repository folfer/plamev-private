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
        <meta
          name="description"
          content="Viva mais tempo ao lado do seu melhor amigo. Com o plano de saúde, você protege seu pet o ano todo, sem passar aperto na hora de uma emergência."
        />
        <meta property="og:title" content="Plamev" />
        <meta
          property="og:description"
          content="
          Viva mais tempo ao lado do seu melhor amigo. Com o plano de saúde, você protege seu pet o ano todo, sem passar aperto na hora de uma emergência."
        />
        <meta property="og:url" content="https://plamev-private.vercel.app/" />
        <meta property="og:type" content="website" />
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
