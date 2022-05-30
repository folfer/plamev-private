import { BiDotsHorizontalRounded } from "react-icons/bi";

import styles from "./styles.module.scss";

import { TextField } from "@mui/material";
import { IAbstractLayoutProps } from "../../../data";

export const Abstract = ({
  petName,
  planType,
  setDetailsModal,
  detailsModal,
}: IAbstractLayoutProps) => {
  return (
    <div className={styles.abstractContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.headerAbstractContainer}>
          <h1 className={styles.title}>Resumo da sua compra:</h1>
          <div className={styles.planContainer}>
            <p className={styles.paragraph}>
              O plano da <b>{petName ? petName : ""}</b> é o Slim no valor{" "}
              <b>R${planType ? planType : "00,00"}</b>
            </p>
            <button
              onClick={() => setDetailsModal(!detailsModal)}
              className={styles.menuButton}
            >
              <BiDotsHorizontalRounded
                size={26}
                className={styles.menuButtonImg}
              />
            </button>
          </div>

          {detailsModal && (
            <div className={styles.detailsInsideModal}>
              <button className={styles.detailsButtons}>Editar</button>
              <button className={styles.detailsButtons}>Excluir</button>
            </div>
          )}
        </div>

        <div className={styles.discountContainer}>
          <div className={styles.discount}>
            <p className={styles.paragraphDiscount}>Desconto família</p>
            <p className={styles.paragraphDiscount}>R$00,00</p>
          </div>
          <div className={styles.discount}>
            <p className={styles.paragraphDiscount}>Subtotal</p>
            <p className={styles.paragraphDiscount}>
              R${planType ? planType : "00,00"}
            </p>
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
          <p className={styles.paragraphTotalValue}>
            R${planType ? planType : "00,00"}/mês
          </p>
        </div>

        <div className={styles.termsContainer}>
          <input className={styles.checkbox} type="checkbox" />
          <p className={styles.paragraphTerms}>
            Li e estou de acordo com o{" "}
            <a className={styles.linkTerms} href="">
              Contrato
            </a>
          </p>
        </div>
        <button className={styles.button}>Finalizar compra</button>

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
