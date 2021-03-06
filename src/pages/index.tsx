import Head from 'next/head';
import { Application } from '../components/application';
import { Clinic } from '../components/clinic';
import { Contraction } from '../components/Contraction';
import { Doubts } from '../components/Doubts';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HowDidHelpYou } from '../components/HowDidHelpYou';
import { Information } from '../components/Information';
import { Plan } from '../components/plan';
import { Toppings } from '../components/Toppings';
import { Vantage } from '../components/vantage';

import styles from './styles.module.scss';

export default function Home() {
  return (
    <>
      <Header />

      <div className={styles.firstGlobalContainer}>
        <Head>
          <title>Plamev</title>

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <meta name="description" content="plamev" />

          {/* <link rel="icon" href="/favicon.ico" /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap"
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
    </>
  );
}
