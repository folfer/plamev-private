import Image from 'next/image';
import styles from './styles.module.scss';

import graphicImg from '../../../../public/graphic.svg';
import dataImg from '../../../../public/data.svg';

export const AccreditedService = () => {
  return (
    <div className={styles.accreditedServiceContainer}>
      <h1 className={styles.title}>Porque escolher a Plamev Pet?</h1>

      <div className={styles.contentContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.itemContent}>
            <span className={styles.image}>
              <Image src={graphicImg} alt="plamev" />
            </span>
            <p className={styles.paragraph}>
              Um dos maiores planos para pets do país, com atuação nacional e
              internacional
            </p>
          </div>

          <div className={styles.itemContent}>
            <span className={styles.image}>
              <Image src={dataImg} alt="plamev" />
            </span>
            <p className={styles.paragraph}>
              Maior cobertura de serviços, com soluções para todos os bolsos e
              necessidades
            </p>
          </div>

          <div className={styles.itemContent}>
            <span className={styles.image}>
              <Image src={dataImg} alt="plamev" />
            </span>
            <p className={styles.paragraph}>
              Maior cobertura de serviços, com soluções para todos os bolsos e
              necessidades
            </p>
          </div>
        </div>
      </div>

      <button className={styles.button}>Quero ser um credenciado</button>
    </div>
  );
};
