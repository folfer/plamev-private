import Image from 'next/image';
import styles from '../Layout/styles.module.scss';

import phoneImg from '../../../../public/smartphone.png';
import startImg from '../../../../public/start.svg';
import Link from 'next/link';

export const Application = () => {
  return (
    <main className={styles.firstContainer}>
      <section className={styles.sectionContainer}>
        <div className={styles.container}>
          <div className={styles.contentContainer}>
            <h1 className={styles.title}>
              No aplicativo Plamev Appet você acessa todos os benefícios do
              plano do seu amigo a 1 clique:
            </h1>

            <ul className={styles.list}>
              <li>Agenda Pet</li>
              <li>Rede Crendenciada</li>
              <li>Extrato Financeiro</li>
              <li>Reembolso</li>
              <li>Pet Educação</li>
              <li>Saúde em dia e muito mais...</li>
            </ul>
          </div>
          <Link href="/checkouts">
            <button className={styles.button}>Contrate sem burocracia</button>
          </Link>
        </div>
      </section>

      <div className={styles.imageContainer}>
        <div className={styles.phoneImg}>
          <Image src={phoneImg} />
        </div>
        {/* <div className={styles.video}>
          <div className={styles.playerContainer}>
            <div className={styles.player}>
              <Image src={startImg} />
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
};
