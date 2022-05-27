import { BiDotsHorizontalRounded } from "react-icons/bi";

import styles from "./styles.module.scss";

import { TextField } from "@mui/material";
import Image from "next/Image";

export const Abstract = () => {
  return (
    <div className={styles.abstractContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.headerAbstractContainer}>
          <h1 className={styles.title}>Resumo da sua compra:</h1>
          <div className={styles.planContainer}>
            <p className={styles.paragraph}>
              O plano da <b>Mada</b> é o Slim no valor <b>R$ 27,99</b>
            </p>
            <button className={styles.menuButton}>
              <BiDotsHorizontalRounded
                size={26}
                className={styles.menuButtonImg}
              />
            </button>
          </div>

          <div className={styles.discountContainer}>
            <div className={styles.discount}>
              <p className={styles.paragraphDiscount}>Desconto família</p>
              <p className={styles.paragraphDiscount}>R$00,00</p>
            </div>
            <div className={styles.discount}>
              <p className={styles.paragraphDiscount}>Subtotal</p>
              <p className={styles.paragraphDiscount}>R$27,99</p>
            </div>
            <button className={styles.information}>
              <u>ver mais informações</u>
            </button>
          </div>

          <div className={styles.couponContainer}>
            <div className={styles.inputContainer}>
              <TextField
                className={styles.dataInput}
                size="small"
                label="Insira seu cupom de desconto"
                variant="outlined"
              />
            </div>
            <button className={styles.buttonDiscount}>Aplicar cupom</button>
          </div>

          <div className={styles.totalValueContainer}>
            <p className={styles.paragraphTotalValue}>Valor total</p>
            <p className={styles.paragraphTotalValue}>R$27,90/mês</p>
          </div>

          <button className={styles.button}>Finalizar compra</button>
        </div>
        <div className={styles.noRecordContainer}>
          <h1 className={styles.noRecordTitle}>
            Que pena! Seu pet está sem proteção.
          </h1>
          <button className={styles.noRecordButton}>Proteger meu pet</button>
        </div>
      </div>
    </div>
  );
};
