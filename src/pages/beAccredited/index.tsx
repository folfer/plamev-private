import Head from 'next/head';
import { Accredited } from '../../components/Accredited';
import { AccreditedBonus } from '../../components/AccreditedBonus';
import { AccreditedDoubts } from '../../components/AccreditedDoubts';
import { AccreditedHelp } from '../../components/AccreditedHelp';
import { AccreditedRegistration } from '../../components/AccreditedRegistration';
import { AccreditedService } from '../../components/AccreditedService';
import { AccreditedVantage } from '../../components/AccreditedVantage';

import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import styles from './styles.module.scss';

export default function BeAccredited() {
  return (
    <>
      <Header />
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
      <div className={styles.accreditedNetwork}>
        <Accredited />
        <AccreditedService />
        <AccreditedVantage />
        <AccreditedBonus />
        <AccreditedDoubts />
        <AccreditedRegistration />
        <AccreditedHelp />
        <Footer />
      </div>
    </>
  );
}
