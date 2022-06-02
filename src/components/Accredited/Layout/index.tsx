import styles from './styles.module.scss'

export const Accredited = () => {
  return (
    <div className={styles.accreditedContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Seja um credenciado Plamev Pet e tenha mais retenção e recorrência no seu negócio</h1>

        <button className={styles.button}>Quero ser um credenciado</button>
      </div>
    </div>
  );
}