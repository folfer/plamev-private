import { IPlanLayoutProps } from "../../data";
import styles from "./styles.module.scss";

export const Plan = ({
  planTitle,
  descriptionPlan,
  bonusPlan,
  initialValue,
  handleTakePlanValue,
  finalValue,
}: IPlanLayoutProps) => {
  return (
    <div className={styles.planContainer}>
      <div className={styles.planHeader}>
        <div className={styles.planType}>
          <input
            onChange={handleTakePlanValue}
            className={styles.planInput}
            type="checkbox"
            value={finalValue}
          />
          <h1 className={styles.planTitle}>{planTitle}</h1>
        </div>

        <div className={styles.planValue}>
          <p className={styles.initialValue}>
            de <s>R$ {initialValue}</s> por:
          </p>
          <h1 className={styles.finalValue}>R$ {finalValue}</h1>
        </div>
      </div>

      <div className={styles.planDescription}>
        <div className={styles.paragraphContainer}>
          <p className={styles.paragraph}>
            Taxa <b>ZERO</b> de adesão
          </p>
          <p className={styles.paragraph}>
            <b>{descriptionPlan}</b> procedimentos com <b>CARÊNCIA ZERO</b>
          </p>
          <p className={styles.bonus}>{bonusPlan}</p>
        </div>

        <button className={styles.link}>
          <u>ver cobertura</u>
        </button>
      </div>
    </div>
  );
};
