import Head from "next/head";
import { Application } from "../components/Application";
import { Clinic } from "../components/Clinic";
import { Contraction } from "../components/Contraction";
import { Doubts } from "../components/Doubts";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HowDidHelpYou } from "../components/HowDidHelpYou";
import { Information } from "../components/Information";
import { Plan } from "../components/Plan";
import { Vantage } from "../components/Vantage";
import { Toppings } from "../components/Toppings";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.firstGlobalContainer}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <title>Plamev</title>

        <meta name="description" content="plamev" />

        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className={styles.Body}>
        <Toppings />
        <Contraction />
        <Information />
        <Application />
        <Clinic />
        <Vantage />
        <Doubts />
        <Plan />
        <HowDidHelpYou />
      </div>

      <Footer />
    </div>
  );
}
