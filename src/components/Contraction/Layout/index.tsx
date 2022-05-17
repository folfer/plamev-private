import { IContractionLayoutProps } from "../data";
import styles from "../Layout/styles.module.scss";

import activeImg from "../../../../public/active.svg"
import checkImg from "../../../../public/check.svg"
import contractImg from "../../../../public/contract.svg"


import Image from "next/image"
import { setMaxListeners } from "events";

export const Contraction = ({
  toggleMenu,
}: IContractionLayoutProps) => {
  return (
    <main className={styles.firstContainer}>
      <section className={styles.sectionContainer}>
        <h1>Contratação em 3 passos</h1>

        <div className={styles.hero}>
          <div>
            <div className={styles.cardImg}>
              <span>
                <Image src={contractImg} />
              </span>
            </div>
            <h2>Contratação online</h2>
            <p>Contrate o plano em menos de 5 minutos!</p>
          </div>

          <div>
            <span>
              <Image src={activeImg} />
            </span>
            <h2>Ative o plano</h2>
            <p>Cadastre a ID PET no aplicativo Plamev Appet</p>
          </div>

          <div>
            <span>
              <div>
                <div>
                  <Image src={checkImg} />
                </div>
              </div>
            </span>
            <h2>Tudo pronto</h2>
            <p>Cadastre a ID PET no aplicativo Plamev Appet</p>
          </div>
        </div>
        <button >Contrate aqui em menos de 5 minutos</button>
      </section>
    </main>
  );
};
