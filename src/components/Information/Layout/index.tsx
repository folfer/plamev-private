import styles from '../Layout/styles.module.scss';

import Image from 'next/image';

import cardImg from '../../../../public/card.png';
import Link from 'next/link';

export const Information = () => {
  return (
    <main className={styles.firstContainer}>
      <div className={styles.imageContainer}>
        <div className={styles.cardImg}>
          <Image src={cardImg} alt="plamev" />
        </div>
      </div>

      <section className={styles.sectionContainer}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Microchipagem é coisa do passado!</h1>

          <p className={styles.paragraph}>
            A ID PET é a carteirinha exclusiva da Plamev Pet com todos os dados
            do seu peludinho e, ao cadastrá-la no aplicativo, você já pode usar
            o plano!
          </p>

          <ul className={styles.list}>
            <li>Ative o plano sem sair de casa</li>
            <li>Aprovação em até 72 horas</li>
            <li>Uso imediato do plano após aprovação</li>
            <li>Sem necessidade de microchipagem</li>
            <li>Sem procedimento cirúrgico</li>
          </ul>
        </div>

        <Link href="/checkouts">
          <button className={styles.button}>Contrate sem burocracia</button>
        </Link>
      </section>
    </main>
  );
};
