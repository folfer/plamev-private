import Image from 'next/image'
import { IPlanLayoutProps } from "../data";
import styles from "../Layout/styles.module.scss";

import slimImg from "../../../../public/slim.svg"
import advanceImg from "../../../../public/advance.svg"
import platinumImg from "../../../../public/platinum.svg"
import twoStarsImg from "../../../../public/two-stars.png"
import threeStarsImg from "../../../../public/three-stars.png"
import fiveStarsImg from "../../../../public/five-stars.png"
import crownImg from "../../../../public/crown.svg"

export const Plan = ({
  toggleAttendance,
  togglePolicies,
  toggleInstitutional,
  setToggleAttendance,
  setTogglePolicies,
  setToggleInstitutional,
}: IPlanLayoutProps) => {
  return (
    <main className={styles.firstContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Proteção que combina com <br /> seu bolso!</h1>

        <div className={styles.planContainer}>
          <section className={styles.planContent}>
            <div className={styles.logoContainer}>
              <div className={styles.slimImg}>
                <Image src={slimImg} alt="logo slim" />
              </div>
              <h1 className={styles.planTitle}>Slim</h1>
            </div>
            <div className={styles.discountContainer}>
              <p className={styles.titleDiscount}>30% OFF</p>
              <p className={styles.descriptionDiscount}>durante 6 meses</p>
            </div>
            <div className={styles.planValue}>
              <p className={styles.initialValue}>de <s>R$39.90</s> por</p>
              <p className={styles.finalValue}>R$ 27,99</p>
            </div>
            <div className={styles.description}>
              <p className={styles.accession}>Taxa <b>ZERO</b> de adesão</p>
              <p className={styles.coverage}>
                <b>1</b> Procedimento com <b>CARÊNCIA ZERO</b>
              </p>
              <p className={styles.bonus}>+1 ano de S.O.S Pet</p>
            </div>
            <div className={styles.buttonsContainer}>
              <a className={styles.link} type="button">ver cobertura</a>
              <button className={styles.button} type="button">Contratar</button>
            </div>
            <div className={styles.assessment}>
              <Image src={twoStarsImg} alt="duas estrelas" />
            </div>
          </section>

          <section className={styles.planContent}>
            <div className={styles.logoContainer}>
              <div className={styles.advanceImg}>
                <Image src={advanceImg} alt="logo advanced" />
              </div>
              <h1 className={styles.planTitle}>Advance</h1>
            </div>
            <div className={styles.discountContainer}>
              <p className={styles.titleDiscount}>30% OFF</p>
              <p className={styles.descriptionDiscount}>durante 6 meses</p>
            </div>
            <div className={styles.planValue}>
              <p className={styles.initialValue}>de <s>R$142.80</s> por</p>
              <p className={styles.finalValue}>R$ 99,99</p>
            </div>

            <div className={styles.description}>
              <p className={styles.accession}>Taxa <b>ZERO</b> de adesão</p>
              <p className={styles.coverage}>
                <b>1</b> Procedimento com <b>CARÊNCIA ZERO</b>
              </p>
              <p className={styles.bonus}>+1 ano de S.O.S Pet</p>
            </div>
            <div className={styles.buttonsContainer}>
              <a className={styles.link} type="button">ver cobertura</a>
              <button className={styles.button} type="button">Contratar</button>
            </div>
            <div className={styles.assessment}>
              <Image src={threeStarsImg} alt="três estrelas" />
            </div>
          </section>

          <section className={styles.platinumContainer}>
            <div className={styles.logoContainer}>
              <div className={styles.platinumImg}>
                <Image src={platinumImg} alt="logo platinum" />
              </div>
              <h1 className={styles.planTitle}>Platinum</h1>
            </div>
            <div className={styles.discountContainer}>
              <p className={styles.titleDiscount}>30% OFF</p>
              <p className={styles.descriptionDiscount}>durante 6 meses</p>
            </div>
            <div className={styles.planValue}>
              <p className={styles.initialValue}>de <s>R$225.70</s> por</p>
              <p className={styles.finalValue}>R$ 157,99</p>
            </div>

            <div className={styles.description}>
              <p className={styles.accession}>Taxa <b>ZERO</b> de adesão</p>
              <p className={styles.coverage}>
                <b>1</b> Procedimento com <b>CARÊNCIA ZERO</b>
              </p>
              <p className={styles.bonus}>+1 ano de S.O.S Pet</p>
            </div>
            <div className={styles.buttonsContainer}>
              <a className={styles.link} type="button">ver cobertura</a>
              <button className={styles.button} type="button">Contratar</button>
            </div>
            <div className={styles.assessment}>
              <Image src={fiveStarsImg} alt="cinco estrelas" />
            </div>
            <div className={styles.crown}>
              <Image src={crownImg} alt="mais vendido" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
