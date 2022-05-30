import Head from "next/head";
import { Application } from "../components/application";
import { Clinic } from "../components/clinic";
import { Contraction } from "../components/Contraction";
import { Doubts } from "../components/Doubts";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { HowDidHelpYou } from "../components/HowDidHelpYou";
import { Information } from "../components/Information";
import { Plan } from "../components/plan";
import { Toppings } from "../components/Toppings";
import { Vantage } from "../components/vantage";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <div className={styles.firstGlobalContainer}>
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
