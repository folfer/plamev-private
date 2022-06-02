import Image from "next/image";
import styles from "./styles.module.scss";

import dogImg from "../../../../public/dog.png"

export const AccreditedVantage = () => {
  return (
    <div className={styles.accreditedVantageContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={dogImg} alt="imagem de bulldog" />
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor</h1>

          <ul className={styles.list}>
            <li className={styles.itemList}>Retenção</li>
            <li className={styles.itemList}>Recorrência</li>
            <li className={styles.itemList}>Previsibilidade de faturamento</li>
            <li className={styles.itemList}>Gestão de uso de atendimento</li>
            <li className={styles.itemList}>Recebimento integral direto em conta</li>
            <li className={styles.itemList}>Tabela de repasse atrativa</li>
            <li className={styles.itemList}>Campanhas Contínuas e atrativas para os clientes</li>
          </ul>

          <button className={styles.button}>Quero ser credenciado</button>
        </div>
      </div>
    </div>
  );
}