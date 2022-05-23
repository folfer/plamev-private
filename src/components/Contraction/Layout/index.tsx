import styles from "../Layout/styles.module.scss";

import activeImg from "../../../../public/active.svg";
import checkImg from "../../../../public/check.svg";
import contractImg from "../../../../public/contract.svg";

import Image from "next/image";

export const Contraction = () => {
  return (
    <main className={styles.firstContainer}>
      <section className={styles.sectionContainer}>
        <h1 className={styles.title}>Contratação em 3 passos</h1>

        <div className={styles.contentContainer}>
          <div className={styles.itemContent}>
            <span className={styles.image}>
              <Image src={contractImg} alt="plamev" />
            </span>
            <h2 className={styles.itemTitle}>Contratação online</h2>
            <p className={styles.paragraph}>Contrate o plano em menos de 5 minutos!</p>
          </div>

          <div className={styles.itemContent}>
            <span className={styles.image}>
              <Image src={activeImg} alt="plamev" />
            </span>
            <h2 className={styles.itemTitle}>Ative o plano</h2>
            <p className={styles.paragraph}>Cadastre a ID PET no aplicativo Plamev Appet</p>
          </div>

          <div className={styles.itemContent}>
            <span className={styles.image}>
              <Image src={checkImg} alt="plamev" />
            </span>
            <h2 className={styles.itemTitle}>Tudo pronto</h2>
            <p className={styles.paragraph}>Seu pet já faz parte da familia Plamev Pet</p>
          </div>
        </div>
        <button className={styles.button}>Contrate aqui em menos de 5 minutos!</button>
      </section>
    </main>
  );
};
