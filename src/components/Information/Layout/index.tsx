import { IInformationLayoutProps } from "../data";
import styles from "../Layout/styles.module.scss";

import Image from "next/image"

import cardImg from "../../../../public/card.png"

export const Information = ({
  toggleAttendance,
  togglePolicies,
  toggleInstitutional,
  setToggleAttendance,
  setTogglePolicies,
  setToggleInstitutional,
}: IInformationLayoutProps) => {
  return (
    <main className={styles.firstContainer}>
      <div className={styles.cardImg}>
        <span>
          <Image src={cardImg} />
        </span>
      </div>

      <section className={styles.contentContainer}>
        <div>
          <h1>Microchipagem é coisa do passado!</h1>
          <p>A ID PET é a carteirinha exclusiva da Plamev Pet com todos os dados do seu peludinho e, ao cadastrá-la no aplicativo, você já pode usar o plano!</p>
          <ul>
            <li>Ative o plano sem sair de casa</li>
            <li>Aprovação em até 72 horas</li>
            <li>Uso imediato do plano após aprovação</li>
            <li>Sem necessidade de microchipagem</li>
            <li>Sem procedimento cirúrgico</li>
          </ul>
        </div>
        <button>Contrate sem burocracia</button>
      </section>
    </main>
  );
};
